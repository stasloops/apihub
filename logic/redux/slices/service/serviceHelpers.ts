import { IDocs, IGroup, IInitialState, IResponses, IPayload, IEndpoint, IUpdVariants } from './serviceInterface';

export const pushNewEndpoint = (payload: IPayload, group: IGroup[]) => {
	if (payload.groupId && payload.newEndpoint && group) {
		const index = findElIndex(payload.groupId, group);
		group[index].endpoints.push(payload.newEndpoint);
	}
	return group;
};

export const pushNewResponse = (payload: IPayload, group: IGroup[]) => {
	if (payload.groupId && payload.newResponseItem && payload.endpointId && group) {
		const index = findElIndex(payload.groupId, group);
		const endpointIndex = findElIndex(payload.endpointId, group[index].endpoints);

		group[index].endpoints[endpointIndex].responses.push(payload.newResponseItem);
	}
	return group;
};

export const pushNewRequestBodyItem = (payload: IPayload, state: IInitialState) => {
	const group = state.docs.group;

	if (payload.groupId && payload.endpointId && payload.newRequestBodyItem && group) {
		const groupIndex = findElIndex(payload.groupId, group);
		const endpointIndex = findElIndex(payload.endpointId, group[groupIndex].endpoints);

		const json = JSON.stringify(group);
		const parse: IGroup[] = JSON.parse(json);

		if (payload.responseId) {
			const responseIndex = findElIndex(payload.responseId, group[groupIndex].endpoints[endpointIndex].responses);
			parse[groupIndex].endpoints[endpointIndex].responses[responseIndex].requestBody.items.push(payload.newRequestBodyItem);
			return parse;
		}

		parse[groupIndex].endpoints[endpointIndex].requestBody.items.push(payload.newRequestBodyItem);
		return parse;
	}

	return group;
};

export const firstEndpoint = (group: IGroup[]) => {
	const data = {
		endpointId: group[0]?.endpoints[0]?.id,
		groupId: group[0].id,
	};
	return data;
};

export const updateEndpointLogic = (variant: IUpdVariants, group: IGroup[]) => {
	const newGroup: IGroup[] = replaceObjectLink(group);

	if (variant.endpointName) {
		newGroup.forEach((item) => {
			if (item.id === variant.groupId) {
				item.endpoints.forEach((item) => {
					if (item.id === variant.endpointId) {
						item.name = variant.endpointName === 'null' ? '' : variant.endpointName;
					}
				});
			}
		});
	}

	if (variant.method) {
		newGroup.forEach((item) => {
			if (item.id === variant.groupId) {
				item.endpoints.forEach((item) => {
					if (item.id === variant.endpointId) {
						item.method = variant.method;
					}
				});
			}
		});
	}

	if (variant.newRequestBodyItem) {
		console.log('nice');

		newGroup.forEach((groupEl) => {
			if (groupEl.id === variant.groupId) {
				groupEl.endpoints.forEach((endpointEl) => {
					if (endpointEl.id === variant.endpointId) {
						endpointEl.requestBody.items.forEach((item) => {
							if (item.id === variant.newRequestBodyItem?.id) {
								(item.name = variant.newRequestBodyItem?.name ?? item.name),
									(item.required = variant.newRequestBodyItem?.required ?? item.required),
									(item.type = variant.newRequestBodyItem?.type ?? item.type);
							}
						});
					}
				});
			}
		});
	}

	console.log('render2', newGroup);

	return newGroup;
};

// helpers for helpers

export const replaceObjectLink = (group: IGroup[]) => {
	const json = JSON.stringify(group);
	const parse = JSON.parse(json);

	return parse;
};

export const findElIndex = (id: string | number, arr: IGroup[] | IEndpoint[] | IResponses[]) => {
	const index = arr.findIndex((item: IEndpoint | IGroup | IResponses) => item.id === id);
	return index;
};

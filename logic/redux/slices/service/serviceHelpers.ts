import { IDocumentation, IGroup, IInitialState, IResponse, IPayload, IEndpoint, IUpdVariants } from './serviceInterface';

export const pushNewEndpoint = (payload: IPayload, groups: IGroup[]) => {
	if (payload.groupId && payload.newEndpoint && groups) {
		const index = findElIndex(payload.groupId, groups);
		groups[index].endpoints.push(payload.newEndpoint);
	}
	return groups;
};

export const pushNewResponse = (payload: IPayload, groups: IGroup[]) => {
	if (payload.groupId && payload.newResponseItem && payload.endpointId && groups) {
		const index = findElIndex(payload.groupId, groups);
		const endpointIndex = findElIndex(payload.endpointId, groups[index].endpoints);

		groups[index].endpoints[endpointIndex].responses.push(payload.newResponseItem);
	}
	return groups;
};

export const pushNewRequestBodyItem = (payload: IPayload, state: IInitialState) => {
	const group = state.documentation.groups;

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

export const firstEndpoint = (groups: IGroup[]) => {
	const data = {
		endpointId: groups[0]?.endpoints[0]?.id,
		groupId: groups[0].id,
	};
	return data;
};

export const updateEndpointLogic = (variant: IUpdVariants, groups: IGroup[]) => {
	const newGroups: IGroup[] = replaceObjectLink(groups);

	if (variant.endpointName !== undefined) {
		newGroups.forEach((item) => {
			if (item.id === variant.groupId) {
				item.endpoints.forEach((item) => {
					if (item.id === variant.endpointId) {
						item.name = variant.endpointName;
					}
				});
			}
		});
	}

	if (variant.method) {
		newGroups.forEach((item) => {
			if (item.id === variant.groupId) {
				item.endpoints.forEach((item) => {
					if (item.id === variant.endpointId) {
						// eslint-disable-next-line no-constant-condition
						item.method = variant.method === 'post' || 'get' || 'put' || 'delete' || 'patch' || 'options' ? variant.method : 'get';
					}
				});
			}
		});
	}

	if (variant.newRequestBodyItem) {
		newGroups.forEach((groupEl) => {
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

	if (variant.groupName !== undefined) {
		newGroups.forEach((item) => {
			if (item.id === variant.groupId) {
				item.name = variant.groupName ?? '';
			}
		});
	}

	return newGroups;
};

// helpers for helpers :)

export const replaceObjectLink = (groups: IGroup[]) => {
	const json = JSON.stringify(groups);
	const parse = JSON.parse(json);

	return parse;
};

export const findElIndex = (id: string | number, arr: IGroup[] | IEndpoint[] | IResponse[]) => {
	const index = arr.findIndex((item: IEndpoint | IGroup | IResponse) => item.id === id);
	return index;
};

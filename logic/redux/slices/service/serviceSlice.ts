import { createAsyncThunk, createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { $request } from '../../../request';
import { firstEndpoint, pushNewEndpoint, pushNewRequestBodyItem, pushNewResponse, updateEndpointLogic } from './serviceHelpers';
import { IDocumentation, IService, IInitialState, IPayload, IActiveEndpoint, IGroup, IUpdVariants } from './serviceInterface';

export const updateService = createAsyncThunk('documentation/updateService', async (data: any) => {
	const config = { headers: { 'content-type': 'multipart/form-data' } };
	await $request.put(`/services/${data.service_id}`, data.documentation, config);
});

const documentation: IDocumentation = {
	groups: [],
	info: {},
};
const service: IService = {
	service_id: null,
	name: '',
	author_id: null,
};
const initialState: IInitialState = {
	documentation: documentation,
	service: service,
	activeEndpoint: { endpointId: 0, groupId: 0 },
};

const serviceSlice = createSlice({
	name: 'service',
	initialState,
	reducers: {
		setService(state: IInitialState, action: PayloadAction<IService>) {
			state.service = action.payload;
		},
		setActiveEndpoint(state: IInitialState, action: PayloadAction<IActiveEndpoint>) {
			state.activeEndpoint = action.payload.endpointId ? action.payload : firstEndpoint(state.documentation.groups);
		},
		setEndpoint(state: IInitialState, action: PayloadAction<IPayload>) {
			state.documentation.groups = pushNewEndpoint(action.payload, state.documentation.groups);
		},
		setRequestBodyItem(state: IInitialState, action: PayloadAction<IPayload>) {
			state.documentation.groups = pushNewRequestBodyItem(action.payload, current(state));
		},
		setGroup(state: IInitialState, action: PayloadAction<IGroup>) {
			state.documentation.groups.push(action.payload);
		},
		setResponse(state: IInitialState, action: PayloadAction<IPayload>) {
			state.documentation.groups = pushNewResponse(action.payload, state.documentation.groups);
		},
		updateEndpoint(state: IInitialState, action: PayloadAction<IUpdVariants>) {
			state.documentation.groups = updateEndpointLogic(action.payload, state.documentation.groups);
		},
	},
});

export const { updateEndpoint, setGroup, setEndpoint, setService, setActiveEndpoint, setRequestBodyItem, setResponse } = serviceSlice.actions;
export default serviceSlice.reducer;

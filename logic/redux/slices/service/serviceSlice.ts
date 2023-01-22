import { createAsyncThunk, createSlice, current, PayloadAction } from "@reduxjs/toolkit"
import { $request } from "../../../request"
import { firstEndpoint, pushNewEndpoint, pushNewRequestBodyItem, pushNewResponse, updateEndpointLogic } from "./serviceHelpers"
import { IDocs, IService, IInitialState, IPayload, IActiveEndpoint, IGroup, IUpdVariants } from "./serviceInterface"

export const updateService = createAsyncThunk(
    'docs/updateService',
    async (data: any) => {
        const config = { headers: { "content-type": 'multipart/form-data' } }
        await $request.put(`/services/${data.service_id}`, data.docs, config)
    }
)

const docs: IDocs = {
    group: [],
    info: {},
}
const service: IService = {
    service_id: null,
    name: '',
    author_id: null,

}
const initialState: IInitialState = {
    docs: docs,
    service: service,
    activeEndpoint: { endpointId: 0, groupId: 0 }
}

const serviceSlice = createSlice({
    name: "service",
    initialState,
    reducers: {
        setService(state: IInitialState, action: PayloadAction<IService>) {
            state.service = action.payload
        },
        setActiveEndpoint(state: IInitialState, action: PayloadAction<IActiveEndpoint>) {
            state.activeEndpoint = action.payload.endpointId ? action.payload : firstEndpoint(state.docs.group)
        },
        setEndpoint(state: IInitialState, action: PayloadAction<IPayload>) {
            state.docs.group = pushNewEndpoint(action.payload, state.docs.group)
        },
        setRequestBodyItem(state: IInitialState, action: PayloadAction<IPayload>) {
            state.docs.group = pushNewRequestBodyItem(
                action.payload,
                current(state)
            )
        },
        setGroup(state: IInitialState, action: PayloadAction<IGroup>) {
            state.docs.group.push(action.payload)
        },
        setResponse(state: IInitialState, action: PayloadAction<IPayload>) {
            state.docs.group = pushNewResponse(action.payload, state.docs.group)
        },
        updateEndpoint(state: IInitialState, action: PayloadAction<IUpdVariants>) {
            state.docs.group = updateEndpointLogic(action.payload, state.docs.group)
        },
    }
})

export const { updateEndpoint, setGroup, setEndpoint, setService, setActiveEndpoint, setRequestBodyItem, setResponse } = serviceSlice.actions
export default serviceSlice.reducer
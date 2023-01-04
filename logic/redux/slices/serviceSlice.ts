import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { $request } from "../../request"

export interface IPaths {
    name: string
    method?: 'post' | 'get' | 'put' | 'delete' | 'patch' | 'options'
}
export interface ITag {
    name: string
    paths: IPaths[]
}
export interface IDocs {
    tags: ITag[]
    info: object
}
export interface IService {
    name: string
    service_id: number
}

export interface IInitialState {
    service: IService
    docs: IDocs
}

export const updateService = createAsyncThunk(
    'docs/updateService',
    async (data: any) => {
        const config = { headers: { "content-type": 'multipart/form-data' } }
        await $request.put(`/services/${data.service_id}`, data.docs, config)
    }
)

const pushNewPath = (payload: any, tags: ITag[]) => {
    const pathIndex = tags.findIndex((item: ITag) => item.name === payload.tagName)
    const newTags: ITag[] = tags
    newTags[pathIndex].paths?.push(payload.newItem)

    return newTags
}

const docs: IDocs = {
    tags: [],
    info: {},
}
const service: IService = {
    service_id: 0,
    name: ''
}
const initialState: IInitialState = {
    docs: docs,
    service: service
}

const serviceSlice = createSlice({
    name: "service",
    initialState,
    reducers: {
        setTags(state: IInitialState, action: PayloadAction<ITag>) {
            state.docs.tags.push(action.payload)
        },
        setPaths(state: IInitialState, action: PayloadAction<IPaths>) {
            state.docs.tags = pushNewPath(action.payload, state.docs.tags)
        },
        setService(state: IInitialState, action: PayloadAction<IService>) {
            state.service = action.payload
        }
    }
})

export const { setTags, setPaths, setService } = serviceSlice.actions
export default serviceSlice.reducer
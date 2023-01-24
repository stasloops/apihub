export interface IUpdVariants {
	endpointName?: string;
	endpointId?: number;
	groupId?: number;
	newRequestBodyItem?: IRequestBodyItem;
}

export interface IPayload {
	endpointId?: number;
	groupId: number;
	responseId?: number;
	newRequestBodyItem?: IRequestBodyItem;
	newEndpoint?: IEndpoint;
	newResponseItem?: IResponses;
}
export interface IRequestBodyItem {
	required: boolean;
	type: string;
	name: string;
	id: number | null;
}
export interface IRequestBody {
	type: string;
	items: IRequestBodyItem[];
}
export interface IResponses {
	id: number;
	code: string;
	message: string;
	requestBody: IRequestBody;
}
export interface IEndpoint {
	name?: string | null;
	method?: 'post' | 'get' | 'put' | 'delete' | 'patch' | 'options';
	id: number;
	requestBody: IRequestBody;
	responses: IResponses[];
}
export interface IGroup {
	name: string;
	id: number;
	endpoints: IEndpoint[];
}
export interface IDocs {
	group: IGroup[];
	info?: object;
}
export interface IService {
	name: string;
	service_id: number | null;
	author_id: number | null;
}
export interface IActiveEndpoint {
	endpointId: number;
	groupId: number;
}
export interface IInitialState {
	service: IService;
	docs: IDocs;
	activeEndpoint: IActiveEndpoint;
}

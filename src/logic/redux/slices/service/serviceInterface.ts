export interface IUpdVariants {
	endpointName?: string;
	groupName?: string;
	method?: 'post' | 'get' | 'put' | 'delete' | 'patch' | 'options';
	endpointId?: number;
	groupId?: number;
	newRequestBodyItem?: IRequestBodyItem;
	delete?: 'group' | 'endpoint' | 'requestBodyItem';
	newRequestBodyItemId?: number;
}

export interface IPayload {
	endpointId?: number;
	groupId: number;
	responseId?: number;
	newRequestBodyItem?: IRequestBodyItem;
	newEndpoint?: IEndpoint;
	newResponseItem?: IResponse;
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
export interface IResponse {
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
	responses: IResponse[];
}
export interface IGroup {
	name: string;
	id: number;
	endpoints: IEndpoint[];
}
export interface IDocumentation {
	groups: IGroup[];
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
	documentation: IDocumentation;
	activeEndpoint: IActiveEndpoint;
}

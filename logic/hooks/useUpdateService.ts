import { useState } from 'react';
import { $request } from "../request"

export const useUpdateService = () => {
    const [params, setParams] = useState({ name: '', description: '' })

    const updateService = async (service_id: number) => {
        const config = { headers: { "content-type": 'multipart/form-data' } }
        const data = { new_name: params.name }

        await $request.put(`/services/${service_id}`, data, config)

        setParams({ name: '', description: '' })
    }

    return { setParams, updateService }
}


const speck = {
    openapi: "",
    info: {
        title: "",
        description: "",
        version: ""
    },
    servers: [
        {
            url: ""
        }
    ],
    tags: [
        {
            name: "",
            description: "",
            paths: [
                {
                    path: "",
                    method: "",
                    tags: [
                        ""
                    ],
                    name: "",
                    requestBody: {
                        content: {
                            type: "",
                            shema: {

                            }
                        }
                    },
                    responses: [
                        {
                            code: "",
                            description: "",
                            content: {
                                type: "",
                                shema: {

                                }
                            }
                        }
                    ]
                }
            ]
        }
    ],
}
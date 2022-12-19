"use client"

import { FC, useEffect } from "react";
import { useAppSelector } from "../../../logic/hooks/useRedux";
import styles from '../../../styles/service/service.module.scss'
import { $request } from "../../../logic/request";
import NavComponents from "../../(components)/(service)/NavComponents";
import ShowWindow from "../../(components)/(service)/ShowWindow";

interface Params {
    name: string
}

interface Props {
    params: Params
}

const Api: FC<Props> = ({ params }) => {
    const { variant } = useAppSelector((state) => state.theme)

    const getService = async () => {
        if (1 === 1) {
            return null
        }
        const service_id = 8
        const token = localStorage.getItem('token')
        let config = { headers: { Authorization: token } }
        const res = await $request.get(`/services/${service_id}`, config)
        console.log(res.data);
    }

    useEffect(() => {
        scrollTo(0, 0)
        getService()
    }, [])

    return (
        <div style={{ backgroundColor: variant.background, color: variant.color }} className={styles.service}>
            {/* <span style={{ display: imageActive ? '' : 'none' }} className={styles.service__background_dark}></span>
            <Image style={{ display: imageActive ? '' : 'none' }} className={styles.service__background} alt="image" src={tran} placeholder="blur" /> */}
            <div className={styles.service__container}>
                <ShowWindow />
                <NavComponents />
            </div>
        </div>
    )
}

export default Api
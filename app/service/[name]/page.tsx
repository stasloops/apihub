"use client"

import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { useAppSelector } from "../../../logic/hooks/useRedux";
import styles from '../../../styles/service.module.scss'
import tran from '../../../public/tran.jpg'
import { useSvg } from "../../../logic/hooks/useSvg";
import Endpoints from "../../(components)/endpoints";
import { $request } from "../../../logic/request";

interface Params {
    name: string
}

interface Props {
    params: Params
}

const Api: FC<Props> = ({ params }) => {
    const [activeNav, setActiveNav] = useState<string>('Endpoints')
    const { svg } = useSvg()
    const { variant } = useAppSelector((state) => state.theme)
    const imageActive = false
    const navItem = ['Endpoints', 'Discussion', 'Price']

    const getService = async () => {
        const service_id = 8
        // const token = localStorage.getItem('token')
        // let config = { headers: { Authorization: token } }
        // const res = await $request.get(`/services/${service_id}`, config)
        // console.log(res.data);
    }

    useEffect(() => {
        scrollTo(0, 0)

        getService()
    }, [])

    const scrollToBott = (item: string) => {
        setActiveNav(item)
        setTimeout(() => {
            scrollTo(0, 2000)
        })
    }



    return (
        <div
            style={{
                backgroundColor: variant.background,
                color: variant.color,
            }}
            className={styles.service}
        >
            <span style={{ display: imageActive ? '' : 'none' }} className={styles.service__background_dark}></span>
            <Image style={{ display: imageActive ? '' : 'none' }} className={styles.service__background} alt="image" src={tran} placeholder="blur" />
            <div className={styles.service__container}>
                <div className={styles.service__inner}>
                    <Image className={styles.service__logo} alt="image" src={tran} placeholder="blur" />
                    <div className={styles.service__stars}>
                        <span>11k</span>
                        <span className={styles.service__stars_icon}>
                            {svg.star}
                        </span>
                    </div>
                    <h1 className={styles.service__title}>Translo</h1>
                    <p className={styles.service__description}>Действие сериала разворачивается в 80-х годах в тихом провинциальном городке. Благоприятное течение местной жизни нарушает загадочное исчезновение подростка по имени Уилл.</p>
                    <nav className={styles.service__nav}>
                        {
                            navItem.map((item) => (
                                <div
                                    className={styles.service__nav_item}
                                    style={{
                                        borderBottom: activeNav === item ? '1px solid #1faee9' : '',
                                        color: activeNav === item ? '#1faee9' : '',
                                    }}
                                    key={item}
                                    onClick={() => scrollToBott(item)}
                                >
                                    {item}
                                </div>
                            ))
                        }
                    </nav>
                </div>
            </div>
            <div className={styles.service__content}>
                {
                    activeNav === 'Endpoints' ?
                        <Endpoints />
                        :
                        null
                }
            </div>
        </div>
    )
}

export default Api
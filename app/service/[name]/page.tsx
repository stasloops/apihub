"use client"

import Image from "next/image";
import { FC } from "react";
import { useAppSelector } from "../../../logic/hooks/useRedux";
import styles from '../../../styles/service.module.scss'
import background from '../../../public/dio4.jpg'

interface Params {
    name: string
}

interface Props {
    params: Params
}

const Api: FC<Props> = ({ params }) => {
    const { variant } = useAppSelector((state) => state.theme)

    return (
        <div
            className={styles.service}
        >
            <Image className={styles.service__background} alt="image" src={background} placeholder="blur" />
            <div className={styles.service__container}>
                <h1 className={styles.service__title}>Title</h1>
            </div>
        </div>
    )
}

export default Api
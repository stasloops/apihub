import Image from 'next/image'
import React from 'react'
import { useSvg } from '../../../logic/hooks/useSvg'
import tran from '../../../public/tran.jpg'
import styles from '../../../styles/service/service.module.scss'

const ShowWindow = () => {
    const { svg } = useSvg()

    return (
        <div className={styles.service__show}>
            <Image className={styles.service__logo} alt="image" src={tran} placeholder="blur" />
            <div className={styles.service__stars}>
                <span>11k</span>
                <span className={styles.service__stars_icon}>
                    {svg.star}
                </span>
            </div>
            <h1 className={styles.service__title}>Translo</h1>
            <p className={styles.service__description}>Действие сериала разворачивается в 80-х годах в тихом провинциальном городке. Благоприятное течение местной жизни нарушает загадочное исчезновение подростка по имени Уилл.</p>
        </div>
    )
}

export default ShowWindow
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSvg } from '../../../logic/hooks/useSvg'
import tran from '../../../public/tran.jpg'
import styles from '../../../styles/service/service.module.scss'

const ShowWindow = () => {
    const { svg } = useSvg()
    const cells = [{ category: 'Last Update', value: '1 month' }, { category: 'Up Time', value: '92%' }, { category: 'Stars', value: '527' }, { category: 'Category', value: 'Finance' }, { category: 'Verified', value: 'false' }]

    return (
        <div className={styles.service__show}>
            <div>
                <Image className={styles.service__logo} alt="image" src={tran} placeholder="blur" />
                {/* <div className={styles.service__stars}>
                    <span>11k</span>
                    <span className={styles.service__stars_icon}>
                        {svg.star}
                    </span>
                </div> */}
                <h1 className={styles.service__title}>Translo</h1>
                <p className={styles.service__description}>Действие сериала разворачивается в 80-х годах в тихом провинциальном городке. Благоприятное течение местной жизни нарушает загадочное исчезновение подростка по имени Уилл.</p>
                <button className={styles.service__subscribe}>
                    Subscribe to Test
                </button>
            </div>
            <div className={styles.service__cell}>
                <h2 className={styles.service__cell_title}>API Metrics</h2>
                <div className={styles.service__cell_box}>
                    {
                        cells.map((item) => (
                            <div key={item.category} className={styles.service__cell_item}>
                                <h4 className={styles.service__cell_item_title}>{item.category}</h4>
                                <div className={styles.service__cell_item_field}>
                                    {item.value}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ShowWindow
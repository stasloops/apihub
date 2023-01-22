import Image from 'next/image'
import React, { FC, useState } from 'react'
import { useAppSelector } from '../../../logic/hooks/useRedux'
import tran from '../../../public/tran.jpg'
import styles from '../../../styles/service/service.module.scss'
import InputRedact from './InputRedact'

const cells = [{ category: 'Last Update', value: '1 month' }, { category: 'Up Time', value: '92%' }, { category: 'Stars', value: '527' }, { category: 'Category', value: 'Finance' }, { category: 'Verified', value: 'false' }]

const ShowWindow= () => {
    const [isRedact, setIsRedact] = useState(false)
    const service = useAppSelector((state) => state.service.service)
    
    const setParams = (s: any) => {

    }
    const updateService = (id: any) => {

    }
    const saveChanges = () => {
        const service_id = service.service_id
        
        if (service_id) {
            updateService(service_id)
            setIsRedact(false)
        }
    }

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
                {
                    isRedact ?
                        <InputRedact type="input" placeholder="name" setParam={(value: string) => setParams((prev:any) => ({ ...prev, name: value }))} />
                        :
                        <h1 className={styles.service__title}>{service?.name ? service?.name : 'Name'}</h1>
                }
                {
                    isRedact ?
                        <InputRedact type="area" placeholder="description" setParam={(value: string) => setParams((prev:any) => ({ ...prev, description: value }))} />
                        :
                        <p className={styles.service__description}>Действие сериала разворачивается в 80-х годах в тихом провинциальном городке. </p>
                }
                <button className={styles.service__subscribe}>
                    Subscribe to Test
                </button>
            </div>
            <div className={styles.service__cell}>
                {/* <h2 className={styles.service__cell_title}>API Metrics</h2>
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
                </div> */}
            </div>
              <span className={styles.service__show_redact}>
                {
                    isRedact ?
                        <button onClick={saveChanges} className={styles.service__show_redact_save}>save changes</button>
                        :
                        <span onClick={() => setIsRedact(true)} className={styles.service__show_redact_active}>r</span>
                }
            </span>
        </div>
    )
}

export default ShowWindow
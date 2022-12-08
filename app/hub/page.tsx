"use client"

import { useAppSelector } from '../../logic/hooks/useRedux'
import styles from '../../styles/hub.module.scss'
import DemonstrativeHub from '../(components)/demonstrativeHub'
import ListHub from '../(components)/listHub'

const Hub = () => {
    const { variant } = useAppSelector((state) => state.theme)

    return (
        <main
            style={{
                backgroundColor: variant.background,
                color: variant.color,
            }}
            className={styles.hub}
        >
            <div className={styles.hub__container}>
                <DemonstrativeHub />
                <ListHub />
            </div>
        </main>
    )
}

export default Hub
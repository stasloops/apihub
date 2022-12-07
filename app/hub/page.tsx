"use client"

import FilterHub from '../(components)/filterHub'
import ListHub from '../(components)/listHub'
import { useAppSelector } from '../../logic/hooks/useRedux'
import styles from '../../styles/hub.module.scss'

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
                <FilterHub />
                <ListHub />
            </div>
        </main>
    )
}

export default Hub
"use client"

import { useAppSelector } from '../../logic/hooks/useRedux'
import styles from '../../styles/hub.module.scss'
import DemonstrativeHub from '../(components)/(hub)/demonstrativeHub'
import List from '../list/page'

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
                <List />
            </div>
        </main>
    )
}

export default Hub
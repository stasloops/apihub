"use client"

import { FC, useState } from 'react'
import styles from '../../styles/hub.module.scss'

interface Categories {
    id: number
    name: string
}
interface Item {
    title: string
    categories: Categories[]
    showAll: boolean
}

interface Props {
    item: Item
}

const FilterHubItem: FC<Props> = ({ item }) => {
    const [show, setShow] = useState(false)

    const filtredCategories = !show && item.showAll ?
        item.categories.filter((item: Categories) => item.id < 15)
        :
        item.categories

    const hiddenElements = item.categories.length - filtredCategories.length

    const showMore = (arg: boolean) => setShow(arg)

    return (
        <>
            <h1 className={styles.hub__title_filter}>
                {item.title}
            </h1>
            <div className={styles.hub__categories}>
                <>
                    {
                        filtredCategories.map((item: any, id: number) => (
                            <div key={id} className={styles.hub__categories_item}>{item.name}</div>
                        ))
                    }
                </>
                {
                    !item.showAll ?
                        null
                        :
                        show ?
                            <span onClick={() => showMore(false)} className={styles.hub__show}>
                                Скрыть
                            </span>
                            :
                            <span onClick={() => showMore(true)} className={styles.hub__show}>
                                + {hiddenElements}
                            </span>
                }
            </div>

        </>
    )
}

export default FilterHubItem
"use client"

import FilterHubItem from './filterHubItem'
import styles from '../../styles/hub.module.scss'
import { filter } from '../../data'

const FilterHub = () => {

    return (
        <div className={styles.hub__filter}>
            {
                filter.map((item: any, id: number) => (
                    <FilterHubItem key={id} item={item} />
                ))
            }
        </div>
    )
}

export default FilterHub
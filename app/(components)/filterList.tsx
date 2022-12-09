"use client"

import FilterListItem from './filterListItem'
import styles from '../../styles/list.module.scss'
import { filter } from '../../data'

const FilterList = () => {

    return (
        <div className={styles.list__filter}>
            {
                filter.map((item: any, id: number) => (
                    <FilterListItem key={id} item={item} />
                ))
            }
        </div>
    )
}

export default FilterList
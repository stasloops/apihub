"use client"

import FilterList from "../(components)/(list)/filterList"
import ListApis from "../(components)/(list)/listApis"
import { useAppSelector } from "../../logic/hooks/useRedux"
import styles from '../../styles/list.module.scss'

const List = () => {
  const { variant } = useAppSelector((state) => state.theme)

  // if (!isAuth) {
  //   return router.push('/list')
  // }

  return (
    <div
      style={{
        backgroundColor: variant.background,
        color: variant.color,
      }}
      className={styles.list}
    >
      <div className={styles.list__container}>
        <h1>List APIs</h1>
        <div className={styles.list__inner}>
          <FilterList />
          <ListApis />
        </div>
      </div>
    </div>
  )
}

export default List
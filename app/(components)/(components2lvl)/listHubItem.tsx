import { FC } from 'react'
import styles from '../../../styles/hub.module.scss'

interface Item {
    title: string
    apis: number[]
}

interface Props {
    item: Item
}
const ListHubItem: FC<Props> = ({ item }) => {
    return (
        <>
            <h1 className={styles.hub__title}>
                {item.title}
            </h1>
            <div className={styles.hub__apis}>
                {
                    item.apis.map((item) => (
                        <div className={styles.hub__apis_api} key={item}>
                            {item}
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ListHubItem
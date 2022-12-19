import Image from 'next/image'
import { FC } from 'react'
import dio from '../../../public/dio4.jpg'
import styles from '../../../styles/hub.module.scss'

interface Item {
    title: string
    apis: number[]
}

interface Props {
    item: Item
}
const DemonstrativeHubItem: FC<Props> = ({ item }) => {
    return (
        <div className={styles.hub__demonstrative_items}>
            <h1 className={styles.hub__title}>
                {item.title}
            </h1>
            {
                item.apis.map((item, id) => (
                    <div className={styles.hub__demonstrative_items_api} key={item}>
                        {/* <span className={styles.hub__demonstrative_index}>{id + 1}</span> */}
                        <Image className={styles.hub__demonstrative_img} alt="image" src={dio} placeholder="blur" />
                        <h2 className={styles.hub__demonstrative_title}>Recipe Food</h2>
                    </div>
                ))
            }
        </div>
    )
}

export default DemonstrativeHubItem
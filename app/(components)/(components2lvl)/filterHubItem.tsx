import { FC } from 'react'
import { useAppSelector } from '../../../logic/hooks/useRedux'
import styles from '../../../styles/hub.module.scss'

interface Item {
    title: string
    categories: string[]
    showAll: boolean
}

interface Props {
    item: Item
}

const FilterHubItem: FC<Props> = ({ item }) => {
    const { variant } = useAppSelector((state) => state.theme)

    return (
        <>
            <h1 className={styles.hub__title_filter}>
                {item.title}
            </h1>
            <div className={styles.hub__categories}>
                {
                    item.categories?.map((item: any, id: number) => (
                        <div
                            // style={{
                            //     background: `linear-gradient(3deg, ${variant.backgroundThree}, ${variant.backgroundThree} 85%, ${variant.background})`,
                            //     border: `1px solid ${variant.backgroundThree}`
                            // }}
                            key={id}
                            className={styles.hub__categories_item}
                        >
                            {item.name}
                        </div>
                    ))
                }
                {
                    item.showAll ?
                        <span className={styles.hub__show}>
                            + 22
                        </span>
                        :
                        null
                }
            </div>

        </>
    )
}

export default FilterHubItem
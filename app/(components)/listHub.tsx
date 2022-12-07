import ListHubItem from './(components2lvl)/listHubItem'
import styles from '../../styles/hub.module.scss'

const ListHub = () => {
    const popular = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const item = [
        { 
            title: 'Sports',
            apis: [1,2,3,4,5,6,7,8]
        },
        { 
            title: 'Games',
            apis: [1,2,3,4,5,6,7,8]
        },
        { 
            title: 'Translate',
            apis: [1,2,3,4,5,6,7,8]
        }
    ]

    return (
        <div className={styles.hub__list}>
            <h1 className={styles.hub__title}>
                Top rated
            </h1>
            <div className={styles.hub__popular}>
                {
                    popular.map((item) => (
                        <div className={styles.hub__popular_item} key={item}>
                            {item}
                        </div>
                    ))
                }
            </div>
            <>
                {
                    item?.map((item: any, id: number) => (
                        <ListHubItem key={id} item={item} />
                    ))
                }
            </>
        </div >
    )
}

export default ListHub
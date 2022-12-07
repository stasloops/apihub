import FilterHubItem from './(components2lvl)/filterHubItem'
import styles from '../../styles/hub.module.scss'

const FilterHub = () => {
    const filter: any =
        [
            {
                title: 'Categories 1',
                categories: [
                    { name: 'Music' }, { name: 'SMS' }, { name: 'Transportation' }, { name: 'Gaming' }, { name: 'SMS' }, { name: 'Transportation' }, { name: 'Music' }, { name: 'Gaming' }, { name: 'Transportation' }, { name: 'Music' }, { name: 'SMS' }, { name: 'Gaming' }, { name: 'Music' }, { name: 'SMS' }, { name: 'Gaming' },
                ],
                showAll: true,
            },
            {
                title: 'Categories 2',
                categories: [
                    { name: 'Music' }, { name: 'SMS' }, { name: 'Transportation' }, { name: 'Gaming' }, { name: 'SMS' }, { name: 'Transportation' }, { name: 'Music' }, { name: 'Gaming' }, 
                ],
                showAll: false,

            },
            {
                title: 'Categories 3',
                categories: [
                    { name: 'Music' }, { name: 'SMS' }, { name: 'Transportation' }, { name: 'Gaming' }, { name: 'SMS' }, { name: 'Transportation' }
                ],
                showAll: false,
            },
        ]

    return (
        <div className={styles.hub__filter}>
            {
                filter.map((item:any, id: number) => (
                    <FilterHubItem key={id} item={item}/>
                ))
            }
        </div>
    )
}

export default FilterHub
import { FC, useState } from 'react'
import { useSvg } from '../../logic/hooks/useSvg'
import styles from '../../styles/endpoints.module.scss'

interface Endpoints {
    method: string
    name: string
    id: number
}
interface Group {
    title: string
    endpoints: Endpoints[]
}

interface Props {
    item: Group
    activeEndpoint: number
    setActiveEndpoint: (state: number) => void
}

const GroupItem: FC<Props> = ({ item, activeEndpoint, setActiveEndpoint }) => {
    const [isOpen, setIsOpen] = useState(false)
    const { svg } = useSvg()

    return (
        <>
            <div
                style={{ backgroundColor: isOpen ? '#222' : '' }}
                onClick={() => setIsOpen(!isOpen)}
                className={styles.endpoints__group_item}>
                <span
                    style={{ transform: isOpen ? 'rotate(90deg) translate(3px, 0)' : '' }}
                    className={styles.endpoints__ar}
                >
                    {svg.ar}
                </span>
                <span>{item.title}</span>
            </div>
            {isOpen ?
                <div className={styles.endpoints__endpoints}>
                    {
                        item?.endpoints?.map((item, id) => (
                            <div
                                style={{ backgroundColor: activeEndpoint === item.id ? '#222' : '' }}
                                onClick={() => setActiveEndpoint(item.id)}
                                className={styles.endpoints__endpoints_item}
                                key={item.id}
                            >
                                <span className={styles.endpoints__endpoints_item_method}>{item.method}</span>
                                <span className={styles.endpoints__endpoints_item_name}>{item.name}</span>
                            </div>
                        ))
                    }
                </div>
                :
                null
            }
        </>
    )
}

export default GroupItem
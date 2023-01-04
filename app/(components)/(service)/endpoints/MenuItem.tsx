import { FC, useState } from 'react'
import { useSvg } from '../../../../logic/hooks/useSvg'
import { ITag } from '../../../../logic/redux/slices/serviceSlice'
import styles from '../../../../styles/service/endpoints.module.scss'
import CreateItems from './CreateItems'

interface Props {
    item: ITag
    activeEndpoint: number
    setActiveEndpoint: (state: number) => void
   
}

const MenuItem: FC<Props> = ({ item, activeEndpoint, setActiveEndpoint }) => {
    const [isOpen, setIsOpen] = useState(false)
    const { svg } = useSvg()

    return (
        <>
            <div
                style={{ backgroundColor: isOpen ? '#222' : '#111' }}
                onClick={() => setIsOpen(!isOpen)}
                className={styles.endpoints__menu_item}>
                <span
                    style={{ transform: isOpen ? 'rotate(90deg) translate(3px, 0)' : 'rotate(0deg) translate(0px, 0)' }}
                    className={styles.endpoints__ar}
                >
                    {svg.ar}
                </span>
                <span>{item.name}</span>
            </div>
            {isOpen ?
                <div className={styles.endpoints__endpoints}>
                    {
                        item?.paths?.map((item, id) => (
                            < div
                                style={{ backgroundColor: activeEndpoint === id ? '#222' : '#111' }}
                                onClick={() => setActiveEndpoint(id)}
                                className={styles.endpoints__endpoints_item}
                                key={id}
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
            {
                isOpen ?
                    <CreateItems placeholder="Endpoint" type="paths" tagName={item.name} />
                    :
                    null
            }
        </>
    )
}

export default MenuItem
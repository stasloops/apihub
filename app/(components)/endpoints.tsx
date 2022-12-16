import { useState } from 'react'
import { useAppSelector } from '../../logic/hooks/useRedux'
import styles from '../../styles/endpoints.module.scss'
import Docs from './Docs'
import GroupItem from './GroupItem'

const Endpoints = () => {
    const [activeEndpoint, setActiveEndpoint] = useState(0)

    const group = [
        { title: 'users', endpoints: [{ id: 1, method: 'POST', name: 'Register' }, { id: 2, method: 'POST', name: 'Login' }] },
        { title: 'service', endpoints: [{ id: 3, method: 'GET', name: 'Get Service' }, { id: 4, method: 'POST', name: 'Create Service' }] }]
    const variant = useAppSelector((state) => state.theme.variant)

    return (
        <div style={{
            backgroundColor: variant.backgroundSecond,
            color: variant.color,
        }} className={styles.endpoints}>
            <div className={styles.endpoints__container}>
                <div className={styles.endpoints__group}>
                    <div className={styles.endpoints__group_content}>
                        {
                            group.map((item, id) => (
                                <GroupItem setActiveEndpoint={setActiveEndpoint} activeEndpoint={activeEndpoint} key={id} item={item} />
                            ))
                        }
                    </div>
                </div>
                <Docs />
            </div>
        </div>
    )
}

export default Endpoints
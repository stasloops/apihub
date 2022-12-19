import { useAppSelector } from '../../../logic/hooks/useRedux'
import styles from '../../../styles/service/endpoints.module.scss'
import Docs from './docs'
import Menu from './Menu'

const Endpoints = () => {
    const variant = useAppSelector((state) => state.theme.variant)

    return (
        <div style={{
            backgroundColor: '#000' || variant.backgroundSecond,
            color: variant.color,
        }} className={styles.endpoints}>
            <div className={styles.endpoints__container}>
                <Menu />
                <Docs />
            </div>
        </div>
    )
}

export default Endpoints
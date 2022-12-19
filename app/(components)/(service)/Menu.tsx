import { useState } from "react"
import styles from '../../../styles/service/endpoints.module.scss'
import MenuItem from "./MenuItem"

const Menu = () => {
  const [activeEndpoint, setActiveEndpoint] = useState(0)
  const group = [
    { title: 'users', endpoints: [{ id: 1, method: 'POST', name: 'Register' }, { id: 2, method: 'POST', name: 'Login' }] },
    { title: 'service', endpoints: [{ id: 3, method: 'GET', name: 'Get Service' }, { id: 4, method: 'POST', name: 'Create Service' }] }]

  return (
    <div className={styles.endpoints__menu}>
      <div className={styles.endpoints__menu_content}>
        {
          group.map((item, id) => (
            <MenuItem setActiveEndpoint={setActiveEndpoint} activeEndpoint={activeEndpoint} key={id} item={item} />
          ))
        }
      </div>
    </div>
  )
}

export default Menu
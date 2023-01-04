import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../../logic/hooks/useRedux"
import { ITag, updateService } from "../../../../logic/redux/slices/serviceSlice"
import styles from '../../../../styles/service/endpoints.module.scss'
import CreateItems from "./CreateItems"
import MenuItem from "./MenuItem"

const Menu = () => {
  const [activeEndpoint, setActiveEndpoint] = useState(0)
  const docs = useAppSelector((state) => state.service.docs)
  const dispatch = useAppDispatch()

  // useEffect(() => {
  //   const data = {
  //     docs, 
  //     user_id: 1
  //   }
  //   dispatch(updateService(data))
  // }, [docs])

  return (
    <div className={styles.endpoints__menu}>
      <div className={styles.endpoints__menu_content}>
        <CreateItems placeholder="Group" type="tags" />
        {
          docs.tags.map((item: ITag, id: number) => (
            <MenuItem setActiveEndpoint={setActiveEndpoint} activeEndpoint={activeEndpoint} key={id} item={item} />
          ))
        }
      </div>
    </div>
  )
}

export default Menu
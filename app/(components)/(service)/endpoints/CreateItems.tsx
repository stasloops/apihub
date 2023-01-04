import { ChangeEvent, FC, useState } from 'react'
import { useAppDispatch } from '../../../../logic/hooks/useRedux'
import { ITag, setPaths, setTags } from '../../../../logic/redux/slices/serviceSlice'
import styles from '../../../../styles/service/endpoints.module.scss'

interface Props {
    placeholder: string
    type: 'tags' | 'paths'
    tagName?: string
}

const CreateItems: FC<Props> = ({ placeholder, type, tagName }) => {
    const [isActive, setIsActive] = useState(false)
    const [value, setValue] = useState('')
    const dispatch = useAppDispatch()

    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const setItem = () => {
        if (type === 'tags') {
            const newItem: ITag = { name: value, paths: [] }
            dispatch(setTags(newItem))
        }
       
        if (type === 'paths') {
            const payload: any = {
                tagName: tagName,
                newItem: { name: value, method: 'get' }
            }
            dispatch(setPaths(payload))
        }

        setIsActive(false)
    }

    return (
        <div className={styles.endpoints__menu_create}>
            {isActive ?
                <span className={styles.endpoints__menu_create_form}>
                    <input onChange={e => changeValue(e)} placeholder={`${placeholder} name`} className={styles.endpoints__menu_create_input} />
                    <span onClick={setItem} className={styles.endpoints__menu_create_button}>+</span>
                    <span onClick={() => setIsActive(false)} className={styles.endpoints__menu_create_close}>+</span>
                </span>
                :
                <span onClick={() => setIsActive(true)} className={styles.endpoints__menu_create_box}>
                    <span className={styles.endpoints__menu_create_title}>Create {placeholder}</span>
                    <span className={styles.endpoints__menu_create_plus}>+</span>
                </span>
            }
        </div>
    )
}

export default CreateItems
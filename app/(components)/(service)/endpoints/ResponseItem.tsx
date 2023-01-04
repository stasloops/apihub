
import { useState } from 'react'
import { useSvg } from '../../../../logic/hooks/useSvg'
import styles from '../../../../styles/service/docs.module.scss'
import ConfigItem from './ConfigItem'

const ResponseItem = () => {
    const [isOpenMessage, setisOpenMessage] = useState(false)
    const { svg } = useSvg()

    return (
        <div onClick={() => setisOpenMessage(!isOpenMessage)} className={styles.endpoints__response}>
            <div className={styles.endpoints__response_item}>
                <div className={styles.endpoints__response_message}>
                    <span className={styles.endpoints__response_message_code}>200</span><span className={styles.endpoints__response_message_text}>OK</span>
                    <span
                        style={{ transform: isOpenMessage ? 'rotate(90deg) translate(5px, 3px)' : '' }}
                        className={styles.endpoints__response_message_arr}
                    >
                        {svg.ar}
                    </span>
                </div>

                {
                    isOpenMessage ?
                        <div className={styles.endpoints__response_config}>
                            <ConfigItem />
                        </div>
                        :
                        null
                }
            </div>
        </div>
    )
}

export default ResponseItem

import { FC, useState } from 'react'
import { useSvg } from '../../../../logic/hooks/useSvg'
import { IResponses } from '../../../../logic/redux/slices/service/serviceInterface'
import styles from '../../../../styles/service/docs.module.scss'
import Config from './Config'

interface Props {
    response: IResponses
}

const ResponseItem: FC<Props> = ({ response }) => {
    const [isOpenMessage, setisOpenMessage] = useState(false)
    const { svg } = useSvg()

    return (
        <div className={styles.endpoints__response}>
            <div className={styles.endpoints__response_item}>
                <div onClick={() => setisOpenMessage(!isOpenMessage)} className={styles.endpoints__response_message}>
                    <span className={styles.endpoints__response_message_code}>{response.code}</span><span className={styles.endpoints__response_message_text}>{response.message}</span>
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
                            <Config responseId={response.id} requestBody={response.requestBody} />
                        </div>
                        :
                        null
                }
            </div>
        </div>
    )
}

export default ResponseItem
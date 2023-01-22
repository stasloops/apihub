import React, { useEffect, useState } from 'react'
import { useActiveEndpoint } from '../../../../logic/hooks/useActiveEndpoint'
import { useAppDispatch, useAppSelector } from '../../../../logic/hooks/useRedux'
import { useSvg } from '../../../../logic/hooks/useSvg'
import { updateEndpoint } from '../../../../logic/redux/slices/service/serviceSlice'
import styles from '../../../../styles/service/docs.module.scss'
import Config from './Config'
import CreateItems from './CreateItems'
import ResponseItem from './ResponseItem'

const Docs = () => {
    const { svg } = useSvg()
    const dispatch = useAppDispatch()
    const { endpoint } = useActiveEndpoint()
    const [isOpenRequest, setIsOpenRequest] = useState(false)
    const [isOpenResponse, setIsOpenResponse] = useState(false)
    const activeEndpoint = useAppSelector(state => state.service.activeEndpoint)

    const debounce = (callback: (message: string) => void, delay: number) => {
        let timer: any = null

          return (message: string) => {
            if (timer) {
              clearInterval(timer)
            }
      
            timer = setTimeout(() => {
              callback(message)
            }, delay);
          }
    }

    const updateName = (message: string) => {
        dispatch(updateEndpoint({
            endpointName: message ? message : 'null',
            endpointId: activeEndpoint.endpointId,
            groupId: activeEndpoint.groupId
        }))
    }

    const update =  debounce(updateName, 300)
    const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        update(e.target.value)
    }

    return (
        <div className={styles.endpoints__docs}>
            {endpoint ? <>
                <input value={endpoint.name ?? ''} onChange={e => changeTitle(e)} className={styles.endpoints__docs_title} placeholder="Untitled " />
                <div className={styles.endpoints__docs_item}>
                    <div className={styles.endpoints__docs_item_title_box} onClick={() => setIsOpenRequest(!isOpenRequest)}>
                        <h2 className={styles.endpoints__docs_item_title}>Request</h2>
                        <span
                            style={{ transform: isOpenRequest ? 'rotate(90deg) translate(5px, 3px)' : '' }}
                            className={styles.endpoints__ar}
                        >
                            {svg.ar}
                        </span>
                    </div>
                    <div style={{ display: isOpenRequest ? 'block' : '' }} className={styles.endpoints__config}>
                        <Config requestBody={endpoint.requestBody} />
                    </div>
                </div>

                <div className={styles.endpoints__docs_item}>
                    <div className={styles.endpoints__docs_item_title_box} onClick={() => setIsOpenResponse(!isOpenResponse)}>
                        <h2 className={styles.endpoints__docs_item_title}>Response</h2>
                        <span
                            style={{ transform: isOpenResponse ? 'rotate(90deg) translate(5px, 3px)' : '' }}
                            className={styles.endpoints__ar}
                        >
                            {svg.ar}
                        </span>
                    </div>
                    {
                        isOpenResponse ?
                            <div className={styles.endpoints__response_box}>
                                <CreateItems placeholder="Response" type="response" />
                                {
                                    endpoint.responses.map((item, key) => (
                                        <ResponseItem response={item} key={key} />
                                    ))
                                }
                            </div>
                            :
                            null
                    }
                </div>
            </>
                :
                <h1 className={styles.endpoints__docs_title}>No have endpoint</h1>
            }
        </div>
    )
}

export default Docs
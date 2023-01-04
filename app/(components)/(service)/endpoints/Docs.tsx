import React, { useState } from 'react'
import { useSvg } from '../../../../logic/hooks/useSvg'
import styles from '../../../../styles/service/docs.module.scss'
import ResponseItem from './ResponseItem'

const Docs = () => {
    const [isOpenRequest, setIsOpenRequest] = useState(false)
    const [isOpenResponse, setIsOpenResponse] = useState(false)
    const { svg } = useSvg()

    return (
        <div className={styles.endpoints__docs}>
            <h1 className={styles.endpoints__docs_title}>Register</h1>
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
                    <div className={styles.endpoints__config_item}>
                        <h3 className={styles.endpoints__config_item_title}>PATH PARAMETERS</h3>
                        <div className={styles.endpoints___parameters}>
                            <div className={styles.endpoints__parameters_item}>
                                <div className={styles.endpoints__parameters_item_field}>
                                    <p className={styles.endpoints__parameters_item_field_name}>user_id</p>
                                    {1 === 1 ? <p className={styles.endpoints__parameters_item_field_required}>required</p> : null}
                                </div>
                                <div className={styles.endpoints__parameters_item_type}>
                                    <p className={styles.endpoints__parameters_item_type_name}>string</p>
                                </div>
                            </div>
                            <div className={styles.endpoints__parameters_item}>
                                <div className={styles.endpoints__parameters_item_field}>
                                    <p className={styles.endpoints__parameters_item_field_name}>user_id</p>
                                    {1 === 1 ? <p className={styles.endpoints__parameters_item_field_required}>required</p> : null}
                                </div>
                                <div className={styles.endpoints__parameters_item_type}>
                                    <p className={styles.endpoints__parameters_item_type_name}>string</p>
                                    {1 === 1 ? <p className={styles.endpoints__parameters_item_type_enum}>Enum: <span className={styles.endpoints__parameters_item_type_enum_item}>new_password</span> <span className={styles.endpoints__parameters_item_type_enum_item}>new_email</span></p> : null}
                                </div>
                            </div>
                            <div className={styles.endpoints__parameters_item}>
                                <div className={styles.endpoints__parameters_item_field}>
                                    <p className={styles.endpoints__parameters_item_field_name}>user_id</p>
                                </div>
                                <div className={styles.endpoints__parameters_item_type}>
                                    <p className={styles.endpoints__parameters_item_type_name}>string</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.endpoints__config_item}>
                        <h3 className={styles.endpoints__config_item_title}>REQUEST BODY SCHEMA: application/json</h3>
                        <div className={styles.endpoints___parameters}>
                            <div className={styles.endpoints__parameters_item}>
                                <div className={styles.endpoints__parameters_item_field}>
                                    <p className={styles.endpoints__parameters_item_field_name}>user_id</p>
                                    {1 === 1 ? <p className={styles.endpoints__parameters_item_field_required}>required</p> : null}
                                </div>
                                <div className={styles.endpoints__parameters_item_type}>
                                    <p className={styles.endpoints__parameters_item_type_name}>string</p>
                                </div>
                            </div>
                            <div className={styles.endpoints__parameters_item}>
                                <div className={styles.endpoints__parameters_item_field}>
                                    <p className={styles.endpoints__parameters_item_field_name}>user_id</p>
                                    {1 === 1 ? <p className={styles.endpoints__parameters_item_field_required}>required</p> : null}
                                </div>
                                <div className={styles.endpoints__parameters_item_type}>
                                    <p className={styles.endpoints__parameters_item_type_name}>string</p>
                                    {1 === 1 ? <p className={styles.endpoints__parameters_item_type_enum}>Enum: <span className={styles.endpoints__parameters_item_type_enum_item}>new_password</span> <span className={styles.endpoints__parameters_item_type_enum_item}>new_email</span></p> : null}
                                </div>
                            </div>
                            <div className={styles.endpoints__parameters_item}>
                                <div className={styles.endpoints__parameters_item_field}>
                                    <p className={styles.endpoints__parameters_item_field_name}>user_id</p>
                                </div>
                                <div className={styles.endpoints__parameters_item_type}>
                                    <p className={styles.endpoints__parameters_item_type_name}>string</p>
                                </div>
                            </div>
                            <div className={styles.endpoints__parameters_item}>
                                <div className={styles.endpoints__parameters_item_field}>
                                    <p className={styles.endpoints__parameters_item_field_name}>user_id</p>
                                </div>
                                <div className={styles.endpoints__parameters_item_type}>
                                    <p className={styles.endpoints__parameters_item_type_name}>string</p>
                                </div>
                            </div>
                            <div className={styles.endpoints__parameters_item}>
                                <div className={styles.endpoints__parameters_item_field}>
                                    <p className={styles.endpoints__parameters_item_field_name}>user_id</p>
                                </div>
                                <div className={styles.endpoints__parameters_item_type}>
                                    <p className={styles.endpoints__parameters_item_type_name}>string</p>
                                </div>
                            </div>
                        </div>
                    </div>
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
                            <ResponseItem />
                            <ResponseItem />
                        </div>
                        :
                        null
                }
            </div>
        </div>
    )
}

export default Docs
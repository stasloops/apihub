import styles from '../../../../styles/service/docs.module.scss'

const ConfigItem = () => {
    return (
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
    )
}

export default ConfigItem
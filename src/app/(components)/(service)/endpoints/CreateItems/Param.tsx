import React, { FC, useState } from 'react';
import { types } from '../../../../../data';
import { useAppDispatch, useAppSelector } from '../../../../../logic/hooks/useRedux';
import { IPayload, IRequestBodyItem, IUpdVariants } from '../../../../../logic/redux/slices/service/serviceInterface';
import { setRequestBodyItem, updateEndpoint } from '../../../../../logic/redux/slices/service/serviceSlice';

import styles from '../../../../../styles/service/createItems.module.scss';

interface Props {
	placeholder: string;
	setIsActive: (state: boolean) => void;
	responseId?: number;
	requestBodyItem?: IRequestBodyItem;
	setRedactParam?: (state: number | null) => void;
}

const Param: FC<Props> = ({ placeholder, setIsActive, responseId, setRedactParam, requestBodyItem }) => {
	const dispatch = useAppDispatch();
	const activeEndpoint = useAppSelector((state) => state.service.activeEndpoint);
	const [typePopupIsActive, setTypePopupIsActive] = useState(false);
	const [typeValue, setTypeValue] = useState(requestBodyItem ? requestBodyItem.type : 'string');
	const [isRequired, setIsRequired] = useState(requestBodyItem ? requestBodyItem.required : false);
	const [value, setValue] = useState(requestBodyItem ? requestBodyItem.name : '');

	const changeType = (type: string) => {
		setTypeValue(type);
		setTypePopupIsActive(false);
	};

	const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const addParam = () => {
		if (!value) {
			return;
		}

		const newRequestBodyItem: IRequestBodyItem = {
			type: typeValue,
			name: value,
			required: isRequired,
			id: requestBodyItem ? requestBodyItem.id : +new Date(),
		};
		const data: IPayload | IUpdVariants = {
			endpointId: activeEndpoint.endpointId,
			groupId: activeEndpoint.groupId,
			responseId: responseId,
			newRequestBodyItem,
		};

		if (requestBodyItem && setRedactParam) {
			dispatch(updateEndpoint(data));
			setRedactParam(null);

			return;
		}

		dispatch(setRequestBodyItem(data));
		setValue('');
		setIsActive(false);
	};

	const close = () => {
		if (setRedactParam) {
			setRedactParam(null);
			return;
		}
		setIsActive(false);
	};

	return (
		<div className={styles.endpoints__menu_create_form}>
			<div className={styles.endpoints__menu_create_form_top}>
				<input value={value} onChange={(e) => changeValue(e)} placeholder={`${placeholder} name`} className={styles.endpoints__menu_create_input} />
				<div className={styles.endpoints__type}>
					<div onClick={() => setTypePopupIsActive(true)} className={styles.endpoints__type_select}>
						{typeValue}
					</div>
					{typePopupIsActive ? (
						<div className={styles.endpoints__type_items}>
							{types.map((item) => (
								<div
									style={{ backgroundColor: typeValue === item.name ? '#1faee9' : '' }}
									onClick={() => changeType(item.name)}
									key={item.name}
									className={styles.endpoints__type_item}
								>
									{item.name}
								</div>
							))}
						</div>
					) : null}
				</div>
				<span onClick={addParam} className={styles.endpoints__menu_create_button}>
					+
				</span>
				<span onClick={close} className={styles.endpoints__menu_create_close}>
					+
				</span>
			</div>
			<div className={styles.endpoints__menu_create_form_bottom}>
				<div className={styles.endpoints__required}>
					<span onClick={() => setIsRequired(!isRequired)} className={styles.endpoints__required_check}>
						<span style={{ display: isRequired ? 'block' : 'none' }} className={styles.endpoints__required_check_active}></span>
					</span>
					<span className={styles.endpoints__required_text}>required?</span>
				</div>
			</div>
		</div>
	);
};

export default Param;

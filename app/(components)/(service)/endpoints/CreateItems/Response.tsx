import React, { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../logic/hooks/useRedux';
import { IPayload } from '../../../../../logic/redux/slices/service/serviceInterface';
import { setResponse } from '../../../../../logic/redux/slices/service/serviceSlice';

import styles from '../../../../../styles/service/createItems.module.scss';

interface Props {
	placeholder: string;
	setIsActive: (state: boolean) => void;
}

const Response: FC<Props> = ({ placeholder, setIsActive }) => {
	const dispatch = useAppDispatch();
	const activeEndpoint = useAppSelector((state) => state.service.activeEndpoint);
	const [status, setStatus] = useState('200');
	const [message, setMessage] = useState('');

	const changeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
		setStatus(e.target.value);
	};
	const changeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
		setMessage(e.target.value);
	};

	const addResponse = () => {
		const newResponseItem = {
			id: +new Date(),
			code: status,
			message: message,
			requestBody: { items: [], type: 'application/json' },
		};
		const data: IPayload = {
			endpointId: activeEndpoint.endpointId,
			groupId: activeEndpoint.groupId,
			newResponseItem,
		};
		dispatch(setResponse(data));
		setMessage('');
	};

	return (
		<div className={styles.endpoints__menu_create_form}>
			<div className={styles.endpoints__menu_create_form_top}>
				<input
					value={status}
					onChange={(e) => changeStatus(e)}
					placeholder="Code"
					className={`${styles.endpoints__menu_create_input} ${styles.endpoints__menu_create_input_code}`}
				/>
				<input value={message} onChange={(e) => changeMessage(e)} placeholder="Message" className={styles.endpoints__menu_create_input} />
				<span onClick={addResponse} className={styles.endpoints__menu_create_button}>
					+
				</span>
				<span onClick={() => setIsActive(false)} className={styles.endpoints__menu_create_close}>
					+
				</span>
			</div>
		</div>
	);
};

export default Response;

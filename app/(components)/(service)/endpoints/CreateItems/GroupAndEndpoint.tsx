import React, { FC, useState } from 'react';
import { useAppDispatch } from '../../../../../logic/hooks/useRedux';
import { IGroup, IPayload } from '../../../../../logic/redux/slices/service/serviceInterface';
import { setEndpoint, setGroup } from '../../../../../logic/redux/slices/service/serviceSlice';
import styles from '../../../../../styles/service/createItems.module.scss';

interface Props {
	placeholder: string;
	setIsActive: (state: boolean) => void;
	type: 'group' | 'endpoint' | 'param' | 'response';
	groupId?: number;
}

const GroupAndEndpoint: FC<Props> = ({ placeholder, type, groupId, setIsActive }) => {
	const dispatch = useAppDispatch();
	const [value, setValue] = useState('');

	const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const createMethods = {
		group: (value: string) => {
			const newItem: IGroup = { name: value, endpoints: [], id: +new Date() };
			dispatch(setGroup(newItem));
		},
		endpoint: (value: string) => {
			if (groupId) {
				const newEndpoint: IPayload = {
					groupId: groupId,
					newEndpoint: {
						name: value,
						method: 'get',
						id: +new Date(),
						requestBody: { items: [], type: 'application/json' },
						responses: [],
					},
				};
				dispatch(setEndpoint(newEndpoint));
			}
		},
	};

	const setItem = () => {
		if (type === 'group') {
			createMethods.group(value);
		}

		if (type === 'endpoint') {
			createMethods.endpoint(value);
		}

		setIsActive(false);
	};

	return (
		<div className={styles.endpoints__menu_create_form}>
			<div className={styles.endpoints__menu_create_form_top}>
				<input onChange={(e) => changeValue(e)} placeholder={`${placeholder} name`} className={styles.endpoints__menu_create_input} />
				<span onClick={setItem} className={styles.endpoints__menu_create_button}>
					+
				</span>
				<span onClick={() => setIsActive(false)} className={styles.endpoints__menu_create_close}>
					+
				</span>
			</div>
		</div>
	);
};

export default GroupAndEndpoint;

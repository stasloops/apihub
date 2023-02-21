/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from 'react';
import { methods } from '../../../../data';
import { useClose } from '../../../../logic/hooks/useClose';
import { useAppDispatch, useAppSelector } from '../../../../logic/hooks/useRedux';
import { useSvg } from '../../../../logic/hooks/useSvg';
import { IGroup } from '../../../../logic/redux/slices/service/serviceInterface';
import { deleteService, setActiveEndpoint, updateEndpoint } from '../../../../logic/redux/slices/service/serviceSlice';
import styles from '../../../../styles/service/endpoints.module.scss';
import CreateItems from './CreateItems';

interface Props {
	groupItem: IGroup;
}

const MenuItem: FC<Props> = ({ groupItem }) => {
	const dispatch = useAppDispatch();
	const activeEndpoint = useAppSelector((state) => state.service.activeEndpoint);
	const [redactName, setRedactName] = useState<boolean>(false);
	const [isOpen, setIsOpen] = useState(false);
	const { ref } = useClose(setRedactName);
	const { svg } = useSvg();

	const getEndpointId = (id: number) => {
		const data = {
			endpointId: id,
			groupId: groupItem.id,
		};
		dispatch(setActiveEndpoint(data));
	};

	useEffect(() => {
		if (!activeEndpoint.endpointId) {
			getEndpointId(0);
		}
	}, [groupItem]);

	const getBackground = (method: string | null) => {
		if (method) {
			const filtredMethod = methods.filter((item) => item.name === method);
			return filtredMethod[0].color;
		}
	};

	const changeGroupName = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(
			updateEndpoint({
				groupName: e.target.value,
				groupId: groupItem.id,
			}),
		);
	};

	const openRedactMode = () => {
		setRedactName(true);
		setTimeout(() => {
			setIsOpen(false);
		}, 0);
	};

	const deleteGroup = (groupId: number) => {
		dispatch(
			deleteService({
				groupId: groupId,
				delete: 'group',
			}),
		);
	};

	return (
		<>
			{!redactName ? (
				<div style={{ backgroundColor: isOpen ? '#222' : '#111' }} onClick={() => setIsOpen(!isOpen)} className={styles.endpoints__menu_item}>
					<div className={styles.endpoints__menu_item_box}>
						<span
							style={{
								transform: isOpen ? 'rotate(90deg) translate(3px, 0)' : 'rotate(0deg) translate(0px, 0)',
							}}
							className={styles.endpoints__ar}
						>
							{svg.ar}
						</span>
						<div className={styles.endpoints__menu_item_group_name}>{groupItem.name}</div>
					</div>

					<div className={styles.endpoints__menu_item_box}>
						<div onClick={openRedactMode} className={styles.endpoints__menu_item_redact}>
							<span className={styles.endpoints__menu_item_redact_icon}>{svg.pencil}</span>
						</div>
						<div onClick={() => deleteGroup(groupItem.id)} className={styles.endpoints__menu_item_delete}>
							<span className={styles.endpoints__menu_item_delete_icon}>+</span>
						</div>
					</div>
				</div>
			) : (
				<div ref={ref} className={styles.endpoints__menu_item_group_name_input_box}>
					<input onChange={(e) => changeGroupName(e)} value={groupItem.name} className={styles.endpoints__menu_item_group_name_input} />
					<div onClick={() => setRedactName(false)} className={styles.endpoints__menu_item_redact}>
						<span className={styles.endpoints__menu_item_redact_icon}>{svg.pencil}</span>
					</div>
				</div>
			)}

			{isOpen ? (
				<div className={styles.endpoints__items}>
					{groupItem?.endpoints?.map((item) => (
						<div
							style={{ backgroundColor: activeEndpoint.endpointId === item.id ? '#222' : '#111' }}
							onClick={() => getEndpointId(item.id)}
							className={styles.endpoints__items_item}
							key={item.id}
						>
							<span style={{ backgroundColor: getBackground(item.method ?? null) }} className={styles.endpoints__items_item_method}>
								{item.method !== 'delete' ? item.method : 'del'}
							</span>
							<span className={styles.endpoints__items_item_name}>{item.name}</span>
						</div>
					))}
				</div>
			) : null}

			{isOpen ? <CreateItems placeholder="Endpoint" type="endpoint" groupId={groupItem.id} /> : null}
		</>
	);
};

export default MenuItem;

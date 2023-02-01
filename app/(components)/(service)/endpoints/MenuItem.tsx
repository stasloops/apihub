import { FC, useEffect, useState } from 'react';
import { methods } from '../../../../data';
import { useAppDispatch, useAppSelector } from '../../../../logic/hooks/useRedux';
import { useSvg } from '../../../../logic/hooks/useSvg';
import { IGroup } from '../../../../logic/redux/slices/service/serviceInterface';
import { setActiveEndpoint } from '../../../../logic/redux/slices/service/serviceSlice';
import styles from '../../../../styles/service/endpoints.module.scss';
import CreateItems from './CreateItems';
import { IMethod } from './Docs';

interface Props {
	item: IGroup;
}

const MenuItem: FC<Props> = ({ item }) => {
	const activeEndpoint = useAppSelector((state) => state.service.activeEndpoint);
	const [redactName, setRedactName] = useState<boolean>(false);
	const [isOpen, setIsOpen] = useState(false);
	const dispatch = useAppDispatch();
	const { svg } = useSvg();

	const getEndpointId = (id: number) => {
		const data = {
			endpointId: id,
			groupId: item.id,
		};
		dispatch(setActiveEndpoint(data));
	};

	useEffect(() => {
		if (!activeEndpoint.endpointId) {
			getEndpointId(0);
		}
	}, [item]);

	const getBackground = (method: string | null) => {
		if (method) {
			const filtredMethod = methods.filter((item) => item.name === method);
			return filtredMethod[0].color;
		}
	};

	return (
		<>
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
					<input style={{ backgroundColor: isOpen ? '#222' : '#111' }} className={styles.endpoints__menu_item_group_name} value={item.name} />
				</div>

				<div onClick={() => setRedactName(!redactName)} className={styles.endpoints__menu_item_redact}>
					<span className={styles.endpoints__menu_item_redact_icon}>{svg.pencil}</span>
				</div>
			</div>

			{isOpen ? (
				<div className={styles.endpoints__items}>
					{item?.endpoints?.map((item, id) => (
						<div
							style={{ backgroundColor: activeEndpoint.endpointId === item.id ? '#222' : '#111' }}
							onClick={() => getEndpointId(item.id)}
							className={styles.endpoints__items_item}
							key={id}
						>
							<span style={{ backgroundColor: getBackground(item.method ?? null) }} className={styles.endpoints__items_item_method}>
								{item.method !== 'delete' ? item.method : 'del'}
							</span>
							<span className={styles.endpoints__items_item_name}>{item.name}</span>
						</div>
					))}
				</div>
			) : null}

			{isOpen ? <CreateItems placeholder="Endpoint" type="endpoint" groupId={item.id} /> : null}
		</>
	);
};

export default MenuItem;

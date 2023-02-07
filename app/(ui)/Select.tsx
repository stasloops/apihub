import React, { FC, useState } from 'react';
import { IMethod } from '../(components)/(service)/endpoints/InformationAboutEndpoint';
import { useClose } from '../../logic/hooks/useClose';
import styles from '../../styles/ui/select.module.scss';

export interface IArgs {
	name: string;
	id: number;
	color?: string;
}

interface Props {
	items: IMethod[] | IArgs[];
	setActiveItem: (value: IMethod | IArgs) => void;
	activeItem: IArgs | IMethod;
	variant: 'create' | 'type' | 'method';
}

export const Select: FC<Props> = ({ items, setActiveItem, activeItem, variant }) => {
	const [isActive, setIsActive] = useState<boolean>(false);
	const { ref } = useClose(setIsActive);

	function selectItem(arg: IMethod | IArgs) {
		setTimeout(() => {
			setIsActive(false);
		}, 0);

		setActiveItem(arg);
	}

	return (
		<div
			style={{ backgroundColor: activeItem.color ? activeItem.color : '' }}
			onClick={() => setIsActive(true)}
			ref={ref}
			className={`${styles.select} ${styles[`select__variant_${variant}`]}`}
		>
			<div className={`${styles.select__item_active} ${styles[`select__item_active__variant_${variant}`]}`}>{activeItem.name}</div>
			{isActive ? (
				<div className={`${styles.select_items} ${styles[`select_items__variant_${variant}`]}`}>
					{items.map((item) => (
						<div
							style={{ backgroundColor: item.color ? item.color : '#000' }}
							onClick={() => selectItem(item)}
							key={item.id}
							className={`${styles.select_item} ${styles[`select_item__variant_${variant}`]}`}
						>
							{item.name}
						</div>
					))}
				</div>
			) : null}
		</div>
	);
};

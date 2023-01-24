import React, { FC, useState } from 'react';
import { useClose } from '../../logic/hooks/useClose';
import styles from '../../styles/ui/select.module.scss';

interface Props {
	items: any[];
	setActiveItem: (arg: { id: number; name: string }) => void;
	activeItem: { id: number; name: string };
}

export const Select: FC<Props> = ({ items, setActiveItem, activeItem }) => {
	const [isActive, setIsActive] = useState<boolean>(false);
	const { ref } = useClose(setIsActive);

	const selectItem = (arg: { id: number; name: string }) => {
		setIsActive(false);
		setActiveItem(arg);
	};

	return (
		<div ref={ref} className={`${styles.select} ${styles + ''}`}>
			<div className={styles.select__item_active}>
				<div onClick={() => setIsActive(true)} className={styles.select__item_active}>
					{activeItem.name}
				</div>
				{isActive ? (
					<div className={styles.select_items}>
						{items.map((item: any) => (
							<div
								style={{ backgroundColor: activeItem.name === item.name ? '#1faee9' : '' }}
								onClick={() => selectItem({ id: item.id, name: item.name })}
								key={item.id}
								className={styles.select_item}
							>
								{item.name}
							</div>
						))}
					</div>
				) : null}
			</div>
		</div>
	);
};

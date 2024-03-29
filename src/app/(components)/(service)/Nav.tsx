'use client';

import { FC } from 'react';
import { navItem } from '../../../data';
import styles from '../../../styles/service/service.module.scss';

interface Props {
	setActiveNav: (state: string) => void;
	activeNav: string;
}

const Nav: FC<Props> = ({ setActiveNav, activeNav }) => {
	const scrollToBott = (item: string) => {
		setActiveNav(item);
	};

	return (
		<nav className={styles.service__nav}>
			<div className={styles.service__nav_inner}>
				{navItem.map((item) => (
					<div
						className={styles.service__nav_item}
						style={{
							borderBottom: activeNav === item ? '1px solid #1faee9' : '1px solid #111',
							color: activeNav === item ? '#1faee9' : '#fff',
						}}
						key={item}
						onClick={() => scrollToBott(item)}
					>
						{item}
					</div>
				))}
			</div>
		</nav>
	);
};

export default Nav;

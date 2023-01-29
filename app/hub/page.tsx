'use client';

import styles from '../../styles/hub.module.scss';
import DemonstrativeHub from '../(components)/(hub)/demonstrativeHub';
import List from '../list/page';
import { useContext } from 'react';
import { ThemeContext } from '../(provider)/Providers';

const Hub = () => {
	const theme = useContext(ThemeContext);

	return (
		<main style={{ background: theme?.theme.background, color: theme?.theme.color }} className={styles.hub}>
			<div className={styles.hub__container}>
				<DemonstrativeHub />
				<List />
			</div>
		</main>
	);
};

export default Hub;

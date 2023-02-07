'use client';

import { useContext } from 'react';
import FilterList from '../(components)/(list)/filterList';
import ListApis from '../(components)/(list)/listApis';
import { ThemeContext } from '../(provider)/Providers';
import styles from '../../styles/list.module.scss';

const List = () => {
	const theme = useContext(ThemeContext);
	return (
		<div style={{ background: theme?.theme.background, color: theme?.theme.color }} className={styles.list}>
			<div className={styles.list__container}>
				<h1>List APIs</h1>
				<div className={styles.list__inner}>
					<FilterList />
					<ListApis />
				</div>
			</div>
		</div>
	);
};

export default List;

'use client';

import { useContext } from 'react';
import style from '../styles/home.module.css';
import { ITheme, ThemeContext } from './(provider)/Providers';

export default function Home() {
	const theme: ITheme | null = useContext(ThemeContext);

	return <div style={theme?.theme} className={style.app}></div>;
}

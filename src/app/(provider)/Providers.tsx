'use client';

import { createContext, PropsWithChildren, useState } from 'react';
import ReduxProvider from './ReduxProvider';

interface Theme {
	background: string;
	backgroundSecond: string;
	color: string;
}
export interface ITheme {
	theme: Theme;
	changeTheme: () => void;
	isBlack: boolean;
}
export const ThemeContext = createContext<ITheme | null>(null);

type P = PropsWithChildren;

export default function Providers({ children }: P) {
	const [isBlack, setIsBlack] = useState(true);

	const changeTheme = () => {
		setIsBlack(!isBlack);
	};

	const theme = {
		light: {
			background: '#fff',
			backgroundSecond: '#e2e1e1',
			color: '#000',
		},
		black: {
			background: '#111',
			backgroundSecond: '#292929',
			color: '#fff',
		},
	};

	return (
		<>
			<ReduxProvider>
				<ThemeContext.Provider value={{ theme: isBlack ? theme.black : theme.light, changeTheme, isBlack }}>{children}</ThemeContext.Provider>
			</ReduxProvider>
		</>
	);
}

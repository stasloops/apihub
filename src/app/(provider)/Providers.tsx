'use client';

import { createContext, PropsWithChildren, useState } from 'react';
import ReduxProvider from './ReduxProvider';
import { GoogleOAuthProvider } from '@react-oauth/google';

interface Theme {
	background: string;
	backgroundSecond: string;
	color: string;
}
export interface ContextTheme {
	theme: Theme;
	changeTheme: () => void;
	isBlack: boolean;
}
export const ThemeContext = createContext<ContextTheme | null>(null);

type P = PropsWithChildren;

export default function Providers({ children }: P) {
	const [isBlack, setIsBlack] = useState(true);

	const changeTheme = () => {
		setIsBlack(!isBlack);
	};

	const theme = {
		light: {
			background: '#f0f0f0',
			backgroundSecond: '#fff',
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
			<GoogleOAuthProvider clientId="692754586986-3sbb1m2i0u9qf42b8kju0qvnsi65a43l.apps.googleusercontent.com">
				<ReduxProvider>
					<ThemeContext.Provider value={{ theme: isBlack ? theme.black : theme.light, changeTheme, isBlack }}>{children}</ThemeContext.Provider>
				</ReduxProvider>
			</GoogleOAuthProvider>
		</>
	);
}

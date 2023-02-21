'use client';

import { useContext, useEffect, useState } from 'react';
import style from '../styles/home.module.css';
import { ContextTheme, ThemeContext } from './(provider)/Providers';

function Home() {
	const theme: ContextTheme | null = useContext(ThemeContext);
	const [alerts, setAlerts] = useState<any>([]);
	const [alertId, setAlertId] = useState<number>(0);

	const addAlert = () => {
		const id = Date.now();
		if (id) {
			setAlertId(id);
			setAlerts([...alerts, { id: id, type: 'info', message: 'This is an alert!' }]);
		}
	};

	useEffect(() => {
		setTimeout(() => {
			if (alertId) {
				setAlerts((prev: any) => prev.filter((alert: any) => alert.id !== alertId));
			}
		}, 300);
	}, [alertId]);

	return (
		<div style={theme?.theme} className={style.app}>
			<button onClick={addAlert}>Add alert</button>
			<div>
				{alerts.map((item: any) => (
					<div key={item.id}>id: {item.id}</div>
				))}
			</div>
		</div>
	);
}

export default Home;

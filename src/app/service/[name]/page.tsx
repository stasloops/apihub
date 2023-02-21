'use client';

import { FC, useContext, useEffect } from 'react';
import { useAppDispatch } from '../../../logic/hooks/useRedux';
import { $request } from '../../../logic/request';
import NavComponents from '../../(components)/(service)/NavComponents';
import ShowWindow from '../../(components)/(service)/ShowWindow';
import styles from '../../../styles/service/service.module.scss';
import { setService } from '../../../logic/redux/slices/service/serviceSlice';
import { ThemeContext } from '../../(provider)/Providers';

interface Params {
	name: string;
}

interface Props {
	params: Params;
}

const Api: FC<Props> = ({ params }) => {
	const dispatch = useAppDispatch();
	const theme = useContext(ThemeContext);

	const a: { first: number; second?: number; third?: number } = { first: 1 };
	const b = a;
	b.second = 2;
	(function () {
		const b = a;
		b.third = 3;
	})();

	console.log(a);
	const getService = async () => {
		try {
			const service_id = params.name;
			const res = await $request.get(`/services/${service_id}`);
			dispatch(setService(res.data));
			console.log(res.data);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		scrollTo(0, 0);
		getService();
	}, []);

	return (
		<>
			<div style={{ background: theme?.theme.background, color: theme?.theme.color }} className={styles.service}>
				<div className={styles.service__container}>
					<ShowWindow />
					<NavComponents />
				</div>
			</div>
		</>
	);
};

export default Api;

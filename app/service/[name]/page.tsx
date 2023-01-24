'use client';

import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../logic/hooks/useRedux';
import { $request } from '../../../logic/request';
import NavComponents from '../../(components)/(service)/NavComponents';
import ShowWindow from '../../(components)/(service)/ShowWindow';
import styles from '../../../styles/service/service.module.scss';
import { setService } from '../../../logic/redux/slices/service/serviceSlice';

interface Params {
	name: string;
}

interface Props {
	params: Params;
}

const Api: FC<Props> = ({ params }) => {
	const { variant } = useAppSelector((state) => state.theme);
	const dispatch = useAppDispatch();

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
			<div style={{ backgroundColor: '#111', color: variant.color }} className={styles.service}>
				{/* <span style={{ display: imageActive ? '' : 'none' }} className={styles.service__background_dark}></span>
            <Image style={{ display: imageActive ? '' : 'none' }} className={styles.service__background} alt="image" src={tran} placeholder="blur" /> */}
				<div className={styles.service__container}>
					<ShowWindow />
					<NavComponents />
				</div>
			</div>
		</>
	);
};

export default Api;

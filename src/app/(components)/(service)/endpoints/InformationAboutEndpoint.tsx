/* eslint-disable react-hooks/exhaustive-deps */
import { IEndpoint } from '@/logic/redux/slices/service/serviceInterface';
import React, { FC, useEffect, useState } from 'react';
import { Select } from '../../../(ui)/Select';
import { methods } from '../../../../data';
import { useAppDispatch, useAppSelector } from '../../../../logic/hooks/useRedux';
import { updateEndpoint } from '../../../../logic/redux/slices/service/serviceSlice';
import styles from '../../../../styles/service/docs.module.scss';

export interface IMethod {
	id: number;
	name: 'post' | 'get' | 'put' | 'delete' | 'patch' | 'options';
	color: string;
}

export interface IArgs {
	name: string;
	id: number;
	color?: string;
}

export interface Props {
	endpoint: IEndpoint;
}

const InformationAboutEndpoint: FC<Props> = ({ endpoint }) => {
	const dispatch = useAppDispatch();
	const activeEndpoint = useAppSelector((state) => state.service.activeEndpoint);
	const [method, setMethod] = useState<IMethod>({
		name: 'get',
		id: 0,
		color: '#3a9601',
	});

	useEffect(() => {
		dispatch(
			updateEndpoint({
				method: method.name,
				endpointId: activeEndpoint.endpointId,
				groupId: activeEndpoint.groupId,
			}),
		);
	}, [method]);

	useEffect(() => {
		if (endpoint?.method) {
			const filteredMethods = methods.filter((m) => m.name === endpoint.method);
			const filteredMethod = filteredMethods[0];

			setMethod(filteredMethod);
		}
	}, [endpoint?.id]);

	const updateName = (name: string) => {
		dispatch(
			updateEndpoint({
				endpointName: name,
				endpointId: activeEndpoint.endpointId,
				groupId: activeEndpoint.groupId,
			}),
		);
	};

	const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
		updateName(e.target.value);
	};

	return (
		<>
			<input value={endpoint?.name ?? ''} onChange={(e) => changeTitle(e)} className={styles.endpoints__docs_title} placeholder="Untitled" />
			<div className={styles.endpoints__docs_method}>
				<Select variant="method" setActiveItem={setMethod} activeItem={method} items={methods} />
			</div>
		</>
	);
};

export default InformationAboutEndpoint;

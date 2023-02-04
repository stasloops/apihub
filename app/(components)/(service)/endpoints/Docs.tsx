import React, { useEffect, useState } from 'react';
import { IArgs, Select } from '../../../(ui)/Select';
import { methods } from '../../../../data';
import { useActiveEndpoint } from '../../../../logic/hooks/useActiveEndpoint';
import { useAppDispatch, useAppSelector } from '../../../../logic/hooks/useRedux';
import { useSvg } from '../../../../logic/hooks/useSvg';
import { updateEndpoint } from '../../../../logic/redux/slices/service/serviceSlice';
import styles from '../../../../styles/service/docs.module.scss';
import Config from './Config';
import CreateItems from './CreateItems';
import ResponseItem from './ResponseItem';

export interface IMethod {
	id: number;
	name: 'post' | 'get' | 'put' | 'delete' | 'patch' | 'options';
	color: string;
}

const Docs = () => {
	const { svg } = useSvg();
	const dispatch = useAppDispatch();
	const { endpoint } = useActiveEndpoint();
	const [isOpenRequest, setIsOpenRequest] = useState(false);
	const [isOpenResponse, setIsOpenResponse] = useState(false);
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
			const filtredMethod = methods.filter((item) => item.name === endpoint?.method);
			setMethod(filtredMethod[0]);
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
		<div className={styles.endpoints__docs}>
			{endpoint ? (
				<>
					<input value={endpoint.name ?? ''} onChange={(e) => changeTitle(e)} className={styles.endpoints__docs_title} placeholder="Untitled " />
					<div className={styles.endpoints__docs_method}>
						<Select variant="method" setActiveItem={setMethod} activeItem={method} items={methods} />
					</div>
					<div className={styles.endpoints__docs_item}>
						<div className={styles.endpoints__docs_item_title_box} onClick={() => setIsOpenRequest(!isOpenRequest)}>
							<h2 className={styles.endpoints__docs_item_title}>Request</h2>
							<span style={{ transform: isOpenRequest ? 'rotate(90deg) translate(5px, 3px)' : '' }} className={styles.endpoints__ar}>
								{svg.ar}
							</span>
						</div>
						<div style={{ display: isOpenRequest ? 'block' : '' }} className={styles.endpoints__config}>
							<Config requestBody={endpoint.requestBody} />
						</div>
					</div>

					<div className={styles.endpoints__docs_item}>
						<div className={styles.endpoints__docs_item_title_box} onClick={() => setIsOpenResponse(!isOpenResponse)}>
							<h2 className={styles.endpoints__docs_item_title}>Response</h2>
							<span style={{ transform: isOpenResponse ? 'rotate(90deg) translate(5px, 3px)' : '' }} className={styles.endpoints__ar}>
								{svg.ar}
							</span>
						</div>
						{isOpenResponse ? (
							<div className={styles.endpoints__response_box}>
								<CreateItems placeholder="Response" type="response" />
								{endpoint.responses.map((item, key) => (
									<ResponseItem response={item} key={key} />
								))}
							</div>
						) : null}
					</div>
				</>
			) : (
				<h1 className={styles.endpoints__docs_title}>No have endpoint</h1>
			)}
		</div>
	);
};

export default Docs;

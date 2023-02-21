import { useAppDispatch, useAppSelector } from '@/logic/hooks/useRedux';
import { deleteService } from '@/logic/redux/slices/service/serviceSlice';
import { useActiveEndpoint } from '../../../../logic/hooks/useActiveEndpoint';
import styles from '../../../../styles/service/docs.module.scss';
import InformationAboutEndpoint from './InformationAboutEndpoint';
import OpeningResponseOrRequest from './OpeningResponseOrRequest';

const Docs = () => {
	const endpoint = useActiveEndpoint();
	const activeGroupId = useAppSelector((state) => state.service.activeEndpoint.groupId);

	const dispatch = useAppDispatch();

	const deleteGroup = () => {
		dispatch(
			deleteService({
				groupId: activeGroupId,
				endpointId: endpoint?.id,
				delete: 'endpoint',
			}),
		);
	};
	return (
		<div className={styles.endpoints__docs}>
			{endpoint ? (
				<>
					<InformationAboutEndpoint endpoint={endpoint} />
					<OpeningResponseOrRequest endpoint={endpoint} variant="request" />
					<OpeningResponseOrRequest endpoint={endpoint} variant="response" />
					<button onClick={deleteGroup} className={styles.endpoints__docs_delete}>
						DELETE
					</button>
				</>
			) : (
				<h1 className={styles.endpoints__docs_title}>No have endpoint</h1>
			)}
		</div>
	);
};

export default Docs;

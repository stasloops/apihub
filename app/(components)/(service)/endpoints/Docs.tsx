import { useActiveEndpoint } from '../../../../logic/hooks/useActiveEndpoint';
import styles from '../../../../styles/service/docs.module.scss';
import InformationAboutEndpoint from './InformationAboutEndpoint';
import OpeningResponseOrRequest from './OpeningResponseOrRequest';

const Docs = () => {
	const endpoint = useActiveEndpoint();

	return (
		<div className={styles.endpoints__docs}>
			{endpoint ? (
				<>
					<InformationAboutEndpoint />
					<OpeningResponseOrRequest variant="request" />
					<OpeningResponseOrRequest variant="response" />
				</>
			) : (
				<h1 className={styles.endpoints__docs_title}>No have endpoint</h1>
			)}
		</div>
	);
};

export default Docs;

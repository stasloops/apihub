import styles from '../../../../styles/service/endpoints.module.scss';
import Docs from './Docs';
import Menu from './Menu';

const Endpoints = () => {
	return (
		<div className={styles.endpoints}>
			<div className={styles.endpoints__container}>
				<Menu />
				<Docs />
			</div>
		</div>
	);
};

export default Endpoints;

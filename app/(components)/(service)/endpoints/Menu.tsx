import { useAppSelector } from '../../../../logic/hooks/useRedux';
import { IGroup } from '../../../../logic/redux/slices/service/serviceInterface';
import styles from '../../../../styles/service/endpoints.module.scss';
import CreateItems from './CreateItems';
import MenuItem from './MenuItem';

const Menu = () => {
	const group = useAppSelector((state) => state.service.docs.group);

	console.log(group, 'docs');

	return (
		<div className={styles.endpoints__menu}>
			<div className={styles.endpoints__menu_content}>
				<CreateItems placeholder="Group" type="group" />
				{group.map((item: IGroup, id: number) => (
					<MenuItem key={id} item={item} />
				))}
			</div>
		</div>
	);
};

export default Menu;

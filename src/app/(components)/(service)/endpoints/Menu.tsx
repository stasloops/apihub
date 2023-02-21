import { useAppSelector } from '../../../../logic/hooks/useRedux';
import { IGroup } from '../../../../logic/redux/slices/service/serviceInterface';
import styles from '../../../../styles/service/endpoints.module.scss';
import CreateItems from './CreateItems';
import MenuItem from './MenuItem';

const Menu = () => {
	const groups = useAppSelector((state) => state.service.documentation.groups);

	return (
		<div className={styles.endpoints__menu}>
			<div className={styles.endpoints__menu_content}>
				<CreateItems placeholder="Group" type="group" />

				{groups.map((groupItem: IGroup) => (
					<MenuItem key={groupItem.id} groupItem={groupItem} />
				))}
			</div>
		</div>
	);
};

export default Menu;

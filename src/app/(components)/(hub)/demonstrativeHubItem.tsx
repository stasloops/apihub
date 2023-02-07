import Image from 'next/image';
import { FC, useContext } from 'react';
import { ThemeContext } from '../../(provider)/Providers';
import dio from '../../../public/dio4.jpg';
import styles from '../../../styles/hub.module.scss';

interface Item {
	title: string;
	apis: number[];
}

interface Props {
	item: Item;
}
const DemonstrativeHubItem: FC<Props> = ({ item }) => {
	const theme = useContext(ThemeContext);
	return (
		<div style={{ background: theme?.theme.backgroundSecond, color: theme?.theme.color }} className={styles.hub__demonstrative_items}>
			<h1 className={styles.hub__title}>{item.title}</h1>
			{item.apis.map((item, id) => (
				<div style={{ color: theme?.theme.color }} className={styles.hub__demonstrative_items_api} key={item}>
					<Image className={styles.hub__demonstrative_img} alt="image" src={dio} placeholder="blur" />
					<h2 className={styles.hub__demonstrative_title}>Recipe Food</h2>
				</div>
			))}
		</div>
	);
};

export default DemonstrativeHubItem;

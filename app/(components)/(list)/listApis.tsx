import styles from '../../../styles/list.module.scss';
import dio from '../../../public/dio4.jpg';
import Image from 'next/image';
import { useSvg } from '../../../logic/hooks/useSvg';
import Link from 'next/link';
import { $request } from '../../../logic/request';
import { useContext } from 'react';
import { ThemeContext } from '../../(provider)/Providers';

const ListApis = () => {
	const theme = useContext(ThemeContext);
	const { svg } = useSvg();

	const a = [];
	for (let i = 0; i < 20; i++) {
		a.push(i);
	}

	const getAPIs = async () => {
		const res = await $request.get('/services/');
	};
	getAPIs();

	return (
		<>
			<div className={styles.list__apis}>
				<div className={styles.list__apis_characteristic}>
					<span className={styles.list__apis_characteristic_item}>Title</span>
					<span className={styles.list__apis_characteristic_item}>Last update</span>
					<span className={styles.list__apis_characteristic_item}>Stars</span>
					<span className={styles.list__apis_characteristic_item}>Category</span>
					<span className={styles.list__apis_characteristic_item}>Uptime</span>
				</div>
				<div className={styles.list__apis_items}>
					{a.map((item, id) => (
						<Link
							href={`/service/${item}`}
							style={{ backgroundColor: id % 2 ? theme?.theme.background : theme?.theme.backgroundSecond }}
							className={styles.list__api}
							key={id}
						>
							<span className={styles.list__api_index}>{id + 1}</span>
							<Image className={styles.list__api_img} alt="image" src={dio} placeholder="blur" />
							<div className={styles.list__api_table}>
								<h2 className={styles.list__api_title}>Recipe Food</h2>
								<span className={styles.list__api_ago}>1 month ago</span>
								<span className={styles.list__api_stars}>
									<span>11k</span>
									<span className={styles.list__api_stars_icon}>{svg.star}</span>
								</span>
								<span className={styles.list__api_category}>Translainment</span>
								<span className={styles.list__api_uptime}>4%</span>
							</div>
						</Link>
					))}
					<span
						style={{
							backgroundColor: theme?.theme.backgroundSecond,
						}}
						className={styles.list__api_end}
					>
						More APIs no have
					</span>
				</div>
			</div>
		</>
	);
};

export default ListApis;

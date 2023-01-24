import DemonstrativeHubItem from './demonstrativeHubItem';
import styles from '../../../styles/hub.module.scss';

const DemonstrativeHub = () => {
	const item = [
		{
			title: 'Sports',
			apis: [1, 2, 3, 4, 5, 6, 7, 8],
		},
		{
			title: 'Games',
			apis: [1, 2, 3, 4, 5, 6, 7, 8],
		},
		{
			title: 'Translate',
			apis: [1, 2, 3, 4, 5, 6, 7, 8],
		},
	];

	return (
		<div className={styles.hub__demonstrative}>
			<>
				{item?.map((item: any, id: number) => (
					<DemonstrativeHubItem key={id} item={item} />
				))}
			</>
		</div>
	);
};

export default DemonstrativeHub;

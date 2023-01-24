import style from '../../../styles/service/price.module.scss';

const Price = () => {
	const items = [1, 2, 3, 4];
	const features = ['Leagues', 'ixtures', 'Pre-matchs Odds'];

	return (
		<div className={style.price}>
			<div className={style.price__container}>
				<div className={style.price__table}>
					<div>
						<div className={style.price__features}>
							<div className={style.price__features_plans}>Plans</div>
							<div className={style.price__features_feature}>Features</div>
							{features.map((item) => (
								<div className={style.price__features_item} key={item}>
									{item}
								</div>
							))}
						</div>
					</div>

					<div>
						{items.map((item) => (
							<div className={style.price__item} key={item}>
								{item}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Price;

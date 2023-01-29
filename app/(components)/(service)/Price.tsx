import style from '../../../styles/service/price.module.scss';

const Price = () => {
	const items = [1, 2, 3, 4];
	const features = ['Leagues', 'ixtures', 'Pre-matchs Odds'];

	return (
		<div className={style.price}>
			<div className={style.price__container}>
				<table className={style.price__table}>
					<tbody className={style.price__table_content}>
						<tr className={style.price__row}>
							<td style={{ borderTop: '0' }} className={style.price__row_cell_first}>
								Plans
							</td>
							<td style={{ borderTop: '0' }} className={style.price__row_cell}>
								1
							</td>
							<td style={{ borderTop: '0' }} className={style.price__row_cell}>
								1
							</td>
							<td style={{ borderTop: '0', borderRight: '0' }} className={style.price__row_cell}>
								1
							</td>
						</tr>
						<tr className={style.price__row}>
							<td className={style.price__row_cell_first}>Requests</td>
							<td className={style.price__row_cell}>2</td>
							<td className={style.price__row_cell}>2</td>
							<td style={{ borderRight: '0' }} className={style.price__row_cell}>
								2
							</td>
						</tr>
						<tr className={style.price__row}>
							<td className={style.price__row_cell_first}>Rate Limit</td>
							<td className={style.price__row_cell}>2</td>
							<td className={style.price__row_cell}>2</td>
							<td style={{ borderRight: '0' }} className={style.price__row_cell}>
								2
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Price;

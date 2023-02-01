import { useSvg } from '../../../logic/hooks/useSvg';
import style from '../../../styles/service/price.module.scss';

const Price = () => {
	const items = [1, 2, 3, 4];
	const features = ['Leagues', 'ixtures', 'Pre-matchs Odds'];
	const { svg } = useSvg();

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
								<div className={style.price__row_cell_content}>
									<h2 className={style.price__row_cell_title}>Basic</h2>
									<h2 className={style.price__row_cell_title}>$0.00 / mo</h2>
									<button className={style.price__row_cell_button}>Subscribe</button>
								</div>
							</td>
							<td style={{ borderTop: '0' }} className={style.price__row_cell}>
								<div className={style.price__row_cell_content}>
									<h2 className={style.price__row_cell_title}>Basic</h2>
									<h2 className={style.price__row_cell_title}>$0.00 / mo</h2>
									<button className={style.price__row_cell_button}>Subscribe</button>
								</div>
							</td>
							<td style={{ borderTop: '0', borderRight: '0' }} className={style.price__row_cell}>
								<div className={style.price__row_cell_content}>
									<h2 className={style.price__row_cell_title}>Basic</h2>
									<h2 className={style.price__row_cell_title}>$0.00 / mo</h2>
									<button className={style.price__row_cell_button}>Subscribe</button>
								</div>
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
						<tr className={style.price__row}>
							<td className={style.price__row_cell_first}>name</td>
							<td className={style.price__row_cell}>{1 ? <span className={style.price__row_cell_ishas}>{svg.checkmark}</span> : null}</td>
							<td className={style.price__row_cell}>{1 ? <span className={style.price__row_cell_ishas}>{svg.checkmark}</span> : null}</td>
							<td style={{ borderRight: '0' }} className={style.price__row_cell}>
								{1 ? <span className={style.price__row_cell_ishas}>{svg.checkmark}</span> : null}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Price;

import React, { ChangeEvent, FC, useState } from 'react';
import styles from '../../../styles/service/service.module.scss';

interface Props {
	setParam: (value: string) => void;
	placeholder: string;
	type: string;
}

const InputRedact: FC<Props> = ({ setParam, placeholder, type }) => {
	const [value, setValue] = useState('');

	const valueChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setValue(e.target.value);
		setParam(e.target.value);
	};

	return (
		<div className={styles.service__redact}>
			{type === 'area' ? (
				<textarea
					value={value}
					onChange={(e) => valueChange(e)}
					className={`${styles.service__redact_input} ${styles.service__redact_area} `}
					placeholder={`Type new ${placeholder}`}
				/>
			) : (
				<input value={value} onChange={(e) => valueChange(e)} className={styles.service__redact_input} placeholder={`Type new ${placeholder}`} />
			)}
		</div>
	);
};

export default InputRedact;

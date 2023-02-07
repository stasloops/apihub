import React, { FC, useCallback, useMemo, useState } from 'react';
import Config from './Config';
import styles from '../../../../styles/service/docs.module.scss';
import { useSvg } from '../../../../logic/hooks/useSvg';
import CreateItems from './CreateItems';
import ResponseItem from './ResponseItem';
import { useActiveEndpoint } from '../../../../logic/hooks/useActiveEndpoint';

interface Props {
	variant: 'request' | 'response';
}
const OpeningResponseOrRequest: FC<Props> = ({ variant }) => {
	const [isOpenConfig, setIsOpenConfig] = useState(false);
	const endpoint = useActiveEndpoint();
	const { svg } = useSvg();

	return (
		<div className={styles.endpoints__docs_item}>
			<div className={styles.endpoints__docs_item_title_box} onClick={() => setIsOpenConfig((prev) => !prev)}>
				<h2 className={styles.endpoints__docs_item_title}>{variant === 'request' ? 'Request' : 'Response'}</h2>
				<span style={{ transform: isOpenConfig ? 'rotate(90deg) translate(5px, 3px)' : '' }} className={styles.endpoints__ar}>
					{svg.ar}
				</span>
			</div>

			{variant === 'request' ? (
				<div style={{ display: isOpenConfig ? 'block' : '' }} className={styles.endpoints__config}>
					<Config requestBody={endpoint?.requestBody ?? null} />
				</div>
			) : isOpenConfig ? (
				<div className={styles.endpoints__response_box}>
					<CreateItems placeholder="Response" type="response" />
					{endpoint?.responses?.map((item, key) => (
						<ResponseItem response={item} key={key} />
					))}
				</div>
			) : null}
		</div>
	);
};

export default OpeningResponseOrRequest;

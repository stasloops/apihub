import { useAppDispatch, useAppSelector } from '@/logic/hooks/useRedux';
import { deleteService } from '@/logic/redux/slices/service/serviceSlice';
import { FC, memo, useState } from 'react';
import { Select } from '../../../(ui)/Select';
import { format } from '../../../../data';
import { useSvg } from '../../../../logic/hooks/useSvg';
import { IRequestBody } from '../../../../logic/redux/slices/service/serviceInterface';
import styles from '../../../../styles/service/docs.module.scss';
import CreateItems from './CreateItems';

interface Props {
	requestBody: IRequestBody | null;
	responseId?: number;
}

const Config: FC<Props> = ({ requestBody, responseId }) => {
	const dispatch = useAppDispatch();
	const activeEndpoint = useAppSelector((state) => state.service.activeEndpoint);
	const { svg } = useSvg();
	const [redactParam, setRedactParam] = useState<number | null>(null);
	const [category, setCategory] = useState({ name: 'Text', id: 3 });

	const deleteParam = (paramId: number | null) => {
		if (!paramId) {
			return;
		}
		dispatch(
			deleteService({
				endpointId: activeEndpoint.endpointId,
				groupId: activeEndpoint.groupId,
				newRequestBodyItemId: paramId,
				delete: 'requestBodyItem',
			}),
		);
	};
	return (
		<div className={styles.endpoints__config_item}>
			<h3 className={styles.endpoints__config_item_title}>
				REQUEST BODY SCHEMA: <Select variant="type" setActiveItem={setCategory} activeItem={category} items={format} />
			</h3>
			<div className={styles.endpoints___parameters}>
				{requestBody?.items?.map((item) => (
					<>
						{redactParam !== item.id ? (
							<div key={item.id} className={styles.endpoints__parameters_item}>
								<div className={styles.endpoints__parameters_item_box}>
									<div className={styles.endpoints__parameters_item_field}>
										<p className={styles.endpoints__parameters_item_field_name}>{item.name}</p>
										{item.required ? <p className={styles.endpoints__parameters_item_field_required}>required</p> : null}
									</div>
									<div className={styles.endpoints__parameters_item_type}>
										<p className={styles.endpoints__parameters_item_type_name}>{item.type}</p>
									</div>
								</div>
								<div>
									<div onClick={() => setRedactParam(item.id)} className={styles.endpoints__parameters_item_redact}>
										<span className={styles.endpoints__parameters_item_redact_icon}>{svg.pencil}</span>
									</div>
									<div onClick={() => deleteParam(item.id)} className={styles.endpoints__menu_item_delete}>
										<span className={styles.endpoints__menu_item_delete_icon}>+</span>
									</div>
								</div>
							</div>
						) : (
							<CreateItems setRedactParam={setRedactParam} requestBodyItem={item} responseId={responseId} placeholder="Param" type="param" />
						)}
					</>
				))}
				<CreateItems responseId={responseId} placeholder="Param" type="param" />
			</div>
		</div>
	);
};

export default memo(Config);

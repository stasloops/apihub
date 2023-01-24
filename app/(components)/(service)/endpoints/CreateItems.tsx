import { FC, useState } from 'react';
import { useAppSelector } from '../../../../logic/hooks/useRedux';
import Param from './CreateItems/Param';
import styles from '../../../../styles/service/createItems.module.scss';
import Response from './CreateItems/Response';
import GroupAndEndpoint from './CreateItems/GroupAndEndpoint';
import { IRequestBodyItem } from '../../../../logic/redux/slices/service/serviceInterface';

interface Props {
	placeholder: string;
	type: 'group' | 'endpoint' | 'param' | 'response';
	groupId?: number;
	responseId?: number;
	requestBodyItem?: IRequestBodyItem;
	setRedactParam?: (state: number | null) => void;
}

const CreateItems: FC<Props> = ({ placeholder, type, groupId, responseId, setRedactParam, requestBodyItem }) => {
	const [isActive, setIsActive] = useState(false);
	const id = useAppSelector((state) => state.auth.user?.id);
	const author_id = useAppSelector((state) => state.service.service.author_id);

	if (id !== author_id) {
		return null;
	}

	return (
		<div className={styles.endpoints__menu_create}>
			{isActive || requestBodyItem ? (
				<>
					{type === 'group' || type === 'endpoint' ? (
						<GroupAndEndpoint type={type} groupId={groupId} placeholder={placeholder} setIsActive={setIsActive} />
					) : null}
					{type === 'param' ? (
						<Param
							setRedactParam={setRedactParam}
							requestBodyItem={requestBodyItem}
							responseId={responseId}
							placeholder={placeholder}
							setIsActive={setIsActive}
						/>
					) : null}
					{type === 'response' ? <Response placeholder={placeholder} setIsActive={setIsActive} /> : null}
				</>
			) : (
				<span onClick={() => setIsActive(true)} className={styles.endpoints__menu_create_box}>
					<span className={styles.endpoints__menu_create_title}>New {placeholder}</span>
					<span className={styles.endpoints__menu_create_plus}>+</span>
				</span>
			)}
		</div>
	);
};

export default CreateItems;

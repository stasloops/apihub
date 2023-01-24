import { useEffect, useState } from 'react';
import { IActiveEndpoint, IEndpoint, IGroup } from '../redux/slices/service/serviceInterface';
import { useAppSelector } from './useRedux';

export const useActiveEndpoint = () => {
	const [endpoint, setEndpoint] = useState<IEndpoint | null>(null);
	const group: IGroup[] = useAppSelector((state) => state.service.docs.group);
	const activeEndpoint: IActiveEndpoint = useAppSelector((state) => state.service.activeEndpoint);

	const getEndpoint = () => {
		const activeGroup = group.find((item) => item.id === activeEndpoint.groupId);
		const endpointData = activeGroup?.endpoints.find((item) => item.id === activeEndpoint.endpointId);

		return endpointData;
	};

	useEffect(() => {
		const endpointData = getEndpoint() || null;
		setEndpoint(endpointData);
	}, [group, activeEndpoint]);

	return { endpoint };
};

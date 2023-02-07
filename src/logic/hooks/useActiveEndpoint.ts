import { useEffect, useState } from 'react';
import { IActiveEndpoint, IEndpoint, IGroup } from '../redux/slices/service/serviceInterface';
import { useAppSelector } from './useRedux';

export const useActiveEndpoint = () => {
	const groups: IGroup[] = useAppSelector((state) => state.service.documentation.groups);
	const activeEndpoint: IActiveEndpoint = useAppSelector((state) => state.service.activeEndpoint);
	const [endpoint, setEndpoint] = useState<IEndpoint | null>(null);

	const getEndpoint = () => {
		const activeGroup = groups.find((item) => item.id === activeEndpoint.groupId);
		const endpointData = activeGroup?.endpoints.find((item) => item.id === activeEndpoint.endpointId);

		return endpointData;
	};

	useEffect(() => {
		const endpointData = getEndpoint() || null;
		setEndpoint(endpointData);
	}, [groups, activeEndpoint]);

	return endpoint;
};

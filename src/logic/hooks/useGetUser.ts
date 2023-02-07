import { useAppDispatch } from './useRedux';
import { getUser } from '../redux/slices/authSlice';
import { useState } from 'react';
import { $request } from '../request';
import { storage } from '../helpers/localStorage';

export const useGetUser = () => {
	const dispatch = useAppDispatch();
	const [userId, setUserId] = useState<number | null>(null);
	const [token, setToken] = useState<string | null>(null);

	if (userId && token) {
		const fetchUser = async () => {
			const res = await $request.get(`/users/0`);
			dispatch(getUser(res.data));
			storage.set('user', res.data);
		};
		fetchUser();
	}

	return { setUserId, setToken };
};

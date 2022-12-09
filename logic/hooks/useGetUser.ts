import { useAppDispatch } from './useRedux';
import { getUser } from '../redux/slices/authSlice';
import { useState } from 'react';
import { $request, API_URL } from '../request';
import axios from 'axios';

export const useGetUser = () => {
    const dispatch = useAppDispatch()
    const [userId, setUserId] = useState<number | null>(null)

    if (userId) {
        const fetchUser = async () => {
            const res = await axios.get(`${API_URL}/users/${userId}`)
            dispatch(getUser(res.data))
        }
        fetchUser()
    }

    return { setUserId }
}
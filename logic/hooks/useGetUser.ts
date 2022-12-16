import { useAppDispatch } from './useRedux';
import { getUser } from '../redux/slices/authSlice';
import { useState } from 'react';
import { $request } from '../request';

export const useGetUser = () => {
    const dispatch = useAppDispatch()
    const [userId, setUserId] = useState<number | null>(null)
    const [token, setToken] = useState<string | null>(null)

    if (userId && token) {
        const fetchUser = async () => {
            let config = { headers: { Authorization: token } }
            const res = await $request.get(`/users/0`, config)
            dispatch(getUser(res.data))
            if (typeof window !== "undefined") {
                window.localStorage.setItem('user', JSON.stringify(res.data))
            }
        }
        fetchUser()
    }

    return { setUserId, setToken }
}
'use client';

import { useRouter } from 'next/navigation';
import { storage } from '../../logic/helpers/localStorage';
import { useAppDispatch, useAppSelector } from '../../logic/hooks/useRedux';
import { resetUser } from '../../logic/redux/slices/authSlice';
import { $request } from '../../logic/request';
import styles from '../../styles/profile.module.scss';

const Profile = () => {
	const dispatch = useAppDispatch();
	const { variant } = useAppSelector((state) => state.theme);
	const user = useAppSelector((state) => state.auth.user);
	const isAuth = useAppSelector((state) => state.auth.isAuth);
	const router = useRouter();

	// if (!isAuth) {
	//     return router.push('/')
	// }

	const logOut = () => {
		storage.remove('user');
		storage.remove('token');
		dispatch(resetUser());
	};

	const updateUser = async () => {
		// const user = storage.get('user')
		const data = { new_email: 'Test@gmail.com' };
		const config = { headers: { 'content-type': 'multipart/form-data' } };
		await $request.put(`/users/28/`, data, config);
	};

	return (
		<div
			style={{
				backgroundColor: variant.background,
				color: variant.color,
			}}
			className={styles.profile}
		>
			<span>email: {user?.email}</span>
			<br />
			<span onClick={updateUser}>balance: {user?.balance}</span>
			<br />
			<button onClick={logOut}>Log Out</button>
		</div>
	);
};

export default Profile;

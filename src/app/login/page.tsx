'use client';

import { GoogleLogin } from '@react-oauth/google';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { storage } from '../../logic/helpers/localStorage';
import { useGetUser } from '../../logic/hooks/useGetUser';
import { $request } from '../../logic/request';
import style from '../../styles/login.module.scss';

const Login = () => {
	const [value, setValue] = useState({ email: '', password: '', captcha: 'captcha solution' });
	const { setUserId, setToken } = useGetUser();
	const router = useRouter();

	const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue((prev) => ({ ...prev, email: e.target.value }));
	};
	const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue((prev) => ({ ...prev, password: e.target.value }));
	};

	const login = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		try {
			const body = {
				email: value.email,
				password: value.password,
				captcha: value.captcha,
			};
			const res = await $request.post(`/users/sign_in`, body);
			const iden = { user_id: res.data.user_id, token: res.data.token };

			setToken(iden.token);
			setUserId(iden.user_id);

			storage.set('token', iden.token);

			router.push('/hub');
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<form className={style.login}>
			<div className={style.login__container}>
				<h1 className={style.login__title}>Log In</h1>
				<div className={style.login__input_box}>
					<label className={style.login__label}>Email</label>
					<input placeholder="E-mail" className={style.login__input} value={value.email} onChange={changeEmail} />
				</div>
				<div className={style.login__input_box}>
					<label className={style.login__label}>Password</label>
					<input placeholder="Password" className={style.login__input} value={value.password} onChange={changePassword} />
				</div>
				<button className={style.login__button} onClick={login}>
					Log In
				</button>
				<span className={style.login__swap}>
					Not a member yet?
					<Link className={style.login__swap_link} href="/registration">
						Sign up
					</Link>
				</span>
				<GoogleLogin
					onSuccess={(credentialResponse) => {
						console.log(credentialResponse);
					}}
					onError={() => {
						console.log('Login Failed');
					}}
				/>
			</div>
		</form>
	);
};

export default Login;

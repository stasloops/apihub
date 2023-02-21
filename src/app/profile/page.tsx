'use client';

import { useSvg } from '@/logic/hooks/useSvg';
import { useContext, useState } from 'react';
import { ThemeContext } from '../(provider)/Providers';
import { storage } from '../../logic/helpers/localStorage';
import { useAppDispatch, useAppSelector } from '../../logic/hooks/useRedux';
import { resetUser } from '../../logic/redux/slices/authSlice';
import { $request } from '../../logic/request';
import styles from '../../styles/profile.module.scss';

const Profile = () => {
	const dispatch = useAppDispatch();
	const { svg } = useSvg();
	const settings = [
		{ icon: svg.settings, title: 'Settings', id: 1 },
		{ icon: null, title: 'My APIs', id: 2 },
		{ icon: null, title: 'Subscribes on APIs', id: 3 },
		{ icon: svg.partner, title: 'Affiliate', id: 4 },
	];
	const user = useAppSelector((state) => state.auth.user);
	const theme = useContext(ThemeContext);
	const [activeSetting, setActiveSetting] = useState(1);

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
		<div style={theme?.theme} className={styles.profile}>
			<div className={styles.profile__container}>
				<div className={styles.profile__top}>
					<div className={styles.profile__top_1}>
						<div className={styles.profile__avatar}>
							<span className={styles.profile__avatar_none}>S</span>
						</div>
						<h1 className={styles.profile__username}>User Name</h1>
					</div>
					<div className={styles.profile__top_2}>
						<div className={styles.profile__achievements}>
							<div className={styles.profile__achievements_item}>
								<span className={styles.profile__achievements_item_icon}></span>
								<span className={styles.profile__achievements_item_title}>Registered</span>
								<span className={styles.profile__achievements_item_count}>18 d.</span>
							</div>
							<div className={styles.profile__achievements_item}>
								<span className={styles.profile__achievements_item_icon}></span>
								<span className={styles.profile__achievements_item_title}>APIs</span>
								<span className={styles.profile__achievements_item_count}>1</span>
							</div>
							<div className={styles.profile__achievements_item}>
								<span className={styles.profile__achievements_item_icon}></span>
								<span className={styles.profile__achievements_item_title}>Subscriptions</span>
								<span className={styles.profile__achievements_item_count}>6</span>
							</div>
							<div className={styles.profile__achievements_item}>
								<span className={styles.profile__achievements_item_icon}></span>
								<span className={styles.profile__achievements_item_title}>Referrals</span>
								<span className={styles.profile__achievements_item_count}>0</span>
							</div>
						</div>
						<div className={styles.profile__settings}>
							{settings.map((item) => (
								<div
									style={{
										backgroundColor: activeSetting === item.id ? '#6A5ACD' : theme?.theme.background,
									}}
									onClick={() => setActiveSetting(item.id)}
									key={item.id}
									className={styles.profile__settings_item}
								>
									{item.icon ? (
										<span
											className={styles.profile__settings_item_icon}
											style={{
												color: activeSetting === item.id ? '#fff' : '#6A5ACD',
											}}
										>
											{item.icon}
										</span>
									) : null}
									<span
										style={{
											color: activeSetting === item.id ? '#fff' : '#6A5ACD',
										}}
										className={styles.profile__settings_item_title}
									>
										{item.title}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className={styles.profile__bottom}>
					<div className={styles.profile__bottom_1}>
						<div
							className={styles.profile__balance}
							style={{ backgroundColor: theme?.theme.backgroundSecond, borderColor: theme?.isBlack ? '#333' : '#b2b2b2' }}
						>
							<p className={styles.profile__balance_title} style={{ color: theme?.theme.color }}>
								Баланс
							</p>
							<p className={styles.profile__balance_value}>185.00</p>
							<div className={styles.profile__balance_button_box}>
								<button
									style={{
										backgroundColor: theme?.theme.backgroundSecond,
										color: theme?.theme.color,
										borderColor: theme?.isBlack ? '#444' : '#b2b2b2',
									}}
									className={styles.profile__balance_button}
								>
									Пополнить
								</button>
								<button
									style={{
										backgroundColor: theme?.theme.backgroundSecond,
										color: theme?.theme.color,
										borderColor: theme?.isBlack ? '#444' : '#b2b2b2',
									}}
									className={styles.profile__balance_button}
								>
									Вывести
								</button>
							</div>
						</div>
						<div
							className={styles.profile__promocode}
							style={{ backgroundColor: theme?.theme.backgroundSecond, borderColor: theme?.isBlack ? '#333' : '#b2b2b2' }}
						>
							<p className={styles.profile__promocode_title} style={{ color: theme?.theme.color }}>
								Активация промокода
							</p>
							<input
								className={styles.profile__promocode_input}
								type="text"
								placeholder="ПРОМОКОД"
								style={{
									backgroundColor: theme?.theme.backgroundSecond,
									color: theme?.theme.color,
									borderColor: theme?.isBlack ? '#444' : '#b2b2b2',
								}}
							/>
							<button className={styles.profile__promocode_button}>Активировать</button>
						</div>
						<div
							style={{
								borderColor: theme?.isBlack ? '#444' : '#b2b2b2',
							}}
							className={styles.profile__logout}
						>
							<span onClick={logOut} className={styles.profile__logout_text}>Выйти</span>
						</div>
					</div>
					<div className={styles.profile__bottom_2}></div>
				</div>
			</div>
			<div style={{ display: 'none' }}>
				<span>email: {user?.email}</span>
				<br />
				<span onClick={updateUser}>balance: {user?.balance}</span>
				<br />
				<button onClick={logOut}>Log Out</button>
			</div>
		</div>
	);
};

export default Profile;

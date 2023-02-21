'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useAppSelector } from '../../logic/hooks/useRedux';
import style from '../../styles/header.module.scss';
import dio from '../../public/dio4.jpg';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../(provider)/Providers';

const Header = () => {
	const theme = useContext(ThemeContext);
	const [isAuthHeader, setisAuthHeader] = useState(false);
	const isAuth = useAppSelector((state) => state.auth.isAuth);

	useEffect(() => {
		setisAuthHeader(isAuth);
	}, [isAuth]);

	return (
		<header style={{ backgroundColor: theme?.isBlack ? theme?.theme.background : theme?.theme.backgroundSecond }} className={style.header}>
			<div className={style.header__container}>
				<div className={style.header__left}>
					<Link className={style.header__logo} href="/hub">
						ApiHub
					</Link>
					<span
						onClick={theme?.changeTheme}
						style={{
							backgroundColor: theme?.isBlack ? theme?.theme.backgroundSecond : theme?.theme.background,
							justifyContent: theme?.isBlack ? 'start' : 'end',
						}}
						className={style.header__theme}
					>
						<span className={style.header__theme_button}></span>
					</span>
				</div>
				<input
					style={{
						backgroundColor: theme?.isBlack ? theme?.theme.backgroundSecond : theme?.theme.background,
						color: theme?.theme.color,
					}}
					className={style.header__input}
					placeholder="Search for APIs"
				/>
				<div className={style.header__right}>
					<nav className={style.header__nav}>
						<Link href="/hub" className={style.header__nav_item}>
							Main
						</Link>
						<Link href="/list" className={style.header__nav_item}>
							APIs
						</Link>
					</nav>
					{isAuthHeader ? (
						<>
							<Link
								style={{
									color: theme?.theme.color,
								}}
								href="/create/service"
								className={style.header__create}
							>
								+ New API
							</Link>
							<div className={style.header__user}>
								<Link href="/profile">
									<Image className={style.header__user_avatar} alt="image" src={dio} placeholder="blur" />
								</Link>
							</div>
						</>
					) : (
						<div className={style.header__auth}>
							<Link href="/login" className={style.header__login}>
								Log In
							</Link>
							<Link href="/registration" className={style.header__sign}>
								Sign Up
							</Link>
						</div>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;

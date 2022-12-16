"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '../../logic/hooks/useRedux'
import { toggleTheme } from '../../logic/redux'
import style from '../../styles/header.module.scss'
import dio from '../../public/dio4.jpg'

const Header = () => {
    const dispatch = useAppDispatch()
    const isAuth = useAppSelector((state) => state.auth.isAuth)
    const { activeTheme, variant } = useAppSelector((state) => state.theme) // bad. lots of renderers
    // const activeTheme = useAppSelector((state) => state.theme.activeTheme) // right
    // const variant = useAppSelector((state) => state.theme.variant) // right

    const theme = {
        black: {
            color: '#fff',
            background: '#222',
            backgroundSecond: '#333',
            backgroundThree: '#454545'
        },
        white: {
            color: '#000',
            background: '#F5F5F5',
            backgroundSecond: '#F5F5F5',
            backgroundThree: '#e5e5e5'
        }
    }

    const toggleThemeColor = () => {
        if (activeTheme === "black") {
            return dispatch(toggleTheme(theme.white))
        }
        dispatch(toggleTheme(theme.black))
    }

    return (
        <header
            style={{
                backgroundColor: variant.backgroundSecond,
                color: variant.color,
            }}
            className={style.header}
        >
            <div className={style.header__container}>
                <div className={style.header__left}>
                    <Link className={style.header__logo} href="/hub">
                        ApiHub
                    </Link>
                    <span
                        onClick={() => toggleThemeColor()}
                        style={{
                            backgroundColor: activeTheme === 'black' ? '#454545' : '#e5e5e5',
                            justifyContent: activeTheme === 'black' ? 'start' : 'end'
                        }}
                        className={style.header__theme}
                    >
                        <span
                            className={style.header__theme_button}
                        ></span>
                    </span>
                </div>
                <input
                    style={{
                        backgroundColor: variant.backgroundThree,
                        color: variant.color,
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
                    {
                        isAuth ?
                            <div className={style.header__user}>
                                <Link href='/profile'>
                                    <Image className={style.header__user_avatar} alt="image" src={dio} placeholder="blur" />
                                </Link>
                            </div>
                            :
                            <div className={style.header__auth}>
                                <Link href="/login" className={style.header__login}>
                                    Log In
                                </Link>
                                <Link href="/registration" className={style.header__sign}>
                                    Sign Up
                                </Link>
                            </div>
                    }
                </div>
            </div>
        </header >
    )
}

export default Header
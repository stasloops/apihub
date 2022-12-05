"use client"

import Link from 'next/link'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../logic/hooks/useRedux'
import { toggleTheme } from '../../logic/redux/slices/themeSlice'
import style from '../../styles/header.module.scss'

const Header = () => {
    const dispatch = useAppDispatch()
    const { activeTheme, variant } = useAppSelector((state) => state.theme)

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

    console.log(activeTheme, variant);


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
                    <Link className={style.header__logo} href="/">
                        ApiHub
                    </Link>
                    <span
                        onClick={() => toggleThemeColor()}
                        style={{
                            backgroundColor: activeTheme === 'black' ? '#454545' : '#e5e5e5',
                            justifyContent: activeTheme === 'black' ? 'end' : 'start'
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
                        <div className={style.header__nav_item}>
                            API Hub
                        </div>
                        <div className={style.header__nav_item}>
                            My Apps
                        </div>
                        <div className={style.header__nav_item}>
                            My APIs
                        </div>
                    </nav>
                    <div className={style.header__auth}>
                        <Link className={style.header__login} href="/login">
                            Log In
                        </Link>
                        <Link className={style.header__sign} href="/registration">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
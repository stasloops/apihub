import Link from 'next/link'
import React from 'react'
import style from '../../styles/header.module.scss'

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.header__container}>
                <Link className={style.header__logo} href="/">
                    LOGO
                </Link>
                <div className={style.header__auth}>
                    <Link className={style.header__login} href="/login">
                        Log In
                    </Link>
                    <Link className={style.header__sign} href="/registration">
                        Sign Up
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header
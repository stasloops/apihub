"use client"

import axios from 'axios'
import Link from 'next/link'
import React, { useState } from 'react'
import { useAppSelector } from '../../logic/hooks/useRedux'
import style from '../../styles/registration.module.scss'

const Registration = () => {
    const { variant } = useAppSelector((state) => state.theme)
    console.log('render');

    const [value, setValue] = useState({ username: '', email: '', password: '', captcha: "captcha solution" })
    const [user, setUser] = useState<any>({})

    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue((prev) => ({ ...prev, email: e.target.value }))
    }
    const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue((prev) => ({ ...prev, password: e.target.value }))
    }
    const changeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue((prev) => ({ ...prev, username: e.target.value }))
    }

    const register = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (value.password.length < 20) {
            return null
        }

        try {
            const data = {
                email: value.email,
                password: value.password,
                captcha: value.captcha
            }
            const res = await axios.post(`https://apihub.translo.org/api/v1/users/register`, data)
            // const res = await axios.get('http://jservice.io/api/random?count=1')

            setUser(res.data)
        } catch (er) {
            console.log(er);
        }
    }

    return (
        <form
            style={{
                backgroundColor: variant.background,
                color: variant.color,
            }}
            className={style.sign}
        >
            <div className={style.sign__container}>
                <h1 className={style.sign__title}>SignUp</h1>
                <div className={style.sign__input_box}>
                    <label className={style.sign__label}>Username</label>
                    <input
                        placeholder='Type your username'
                        style={{
                            backgroundColor: variant.backgroundThree,
                            color: variant.color,
                        }}
                        className={style.sign__input}
                        value={value.username}
                        onChange={changeUsername}
                    />
                </div>
                <div className={style.sign__input_box}>
                    <label className={style.sign__label}>Email</label>
                    <input
                        placeholder='E-mail'
                        style={{
                            backgroundColor: variant.backgroundThree,
                            color: variant.color,
                        }}
                        className={style.sign__input}
                        value={value.email}
                        onChange={changeEmail}
                    />
                </div>
                <div className={style.sign__input_box}>
                    <label className={style.sign__label}>Password</label>
                    <input
                        placeholder='Password'
                        style={{
                            backgroundColor: variant.backgroundThree,
                            color: variant.color,
                        }}
                        className={style.sign__input}
                        value={value.password}
                        onChange={changePassword}
                    />
                </div>
                <button
                    className={style.sign__button}
                    onClick={register}
                >
                    SIGN UP
                </button>
                <span className={style.sign__swap}>
                    Already on ApiHub?
                    <Link className={style.sign__swap_link} href="/login">
                        Log in
                    </Link>
                </span>
                {
                    <div>
                        {user?.ok ? user?.ok : 'но'}
                    </div>
                }
            </div>
        </form>
    )
}

export default Registration
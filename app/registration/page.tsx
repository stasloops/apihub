"use client"

import axios from 'axios'
import Link from 'next/link'
import React, { useState } from 'react'
import { useGetUser } from '../../logic/hooks/useGetUser'
import { useAppSelector } from '../../logic/hooks/useRedux'
import { $request, API_URL } from '../../logic/request'
import style from '../../styles/registration.module.scss'

const Registration = () => {
    const { variant } = useAppSelector((state) => state.theme)
    const [value, setValue] = useState({ email: '', password: '', captcha: "captcha solution" })
    const { setUserId } = useGetUser()

    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue((prev) => ({ ...prev, email: e.target.value }))
    }
    const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue((prev) => ({ ...prev, password: e.target.value }))
    }

    const register = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        try {
            const data = {
                email: value.email,
                password: value.password,
                captcha: value.captcha
            }
            // const res = await $request.post(`/users/register`, data)
            const res = await fetch(`${API_URL}/users/register`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(data)
            })

            const transform: any = res.json()
            // res.data.user_id
            const userId: number = transform.user_id
            setUserId(userId)
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
            </div>
        </form>
    )
}

export default Registration
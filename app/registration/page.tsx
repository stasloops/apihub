"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useGetUser } from '../../logic/hooks/useGetUser'
import { useAppSelector } from '../../logic/hooks/useRedux'
import { $request } from '../../logic/request'
import style from '../../styles/registration.module.scss'

const Registration = () => {
    const { variant } = useAppSelector((state) => state.theme)
    const [value, setValue] = useState({ email: '', password: '', captcha: "captcha solution" })
    const { setUserId, setToken } = useGetUser()
    const router = useRouter()

    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue((prev) => ({ ...prev, email: e.target.value }))
    }
    const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue((prev) => ({ ...prev, password: e.target.value }))
    }

    const register = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        try {
            const body = {
                email: value.email,
                password: value.password,
                captcha: value.captcha
            }
            const res = await $request.post(`/users/register`, body)
            const iden = { user_id: res.data.user_id, token: res.data.token }

            setToken(iden.token)
            setUserId(iden.user_id)

            if (typeof window !== "undefined") {
                localStorage.setItem('token', JSON.stringify(iden.token))
            }
            
            router.push('/hub')
        } catch (e) {
            console.log(e);
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
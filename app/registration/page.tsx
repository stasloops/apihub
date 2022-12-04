"use client"

import axios from 'axios'
import React, { useState } from 'react'


const Registration = () => {
    const [user, setUser] = useState({})

    const register = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        try {
            const data = {
                email: "test@mail.ru",
                password: "Password2!",
                captcha: "captcha solution"
            }

            const res = await axios.post('http://135.181.24.29//api/v1/users/register', data)
            setUser(res.data)
        } catch (e) {
            console.log(e);
        }
    }


    return (
        <form>
            Registratio
            <button onClick={register}>
                SEND
            </button>
        </form>
    )
}

export default Registration
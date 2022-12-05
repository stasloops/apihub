"use client"

import Image from 'next/image'
import style from '../styles/home.module.css'
import dio from '../public/dio4.jpg'
import axios from 'axios'
import { useAppSelector } from '../logic/hooks/useRedux'

export default function Home() {
  const { activeTheme, variant } = useAppSelector((state) => state.theme)

  //   const register = async (e: React.MouseEvent<HTMLButtonElement>) => {
  //     e.preventDefault()
  //     try {
  //         const data = {
  //             email: "armanokka@mail.ru",
  //             password: "Password2!",
  //             captcha: "captcha solution"
  //         }

  //         const res = await axios.post(`http://135.181.24.29//api/v1/users/register`, data)
  //         console.log(res.data, 'ddd');

  //         // const res = await fetch(`http://135.181.24.29//api/v1/users/register`, {
  //         //     method: 'POST',
  //         //     headers: {
  //         //         'Content-Type': 'application/json'
  //         //     },
  //         //     body: JSON.stringify(data)
  //         // })
  //         // console.log(JSON.stringify(res));
  //         // console.log( res.json());

  //         // setUser(res)
  //     } catch (er) {
  //         console.log(er);
  //     }
  // }

  return (
    <div style={{backgroundColor: variant.background}}  className={style.app}>
      {/* <Image className={styles.image} alt="leeerob" src={dio} placeholder="blur" /> */}
      {/* <button onClick={(e) => register(e)}>Hello Fuck You</button>  */}
      <h1>Главная</h1>
    </div>
  )
}


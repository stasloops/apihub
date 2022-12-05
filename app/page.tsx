"use client"

import Image from 'next/image'
import style from '../styles/home.module.css'
import dio from '../public/dio4.jpg'
import axios from 'axios'
import { useAppSelector } from '../logic/hooks/useRedux'

export default function Home() {
  const { activeTheme, variant } = useAppSelector((state) => state.theme)

  
  return (
    <div style={{backgroundColor: variant.background, color: variant.color}} className={style.app}>
      {/* <Image className={style.image} alt="leeerob" src={dio} placeholder="blur" /> */}
      {/* <button onClick={(e) => register(e)}>Hello Fuck You</button>  */}
      <h1>Главная</h1>
    </div>
  )
}


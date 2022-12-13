"use client"

import { useEffect } from 'react'
import { useAppSelector } from '../logic/hooks/useRedux'
import style from '../styles/home.module.css'


export default function Home() {
  const { variant } = useAppSelector((state) => state.theme)


  useEffect(() => {
    window.localStorage.getItem('token')
  }, [])

  return (
    <div style={{ backgroundColor: variant.background, color: variant.color }} className={style.app}>

    </div>
  )
}


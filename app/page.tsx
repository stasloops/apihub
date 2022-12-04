import Image from 'next/image'
import style from '../styles/home.module.css'
import  dio from '../public/dio4.jpg'

export default function Home() {
  return (
    <div className={style.app}>
      {/* <Image className={styles.image} alt="leeerob" src={dio} placeholder="blur" />
      <h1>Hello Fuck You</h1> */}
    </div>
  )
}


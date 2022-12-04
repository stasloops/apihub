import { Montserrat } from '@next/font/google'
import Header from './components/header'
import '../styles/globals.css'

const font = Montserrat()

const theme = {
  black: {
    color: '#66ddf6',
    background: '#222',
    backgroundSecond: '#333'
  },
  white: {
    color: '#66ddf6',
    background: '#fff',
    backgroundSecond: '#fff'
  }
}

const selectTheme: string = "white"
const activeTheme = selectTheme === "black" ? theme.black : theme.white

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body style={{color: activeTheme.color, background: activeTheme.background}} className={font.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}

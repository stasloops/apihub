import { Red_Hat_Display } from '@next/font/google'
import Header from './(components)/header'
import '../styles/globals.css'
import Providers from './provider/Providers';

const font = Red_Hat_Display()

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html className={font.className}>
      <head />
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}

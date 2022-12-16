import { Roboto } from '@next/font/google'
import Header from './(components)/header'
import '../styles/globals.css'
import Providers from './(provider)/Providers';

const font = Roboto({weight: ["300", "500", "700"]})

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

import './globals.css'
import { Overpass } from 'next/font/google'

const overpass = Overpass({ weight: ['400','700'] ,subsets: ['latin'] })

export const metadata = {
  title: 'Rating',
  description: 'Rating simple component',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={overpass.className}>{children}</body>
    </html>
  )
}

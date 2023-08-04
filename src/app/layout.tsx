import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from "../components/Navbar"
import "./globals.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio | Muhammad Ali Khalid',
  description: 'Portfolio website for Student | Full-Stack developer | freelancer Muhammad Ali Khalid',
}

export default function RootLayout({children}:{children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth font-[Roboto]">
      <body>
        <div>
          <Navbar />
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}

import type { Metadata } from 'next'
import { Poppins } from "next/font/google"

import './globals.css'

import { cn } from "../lib/utils"
import Header from '@/components/shared/Header'
 
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Pune District Kabbadi Association',
  description: 'We host kabbadi matches in pune',
  icons: {
    icon: '/vercel.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background antialiased",
          poppins.variable
        )}><Header/>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}

import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Suspense } from 'react'

export const metadata = {
  title: 'WoohAI Event - Full Day Workshop',
  description: 'Learn the fundamentals of Artificial Intelligence with industry experts',
  keywords: 'AI, event, workshop, conference',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

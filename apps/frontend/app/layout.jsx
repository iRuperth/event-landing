import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from 'next-themes'

export const metadata = {
  title: 'WoohAI Event - Full Day Workshop',
  description: 'Learn the fundamentals of Artificial Intelligence with industry experts',
  keywords: 'AI, event, workshop, conference',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

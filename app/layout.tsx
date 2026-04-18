import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// Optimized font loading with CSS variables & display=swap to prevent CLS
const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
  preload: true,
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
  preload: false, // mono font is less critical
})

export const metadata: Metadata = {
  title: 'Jalak Palan | Full Stack & AI Developer',
  description: 'Full Stack & AI Developer crafting AI-powered platforms that elevate SaaS & Web Innovators',
  generator: 'Next.js',
}

import { ThemeProvider } from '@/components/theme-provider'
import { ThemeSwitcher } from '@/components/theme-switcher'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground" suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

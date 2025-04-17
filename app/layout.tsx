import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import {noto_sans_sc} from '@/components/fonts';

import '@mantine/core/styles.css'
import { ColorSchemeScript, createTheme, MantineProvider } from '@mantine/core'

import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'

const theme = createTheme({
        primaryColor: 'red',
        autoContrast: true 
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  title: 'zhaosanmusi',
  description: '曰 朝三而暮四 众狙皆怒 然则朝四而暮三 众狙皆悦',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head>
    <ColorSchemeScript/>
    </head>
      <body
        className={`${noto_sans_sc.className } text-base bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
      <MantineProvider theme={theme}>

        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="light"
        >

          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto w-full sm:max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
                {children}
                <Analytics />
              <Footer />
            </div>
          </div>

        </ThemeProvider>
       </MantineProvider>
       <SpeedInsights />
      </body>
    </html>
  )
}

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RJR Consultancy - Business Growth Experts in Delhi NCR',
  description: 'Performance-driven business growth consultancy helping local businesses in Delhi-NCR scale and thrive. Expert consultation, marketing, and growth strategies.',
  keywords: 'business consultancy, Delhi NCR, business growth, marketing, lead generation, sales funnel, Jeet Singh',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </head>
      <body className={inter.className}>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}

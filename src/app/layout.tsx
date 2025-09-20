import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Prime Tours and Travels - Your Gateway to Memorable Journeys',
  description: 'Prime Tours and Travels offers affordable and memorable travel experiences across Maharashtra and beyond. Book your next adventure with us today!',
  keywords: 'Prime Tours, travel agency, affordable travel, Maharashtra tours, memorable journeys, travel packages, car rental services',
  authors: [{ name: 'Prime Tours and Travels' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Prime Tours and Travels - Your Gateway to Memorable Journeys',
    description: 'Plan your dream trip with Prime Tours and Travels. Explore affordable travel packages and experience the best of Maharashtra and beyond.',
    url: 'https://yourwebsite.com',
    siteName: 'Prime Tours and Travels',
    images: [
      {
        url: 'https://example.com/path-to-your-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Prime Tours and Travels',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prime Tours and Travels - Your Gateway to Memorable Journeys',
    description: 'Plan your dream trip with Prime Tours and Travels. Explore affordable travel packages and experience the best of Maharashtra and beyond.',
    images: ['https://example.com/path-to-your-image.jpg'],
  },
  icons: {
    icon: '/assets/images/logo5.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://yourwebsite.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Prime Tours and Travels",
              "url": "https://yourwebsite.com",
              "logo": "https://example.com/path-to-logo.png",
              "description": "Prime Tours and Travels offers affordable and memorable travel experiences across Maharashtra and beyond.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Prime Street",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "postalCode": "400001",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9960669724",
                "contactType": "Customer Service"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

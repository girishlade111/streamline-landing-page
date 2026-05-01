import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"
import MouseMoveEffect from "@/components/mouse-move-effect"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://amanesoft.com"),
  title: {
    default: "Amane Soft | Cutting-Edge Software Solutions & Digital Innovation",
    template: "%s | Amane Soft",
  },
  description: "Amane Soft delivers innovative, high-performance software solutions for businesses of the future. Expert web development, mobile apps, and digital transformation services.",
  keywords: [
    "software development",
    "web development",
    "mobile app development",
    "digital transformation",
    "tech solutions",
    "business software",
    "app development company",
    "custom software",
    "SaaS development",
    "cloud solutions",
  ],
  authors: [{ name: "Amane Soft" }],
  creator: "Amane Soft",
  publisher: "Amane Soft",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amanesoft.com",
    siteName: "Amane Soft",
    title: "Amane Soft | Cutting-Edge Software Solutions",
    description: "Amane Soft delivers innovative, high-performance software solutions for businesses of the future.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amane Soft - Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amane Soft | Cutting-Edge Software Solutions",
    description: "Amane Soft delivers innovative, high-performance software solutions for businesses of the future.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "google-site-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <MouseMoveEffect />
        {children}
      </body>
    </html>
  )
}
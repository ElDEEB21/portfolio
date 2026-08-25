import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import Header from "@/components/header"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

const SITE_URL = "https://eldeeb21.github.io"
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ""

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}${BASE_PATH}`),
  title: "Abdulrahman Eldeeb — Python Developer",
  description:
    "Computer Science graduate and Codeforces Expert. Building production-ready RESTful APIs with Python, Django REST Framework, Docker, and TDD.",
  openGraph: {
    title: "Abdulrahman Eldeeb — Python Developer",
    description:
      "Computer Science graduate and Codeforces Expert. Building production-ready RESTful APIs with Python, Django REST Framework, Docker, and TDD.",
    url: "/",
    siteName: "Abdulrahman Eldeeb — Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Abdulrahman Eldeeb — Python Developer" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdulrahman Eldeeb — Python Developer",
    description:
      "Computer Science graduate and Codeforces Expert. Building production-ready RESTful APIs with Python, Django REST Framework, Docker, and TDD.",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-bg-primary text-fg min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 pt-20">
          {children}
        </div>
      </body>
    </html>
  )
}

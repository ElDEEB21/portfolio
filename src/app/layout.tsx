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

export const metadata: Metadata = {
  title: "Abdulrahman Eldeeb — Backend Developer",
  description:
    "Computer Science graduate and Codeforces Expert. Building production-ready RESTful APIs with Django, Docker, and TDD.",
  openGraph: {
    title: "Abdulrahman Eldeeb — Backend Developer",
    description:
      "Computer Science graduate and Codeforces Expert. Building production-ready RESTful APIs with Django, Docker, and TDD.",
    type: "website",
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

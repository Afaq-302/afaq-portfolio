import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Afaq Ahmad | Full Stack Web Developer",
  description: "Portfolio website of Afaq Ahmad, a Full Stack Web Developer with 4 years of experience",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

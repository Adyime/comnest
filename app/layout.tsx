import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { FaWhatsapp } from "react-icons/fa";
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "COMnEST - Your Trusted Communication Solutions Partner",
  description:
    "COMnEST is a premier technology solutions provider in NCR, India, offering end-to-end communication solutions tailored to businesses and individuals.",
    generator: 'Best Google service provider'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
          forcedTheme="light"
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
            <a
            href="https://wa.me/8368739866"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg 
            hover:bg-green-600 transition-all duration-300 flex items-center justify-center z-[9999]"
            aria-label="Chat on WhatsApp"
            >
          <FaWhatsapp className="w-7 h-7" />
          </a>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
/** types */
import type { Metadata } from "next"
import type Children from "types"

/** components */
import Header from "./components/Navbar/Header"
import Footer from "./components/Footer"

/** style */
import cn from "clsx"
import "./globals.css"
import { Inter } from "@next/font/google"
const inter = Inter({ subsets: ["latin"] })

/** metadata */
export const metadata: Metadata = {
    title: "WordPlay4Lyfe",
    description: "Graphic tees that play with words",
    viewport: "width=device-width, initial-scale=1",
    icons: {
        icon: [
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        ],
        apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
    },
    manifest: "/site.webmanifest",
}

/** content */
export default function RootLayout({ children }: Children) {
    return (
        <html lang="en" className={cn("bg-black text-base", inter.className)} data-theme="next">
            <head />
            <body
                style={{
                    backgroundImage: `
                        linear-gradient(25deg,
                        rgba(30,30,50,1) 0%,
                        rgba(0,0,0,1) 20%,
                        rgba(0,0,0,1) 80%,
                        rgba(20,50,70,1) 100%)
                    `,
                }}
                className={cn(
                    "relative flex min-h-screen flex-col overflow-x-hidden",
                    "bg-black bg-contain bg-fixed"
                )}
            >
                <Header />
                <main className={cn("container relative", "mx-auto space-y-12 px-6 py-12")}>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}

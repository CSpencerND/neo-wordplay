/** types */
import type { Metadata } from "next"
import type Children from "types"

/** components */
import Header from "./components/Navbar/Header"
import Footer from "./components/Footer"

/** style */
import clsx from "clsx"
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
        <html lang="en" className="text-base" data-theme="dark">
            <head />
            <body>
                <div
                    className={clsx(
                        inter.className,
                        "portrait:bg-[url('/assets/effects/blob-scene-haikei-blur-sm.svg')]",
                        "landscape:bg-[url('/assets/effects/blob-scene-haikei-blur-lg.svg')]",
                        "bg-cover bg-fixed bg-no-repeat",
                        "h-screen overflow-x-hidden bg-black"
                    )}
                >
                    <Header />
                    <main className="container mx-auto space-y-12 px-6 py-12">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}

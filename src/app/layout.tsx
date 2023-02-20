/** types */
import type Children from "types"

/** components */
import Header from "@/components/common/Navbar/Header"
import Footer from "@/components/common/Footer"

/** style */
import clsx from "clsx"
import "./globals.css"
import { Inter } from "@next/font/google"
const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: Children) {
    return (
        <html lang="en" className="text-base" data-theme="dark">
            <head />
            <body
                className={clsx(
                    inter.className,
                    "portrait:bg-[url('/assets/effects/blob-scene-haikei-blur-sm.svg')]",
                    "landscape:bg-[url('/assets/effects/blob-scene-haikei-blur-lg.svg')]",
                    "bg-neutral-focus",
                    "bg-cover bg-fixed bg-no-repeat"
                )}
            >
                <Header />
                <main className="container mx-auto space-y-12 px-6 py-12">{children}</main>
                <Footer />
            </body>
        </html>
    )
}

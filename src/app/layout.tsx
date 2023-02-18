/** types */
import type Children from "types"

/** components */
import Navbar from "@/components/common/Navbar/Navbar"

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
                    "bg-cover bg-center bg-no-repeat",
                    "bg-[url('/assets/effects/blob-scene-haikei-sm.svg')]",
                    "lg:bg-[url('/assets/effects/blob-scene-haikei.svg')]"
                )}
            >
                <Navbar />
                <main className="container mx-auto py-12">{children}</main>
            </body>
        </html>
    )
}

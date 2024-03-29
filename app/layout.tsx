import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import type Children from "types"

import { cn } from "./lib/utils"
import { Balsamiq_Sans } from "next/font/google"
import "./globals.css"

import { RootProvider } from "./lib/state"
import { getStorefrontProps } from "./lib/storefront"

import { Navbar } from "./components/navigation"
import { Footer } from "./components/footer"

import { logoMain, logoSquare } from "@/static"

const inter = Balsamiq_Sans({ subsets: ["latin"], weight: ["400", "700"] })

export async function generateMetadata(): Promise<Metadata> {
    const shop = await getStorefrontProps()

    return {
        title: shop.name,
        description: shop.brand?.shortDescription,
        viewport: "width=device-width, initial-scale=1",
        icons: {
            icon: [
                {
                    url: "/favicon-32x32.png" ?? "",
                    sizes: "32x32" ?? "",
                    type: "image/png" ?? "",
                },
                {
                    url: "/favicon-16x16.png" ?? "",
                    sizes: "16x16" ?? "",
                    type: "image/png" ?? "",
                },
            ],
            apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
        },
        manifest: "/site.webmanifest",
        themeColor: shop.brand?.colors.primary[0].background, // ios
    }
}

export default async function RootLayout({ children }: Children) {
    return (
        <html
            className={cn(inter.className, "overflow-x-hidden")}
            data-theme="nextDark"
            lang="en"
        >
            <body className="relative bg-base-300/60 text-sm sm:px-6">
                <RootProvider>
                    {/*@ts-expect-error Async Component*/}
                    <Navbar logo={logoMain} />
                    <main className="container relative mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6">
                        {children}
                    </main>
                    {/*@ts-expect-error Async Component*/}
                    <Footer logo={logoSquare} />
                </RootProvider>
            </body>
        </html>
    )
}

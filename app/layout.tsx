import { getCollections } from "@/lib/queries"
import "@total-typescript/ts-reset"

/** components */
import { CartProvider, ShopifyProvider } from "@/lib/providers"
import Footer from "./components/Footer"
import Header from "./components/Navbar/Header"

/** style */
import cn from "clsx"
import { Inter } from "next/font/google"
import "./globals.css"
const inter = Inter({ subsets: ["latin"] })

/** types */
import { Collection } from "@shopify/hydrogen-react/storefront-api-types"
import type { Metadata } from "next"
import type Children from "types"
import { storefront } from "./lib/queries"

type NavLinkData = {
    title: string
    href: string
    delay: string
}

const baseDelay = 300

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
    themeColor: "hsl(204, 55%, 5%)", // ios
}

/** content */
export default async function RootLayout({ children }: Children) {
    const collections = await getCollections()

    collections.unshift({
        title: "Collections Directory",
        handle: "collections",
    } as Collection)

    const linkData: NavLinkData[] = collections.map((c, i) => {
        return {
            title: c.title,
            href: `/collections/${c.handle}`,
            delay: `${baseDelay + i * 50}ms`,
        }
    })

    const { id, token, domain, version } = storefront

    return (
        <html
            lang="en"
            className={cn("bg-black text-base", inter.className)}
            data-theme="next"
        >
            <head />
            <body
                className={cn(
                    "relative min-h-screen",
                    "isolate overflow-x-hidden",
                    "flex flex-col bg-black"
                )}
                style={{
                    paddingBottom: "env(safe-area-inset-bottom)", // ios
                }}
            >
                <div
                    aria-hidden
                    style={{
                        backgroundImage: `
                        linear-gradient(25deg,
                        rgba(30,30,50,1) 0%,
                        rgba(0,0,0,1) 20%,
                        rgba(0,0,0,1) 80%,
                        rgba(20,50,70,1) 100%)
                    `,
                    }}
                    className="fixed -z-10 h-full w-full bg-center bg-no-repeat"
                />
                <ShopifyProvider
                    storefrontId={id}
                    storefrontToken={token}
                    storeDomain={domain}
                    storefrontApiVersion={version}
                    countryIsoCode="US"
                    languageIsoCode="EN"
                >
                    <CartProvider>
                        <Header links={linkData} />
                        <main className="container relative mx-auto space-y-12 px-6 py-12">
                            {children}
                        </main>
                    </CartProvider>
                </ShopifyProvider>
                <Footer />
            </body>
        </html>
    )
}

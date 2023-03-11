type NavLinkData = {
    title: string
    href: string
    delay: string
}

/** components */
import Link from "next/link"
import Image from "next/image"
import { NavMenu } from "./NavMenu"
import { Cart } from "./Cart"
import { Login } from "./Login"

/** utils */
import cn from "clsx"

/** assets */
import logo from "@/static/brand/wp4l.webp"

export default function Header() {
    const getLinkData = (): NavLinkData[] => {
        const linkData: Partial<NavLinkData>[] = [
            {
                title: "Collections Directory",
                href: "collections",
            },
            {
                title: "Staff Picks",
                href: "collections/staff-picks",
            },
            {
                title: "Summer '22",
                href: "collections/summer-22",
            },
            {
                title: "Mindset",
                href: "collections/mindset",
            },
            {
                title: "Creativity",
                href: "collections/creativity",
            },
            {
                title: "Lifestyle",
                href: "collections/lifestyle",
            },
            {
                title: "Full Catalog",
                href: "collections/full-catalog",
            },
        ]

        linkData[0].delay = "300ms"

        for (let i = 1; i < linkData.length; i++) {
            linkData[i].delay = `${300 + i * 50}ms`
        }

        return linkData as NavLinkData[]
    }

    const linkData = getLinkData()

    return (
        <header className={cn("sticky top-0 z-40", "before-blur-black")}>
            <nav className={cn("navbar", "isolate mx-auto max-w-7xl", "border-b border-base-200")}>
                <div className="navbar-start">
                    <Link href="/" className="btn-link btn hover:opacity-80">
                        <Image src={logo} alt="WordPlay4Lyfe" className="h-5/6 w-auto" />
                    </Link>
                </div>
                <div className="navbar-end">
                    <label className="btn-ghost btn-square btn">
                        <Cart set="curved" />
                    </label>
                    <label className="btn-ghost btn-square btn">
                        <Login set="curved" />
                    </label>
                    <NavMenu links={linkData} />
                </div>
            </nav>
        </header>
    )
}

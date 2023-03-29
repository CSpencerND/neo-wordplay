import Image from "next/image"
import Link from "next/link"
import ShoppingCart from "./Cart"
import UserLogin from "./Login"
import NavMenu from "./NavMenu"

import logo from "@/static/brand/wp4l.webp"

type NavLinkData = {
    title: string
    href: string
    delay: string
}

export default function Header({ links }: { links: NavLinkData[] }) {
    return (
        <header className="before-blur-black sticky top-0 z-40">
            <nav className="navbar isolate mx-auto max-w-7xl border-b border-base-200">
                <div className="navbar-start">
                    <Link
                        href="/"
                        className="btn-link btn hover:opacity-80"
                    >
                        <Image
                            src={logo}
                            alt="WordPlay4Lyfe"
                            className="h-5/6 w-auto"
                        />
                    </Link>
                </div>
                <div className="navbar-end relative">
                    <UserLogin />
                    <ShoppingCart />
                    <NavMenu links={links} />
                </div>
            </nav>
        </header>
    )
}

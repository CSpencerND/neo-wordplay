/** components */
import Link from "next/link"
import Image from "next/image"
// import { Hamburger } from "./Hamburger"
import { NavMenu } from "./NavMenu"
import { Cart } from "./Cart"
import { Login } from "./Login"

/** utils */
import cn from "clsx"

/** assets */
import logo from "@/static/brand/wp4l.webp"

export default function Header() {
    return (
        <header className={cn("sticky top-0 z-40", "before-blur-black")}>
            <nav className={cn("navbar", "mx-auto max-w-7xl isolate", "border-b border-base-200")}>
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
                    <NavMenu />
                </div>
            </nav>
        </header>
    )
}

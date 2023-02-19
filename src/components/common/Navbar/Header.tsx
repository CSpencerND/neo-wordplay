/** types */
import Children from "types"

/** components */
import Link from "next/link"
import Image from "next/image"
import { Hamburger } from "./Hamburger"
import { Cart } from "./Cart"
import { Login } from "./Login"

/** utils */
import cn from "clsx"

/** assets */
import logo from "@/static/brand/wp4l.webp"

/*********************************************************************************************/

export default function Header() {
    return (
        <header className="sticky top-0 z-40 text-primary-content">
            <nav
                className={cn(
                    "navbar",
                    "mx-auto max-w-7xl",
                    "bg-blur-200 border-b border-base-content/30"
                )}
            >
                <div className="navbar-start">
                    <Link href="/" className="btn-link btn hover:opacity-80">
                        <Image
                            src={logo}
                            alt="WordPlay4Lyfe"
                            className="h-full w-auto"
                        />
                    </Link>
                </div>
                <div className="navbar-end">
                    <label className="btn-ghost btn-square btn">
                        <Cart set="curved" />
                    </label>
                    <label className="btn-ghost btn-square btn">
                        <Login set="curved" />
                    </label>
                    <Hamburger />
                </div>
            </nav>
        </header>
    )
}

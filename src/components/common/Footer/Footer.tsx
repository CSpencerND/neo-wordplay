import { Instagram, Twitter, Facebook } from "react-feather"
import Link from "next/link"
import Image from "next/image"
import logo from "@/static/brand/wp4l.webp"
import cn from "clsx"

export default function Footer() {
    return (
        <footer className="container mx-auto space-y-6">
            <section className="footer px-6 max-md:footer-center">
                <div className="form-control">
                    <label className="label">
                        <span className="footer-title">Sign Up To Our Newsletter!</span>
                    </label>
                    <div className="relative">
                        <input
                            type="email"
                            inputMode="email"
                            placeholder="username@site.com"
                            className="input-bordered input h-8 w-full"
                        />
                        <button
                            className={cn(
                                "btn-sm btn",
                                "absolute top-0 right-0",
                                "rounded-l-none "
                            )}
                        >
                            Sub
                        </button>
                    </div>
                </div>
                <div className="md:place-self-center md:self-end md:justify-self-end">
                    <ul className="grid grid-flow-col">
                        <li>
                            <Link
                                href="https://www.instagram.com/word_play4lyfe/"
                                className="btn-ghost btn-square btn"
                            >
                                <Instagram />
                            </Link>
                        </li>
                        <li>
                            <Link href="" className="btn-ghost btn-square btn">
                                <Twitter />
                            </Link>
                        </li>
                        <li>
                            <Link href="" className="btn-ghost btn-square btn">
                                <Facebook />
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
            <section
                className={cn(
                    "footer",
                    "border-t border-base-200 py-6 px-2",
                    "max-md:footer-center"
                )}
            >
                <div className="grid-flow-col items-center">
                    <Link href="/" className="btn-link btn hover:opacity-80">
                        <Image src={logo} alt="WordPlay4Lyfe" className="h-full w-auto" />
                    </Link>
                    <p>Copyright © 2022 - All right reserved wordplay4lyfe</p>
                </div>
            </section>
        </footer>
    )
}

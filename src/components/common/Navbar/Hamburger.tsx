"use client"

/** components */
import Link from "next/link"
import { Transition } from "@headlessui/react"
import { Spiral as HamburgerIcon } from "hamburger-react"

/** utils */
import { useRouter } from "next/router"
import { ChangeEvent, useState } from "react"
import cn from "clsx"

export function Hamburger() {
    const [isShowing, setIsShowing] = useState<boolean>(false)

    return (
        <>
            <button
                id="menuToggle"
                className="btn-ghost btn-square btn z-50"
                onClick={() => setIsShowing((isShowing) => !isShowing)}
            >
                <HamburgerIcon
                    size={24}
                    distance="lg"
                    rounded
                    label="Toggle Menu"
                />
            </button>

            <Transition
                show={isShowing}
                className="absolute top-0 left-0 z-40"
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-[100vw]"
                enterTo="-translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="-translate-x-0"
                leaveTo="-translate-x-[100vw]"
            >
                {/* <label */}
                {/*     htmlFor="menuToggle" */}
                {/*     className="absolute top-0 left-0 h-screen w-screen" */}
                {/* /> */}
                <ul
                    id="navMenu"
                    tabIndex={0}
                    className={cn(
                        "menu",
                        "h-screen w-[80vw] p-4",
                        "bg-blur-200 border-r border-base-content/30 shadow-box"
                    )}
                >
                    <li>
                        <Link
                            // className={`${active && "bg-blue-500"}`}
                            href="/"
                        >
                            Account settings
                        </Link>
                    </li>
                    <li>
                        <Link
                            // className={`${active && "bg-blue-500"}`}
                            href="/"
                        >
                            Documentation
                        </Link>
                    </li>
                    <li>
                        <span className="opacity-75">
                            Invite a friend (coming soon!)
                        </span>
                    </li>
                </ul>
            </Transition>
        </>
    )
}

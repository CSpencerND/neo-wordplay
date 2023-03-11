"use client"

type NavLinkData = {
    title: string
    href: string
    delay: string
}

/** components */
import Link from "next/link"
import { Transition } from "@headlessui/react"
import { Spiral as HamburgerIcon } from "hamburger-react"

/** utils */
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import cn from "clsx"

export function NavMenu({ links }: { links: NavLinkData[] }) {
    const [isShowing, setIsShowing] = useState<boolean>(false)

    const pathname = usePathname()
    useEffect(() => {
        setIsShowing(false)
    }, [pathname])

    return (
        <>
            <button
                id="menuToggle"
                className="btn-ghost btn-square btn z-50"
                onClick={() => setIsShowing((isShowing) => !isShowing)}
            >
                <HamburgerIcon
                    toggled={isShowing}
                    size={24}
                    distance="lg"
                    rounded
                    label="Toggle Menu"
                />
            </button>

            <Transition show={isShowing}>
                <Transition.Child
                    className={cn(
                        "absolute top-0 left-0 z-40",
                        "flex h-screen flex-row",
                        "border-r border-base-200 bg-black/60"
                    )}
                    enter="transition ease-out duration-300 transform"
                    enterFrom="-translate-x-[100vw]"
                    enterTo="-translate-x-0"
                    leave="transition ease-out duration-300 transform"
                    leaveFrom="-translate-x-0"
                    leaveTo="-translate-x-[100vw]"
                >
                    <ul
                        id="navMenu"
                        tabIndex={0}
                        className={cn("menu self-center p-4", `w-[calc(100vw-1rem-58px)]`)}
                    >
                        {links.map(({ title, href, delay }, i) => {
                            return (
                                <Transition.Child
                                    as="li"
                                    key={i}
                                    enter={cn("transition-all ease-out")}
                                    enterFrom="opacity-0 -translate-x-6"
                                    enterTo="opacity-100 -translate-x-0"
                                    leave="transition-all"
                                    leaveFrom="opacity-100 -translate-x-0"
                                    leaveTo="opacity-0 -translate-x-6"
                                    style={{ transitionDelay: delay }}
                                >
                                    <Link
                                        className="font-bold"
                                        href={href}
                                        onClick={() => setIsShowing(false)}
                                    >
                                        {title}
                                    </Link>
                                </Transition.Child>
                            )
                        })}
                    </ul>
                </Transition.Child>
                <Transition.Child
                    as="label"
                    onClick={() => setIsShowing(false)}
                    className={cn(
                        "absolute top-0 right-0",
                        "h-screen w-screen",
                        "after-blur-clear",
                        "hover:cursor-pointer"
                    )}
                    enter="transition-opacity duration-75"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                />
            </Transition>
        </>
    )
}

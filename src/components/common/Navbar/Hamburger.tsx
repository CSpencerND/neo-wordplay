"use client"

/** components */
import Link from "next/link"
import { Transition } from "@headlessui/react"
import { Spiral as HamburgerIcon } from "hamburger-react"

/** utils */
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import cn from "clsx"

export function Hamburger() {
    const [isShowing, setIsShowing] = useState<boolean>(false)
    let delay = 100

    const pathname = usePathname()
    useEffect(() => {
        isShowing === true && setIsShowing(false)
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
                        "bg-blur-300 border-r border-base-200 shadow-box"
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
                        className={cn("menu self-center", "w-[80vw] p-4")}
                    >
                        {links.map(({ title, href }, i) => {
                            const delayClass: string = `delay-[${delay}ms]`
                            delay += 80

                            return (
                                <Transition.Child
                                    as="li"
                                    key={i}
                                    enter={cn(
                                        "transition ease-in duration-200 transform",
                                        delayClass
                                    )}
                                    enterFrom="-translate-x-[100vw]"
                                    enterTo="-translate-x-0"
                                    leave="transition ease-in duration-200 transform"
                                    leaveFrom="-translate-x-0"
                                    leaveTo="-translate-x-[100vw]"
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
                        "h-screen w-[20vw]",
                        "bg-blur-300 opacity-80",
                        "transition-all hover:cursor-pointer hover:opacity-40"
                    )}
                    enter="transition ease-out duration-300 transform"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                />
            </Transition>
        </>
    )
}

type NavLinkData = {
    title: string
    href: string
}

const links: NavLinkData[] = [
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
        href: "collections/catalog",
    },
]

"use client"

type NavLinkData = {
    title: string
    href: string
    delay: string
}

import { Dialog, Menu, Transition } from "@headlessui/react"
import { Spiral as HamburgerIcon } from "hamburger-react"
import Link from "next/link"

import { usePathname } from "next/navigation"
import { Fragment, useEffect, useState } from "react"

export default function NavMenu({ links }: { links: NavLinkData[] }) {
    const [isShowing, setIsShowing] = useState<boolean>(false)

    const pathname = usePathname()
    useEffect(() => {
        setIsShowing(false)
    }, [pathname])

    return (
        <>
            <div className="relative z-50">
                <button
                    id="menuToggle"
                    className="btn-ghost btn-square btn rounded-md"
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
            </div>

            <Transition.Root
                show={isShowing}
                as={Fragment}
            >
                <Dialog
                    as="div"
                    className="relative"
                    onClose={() => setIsShowing(false)}
                >
                    <Transition.Child
                        as="label"
                        enter="ease-out duration-300 delay-75"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-300 delay-75"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        className="bg-blur-clear fixed inset-0 z-40 mr-16 w-full"
                    />

                    <div className="fixed inset-0 z-40 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 left-0 flex w-full pr-16">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-out duration-300 delay-75"
                                    enterFrom="-translate-x-full"
                                    enterTo="-translate-x-0"
                                    leave="transform transition ease-in duration-150 delay-75"
                                    leaveFrom="-translate-x-0"
                                    leaveTo="-translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto h-screen w-full border-r border-base-100 bg-black/60">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300 delay-300"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave=""
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <button
                                                id="menuToggle"
                                                className="btn-ghost btn-square btn absolute top-2 -right-14 rounded-md"
                                                onClick={() =>
                                                    setIsShowing((isShowing) => !isShowing)
                                                }
                                            >
                                                <HamburgerIcon
                                                    toggled={isShowing}
                                                    size={24}
                                                    distance="lg"
                                                    rounded
                                                    label="Toggle Menu"
                                                />
                                            </button>
                                        </Transition.Child>
                                        <div className="flex h-full w-full items-center overflow-y-scroll shadow-xl">
                                            <Menu
                                                as="ul"
                                                id="navMenu"
                                                tabIndex={0}
                                                className="menu w-full p-4"
                                            >
                                                {links.map(({ title, href, delay }, i) => {
                                                    return (
                                                        <Transition.Child
                                                            as="li"
                                                            key={i}
                                                            enter="transition-all ease-out"
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
                                                                onClick={() =>
                                                                    setIsShowing(false)
                                                                }
                                                            >
                                                                {title}
                                                            </Link>
                                                        </Transition.Child>
                                                    )
                                                })}
                                            </Menu>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}

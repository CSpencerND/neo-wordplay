"use client"

/** components */
import Link from "next/link"
import { Transition } from "@headlessui/react"
import { Bag2 as CartIcon, ArrowRightSquare } from "react-iconly"

/** utils */
import { useCart, useCartLine, useShop, CartLineProvider } from "@/lib/shopifyContext"
import { useEffect, useState } from "react"
import cn from "clsx"

// type NavLinkData = {
//     title: string
//     href: string
//     delay: string
// }

export function Cart() {
    // const { cartCreate, status } = useCart()
    // useEffect(() => {
    //     cartCreate({})
    //     console.log(status)
    // }, [])

    const [isShowing, setIsShowing] = useState<boolean>(false)

    return (
        <>
            <button
                className="btn-ghost btn-square btn"
                onClick={() => setIsShowing((isShowing) => !isShowing)}
            >
                <CartIcon set="curved" />
            </button>

            <Transition show={isShowing}>
                <Transition.Child
                    className={cn(
                        "absolute top-0 right-0 z-50",
                        "flex h-screen min-w-[75vw] flex-row",
                        "border-r border-base-200 bg-black/60"
                    )}
                    enter="transition ease-out duration-300 transform"
                    enterFrom="translate-x-[100vw]"
                    enterTo="translate-x-0"
                    leave="transition ease-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-[100vw]"
                >
                    <div className="w-full">
                        <div className="bg-blur-300 w-full border-b border-b-base-100">
                            <div className="flex flex-row items-center justify-between p-4">
                                <h2 className="">In Your Bag</h2>
                                <button
                                    className={`
                                        btn-ghost btn-square btn-sm btn
                                        text-primary-content hover:bg-primary-focus
                                    `}
                                    onClick={() => setIsShowing(false)}
                                >
                                    <ArrowRightSquare />
                                </button>
                            </div>
                        </div>
                        <ul
                            id="navMenu"
                            tabIndex={0}
                            className="menu [&_*]:hover:none mt-4 "
                        >
                            {/* {links.map(({ title, href, delay }, i) => { */}
                            {/* return ( */}
                            <Transition.Child
                                as="li"
                                // key={i}
                                enter={cn("transition-all ease-out")}
                                enterFrom="opacity-0 translate-x-6"
                                enterTo="opacity-100 translate-x-0"
                                leave="transition-all"
                                leaveFrom="opacity-100 translate-x-0"
                                leaveTo="opacity-0 translate-x-6"
                                // style={{ transitionDelay: delay }}
                            >
                                <h2>Product</h2>
                                <h2>Product</h2>
                                <h2>Product</h2>
                                <h2>Product</h2>
                                <h2>Product</h2>
                                <h2>Product</h2>
                                {/* <Link */}
                                {/*     className="font-bold" */}
                                {/*     href={href} */}
                                {/*     onClick={() => setIsShowing(false)} */}
                                {/* > */}
                                {/*     {title} */}
                                {/* </Link> */}
                            </Transition.Child>
                            {/* ) */}
                            {/* })} */}
                        </ul>
                    </div>
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

"use client"

import { Dialog, Transition } from "@headlessui/react"
import Image from "next/image"
import Link from "next/link"
import { Fragment, useState } from "react"
import { ArrowRightSquare, Bag2 as CartIcon } from "react-iconly"

import { useCart, useCartLine, useShop } from "@/lib/hooks"
import { CartLineProvider } from "@/lib/providers"

import type { Dispatch, ReactNode, SetStateAction } from "react"

import temp from "@/static/brand/placeholder.webp"

const products = [
    {
        id: 1,
        name: "Throwback Hip Bag",
        href: "#",
        color: "Salmon",
        price: "$90.00",
        quantity: 1,
        imageSrc: temp,
        imageAlt:
            "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
    },
    {
        id: 2,
        name: "Medium Stuff Satchel",
        href: "#",
        color: "Blue",
        price: "$32.00",
        quantity: 1,
        imageSrc: temp,
        imageAlt:
            "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
    },
    // More products...
]

export function Cart() {
    const [isOpen, setOpen] = useState<boolean>(false)

    // const { status, totalQuantity, lines, cost: totalCost } = useCart()
    // const { cost, quantity, attributes, merchandise } = useCartLine()

    // useEffect(() => {
    // console.log(JSON.stringify({ status, cost, lines }, null, 2))
    // }, [status, lines, totalCost])

    const openCart = () => setOpen(true)
    const closeCart = () => setOpen(false)

    return (
        <>
            <button
                className="btn-ghost btn-square btn rounded-md"
                onClick={openCart}
            >
                <div className="indicator">
                    <CartIcon set="curved" />
                    <span className="badge-accent badge badge-sm indicator-item h-4 w-5">
                        9
                    </span>
                </div>
            </button>

            <CartWrapper
                isOpen={isOpen}
                setOpen={openCart}
            >
                <CartHeader closeCart={closeCart} />
                <div className="flex-1 overflow-y-auto py-2 px-4 sm:px-6">
                    <div className="">
                        <div className="flow-root">
                            <ul
                                role="list"
                                className="divide-y divide-base-100"
                            >
                                {products.map((product) => (
                                    <li
                                        key={product.id}
                                        className="flex py-6"
                                    >
                                        <figure className="bg-glass h-full w-1/4 flex-shrink-0 overflow-hidden rounded-md">
                                            <Image
                                                src={temp}
                                                alt={product.imageAlt}
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </figure>

                                        <div className="ml-4 flex flex-1 flex-col">
                                            <div>
                                                <div className="flex justify-between text-xs font-medium sm:text-sm">
                                                    <h3>
                                                        <a href={product.href}>
                                                            {product.name}
                                                        </a>
                                                    </h3>
                                                    <p className="ml-4">{product.price}</p>
                                                </div>
                                                <p className="mt-1 flex gap-1 text-xs sm:text-sm">
                                                    <span className="">{product.color}</span>
                                                    <span className="divider divider-horizontal m-0"></span>
                                                    <span>Size</span>
                                                </p>
                                            </div>
                                            <div className="flex flex-1 items-end justify-between text-xs sm:text-sm">
                                                <p className="">
                                                    <span>Qty </span>
                                                    <span>{product.quantity}</span>
                                                </p>

                                                <div className="flex">
                                                    <button
                                                        type="button"
                                                        className="font-medium text-secondary-content hover:text-opacity-80"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <CartFooter closeCart={closeCart} />
            </CartWrapper>
        </>
    )
}

type CartWrapperProps = {
    children: ReactNode
    isOpen: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}

function CartWrapper({ children, isOpen, setOpen }: CartWrapperProps) {
    return (
        <Transition.Root
            show={isOpen}
            as={Fragment}
        >
            <Dialog
                as="div"
                className="relative z-50"
                onClose={setOpen}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300 delay-75"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-300 delay-75"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="bg-blur-clear fixed inset-0 cursor-pointer transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-out duration-300 delay-75"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in duration-150 delay-75"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md border-l border-base-100 bg-black/60">
                                    <div className="flex h-full flex-col overflow-y-scroll shadow-xl">
                                        {children}
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

function CartHeader({ closeCart }: { closeCart: () => void }) {
    return (
        <header className="flex items-start justify-between border-b border-base-100 p-4">
            <Dialog.Title className="text-lg font-medium">In Your Bag</Dialog.Title>
            <div className="ml-3 flex h-7 items-center">
                <button
                    type="button"
                    className="btn-primary btn-square btn-sm btn"
                    onClick={closeCart}
                >
                    <span className="sr-only">Close panel</span>
                    <ArrowRightSquare
                        set="light"
                        aria-hidden="true"
                    />
                </button>
            </div>
        </header>
    )
}

function CartFooter({ closeCart }: { closeCart: () => void }) {
    return (
        <footer className="border-t border-base-100 py-6 px-4 sm:px-6">
            <div className="flex justify-between text-sm font-medium">
                <p>Subtotal</p>
                <p>$262.00</p>
            </div>
            <p className="mt-2 text-xs">Shipping and taxes calculated at checkout.</p>
            <div className="mt-6">
                <a
                    href="#"
                    className="btn-secondary btn-block btn"
                >
                    Checkout
                </a>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm">
                <p>
                    or
                    <button
                        type="button"
                        className="pl-2 font-medium text-primary-content hover:text-opacity-80"
                        onClick={closeCart}
                    >
                        Continue Shopping
                        <span aria-hidden="true">&rarr;</span>
                    </button>
                </p>
            </div>
        </footer>
    )
}

// export function Cart() {
//     const [isShowing, setIsShowing] = useState<boolean>(false)

//     const { status, totalQuantity, lines, cost: totalCost } = useCart()
//     const { cost, quantity, attributes, merchandise } = useCartLine()

//     useEffect(() => {
//         // console.log(JSON.stringify({ status, cost, lines }, null, 2))
//     }, [status, lines, totalCost])

//     return (
//         <>
//             <button
//                 className="btn-ghost btn-square btn"
//                 onClick={() => setIsShowing((isShowing) => !isShowing)}
//             >
//                 <div className="indicator">
//                     <CartIcon set="curved" />
//                     <span className="badge-accent badge badge-sm indicator-item h-4 w-5">
//                         {totalQuantity}
//                     </span>
//                 </div>
//             </button>

//             <Transition show={isShowing}>
//                 <Transition.Child
//                     className={cn(
//                         "absolute top-0 right-0 z-50",
//                         "flex h-screen min-w-[75vw] flex-row",
//                         "border-r border-base-200 bg-black/60"
//                     )}
//                     enter="transition ease-out duration-300 transform"
//                     enterFrom="translate-x-[100vw]"
//                     enterTo="translate-x-0"
//                     leave="transition ease-out duration-300 transform"
//                     leaveFrom="translate-x-0"
//                     leaveTo="translate-x-[100vw]"
//                 >
//                     <div className="w-full">
//                         <header className="bg-blur-300 w-full border-b border-b-base-100">
//                             <div className="flex flex-row items-center justify-between p-4">
//                                 <h2 className="">In Your Bag</h2>
//                                 <button
//                                     className={`
//                                         btn-ghost btn-square btn-sm btn
//                                         text-primary-content hover:bg-primary-focus
//                                     `}
//                                     onClick={() => setIsShowing(false)}
//                                 >
//                                     <ArrowRightSquare />
//                                 </button>
//                             </div>
//                         </header>
//                         <ul
//                             id="navMenu"
//                             tabIndex={0}
//                             className="menu mt-4 [&_*]:hover:cursor-default [&_*]:hover:bg-inherit"
//                         >
//                             {lines?.map((line) => {
//                                 if (!line) return
//                                 return (
//                                     <CartLineProvider
//                                         key={line.id}
//                                         line={line}
//                                     >
//                                         <Transition.Child
//                                             as="li"
//                                             // key={i}
//                                             enter={cn("transition-all ease-out")}
//                                             enterFrom="opacity-0 translate-x-6"
//                                             enterTo="opacity-100 translate-x-0"
//                                             leave="transition-all"
//                                             leaveFrom="opacity-100 translate-x-0"
//                                             leaveTo="opacity-0 translate-x-6"
//                                             // style={{ transitionDelay: delay }}
//                                         >
//                                         </Transition.Child>
//                                     </CartLineProvider>
//                                 )
//                             })}
//                         </ul>
//                         <footer></footer>
//                     </div>
//                 </Transition.Child>
//                 <Transition.Child
//                     as="label"
//                     onClick={() => setIsShowing(false)}
//                     className={cn(
//                         "absolute top-0 right-0",
//                         "h-screen w-screen",
//                         "after-blur-clear",
//                         "hover:cursor-pointer"
//                     )}
//                     enter="transition-opacity duration-75"
//                     enterFrom="opacity-0"
//                     enterTo="opacity-100"
//                     leave="transition-opacity duration-150"
//                     leaveFrom="opacity-100"
//                     leaveTo="opacity-0"
//                 />
//             </Transition>
//         </>
//     )
// }

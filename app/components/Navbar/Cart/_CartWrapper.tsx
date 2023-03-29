"use client"

import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"
import useCartStore from "./CartStore.zustand"

export default function CartWrapper({ children }: { children: React.ReactNode }) {
    const isCartOpen = useCartStore((s) => s.isCartOpen)
    const setCartOpen = useCartStore((s) => s.setCartOpen)

    return (
        <Transition.Root
            show={isCartOpen}
            as={Fragment}
        >
            <Dialog
                as="div"
                className="relative z-50"
                onClose={setCartOpen}
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

"use client"

import { Popover, Transition } from "@headlessui/react"
import { Fragment } from "react"

import { useUpdateEffect } from "@react-hookz/web"
import { CartProvider as ShopifyCartProvider } from "@shopify/hydrogen-react"
import { create } from "zustand"

import Children from "types"

type NotificationStore = {
    message: string
    shown: boolean
    showNotification: (message: string) => void
    hideNotification: () => void
}

const useNotification = create<NotificationStore>()((set) => ({
    message: "",
    shown: false,
    showNotification: (messageText: string) =>
        set({
            message: messageText,
            shown: true,
        }),
    hideNotification: () =>
        set({
            shown: false,
        }),
}))

export function CartProvider({ children }: Children) {
    const showNotification = useNotification((s) => s.showNotification)

    const onStart = "Cart updating..."

    return (
        <ShopifyCartProvider
            onLineAdd={() => showNotification(onStart)}
            onLineRemove={() => showNotification(onStart)}
            onLineUpdate={() => showNotification(onStart)}
            onLineAddComplete={() => showNotification("Item added to cart")}
            onLineRemoveComplete={() => showNotification("Item removed from cart")}
            onLineUpdateComplete={() => showNotification("Item updated in cart")}
        >
            <Notification />
            {children}
        </ShopifyCartProvider>
    )
}

function Notification() {
    const message = useNotification((s) => s.message)
    const shown = useNotification((s) => s.shown)
    const hideNotification = useNotification((s) => s.hideNotification)

    useUpdateEffect(() => {
        if (shown === false) return
        setTimeout(() => {
            hideNotification()
        }, 3000)
    }, [shown])

    return (
        <Transition
            as={Fragment}
            appear
            show={shown}
            unmount={true}
            enter="transition ease-in duration-150"
            enterFrom="translate-x-[110%]"
            enterTo="translate-x-0"
            leave="transition opacity ease-out duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <Popover className="toast-end toast toast-top z-[99] m-4 overflow-hidden rounded-xl p-0">
                <Popover.Panel
                    static
                    className="bg-blur-300 alert border border-base-100 font-semibold text-info"
                >
                    <p className="text-sm">{message}</p>
                </Popover.Panel>
            </Popover>
        </Transition>
    )
}

"use client"

import CloseButton from "@/components/CloseButton"
import { Dialog } from "@headlessui/react"
import useCartStore from "./CartStore.zustand"

export default function CartHeader() {
    const setCartClose = useCartStore((s) => s.setCartClose)
    return (
        <header className="flex items-center justify-between border-b border-base-100 px-4 py-3">
            <Dialog.Title className="text-lg font-medium">In Your Bag</Dialog.Title>
            <CloseButton
                icon="arrowRight"
                onClick={setCartClose}
            />
        </header>
    )
}

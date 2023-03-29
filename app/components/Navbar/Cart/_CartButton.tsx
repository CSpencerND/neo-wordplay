"use client"

import { useCart } from "@shopify/hydrogen-react"
import { Bag2 as CartIcon } from "react-iconly"
import useCartStore from "./CartStore.zustand"

export default function CartButton() {
    const setCartOpen = useCartStore((s) => s.setCartOpen)
    const { totalQuantity } = useCart()

    return (
        <button
            className="btn-ghost btn-square btn rounded-md"
            onClick={setCartOpen}
        >
            <div className="indicator">
                <CartIcon set="light" />
                <span className="badge-accent badge badge-sm indicator-item h-4 w-5">
                    {totalQuantity}
                </span>
            </div>
        </button>
    )
}

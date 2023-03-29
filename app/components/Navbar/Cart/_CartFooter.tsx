"use client"

import { useCart } from "@shopify/hydrogen-react"
import useCartStore from "./CartStore.zustand"

export default function CartFooter() {
    const setCartClose = useCartStore((s) => s.setCartClose)
    const { cost } = useCart()

    return (
        <footer className="border-t border-base-100 py-6 px-4 sm:px-6">
            <div className="flex justify-between text-sm font-medium">
                <p>
                    Subtotal
                    {cost?.subtotalAmount?.amount}
                </p>
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
                        onClick={setCartClose}
                    >
                        Continue Shopping
                        <span aria-hidden="true">&rarr;</span>
                    </button>
                </p>
            </div>
        </footer>
    )
}

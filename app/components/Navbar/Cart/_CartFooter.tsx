"use client"

import { CartCost, CartCheckoutButton, /* useCartLine */ } from "@shopify/hydrogen-react"
import useCartStore from "./CartStore.zustand"

export default function CartFooter() {
    const setCartClose = useCartStore((s) => s.setCartClose)
    // const { quantity, cost } = useCartLine()

    return (
        <footer className="border-t border-base-100 py-6 px-4 sm:px-6">
            <div className="flex justify-between text-sm font-medium">
                <p className="flex w-full justify-between">
                    Subtotal
                    <CartCost
                        as="span"
                        amountType="subtotal"
                    />
                </p>
            </div>
            <p className="mt-2 text-xs">Shipping and taxes calculated at checkout.</p>

            <CartCheckoutButton className="btn-secondary btn-block btn-sm btn mt-6">
                Checkout
            </CartCheckoutButton>

            <div className="mt-6 flex justify-center text-center text-sm">
                <p>
                    or
                    <button
                        type="button"
                        className="pl-2 font-medium text-primary-content hover:text-opacity-80"
                        onClick={setCartClose}
                    >
                        Continue Shopping <span aria-hidden="true">&rarr;</span>
                    </button>
                </p>
            </div>
        </footer>
    )
}

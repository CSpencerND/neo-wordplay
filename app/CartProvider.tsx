"use client"

import { CartProvider as ShopifyCartProvider } from "@shopify/hydrogen-react"
import Children from "types"

export default function CartProvider({ children }: Children) {
    
    return (
        <ShopifyCartProvider
            onLineAdd={() => alert("New item added to cart")}
            onLineRemove={() => alert("Item removed from cart")}
            onLineUpdate={() => alert("Item updated in cart")}

            onLineAddComplete={() => alert("New item added to cart")}
            onLineRemoveComplete={() => alert("Item removed from cart")}
            onLineUpdateComplete={() => alert("Item updated in cart")}
        >
            {children}
        </ShopifyCartProvider>
    )
}

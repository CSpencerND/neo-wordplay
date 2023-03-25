"use client"

import { useRef } from "react"
import { createProductStore, ProductContext } from "../_ProductStore.zustand"

import type { PropsWithChildren } from "react"
import type { ProductProps, ProductStore } from "../ProductStore"
import { ProductProvider as ShopifyProductProvider } from "@shopify/hydrogen-react"

export type ProductProviderProps = PropsWithChildren<ProductProps>

export default function ProductProvider({ children, ...props }: ProductProviderProps) {
    const storeRef = useRef<ProductStore>()

    if (!storeRef.current) {
        storeRef.current = createProductStore(props)
    }

    return (
        <ShopifyProductProvider data={props.product}>
            <ProductContext.Provider value={storeRef.current}>
                {children}
            </ProductContext.Provider>
        </ShopifyProductProvider>
    )
}

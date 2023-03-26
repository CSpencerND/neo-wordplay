"use client"

import { useRef } from "react"
import { createProductStore, ProductContext } from "../_ProductStore.zustand"

import type { ProductProviderProps, ProductStore } from "@/lib/ProductStore"

export default function ProductProvider({ children, ...props }: ProductProviderProps) {
    const storeRef = useRef<ProductStore>()

    if (!storeRef.current) {
        storeRef.current = createProductStore(props)
    }

    return (
        <ProductContext.Provider value={storeRef.current}>
            {children}
        </ProductContext.Provider>
    )
}

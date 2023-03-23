"use client"

import { useContext } from "react"
import { useStore } from "zustand"
import { ProductContext } from "../_ProductStore.zustand"
import { type ProductState } from "../ProductStore"

export default function useProduct<T>(
    selector: (state: ProductState) => T,
    equalityFn?: (left: T, right: T) => boolean
): T {
    const store = useContext(ProductContext)
    if (!store) {
        throw new Error("Missing ProductContext.Provider in the tree!")
    }
    return useStore(store, selector, equalityFn)
}

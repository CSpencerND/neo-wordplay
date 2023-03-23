"use client"

import { createContext } from "react"
import { createStore } from "zustand"

import type { Image, Product } from "@shopify/hydrogen-react/storefront-api-types"
import type { ProductState, ProductProps } from "./ProductStore"
export type ProductStore = ReturnType<typeof createProductStore>

export const createProductStore = (initProps?: Partial<ProductProps>) => {
    const DEFAULT_PROPS: ProductProps = {
        product: {} as Product,
        currentImage: {} as Image,
        isModalOpen: false,
    }

    return createStore<ProductState>()((set) => ({
        ...DEFAULT_PROPS,
        ...initProps,
        setCurrentImage: () => set((state) => ({ currentImage: state.currentImage })),
        setModalOpen: () => set((state) => ({ isModalOpen: state.isModalOpen })),
        setModalClose: () => set((state) => ({ isModalOpen: state.isModalOpen })),
    }))
}

export const ProductContext = createContext<ProductStore | null>(null)

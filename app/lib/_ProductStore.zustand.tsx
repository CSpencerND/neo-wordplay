"use client"

import { createContext } from "react"
import { createStore } from "zustand"

import type { Image, Product } from "@shopify/hydrogen-react/storefront-api-types"
import type { ProductState, ProductProps } from "./ProductStore"
export type ProductStore = ReturnType<typeof createProductStore>

export const createProductStore = (initProps?: Partial<ProductProps>) => {
    const DEFAULT_PROPS: ProductProps = {
        product: {} as Product,
        images: [{}] as Image[],
        currentImage: {} as Image,
        isModalOpen: false,
        selectedColor: "",
        colorOptions: [""]
    }

    return createStore<ProductState>()((set) => ({
        ...DEFAULT_PROPS,
        ...initProps,
        setCurrentImage: (i) => set((state) => ({ currentImage: state.images[i] })),
        setSelectedColor: (color) => set(() => ({ selectedColor: color })),
        setModalOpen: () => set((state) => ({ isModalOpen: state.isModalOpen })),
        setModalClose: () => set((state) => ({ isModalOpen: state.isModalOpen })),
        // setImageByIndex: () => set((state) => ({ currentImage: state.currentImage })),
    }))
}

export const ProductContext = createContext<ProductStore | null>(null)

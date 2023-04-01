"use client"

import nullImage from "@/static"
import { createContext } from "react"
import { createStore } from "zustand"

import type { Image, Product } from "@shopify/hydrogen-react/storefront-api-types"
import type { NullImage, ProductState, ProductProps } from "./ProductStore"

const NULL_IMAGE: NullImage = {
    altText: "placeholder",
    width: "1024",
    height: "1024",
    src: nullImage,
    id: "placeholder",
}

export const createProductStore = (initProps?: Partial<ProductProps>) => {
    const DEFAULT_PROPS: ProductProps = {
        product: {} as Product,
        images: [{}] as Image[],
        currentImage: NULL_IMAGE,
        isModalOpen: false,
        selectedColor: "",
        colorOptions: [""],
        hexCodes: [""],
        selectedSize: "",
    }

    return createStore<ProductState>()((set) => ({
        ...DEFAULT_PROPS,
        ...initProps,
        setCurrentImage: (i) => set((state) => ({ currentImage: state.images[i] })),
        setSelectedColor: (color) => set(() => ({ selectedColor: color })),
        setModalOpen: () => set(() => ({ isModalOpen: true })),
        setModalClose: () => set(() => ({ isModalOpen: false })),
        setSelectedSize: (size) => set(() => ({ selectedSize: size })),
    }))
}

export type ProductStore = ReturnType<typeof createProductStore>
export const ProductContext = createContext<ProductStore | null>(null)

import type { Image, Product } from "@shopify/hydrogen-react/storefront-api-types"
import type { PropsWithChildren } from "react"

export type ImageProps = {
    images: Image[]
    currentImage: Image
}

export type ImageState = ImageProps & {
    setCurrentImage: (i: number) => void
}

export type ModalProps = {
    isModalOpen: boolean
}

export type ModalState = ModalProps & {
    setModalOpen: () => void
    setModalClose: () => void
}

export type SwatchProps = {
    selectedColor?: string
    colorOptions?: string[]
    hexCodes?: string[]
}

export type SwatchState = SwatchProps & {
    setSelectedColor: (color: string) => void
}

export type ProductProps = PropsWithChildren<ImageProps & ModalProps & SwatchProps> & {
    product: Partial<Product>
}

export type ProductState = ProductProps & ImageState & ModalState & SwatchState

export type ProductProviderProps = PropsWithChildren<ProductProps>

export type { ProductStore } from "./ProductStore.zustand"

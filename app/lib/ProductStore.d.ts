import type { Image, Product } from "@shopify/hydrogen-react/storefront-api-types"
import type { ReactNode } from "react"
import type { Transition } from "@headlessui/react"

type ImageProps = {
    images: Image[]
    currentImage: Image
}

type ImageState = ImageProps & {
    setCurrentImage: (i: number) => void
}

type ModalProps = {
    isModalOpen: boolean
}

type ModalState = ModalProps & {
    setModalOpen: () => void
    setModalClose: () => void
}

type SwatchProps = {
    selectedColor: string
    colorOptions: string[]
}

type SwatchState = SwatchProps & {
    setSelectedColor: (color: string) => void
}

export type ProductProps = ImageProps & ModalProps & SwatchProps & {
    children?: ReactNode
    product: Partial<Product>
} // prettier-ignore

export type ProductState = ProductProps & ImageState & ModalState & SwatchState

export type { ProductStore } from "./ProductStore.zustand"
export type { ProductProviderProps } from "./providers/ProductProvider"

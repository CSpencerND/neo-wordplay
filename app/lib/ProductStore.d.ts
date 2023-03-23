import type { Image, Product } from "@shopify/hydrogen-react/storefront-api-types"
import type { ReactNode } from "react"
import type {Transition} from "@headlessui/react"

type ImageProps = {
    currentImage: Image
}

type ImageState = ImageProps & {
    setCurrentImage: (image: Image) => void
}

type ModalProps = {
    isModalOpen: boolean
}

type ModalState = ModalProps & {
    setModalOpen: () => void
    setModalClose: () => void
}

export type ProductProps = ImageProps & ModalProps & {
    children?: ReactNode
    product: Partial<Product>
} // prettier-ignore

export type ProductState = ProductProps & ImageState & ModalState

export type { ProductStore } from "./ProductStore.zustand"

declare function setCurrentImage(image: Image): Dispatch<SetStateAction<Image>>
declare function setModalOpen(): Dispatch<SetStateAction<boolean>>
declare function setModalClose(): Dispatch<SetStateAction<boolean>>

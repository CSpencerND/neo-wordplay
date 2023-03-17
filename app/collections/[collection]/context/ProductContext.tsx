"use client"

import { createContext, useContext, useCallback, useMemo, useReducer, useEffect } from "react"
import {
    ProductProvider as ShopifyProductProvider,
    ProductPrice,
} from "@shopify/hydrogen-react"
import { useProduct as useShopifyProduct, flattenConnection } from "@shopify/hydrogen-react"
import { sanitize } from "dompurify"

import type { Image, Maybe, Product } from "@shopify/hydrogen-react/storefront-api-types"
import type { ReactElement, ReactNode } from "react"

type ProductProviderProps = {
    children: ReactNode
    product: Partial<Product>
}

type Info = {
    id: string
    title: string
    handle: string
    description: string
}

type ProductState = {
    isOpen: boolean
    isLoading: boolean
    currentImage: Maybe<Image>
    sanitizedDescription: string
    selectedColor: string
    selectedSize: string
}

type ExtendedProviderProps = {
    children: ReactNode
    info: Info
    images: Image[]
    hexCodes: string[]
}

const ACTION = {
    OPEN_MODAL: "OpenModal",
    CLOSE_MODAL: "CloseModal",
    SET_IMAGE: "SetImage",
    SET_LOADING: "SetLoading",
    SANITIZE: "Sanitize",
    SELECT_COLOR: "SelectColor",
    SELECT_SIZE: "SelectSize",
} as const

type Action = (typeof ACTION)[keyof typeof ACTION]

type ReducerAction = {
    type: Action
    imagePayload?: Image
    descriptionPayload?: string
    colorPayload?: string
    sizePayload?: string
}

const initialReducerState: ProductState = {
    isOpen: false,
    isLoading: false,
    currentImage: null,
    sanitizedDescription: "",
    selectedColor: "",
    selectedSize: "",
}

const inititalProductState = {
    ...initialReducerState,
    info: {} as Info,
    images: [] as Image[],
    hexCodes: [] as string[],
    colorOptions: [] as string[],
    sizeOptions: [] as string[],
    sizeText: {} as { [size: string]: string },
    openModal: () => {},
    closeModal: () => {},
    changeImage: (i: number) => {
        i
    },
    setSelectedColor: (color: string) => {
        color
    },
    setSelectedSize: (size: string) => {
        size
    },
}

const ProductContext = createContext<typeof inititalProductState>(inititalProductState)

const reducer = (state: ProductState, action: ReducerAction): ProductState => {
    switch (action.type) {
        case ACTION.OPEN_MODAL:
            return { ...state, isOpen: true }

        case ACTION.CLOSE_MODAL:
            return { ...state, isOpen: false }

        case ACTION.SET_LOADING:
            return { ...state, isLoading: true }

        case ACTION.SET_IMAGE:
            return { ...state, currentImage: action.imagePayload ?? null }

        case ACTION.SANITIZE:
            return { ...state, sanitizedDescription: action.descriptionPayload ?? "" }

        case ACTION.SELECT_COLOR:
            return { ...state, selectedColor: action.colorPayload ?? "" }

        case ACTION.SELECT_SIZE:
            return { ...state, selectedSize: action.sizePayload ?? "" }

        default:
            throw new Error()
    }
}

function ExtendedProductProvider({
    children,
    info,
    images,
    hexCodes,
}: ExtendedProviderProps): ReactElement {
    const [
        { currentImage, sanitizedDescription, isOpen, isLoading, selectedSize, selectedColor },
        dispatch,
    ] = useReducer(reducer, initialReducerState)

    const { variants, options, setSelectedOption } = useShopifyProduct()
    const colorOptions = options!.find((option) => option!.name === "Color")!.values as string[]
    const sizeOptions = options!.find((option) => option!.name === "Size")!.values as string[]
    const sizeText: { [size: string]: string } = useMemo(
        () => ({
            XS: "XS",
            S: "S",
            M: "M",
            L: "L",
            XL: "XL",
            "2XL": "2X",
            "3XL": "3X",
            "4XL": "4X",
            "5XL": "5X",
        }),
        []
    )

    const setSelectedSize = useCallback((size: string) => {
        dispatch({ type: ACTION.SELECT_SIZE, sizePayload: size })
        setSelectedOption("Size", size)
    }, [])

    const setSelectedColor = useCallback((color: string) => {
        dispatch({ type: ACTION.SELECT_COLOR, colorPayload: color })
        setSelectedOption("Color", color)
    }, [])

    const openModal = useCallback(() => dispatch({ type: ACTION.OPEN_MODAL }), [])

    const closeModal = useCallback(() => dispatch({ type: ACTION.CLOSE_MODAL }), [])

    const changeImage = useCallback(
        (i: number) => {
            if (currentImage === images[i]) return
            if (images.length < 2) return

            dispatch({ type: ACTION.SET_IMAGE, imagePayload: {} as Image })
            dispatch({ type: ACTION.SET_LOADING })
            dispatch({ type: ACTION.SET_IMAGE, imagePayload: images[i] })
        },
        [images] // eslint-disable-line react-hooks/exhaustive-deps
    )

    useEffect(() => {
        dispatch({ type: ACTION.SET_IMAGE, imagePayload: images[0] })
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        dispatch({ type: ACTION.SELECT_COLOR, colorPayload: colorOptions[0] })
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        dispatch({ type: ACTION.SELECT_SIZE, sizePayload: sizeOptions[0] })
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        const desc = sanitize(info.description)
        dispatch({ type: ACTION.SANITIZE, descriptionPayload: desc })
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const value = {
        currentImage,
        isOpen,
        isLoading,
        colorOptions,
        sizeOptions,
        sizeText,
        setSelectedSize,
        selectedSize,
        selectedColor,
        setSelectedColor,
        info,
        images,
        hexCodes,
        sanitizedDescription,
        openModal,
        closeModal,
        changeImage,
    }

    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}

export function ProductProvider({ children, product }: ProductProviderProps) {
    const { id, title, handle, images, descriptionHtml, metafield } = product

    const info = useMemo(
        () =>
            ({
                id,
                title,
                handle,
                description: descriptionHtml,
            } as Info),
        [id, title, handle, descriptionHtml]
    )
    const imageNodes = useMemo(() => flattenConnection(images), [images])
    const hexCodes = useMemo(() => JSON.parse(metafield!.value), [metafield])

    return (
        <ShopifyProductProvider data={product}>
            <ExtendedProductProvider
                info={info}
                images={imageNodes}
                hexCodes={hexCodes}
            >
                {children}
            </ExtendedProductProvider>
        </ShopifyProductProvider>
    )
}

export default function useProduct() {
    const context = useContext(ProductContext)
    if (!context) {
        throw new Error(`'useProduct' must be a child of <ProductProvider />`)
    }
    return context
}

export { ProductPrice }

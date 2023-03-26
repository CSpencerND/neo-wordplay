"use client"

import type { ProductProps } from "@/lib/ProductStore"
import { ShopifyProductProvider } from "@/lib/providers"
import ProductProvider from "@/lib/providers/ProductProvider"
import type { ProductOption } from "@shopify/hydrogen-react/storefront-api-types"
import ProductModal from "../Modal/ProductModal"
import ProductLabel from "../ProductLabel"
import Swatch from "../Swatch"

function ProductWrapper({ ...initProviderProps }: ProductProps) {
    const product = initProviderProps.product
    return (
        <ShopifyProductProvider data={product}>
            <ProductInner {...initProviderProps} />
        </ShopifyProductProvider>
    )
}

function ProductInner({ ...initProviderProps }: ProductProps) {
    const { options, id } = initProviderProps.product as {
        options: ProductOption[]
        id: string
    }

    const colorOptions = options.find((option) => option.name === "Color")!.values
    const sizeOptions = options.find((option) => option.name === "Size")!.values

    const selectedColor = colorOptions[0]
    const selectedSize = sizeOptions[0]

    return (
        <ProductProvider
            {...{
                ...initProviderProps,
                colorOptions,
                selectedColor,
                sizeOptions,
                selectedSize,
            }}
        >
            <li
                className="bg-blur-100 card h-full overflow-hidden rounded-2xl"
                key={id}
            >
                <ProductLabel />
                <Swatch className="overflow-x-auto p-3" />
                <ProductModal />
            </li>
        </ProductProvider>
    )
}

export default ProductWrapper

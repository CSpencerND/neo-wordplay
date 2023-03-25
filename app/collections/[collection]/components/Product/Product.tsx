"use client"

import type { ProductProviderProps } from "@/lib/ProductStore"
import { ShopifyProductProvider } from "@/lib/providers"
import ProductProvider from "@/lib/providers/ProductProvider"
import { useProduct as useShopifyProduct } from "@shopify/hydrogen-react"
import type { Product as ProductType } from "@shopify/hydrogen-react/storefront-api-types"
import ProductLabel from "../ProductLabel"
import Swatch from "../Swatch"

type ProductProps = {
    hexCodes: string[]
} & Partial<ProductProviderProps>

function ProductWrapper({ hexCodes, ...initProviderProps }: ProductProps) {
    const product = initProviderProps.product
    return (
        <ShopifyProductProvider data={product!}>
            <ProductInner
                hexCodes={hexCodes}
                {...initProviderProps}
            />
        </ShopifyProductProvider>
    )
}

function ProductInner({ hexCodes, ...initProviderProps }: ProductProps) {
    const colorOptions = useShopifyProduct().options!.find(
        (option) => option!.name === "Color"
    )!.values as string[]

    const selectedColor = colorOptions[0]

    const product = initProviderProps.product as ProductType
    return (
        <ProductProvider {...{ ...(initProviderProps as ProductProviderProps), colorOptions, selectedColor }}>
            <li
                className="bg-blur-100 card h-full overflow-hidden rounded-2xl"
                key={product.id}
            >
                <ProductLabel title={product.title} />
                <Swatch hexCodes={hexCodes} />
            </li>
        </ProductProvider>
    )
}

export default ProductWrapper

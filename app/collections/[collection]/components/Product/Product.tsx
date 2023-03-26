"use client"

import type { ProductProps } from "@/lib/ProductStore"
import { ShopifyProductProvider } from "@/lib/providers"
import ProductProvider from "@/lib/providers/ProductProvider"
import { useProduct as useShopifyProduct } from "@shopify/hydrogen-react"
import type { Product as ProductType } from "@shopify/hydrogen-react/storefront-api-types"
import ProductLabel from "../ProductLabel"
import Swatch from "../Swatch"

function ProductWrapper({ ...initProviderProps }: ProductProps) {
    const product = initProviderProps.product
    return (
        <ShopifyProductProvider data={product!}>
            <ProductInner {...initProviderProps} />
        </ShopifyProductProvider>
    )
}

function ProductInner({ ...initProviderProps }: ProductProps) {
    const colorOptions = useShopifyProduct().options!.find(
        (option) => option!.name === "Color"
    )!.values as string[]

    const selectedColor = colorOptions[0]

    const product = initProviderProps.product as ProductType
    return (
        <ProductProvider {...{ ...initProviderProps, colorOptions, selectedColor }}>
            <li
                className="bg-blur-100 card h-full overflow-hidden rounded-2xl"
                key={product.id}
            >
                <ProductLabel title={product.title} />
                <Swatch />
            </li>
        </ProductProvider>
    )
}

export default ProductWrapper

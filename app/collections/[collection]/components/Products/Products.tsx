"use client"

import { ProductProvider, ProductPrice, useProduct } from "@shopify/hydrogen-react"
import type {
    ProductEdge,
    Product,
    Image,
    ImageConnection,
    Maybe,
} from "@shopify/hydrogen-react/storefront-api-types"
import NextImage from "next/image"
import { SwatchGroup } from "../Swatch"
import temp from "@/static/brand/placeholder.webp"
import cn from "clsx"

export default function Products({ products }: { products: ProductEdge[] }) {
    return (
        <ul className={cn("grid gap-4 sm:gap-6", "grid-cols-2 md:grid-cols-3")}>
            {products.map(({ node }) => {
                const { id, title, handle, featuredImage, descriptionHtml, metafield } =
                    node satisfies Product

                const swatchColors: string[] = metafield ? JSON.parse(metafield.value) : ["#000000"]

                return (
                    <li
                        key={id}
                        className={cn("bg-blur-100 card h-full", "transition hover:scale-105")}
                    >
                        <ProductProvider data={node}>
                            <Product
                                id={id}
                                title={title}
                                handle={handle}
                                featuredImage={featuredImage}
                                descriptionHtml={descriptionHtml}
                                swatchColors={swatchColors}
                            />
                        </ProductProvider>
                    </li>
                )
            })}
        </ul>
    )
}

interface ProductProps {
    id: string
    title: string
    handle: string
    featuredImage: Maybe<Image> | undefined
    descriptionHtml: string
    swatchColors: string[]
}

function Product({
    id,
    title,
    handle,
    featuredImage,
    descriptionHtml,
    swatchColors,
}: ProductProps) {
    const { options } = useProduct()

    const sizeOptions = options?.find((option) => option?.name === "Size")?.values

    return (
        <>
            <label className={cn("transition", "hover:brightness-125 active:scale-95")}>
                <figure className="relative cursor-pointer">
                    <NextImage
                        src={featuredImage?.url || temp.src}
                        alt={featuredImage?.altText || "placeholder image"}
                        width={featuredImage?.width || 1024}
                        height={featuredImage?.height || 1024}
                        className="bg-glass rounded-t-box"
                    />
                    <h2
                        className={cn(
                            "absolute bottom-0 left-0",
                            "overflow-hidden text-ellipsis whitespace-nowrap",
                            "w-full px-2 py-1 text-xs font-bold sm:text-sm",
                            "bg-blur-clear text-base-content/80"
                        )}
                    >
                        {title}
                    </h2>
                </figure>
            </label>
            <SwatchGroup id={id} handle={handle} swatchColors={swatchColors} />
        </>
    )
}

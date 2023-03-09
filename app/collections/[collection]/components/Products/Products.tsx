"use client"

import { ProductProvider, ProductPrice, useProduct } from "@shopify/hydrogen-react"
import type { ProductEdge, Product } from "@shopify/hydrogen-react/storefront-api-types"
import Image from "next/image"
import { SwatchGroup, SwatchButton } from "../Swatch"
import temp from "@/static/brand/placeholder.webp"
import cn from "clsx"

export default function Products({ products }: {products: ProductEdge[]}) {
    return (
        <ul className={cn("grid gap-4 sm:gap-6", "grid-cols-2 md:grid-cols-3")}>
            {products.map(({ node }) => {
                const {
                    id,
                    title,
                    handle,
                    featuredImage,
                    descriptionHtml,
                    priceRange,
                    images,
                    variants,
                    options,
                    metafield,
                } = node satisfies Product

                const swatchColors: string[] = metafield ? JSON.parse(metafield.value) : ["#000000"]
                const colorOptions: string[] | undefined = options.find(
                    (option) => option.name === "Color"
                )?.values
                const sizeOptions = options.find((option) => option.name === "Size")
                    ?.values as string[]

                return (
                    <li
                        key={id}
                        className={cn("bg-blur-100 card h-full", "transition hover:scale-105")}
                    >
                        <ProductProvider data={node}>
                            <label
                                className={cn("transition", "hover:brightness-125 active:scale-95")}
                            >
                                <figure className="relative cursor-pointer">
                                    <Image
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
                            <SwatchGroup id={id} handle={handle} initialColor={colorOptions![0]}>
                                {swatchColors.map((colorCode, i) => {
                                    return (
                                        <SwatchButton
                                            colorCode={colorCode}
                                            colorName={colorOptions![i]}
                                            key={i}
                                            index={i}
                                        />
                                    )
                                })}
                            </SwatchGroup>
                        </ProductProvider>
                    </li>
                )
            })}
        </ul>
    )
}
{
    /* <ProductProvider data={node}> */
}
{
    /* </ProductProvider> */
}

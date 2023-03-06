"use client"

import { ProductProvider } from "@shopify/hydrogen-react"
import type { ProductEdge } from "@shopify/hydrogen-react/storefront-api-types"
import Image from "next/image"
import { SwatchGroup, SwatchButton } from "../Swatch"
import temp from "@/static/brand/placeholder.webp"
import cn from "clsx"

interface ProductProps {
    products: ProductEdge[]
}

export default function Products({ products }: ProductProps) {
    return (
        <ul className={cn("grid gap-4 sm:gap-6", "grid-cols-2 md:grid-cols-3")}>
            {products.map(({ node }) => {
                const {
                    id,
                    handle,
                    title,
                    featuredImage,
                    description,
                    priceRange,
                    images,
                    variants,
                    options,
                } = node

                return (
                    <ProductProvider data={node}>
                        <li
                            key={id}
                            className={cn("bg-blur-100 card h-full", "transition hover:scale-105")}
                        >
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
                            <SwatchGroup>
                                <SwatchButton />
                                <SwatchButton />
                                <SwatchButton />
                                <SwatchButton />
                            </SwatchGroup>
                        </li>
                    </ProductProvider>
                )
            })}
        </ul>
    )
}

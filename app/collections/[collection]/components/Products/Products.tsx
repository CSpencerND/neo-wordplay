"use client"

import type { ProductEdge, Product, Image } from "@shopify/hydrogen-react/storefront-api-types"

/** components */
import { ProductProvider } from "@shopify/hydrogen-react"
import { RadioGroup } from "@headlessui/react"
import NextImage from "next/image"

/** utils */
// import temp from "@/static/brand/placeholder.webp"
import cn from "clsx"
import { useState } from "react"
import { useLoader } from "@/lib"
import { useProduct, flattenConnection } from "@shopify/hydrogen-react"

export default function Products({ products }: { products: ProductEdge[] }) {
    return (
        <ul className={cn("grid gap-4 sm:gap-6", "grid-cols-2 md:grid-cols-3")}>
            {products.map(({ node }) => {
                const { id, title, handle, images, descriptionHtml, metafield } =
                    node satisfies Product

                const swatchColors: string[] = metafield
                    ? JSON.parse(metafield.value)
                    : ["#000000"]
                const imageArray = flattenConnection(images)

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
                                images={imageArray}
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
    id?: string
    title: string
    handle?: string
    images: Image[]
    descriptionHtml?: string
    swatchColors: string[]
}

function Product({ title, images, descriptionHtml, swatchColors }: ProductProps) {
    /** image setting */

    const [currentImage, setCurrentImage] = useState<Image | null>(images[0])

    /** option setting */
    const { options, setSelectedOption } = useProduct()
    const colorOptions = options?.find((option) => option?.name === "Color")?.values as string[]
    const [selectedColor, setSelectedColor] = useState<string>(colorOptions[0])
    // const sizeOptions = options?.find((option) => option?.name === "Size")?.values

    /** utility */
    const { loaderComponent, setLoading } = useLoader()

    return (
        <>
            <label className={cn("transition", "hover:brightness-125 active:scale-95")}>
                <figure className="bg-glass rounded-t-box relative cursor-pointer">
                    {loaderComponent}

                    {currentImage !== null ? (
                        <NextImage
                            onLoadingComplete={() => setLoading(false)}
                            src={currentImage.url}
                            alt={currentImage.altText || "placeholder image"}
                            width={currentImage.width || 1024}
                            height={currentImage.height || 1024}
                            key={currentImage.id}
                        />
                    ) : (
                        <p>loading...</p>
                    )}
                    <h2
                        className={cn(
                            "absolute bottom-0 left-0",
                            "overflow-hidden text-ellipsis whitespace-nowrap",
                            "w-full px-2 py-1 text-xs font-bold sm:text-sm",
                            "bg-blur-200 text-base-content/80"
                        )}
                    >
                        {title}
                    </h2>
                </figure>
            </label>

            {/** Swatches *******************************************************************/}
            <RadioGroup
                value={selectedColor}
                onChange={setSelectedColor}
                role="radiogroup"
                as="span"
                className={cn(
                    "rounded-lg bg-base-100",
                    "inline-flex h-fit w-fit gap-2",
                    "m-2 p-1.5 sm:p-2"
                )}
            >
                {swatchColors.map((colorCode, i) => {
                    return (
                        <RadioGroup.Option
                            key={i}
                            role="radio"
                            value={colorOptions[i]}
                            style={{ backgroundColor: colorCode }}
                            className={({ checked }) =>
                                cn(
                                    "cursor-pointer rounded-[4px] sm:rounded",
                                    "p-2 transition-all duration-200 sm:p-3",
                                    "outline outline-1 outline-white/80",
                                    "focus:outline focus:outline-1 focus:outline-white/80",
                                    checked ? "outline-offset-[3px]" : ""
                                )
                            }
                            onClick={() => {
                                setCurrentImage(null)
                                setLoading(true)
                                setCurrentImage(images[i])
                            }}
                        />
                    )
                })}
            </RadioGroup>
        </>
    )
}

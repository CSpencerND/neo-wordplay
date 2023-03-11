"use client"

import cn from "clsx"
// import "./swatch.css"

import { useEffect, useState } from "react"
import { RadioGroup, Transition } from "@headlessui/react"
import { useProduct } from "@shopify/hydrogen-react"
import type { Image } from "@shopify/hydrogen-react/storefront-api-types"

interface SwatchGroupProps {
    handle?: string
    id?: string
    swatchColors: string[]
    images: Image[]
    changeImage: React.Dispatch<React.SetStateAction<number>>
}

export function SwatchGroup({
    handle,
    id,
    swatchColors,
    images,
    changeImage,
}: SwatchGroupProps) {
    const { options, setSelectedOption } = useProduct()

    const colorOptions = options?.find((option) => option?.name === "Color")?.values as string[]
    const initialColor = colorOptions![0] ?? "#000000"

    const [selectedColor, setSelectedColor] = useState<string>(initialColor)

    return (
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
                        onClick={() => changeImage(i)}
                    />
                )
            })}
        </RadioGroup>
    )
}

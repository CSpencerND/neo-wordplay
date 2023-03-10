"use client"

import cn from "clsx"
// import "./swatch.css"

import { useEffect, useState } from "react"
import { RadioGroup, Transition } from "@headlessui/react"
import { useProduct } from "@shopify/hydrogen-react"

interface SwatchGroupProps {
    handle?: string
    id?: string
    swatchColors?: string[]
    colorOptions?: string[]
}

export function SwatchGroup({ handle, id, swatchColors }: SwatchGroupProps) {
    const { options, setSelectedOption } = useProduct()

    const colorOptions = options?.find((option) => option?.name === "Color")?.values as string[]
    const initialColor = colorOptions![0] ?? "#000000"

    const [selectedColor, setSelectedColor] = useState<string>(initialColor)

    // useEffect(() => {
    //     console.log(selectedColor)
    // }, [selectedColor])

    return (
        <RadioGroup
            value={selectedColor}
            onChange={setSelectedColor}
            role="radiogroup"
            as="span"
            className={cn(
                "bg-blur-200 rounded-b-box",
                "inline-flex gap-2 px-2 py-4",
                "[&>label]:swatch [&>input]:hidden"
            )}
        >
            {swatchColors
                ? swatchColors.map((colorCode, i) => {
                      return (
                          <SwatchButton
                              colorCode={colorCode}
                              colorName={colorOptions[i]}
                              key={i}
                              index={i}
                          />
                      )
                  })
                : null}
        </RadioGroup>
    )
}

type SwatchButtonProps = {
    colorCode: string
    colorName?: string | undefined
    index: number
}

export function SwatchButton({ colorCode, colorName, index }: SwatchButtonProps) {
    return (
        <RadioGroup.Option
            role="radio"
            value={colorName}
            style={{ backgroundColor: colorCode }}
            className={({ checked }) =>
                cn(
                    "cursor-pointer rounded sm:rounded-md",
                    "p-2 sm:p-3 transition-all duration-200",
                    "outline outline-1 outline-white/80",
                    "focus:outline focus:outline-1 focus:outline-white/80",
                    checked ? "outline-offset-[3px]" : ""
                )
            }
        />
    )
}

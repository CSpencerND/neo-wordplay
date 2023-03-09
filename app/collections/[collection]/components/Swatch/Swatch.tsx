"use client"

import cn from "clsx"
// import "./swatch.css"

import { useEffect, useState } from "react"
import { RadioGroup, Transition } from "@headlessui/react"
import { useProduct } from "@shopify/hydrogen-react"

interface SwatchGroupProps {
    children: JSX.Element | JSX.Element[]
    initialColor: string
    handle?: string
    id?: string
}

export function SwatchGroup({ children, initialColor, handle, id }: SwatchGroupProps) {
    const { options, setSelectedOption } = useProduct()
    const [selectedColor, setSelectedColor] = useState<string>(initialColor)

    useEffect(() => {
        console.log(selectedColor)
    }, [])

    return (
        <RadioGroup
            value={selectedColor}
            onChange={() => {
                setSelectedColor
                console.log(selectedColor)
            }}
            role="radiogroup"
            as="span"
            className={cn(
                "bg-blur-200 rounded-b-box",
                "inline-flex gap-2 px-2 py-4",
                "[&>label]:swatch [&>input]:hidden"
            )}
        >
            {children}
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
                    "outline outline-1 outline-base-content/80",
                    "p-2 sm:p-3",
                    "focus:outline-none",
                    checked
                        ? "outline-0 ring-1 ring-base-content/80 ring-offset-2 ring-offset-base-200"
                        : ""
                )
            }
        />
    )
}

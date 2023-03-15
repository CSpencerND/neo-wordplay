"use client"

import { RadioGroup } from "@headlessui/react"
import useProduct from "../../context/ProductContext"
import cn from "clsx"

export default function Swatch() {
    const {
        selectedColor,
        setSelectedColor,
        hexCodes,
        colorOptions,
        changeImage
    } = useProduct() // prettier-ignore

    return (
        <RadioGroup
            value={selectedColor}
            onChange={setSelectedColor}
            role="radiogroup"
            as="span"
            className={cn(
                "rounded-lg bg-base-100 transition",
                "inline-flex h-fit max-w-fit gap-2",
                "m-2 overflow-x-scroll p-2 sm:p-3",
                "focus-within:bg-neutral-focus/60"
            )}
        >
            {hexCodes.map((code, i) => {
                return (
                    <RadioGroup.Option
                        key={i}
                        role="radio"
                        value={colorOptions[i]}
                        style={{ backgroundColor: code }}
                        className={({ checked }) =>
                            cn(
                                "cursor-pointer rounded-[4px] sm:rounded",
                                "p-2 transition-all duration-200 sm:p-3",
                                "ring-1 ring-white/60 ring-offset-black/60",
                                "focus-visible:ring-1 focus-visible:ring-white/60",
                                checked ? "ring-offset-[3px]" : ""
                            )
                        }
                        onFocus={() => changeImage(i)}
                    />
                )
            })}
        </RadioGroup>
    )
}

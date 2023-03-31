"use client"

import { RadioGroup } from "@headlessui/react"
import cn from "clsx"

import useProduct, { useSelectedColor } from "@/lib/hooks"

export default function Swatch({ ...props }) {
    const colorOptions = useProduct((s) => s.colorOptions)
    const selectedColor = useProduct((s) => s.selectedColor)
    const setSelectedColor = useProduct((s) => s.setSelectedColor)

    const hexCodes = useProduct((s) => s.hexCodes)
    const setCurrentImage = useProduct((s) => s.setCurrentImage)

    useSelectedColor()

    return (
        <RadioGroup
            value={selectedColor}
            onChange={setSelectedColor}
            {...props}
        >
            <RadioGroup.Label className="sr-only"> Select a color </RadioGroup.Label>
            <span className="flex gap-4">
                {hexCodes!.map((code, i) => (
                    <RadioGroup.Option
                        key={colorOptions![i]}
                        value={colorOptions![i]}
                        className={({ active, checked }) =>
                            cn(
                                `relative -m-0.5 flex cursor-pointer
                                items-center justify-center rounded-md
                                ring-neutral ring-offset-base-200 transition-all
                                hover:brightness-125 focus:outline-none`,

                                active && checked
                                    ? "focus-visible:ring-2 focus-visible:ring-primary-content"
                                    : "",
                                checked ? "ring-2 ring-offset-2" : ""
                            )
                        }
                        onFocus={() => setCurrentImage(i)}
                    >
                        <RadioGroup.Label
                            as="span"
                            className="sr-only"
                        >
                            {" "}
                            {colorOptions![i]}{" "}
                        </RadioGroup.Label>

                        <span
                            id="swatchColor"
                            aria-hidden="true"
                            style={{
                                backgroundColor:
                                    code === "#212226" || code === "0D0D0D" ? "#070707" : code,
                            }}
                            className="h-6 w-6 rounded-md"
                            // className="h-6 w-6 rounded-md border border-neutral ui-checked:border-0"
                        />
                    </RadioGroup.Option>
                ))}
            </span>
        </RadioGroup>
    )
}

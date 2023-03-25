"use client"

import { RadioGroup } from "@headlessui/react"
import useProduct from "@/lib/hooks"

export default function Swatch({ hexCodes }: { hexCodes: string[] }) {
    const colorOptions = useProduct((s) => s.colorOptions)
    const selectedColor = useProduct((s) => s.selectedColor)
    const setSelectedColor = useProduct((s) => s.setSelectedColor)
    const setCurrentImage = useProduct((s) => s.setCurrentImage)

    return (
        <RadioGroup
            value={selectedColor}
            onChange={setSelectedColor}
            className="m-3"
        >
            <RadioGroup.Label className="sr-only"> Choose a color </RadioGroup.Label>
            <span className="flex items-center space-x-3">
                {hexCodes.map((code, i) => (
                    <RadioGroup.Option
                        key={colorOptions[i]}
                        value={colorOptions[i]}
                        className={({ active, checked }) =>
                            classNames(
                                "ring-neutral ring-offset-base-200 transition-all",
                                active && checked ? "ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-content" : "",
                                checked ? "ring-2 ring-offset-2" : "",
                                "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-md focus:outline-none"
                            )
                        }
                        onFocus={() => setCurrentImage(i)}
                    >
                        <RadioGroup.Label
                            as="span"
                            className="sr-only"
                        >
                            {" "}
                            {colorOptions[i]}{" "}
                        </RadioGroup.Label>

                        <span
                            aria-hidden="true"
                            style={{
                                backgroundColor:
                                    code === "#212226" || code === "0D0D0D" ? "#070707" : code,
                            }}
                            className="h-6 w-6 rounded-md border border-neutral ui-checked:border-0"
                        />
                    </RadioGroup.Option>
                ))}
            </span>
        </RadioGroup>
    )
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ")
}

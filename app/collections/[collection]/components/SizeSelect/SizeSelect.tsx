import useProduct from "@/lib/hooks/useProduct"
import { RadioGroup } from "@headlessui/react"

import { sizeText } from "@/lib/utils"
import cn from "clsx"

export default function SizeSelect({ ...props }) {
    const options = useProduct((s) => s.product.options)
    const sizeOptions = options!.find((option) => option!.name === "Size")!.values as string[]
    const selectedSize = useProduct((s) => s.selectedSize)
    const setSelectedSize = useProduct((s) => s.setSelectedSize)

    return (
        <RadioGroup
            value={selectedSize}
            onChange={setSelectedSize}
            {...props}
        >
            <RadioGroup.Label className="sr-only"> Select a size </RadioGroup.Label>
            <h4 className="sr-only pl-2 text-xs">Size</h4>
            <span className="flex flex-wrap gap-3">
                {sizeOptions.map((size, i) => (
                    <RadioGroup.Option
                        key={i}
                        value={size}
                        className={({ active, checked }) =>
                            cn(
                                `grid h-7 w-7 cursor-pointer place-items-center
                                    rounded-md bg-base-100 text-xs
                                    ring-neutral ring-offset-base-200
                                    transition-all duration-200
                                    hover:!bg-secondary-focus 
                                    focus:outline-none`,

                                active && checked
                                    ? "focus-visible:ring-2 focus-visible:ring-primary-content focus-visible:ring-offset-2"
                                    : "",
                                checked
                                    ? "bg-secondary text-secondary-content ring-2 ring-offset-2"
                                    : ""
                            )
                        }
                    >
                        <RadioGroup.Label className="cursor-pointer">
                            {sizeText[size]}
                        </RadioGroup.Label>
                    </RadioGroup.Option>
                ))}
            </span>
        </RadioGroup>
    )
}

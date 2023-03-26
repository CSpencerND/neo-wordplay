import useProduct from "@/lib/hooks/useProduct"
import { sizeText } from "@/lib/utils"
import { RadioGroup } from "@headlessui/react"
// import { useProduct as useShopifyProduct } from "@shopify/hydrogen-react"
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
                                    transition-all duration-200
                                    hover:!bg-secondary-focus
                                    focus:outline-none md:text-base`,

                                active && checked
                                    ? "focus-visible:ring-2 focus-visible:ring-primary-content"
                                    : "",
                                checked ? "bg-secondary text-secondary-content" : ""
                            )
                        }
                    >
                        <RadioGroup.Label>{sizeText[size]}</RadioGroup.Label>
                    </RadioGroup.Option>
                ))}
            </span>
        </RadioGroup>
    )
}

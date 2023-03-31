import useProduct from "@/lib/hooks/useProduct"
import { useIsomorphicLayoutEffect } from "@react-hookz/web"
import { useProduct as useShopifyProduct } from "@shopify/hydrogen-react"
import { useState } from "react"

type VariantData = {
    variantName: string | undefined
    variantID: string | undefined
}

export function useSelectedOptions(): VariantData {
    const variants = useShopifyProduct().variants
    const [data, setData] = useState<VariantData>({
        variantName: variants?.[0]?.selectedOptions?.[0]?.name,
        variantID: variants?.[0]?.id,
    })

    const selectedOptions = useShopifyProduct().selectedOptions

    useIsomorphicLayoutEffect(() => {
        if (!selectedOptions) return

        const optionsString = JSON.stringify(
            Object.entries(selectedOptions).map(([key, value]) => {
                return { name: key, value: value }
            })
        )

        variants?.forEach((variant) => {
            if (!variant) return
            const variantString = JSON.stringify(variant?.selectedOptions)
            if (optionsString === variantString) {
                const data = {
                    variantName: variant.title,
                    variantID: variant.id,
                } as VariantData
                setData(data)
            }
        })
    }, [selectedOptions])

    return data
}

export function useSelectedColor() {
    const setSelectedOption = useShopifyProduct().setSelectedOption
    const selectedColor = useProduct((s) => s.selectedColor)
    useIsomorphicLayoutEffect(() => {
        if (!selectedColor) return
        setSelectedOption("Color", selectedColor)
    }, [selectedColor])
}

export function useSelectedSize() {
    const setSelectedOption = useShopifyProduct().setSelectedOption
    const selectedSize = useProduct((s) => s.selectedSize)
    useIsomorphicLayoutEffect(() => {
        if (!selectedSize) return
        setSelectedOption("Size", selectedSize)
    }, [selectedSize])
}

import { AddToCartButton } from "@shopify/hydrogen-react"
import { Plus } from "react-iconly"

import useProduct from "@/lib/hooks/useProduct"
import { useUpdateEffect } from "@react-hookz/web"
import { useProduct as useShopifyProduct } from "@shopify/hydrogen-react"
import { useState } from "react"

type VariantData = {
    variantName: string | undefined
    variantID: string | undefined
}

export default function CartButton() {
    const variantID = useSelectedOptions().variantID
    const variantName = useSelectedOptions().variantName

    return (
        <>
            <span className="text-xs text-info">Selected: {variantName}</span>

            <AddToCartButton
                variantId={variantID}
                accessibleAddingToCartLabel="Item is being added to cart with selected color and size"
                className="btn-secondary btn-block btn-sm btn flex gap-2 text-xs shadow-box"
            >
                <Plus set="light" />
                Add to Bag
            </AddToCartButton>

            {/* TODO: <BuyNowButton /> */}
        </>
    )
}

function useSelectedOptions(): VariantData {
    const variants = useShopifyProduct().variants
    const [data, setData] = useState<VariantData>({
        variantName: variants?.[0]?.selectedOptions?.[0]?.name,
        variantID: variants?.[0]?.id,
    })

    const { setSelectedOption, selectedOptions } = useShopifyProduct()

    const selectedColor = useProduct((s) => s.selectedColor)
    useUpdateEffect(() => {
        if (!selectedColor) return
        setSelectedOption("Color", selectedColor)
    }, [selectedColor])

    const selectedSize = useProduct((s) => s.selectedSize)
    useUpdateEffect(() => {
        if (!selectedSize) return
        setSelectedOption("Size", selectedSize)
    }, [selectedSize])

    useUpdateEffect(() => {
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

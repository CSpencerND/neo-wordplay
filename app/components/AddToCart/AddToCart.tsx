import { AddToCartButton } from "@shopify/hydrogen-react"
import { Plus } from "react-iconly"

import { useSelectedOptions } from "@/lib/hooks"

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

import storefrontQuery from "./storefront"
import type { SelectedOptionInput, Product } from "@shopify/hydrogen-react/storefront-api-types"
import { SelectedOptions } from "@shopify/hydrogen-react/dist/types/ProductProvider"

export async function getVariantBySelectedOptions(
    handle: string,
    selectedOptions: SelectedOptions
): Promise<Awaited<Product>> {
    const selectedOptionInput: SelectedOptionInput[] = Object.entries(selectedOptions).map(
        ([name, value]) => {
            return { name, value }
        }
    )

    const vars = { productHandle: handle, selectedOptions: selectedOptionInput }
    const data = await storefrontQuery(query, vars)

    return data.product
}

const gql = String.raw
const query = gql`
    query getVariantIdBySelectedOptions(
        $productHandle: String!
        $selectedOptions: [SelectedOptionInput!]!
    ) {
        product(handle: $productHandle) {
            variantBySelectedOptions(selectedOptions: $selectedOptions) {
                id
            }
        }
    }
`

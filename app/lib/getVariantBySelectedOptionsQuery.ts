import storefrontQuery from "./shopifyClient"
import type {
    SelectedOptionInput,
    Product,
} from "@shopify/hydrogen-react/storefront-api-types"
import { SelectedOptions } from "@shopify/hydrogen-react/dist/types/ProductProvider"

export async function getVariantIdBySelectedOptions(
    handle: string,
    selectedOptions: SelectedOptions
): Promise<Product> {
    const selectedOptionInput: SelectedOptionInput[] = Object.entries(selectedOptions).map(
        ([name, value]) => {
            return { name, value }
        }
    )

    const vars = { productHandle: handle, selectedOptions: selectedOptionInput }
    const { data } = await storefrontQuery(query, vars)

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

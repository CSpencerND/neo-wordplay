import type { SelectedOptionInput, Product } from "@shopify/hydrogen-react/storefront-api-types"
import type { SelectedOptions } from "@shopify/hydrogen-react/dist/types/ProductProvider"
const gql = String.raw

export async function getVariantIdBySelectedOptions(
    handle: string,
    selectedOptions: SelectedOptions
): Promise<Product> {
    const selectedOptionInput = Object.entries(selectedOptions).map(([name, value]) => {
        return { name, value }
    }) as SelectedOptionInput[]

    const response = await fetch(
        "https://wordplay4lyfe.myshopify.com/api/2023-01/graphql.json",
        {
            body: JSON.stringify({
                query,
                variables: { productHandle: handle, selectedOptions: selectedOptionInput },
            }),
            headers: {
                "content-type": "application/json",
                "X-SDK-Version": "2023-01",
                "X-Shopify-Storefront-Access-Token": "06479233182de39ca69e466f1837adda",
            },
            method: "POST",
        }
    )

    if (!response.ok) {
        throw new Error("Failed to fetch data")
    }

    const json = await response.json()
    const product = json.data.product
    return product
}

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

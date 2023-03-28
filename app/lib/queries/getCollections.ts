import storefrontQuery from "./storefront"
import type { Collection } from "@shopify/hydrogen-react/storefront-api-types"

export async function getCollections(): Promise<Awaited<Collection[]>> {

    const data = await storefrontQuery(query)
    const collections: Collection[] = data.collections.nodes
    return collections
}

const gql = String.raw
const query = gql`
    {
        collections(first: 9) {
                nodes {
                    id
                    handle
                    title
                    descriptionHtml
                    image {
                        url
                        altText
                        width
                        height
                    }
                }
        }
    }
`

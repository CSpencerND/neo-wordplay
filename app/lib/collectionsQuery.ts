import storefrontQuery from "./shopifyClient"
import { flattenConnection } from "@shopify/hydrogen-react"
import type { CollectionConnection, Collection } from "@shopify/hydrogen-react/storefront-api-types"

export async function getCollectionNames(): Promise<Collection[]> {

    const { data } = await storefrontQuery(query)
    const collectionConnection: CollectionConnection = data.collections
    const collections: Collection[] = flattenConnection(collectionConnection)
    return collections
}

const gql = String.raw
const query = gql`
    {
        collections(first: 9) {
            edges {
                node {
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
    }
`

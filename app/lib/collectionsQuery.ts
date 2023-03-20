import type { CollectionEdge } from "@shopify/hydrogen-react/storefront-api-types"
const gql = String.raw

const token = process.env.storefrontToken as string
const domain = process.env.storefrontDomain as string

export default async function collectionsQuery(): Promise<CollectionEdge[]> {
    const response = await fetch(`https://${domain}/api/2023-01/graphql.json`, {
        body: query,
        headers: {
            "content-type": "application/graphql",
            "X-SDK-Version": "2023-01",
            "X-Shopify-Storefront-Access-Token": token,
        },
        method: "POST",
    })

    if (!response.ok) {
        throw new Error("Failed to fetch data")
    }

    const json = await response.json()
    return json.data.collections.edges
}

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

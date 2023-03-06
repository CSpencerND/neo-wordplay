import type { CollectionEdge } from "@shopify/hydrogen-react/storefront-api-types"
const gql = String.raw

export default async function collectionsQuery(): Promise<CollectionEdge[]> {
    const response = await fetch("https://wordplay4lyfe.myshopify.com/api/2023-01/graphql.json", {
        body: query,
        headers: {
            "content-type": "application/graphql",
            "X-SDK-Version": "2023-01",
            "X-Shopify-Storefront-Access-Token": "06479233182de39ca69e466f1837adda",
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

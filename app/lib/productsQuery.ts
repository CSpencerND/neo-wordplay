import type { ProductEdge } from "@shopify/hydrogen-react/storefront-api-types"
const gql = String.raw

type ProductsQuery = { collectionTitle: string; productEdges: ProductEdge[] }

export async function productsQuery(handle: string): Promise<ProductsQuery> {
    const response = await fetch("https://wordplay4lyfe.myshopify.com/api/2023-01/graphql.json", {
        body: JSON.stringify({
            query,
            variables: { handle },
        }),
        headers: {
            "content-type": "application/json",
            "X-SDK-Version": "2023-01",
            "X-Shopify-Storefront-Access-Token": "06479233182de39ca69e466f1837adda",
        },
        method: "POST",
    })

    if (!response.ok) {
        throw new Error("Failed to fetch data")
    }

    const json = await response.json()
    const collectionTitle = json.data.collection.title
    const productEdges = json.data.collection.products.edges
    return { collectionTitle, productEdges }
}

const query = gql`
    query getProductsByCollection($handle: String!) {
        collection(handle: $handle) {
            title
            products(first: 99) {
                edges {
                    node {
                        id
                        handle
                        title
                        descriptionHtml
                        priceRange {
                            maxVariantPrice {
                                amount
                                currencyCode
                            }
                        }
                        featuredImage {
                            url
                            altText
                            width
                            height
                            id
                        }
                        images(first: 99) {
                            edges {
                                node {
                                    url
                                    altText
                                    width
                                    height
                                    id
                                }
                            }
                        }
                        variants(first: 99) {
                            edges {
                                node {
                                    id
                                    title
                                    selectedOptions {
                                        name
                                        value
                                    }
                                }
                            }
                        }
                        options(first: 99) {
                            id
                            name
                            values
                        }
                        metafield(namespace: "swatch", key: "colors") {
                            value
                        }
                    }
                }
            }
        }
    }
`

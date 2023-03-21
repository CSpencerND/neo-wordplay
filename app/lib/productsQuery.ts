import storefrontQuery from "./shopifyClient"
import { flattenConnection } from "@shopify/hydrogen-react"
import type { ProductConnection, Product } from "@shopify/hydrogen-react/storefront-api-types"

type ProductsQuery = { collectionTitle: string; products: Product[] }

export async function getProductsByCollection(handle: string): Promise<ProductsQuery> {
    const { data } = await storefrontQuery(query, { handle })

    const collectionTitle: string = data.collection.title
    const productConnection: ProductConnection = data.collection.products
    const products: Product[] = flattenConnection(productConnection)
    return { collectionTitle, products }
}

const gql = String.raw
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
                            name
                            values
                        }
                        metafield(namespace: "swatch", key: "colors") {
                            value
                        }
                        collections(first: 9) {
                            edges {
                                node {
                                    title
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

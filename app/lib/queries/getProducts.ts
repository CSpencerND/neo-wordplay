import storefrontQuery from "./storefront"
import type { Product, Collection } from "@shopify/hydrogen-react/storefront-api-types"

type ProductsByCollection = { collectionTitle: string; products: Product[] }

export async function getProductsByCollection(handle: string): Promise<ProductsByCollection> {
    const data = await storefrontQuery<"collection", Collection>(allProductsQuery, { handle })

    const collectionTitle: string = data.collection.title
    const products: Product[] = data.collection.products.nodes
    return { collectionTitle, products }
}

export async function getFeaturedCollectionProducts(): Promise<Product[]> {
    const data = await storefrontQuery<"collection", Collection>(featuredQuery)
    return data.collection.products.nodes
}

const gql = String.raw

const featuredQuery = gql`
    query getFeaturedProducts {
        collection(handle: "staff-picks") {
            products(first: 99) {
                nodes {
                    title
                    featuredImage {
                        url
                        altText
                        width
                        height
                        id
                    }
                }
            }
        }
    }
`

const allProductsQuery = gql`
    query getProductsByCollection($handle: String!) {
        collection(handle: $handle) {
            title
            products(first: 99) {
                nodes {
                    id
                    handle
                    title
                    descriptionHtml
                    images(first: 99) {
                        nodes {
                            url
                            altText
                            width
                            height
                            id
                        }
                    }
                    variants(first: 99) {
                        nodes {
                            id
                            title
                            selectedOptions {
                                name
                                value
                            }
                            sellingPlanAllocations(first: 1) {
                                nodes {
                                    sellingPlan {
                                        name
                                    }
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
                        nodes {
                            title
                        }
                    }
                    sellingPlanGroups(first: 1) {
                        nodes {
                            name
                        }
                    }
                }
            }
        }
    }
`

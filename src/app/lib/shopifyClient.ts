const gql = String.raw

export default async function storefrontQuery(query: string) {
    const response = await fetch("https://wordplay4lyfe.myshopify.com/api/2023-01/graphql.json", {
        body: query,
        headers: {
            "content-type": "application/graphql",
            "X-SDK-Version": "2023-01",
            "X-Shopify-Storefront-Access-Token": "06479233182de39ca69e466f1837adda",
        },
        method: "POST",
    })

    const json = await response.json()
    return JSON.stringify(json, null, 2)
}

export function productsQuery(handle: string) {
    return gql`
        {
            collection(handle: ${handle}) {
                products(first: 99) {
                    edges {
                        node {
                            id
                            handle
                            title
                            description
                            priceRange {
                                minVariantPrice {
                                    amount
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
                                        metafield(namespace: "color", key: "color") {
                                            key
                                            value
                                        }
                                        image {
                                            url
                                            altText
                                            width
                                            height
                                            id
                                        }
                                    }
                                }
                            }
                            options(first: 99) {
                                id
                                name
                                values
                            }
                        }
                    }
                }
            }
        }
    `
}

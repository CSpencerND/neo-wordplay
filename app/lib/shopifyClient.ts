export const shopifyClient = {
    publicStorefrontToken: "06479233182de39ca69e466f1837adda",
    storeDomain: "https://wordplay4lyfe.myshopify.com",
    storefrontApiVersion: "2023-01",
}

export default async function storefrontQuery(query: string, vars = {}) {
    const response = await fetch(shopifyClient.storeDomain, {
        body: JSON.stringify({ query, variables: vars }),
        headers: {
            "content-type": "application/json",
            "X-SDK-Version": "2023-01",
            "X-Shopify-Storefront-Access-Token": shopifyClient.publicStorefrontToken,
        },
        method: "POST",
    })

    if (!response.ok) {
        throw new Error(response.statusText)
    }

    const { data } = await response.json()

    return data
}

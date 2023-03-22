export const storefront = {
    id: process.env.SHOPIFY_STOREFRONT_ID as string,
    token: process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN as string,
    domain: process.env.SHOPIFY_STOREFRONT_DOMAIN as string,
    version: process.env.SHOPIFY_STOREFRONT_VERSION as string,
}

const storefrontHeaders = {
    "content-type": "application/json",
    "X-SDK-Version": storefront.version,
    "X-Shopify-Storefront-Access-Token": storefront.token,
}

const storefrontQueryURL = `${storefront.domain}/api/${storefront.version}/graphql.json`

export default async function storefrontQuery(query: string, vars = {}) {
    const response = await fetch(storefrontQueryURL, {
        body: JSON.stringify({ query, variables: vars }),
        headers: storefrontHeaders,
        method: "POST",
    })

    if (!response.ok) {
        throw new Error(response.statusText)
    }

    const { data } = await response.json()

    return data
}

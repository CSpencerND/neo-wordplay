/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: ["cdn.shopify.com"],
    },
    env: {
        storefrontToken: process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN,
        storefrontDomain: process.env.SHOPIFY_STOREFRONT_DOMAIN,
    },
}

module.exports = nextConfig

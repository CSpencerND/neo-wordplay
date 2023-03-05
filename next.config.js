/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: ["cdn.shopify.com"],
    },
}

module.exports = nextConfig

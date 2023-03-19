import { BlobScene } from "@/components/Blob"
import { productsQuery } from "@/lib/productsQuery"
import collectionsQuery from "@/lib/collectionsQuery"

import { ProductProvider, ProductPrice } from "./context"
import ProductLabel from "./components/ProductLabel"
import Swatch from "./components/Swatch"
import ProductModal from "./components/Modal/ProductModal"
import { Fragment } from "react"

import type { Product, ProductEdge } from "@shopify/hydrogen-react/storefront-api-types"

export async function generateStaticParams() {
    const collections = await collectionsQuery()

    return collections.map(({ node }) => ({
        collection: node.handle,
    }))
}

export default async function CollectionPage({ params }: { params: { collection: string } }) {
    const { collectionTitle, productEdges } = await productsQuery(params.collection)

    if (collectionTitle !== "Full Catalog") {
        return (
            <section className="mx-auto max-w-2xl space-y-12">
                <h1 className="text-center text-xl font-bold text-accent-content">
                    {collectionTitle}
                </h1>

                <ul className="relative grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
                    <BlobScene />
                    {productEdges.map(({ node }) => {
                        return (
                            <ProductProvider
                                product={node}
                                key={node.id}
                            >
                                <li className="bg-blur-100 card relative h-full transition hover:scale-105">
                                    <ProductLabel />
                                    <Swatch />
                                    <ProductModal
                                        price={
                                            <ProductPrice
                                                as={Fragment}
                                                data={node}
                                                priceType="regular"
                                                valueType="max"
                                                withoutTrailingZeros
                                            />
                                        }
                                    />
                                </li>
                            </ProductProvider>
                        )
                    })}
                </ul>
            </section>
        )
    }
    return (
        <FullCatalog
            collectionTitle={collectionTitle}
            productEdges={productEdges}
        />
    )
}

type FullCatalogProps = {
    collectionTitle: string
    productEdges: ProductEdge[]
}

function FullCatalog({ collectionTitle, productEdges }: FullCatalogProps) {
    const productsByCollection = productsSortedByCollection(productEdges)

    const ProductListElements: JSX.Element[] = []
    productsByCollection.forEach((products, collectionTitle) => {
        ProductListElements.push(
            <section className="bg-blur-200 card flex flex-col">
                <h2 className="pt-4 text-center text-lg font-bold">{collectionTitle}</h2>
                <ul className="carousel-end carousel rounded-box space-x-4 bg-transparent p-4">
                    {products.map((product) => {
                        return (
                            <ProductProvider
                                product={product}
                                key={product.id}
                            >
                                <li className="bg-blur-100 [&_figure_h2]:bg-blur-black carousel-item card relative w-1/2 overflow-hidden rounded-lg transition [&_figure]:rounded-lg">
                                    <ProductLabel />
                                    {/* <Swatch /> */}
                                    <ProductModal
                                        price={
                                            <ProductPrice
                                                as={Fragment}
                                                data={product}
                                                priceType="regular"
                                                valueType="max"
                                                withoutTrailingZeros
                                            />
                                        }
                                    />
                                </li>
                            </ProductProvider>
                        )
                    })}
                </ul>
            </section>
        )
    })

    return (
        <section className="mx-auto max-w-2xl space-y-12">
            <h1 className="text-center text-xl font-bold text-accent-content">
                {collectionTitle}
            </h1>
            <BlobScene />
            {ProductListElements}
        </section>
    )
}

function productsSortedByCollection(productEdges: ProductEdge[]): Map<string, Product[]> {
    const products = productEdges.map(({ node }) => node)
    const map = new Map<string, Product[]>()

    products.forEach((product) => {
        const collectionEdges = product.collections.edges

        collectionEdges.forEach((collectionEdge) => {
            const collectionTitle = collectionEdge.node.title

            if (collectionTitle !== "Full Catalog") {
                const collectionProducts = map.get(collectionTitle) ?? []
                collectionProducts.push(product)
                map.set(collectionTitle, collectionProducts)
            }
        })
    })

    return map
}

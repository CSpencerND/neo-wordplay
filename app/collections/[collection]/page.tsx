import { BlobScene } from "@/components/Blob"
import { productsQuery } from "@/lib/productsQuery"
import collectionsQuery from "@/lib/collectionsQuery"

import { ProductProvider, ProductPrice } from "./context"
import ProductLabel from "./components/ProductLabel"
import Swatch from "./components/Swatch"
import ProductModal from "./components/Modal/ProductModal"
import { Fragment } from "react"

export async function generateStaticParams() {
    const collections = await collectionsQuery()

    return collections.map(({ node }) => ({
        collection: node.handle,
    }))
}

export default async function CollectionPage({ params }: { params: { collection: string } }) {
    const { collectionTitle, productEdges } = await productsQuery(params.collection)

    return (
        <section className="mx-auto max-w-2xl space-y-12">
            <h1 className="text-center text-xl font-bold text-primary">{collectionTitle}</h1>

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

import { BlobScene } from "@/components/Blob"
import { Product } from "./components/Product"

import { getCollections, getProductsByCollection } from "@/lib/server"

import type { ProductProviderProps } from "@/lib/ProductStore"

export async function generateStaticParams() {
    const collections = await getCollections()

    return collections.map((collection) => ({
        collection: collection.handle,
    }))
}

export default async function CollectionPage({ params }: { params: { collection: string } }) {
    const { collectionTitle, products } = await getProductsByCollection(params.collection)

    return (
        <section className="mx-auto max-w-2xl space-y-8">
            <h1 className="text-center text-xl font-bold text-accent-content">
                {collectionTitle}
            </h1>

            <ul className="relative grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
                <BlobScene />

                {products.map((product) => {
                    const hexCodes = JSON.parse(product.metafield!.value)
                    const initProviderProps: ProductProviderProps = {
                        product: product,
                        currentImage: product.images.nodes[0],
                        isModalOpen: false,
                        images: product.images.nodes,
                        hexCodes: hexCodes,
                    }
                    return <Product {...initProviderProps} />
                })}
            </ul>
        </section>
    )
}

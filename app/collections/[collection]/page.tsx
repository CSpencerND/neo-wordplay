import { BlobScene } from "@/components/Blob"
import { productsQuery } from "@/lib/productsQuery"

import { ProductProvider } from "./context"
import ProductLabel from "./components/ProductLabel"
import Swatch from "./components/Swatch"
import ProductModal from "./components/Modal/ProductModal"

export async function generateStaticParams() {
    const collectionHandles = [
        "staff-picks",
        "summer-22",
        "mindset",
        "lifestyle",
        "creativity",
        "full-catalog",
    ]

    return collectionHandles.map((pathName) => ({
        collection: pathName,
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
                        <ProductProvider product={node}>
                            <li
                                key={node.id}
                                className="bg-blur-100 card relative h-full transition hover:scale-105"
                            >
                                <ProductLabel />
                                <Swatch />
                                <ProductModal />
                            </li>
                        </ProductProvider>
                    )
                })}
            </ul>
        </section>
    )
}

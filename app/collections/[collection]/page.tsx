import Products from "./components/Products"
import Blob from "@/components/Blob"
import { productsQuery } from "@/lib/productsQuery"

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
    const { collection } = params
    const { collectionTitle, productEdges } = await productsQuery(collection)

    return (
        <section className="mx-auto max-w-2xl space-y-12">
            <h1 className="text-center text-xl font-bold text-primary">{collectionTitle}</h1>

            <ul className="relative grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
                <Blob
                    size="md"
                    opacity={80}
                    from="green"
                    to="accent"
                />
                <Blob
                    size="lg"
                    placement="right"
                    opacity={60}
                    from="accent"
                    to="cyan"
                />
                <Blob
                    size="md"
                    opacity={80}
                    placement="left"
                    from="primary"
                    to="secondary"
                />
                <Blob
                    size="sm"
                    placement="bottom"
                    opacity={80}
                    from="cyan"
                    to="secondary"
                />

                <Products products={productEdges} />
            </ul>
        </section>
    )
}

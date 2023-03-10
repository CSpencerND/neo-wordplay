import Image, { StaticImageData } from "next/image"
import Products from "./components/Products"
import { productsQuery } from "@/lib/productsQuery"

export default async function Collections({ params }: { params: { collection: string } }) {
    const { collection } = params
    const { collectionTitle, productEdges } = await productsQuery(collection)
    console.log(productEdges)

    return (
        <section className="mx-auto max-w-2xl space-y-12">
            <h1 className="text-center text-xl font-bold text-primary">{collectionTitle}</h1>
            <Products products={productEdges} />
        </section>
    )
}

export async function generateCollectionParams() {
    const collectionHandles = [
        "staff-picks",
        "summer-22",
        "mindset",
        "lifestyle",
        "creativity",
        "full-catalog",
    ]

    const collectionParams = collectionHandles.map((pathName) => {
        return {
            params: {
                collection: pathName,
            },
        }
    })
    return collectionParams
}

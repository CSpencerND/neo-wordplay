import { BlobScene } from "@/components/Blob"
import type { ProductProviderProps } from "@/lib/ProductStore"
import { getCollections, getProductsByCollection } from "@/lib/server"
import { Fragment } from "react"
import { Product } from "./components/Product"

export async function generateStaticParams() {
    const collections = await getCollections()

    return collections.map((collection) => ({
        collection: collection.handle,
    }))
}

export default async function CollectionPage({ params }: { params: { collection: string } }) {
    const { collectionTitle, products } = await getProductsByCollection(params.collection)
    // if (collectionTitle !== "Full Catalog") {
    return (
        <section className="mx-auto max-w-2xl space-y-8">
            <h1 className="text-center text-xl font-bold text-accent-content">
                {collectionTitle}
            </h1>

            <ul className="relative grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
                <BlobScene />

                {products.map((product) => {
                    const hexCodes = JSON.parse(product.metafield!.value)
                    const initProviderProps: Partial<ProductProviderProps> = {
                        product: product,
                        currentImage: product.images.nodes[0],
                        isModalOpen: false,
                        images: product.images.nodes,
                    }
                    return (
                        <Product
                            hexCodes={hexCodes}
                            {...initProviderProps}
                        />
                    )
                })}
            </ul>
        </section>
    )
    // }
    // return (
    //     <FullCatalog
    //         collectionTitle={collectionTitle}
    //         products={products}
    //     />
    // )
}

// type FullCatalogProps = {
//     collectionTitle: string
//     products: Product[]
// }

// function FullCatalog({ collectionTitle, products }: FullCatalogProps) {
//     const productsByCollection = productsSortedByCollection(products)

//     const ProductListElements: JSX.Element[] = []
//     productsByCollection.forEach((products, collectionTitle) => {
//         ProductListElements.push(
//             <section className="bg-blur-200 card flex flex-col">
//                 <h2 className="pt-4 text-center text-lg font-bold">{collectionTitle}</h2>
//                 <ul className="carousel-end carousel rounded-2xl space-x-4 bg-transparent p-4">
//                     {products.map((product) => {
//                         return (
//                             <ProductProvider
//                                 product={product}
//                                 key={product.id}
//                             >
//                                 <li className="bg-blur-100 [&_figure_h2]:bg-blur-black carousel-item card relative w-1/2 overflow-hidden rounded-lg transition [&_figure]:rounded-lg">
//                                     <ProductLabel />
//                                     {/* <Swatch /> */}
//                                     <ProductModal
//                                         price={
//                                             <ProductPrice
//                                                 as={Fragment}
//                                                 data={product}
//                                                 priceType="regular"
//                                                 valueType="max"
//                                                 withoutTrailingZeros
//                                             />
//                                         }
//                                     />
//                                 </li>
//                             </ProductProvider>
//                         )
//                     })}
//                 </ul>
//             </section>
//         )
//     })

// return (
//     <section className="mx-auto max-w-2xl space-y-12">
//         <h1 className="text-center text-xl font-bold text-accent-content">
//             {collectionTitle}
//         </h1>
//         <BlobScene />
//         {ProductListElements}
//     </section>
// )
// }

// function productsSortedByCollection(products: Product[]): Map<string, Product[]> {
//     const products = productEdges.map(({ node }) => node)
//     const map = new Map<string, Product[]>()

//     products.forEach((product) => {
//         const collectionEdges = product.collections.edges

//         collectionEdges.forEach((collectionEdge) => {
//             const collectionTitle = collectionEdge.node.title

//             if (collectionTitle !== "Full Catalog") {
//                 const collectionProducts = map.get(collectionTitle) ?? []
//                 collectionProducts.push(product)
//                 map.set(collectionTitle, collectionProducts)
//             }
//         })
//     })

//     return map
// }

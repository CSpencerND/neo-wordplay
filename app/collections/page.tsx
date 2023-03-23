import { BlobScene } from "@/components/Blob"
import ProductImage from "@/components/ProductImage"
import { getCollections } from "@/lib/server"
import cn from "clsx"
import Link from "next/link"

export default async function CollectionDirectoryPage() {
    const collections = await getCollections()

    return (
        <section className="mx-auto max-w-2xl space-y-8">
            <h1 className="text-center text-xl font-bold text-accent-content">
                Collections Directory
            </h1>

            <ul className={cn("relative grid gap-4 sm:gap-6", "grid-cols-2 md:grid-cols-3")}>
                <BlobScene />

                {collections.map((collection) => {
                    const { id, handle, title, image } = collection
                    return (
                        <li key={id}>
                            <Link
                                href={`collections/${handle}`}
                                className={cn(`
                                    card rounded-2xl relative h-full overflow-hidden
                                    text-primary-content transition-all
                                    hover:scale-105 hover:brightness-105
                                    active:scale-95
                                `)}
                            >
                                <ProductImage image={image} title={title} />
                                <div
                                    className={`
                                        bg-blur-300 border-t border-base-100
                                        card-body absolute bottom-0
                                        w-full p-1
                                        sm:p-2
                                    `}
                                >
                                    <h2 className="card-title mx-auto whitespace-nowrap text-sm">
                                        {title}
                                    </h2>
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

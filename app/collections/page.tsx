import Link from "next/link"
import Image from "next/image"
import { BlobScene } from "@/components/Blob"

import cn from "clsx"
import temp from "@/static/brand/placeholder.webp"
import { getCollectionNames } from "@/lib"

export default async function CollectionDirectoryPage() {
    // const collections = await getCollectionNames()
    const collections = [
        {
            id: "gid://shopify/Collection/123456789",
            handle: "staff-picks",
            title: "Staff Picks",
        },
        {
            id: "gid://shopify/Collection/123477877",
            handle: "summer-22",
            title: "Summer 22",
        },
        {
            id: "gid://shopify/Collection/444477877",
            handle: "mindset",
            title: "Mindset",
        },
        {
            id: "gid://shopify/Collection/222277877",
            handle: "lifestyle",
            title: "Lifestyle",
        },
        {
            id: "gid://shopify/Collection/138887877",
            handle: "creativity",
            title: "Creativity",
        },
        {
            id: "gid://shopify/Collection/128887877",
            handle: "full-catalog",
            title: "Full Catalog",
        },
        // "staff-picks",
        // "summer-22",
        // "mindset",
        // "lifestyle",
        // "creativity",
        // "full-catalog",
    ]

    return (
        <section className="mx-auto max-w-2xl space-y-12">
            <h1 className="text-center text-xl font-bold text-accent-content">
                Collections Directory
            </h1>

            <ul className={cn("relative grid gap-4 sm:gap-6", "grid-cols-2 md:grid-cols-3")}>
                <BlobScene />

                {collections.map((collection) => {
                    const { id, handle, title } = collection
                    return (
                        <li key={id}>
                            <Link
                                href={`collections/${handle}`}
                                className={cn(
                                    "card relative h-full",
                                    "text-primary-content transition-all",
                                    "hover:scale-105 hover:brightness-105",
                                    "active:scale-95"
                                )}
                            >
                                <Image
                                    src={temp}
                                    alt={"placeholder image"}
                                    // width={image?.width || 1024}
                                    // height={image?.height || 1024}
                                    className="bg-glass rounded-box"
                                />
                                <div
                                    className={cn(
                                        "card-body",
                                        "absolute bottom-0 w-full",
                                        "p-1 sm:p-2",
                                        "bg-blur-300 rounded-b-box"
                                    )}
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

import Link from "next/link"
import Image from "next/image"
import cn from "clsx"
import temp from "@/static/brand/placeholder.webp"
import collectionsQuery from "@/lib/collectionsQuery"

export default async function CollectionDirectoryPage() {
    const collections = await collectionsQuery()

    return (
        <section className="mx-auto max-w-2xl space-y-12">
            <h1 className="text-center text-xl font-bold text-primary">
                Collections Directory
            </h1>
            <ul className={cn("grid gap-4 sm:gap-6", "grid-cols-2 md:grid-cols-3")}>
                {collections.map(({ node }) => {
                    const { id, handle, title, image } = node
                    return (
                        <li key={id}>
                            <Link
                                href={`collections/${handle}`}
                                className={cn(
                                    "card relative h-full",
                                    "text-primary transition-all",
                                    "hover:scale-105 hover:brightness-125",
                                    "active:scale-95"
                                )}
                            >
                                <Image
                                    src={image?.url || temp}
                                    alt={image?.altText || "placeholder image"}
                                    width={image?.width || 1024}
                                    height={image?.height || 1024}
                                    className="bg-glass rounded-box"
                                />
                                <div
                                    className={cn(
                                        "card-body",
                                        "absolute bottom-0 w-full",
                                        "p-1 sm:p-2",
                                        "bg-blur-100 rounded-b-box"
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

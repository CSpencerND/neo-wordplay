import Link from "next/link"
import Image from "next/image"
import cn from "clsx"
import temp from "@/static/brand/placeholder.webp"
import storefrontQuery from "@/lib/shopifyClient"
import collectionQuery from "./collectionQuery"
import blurLogo from "@/static/brand/wp4l-blur.webp"
import blurShirt from "@/static/brand/white-shirt-blur.webp"

export default async function Collections() {
    const edges = await storefrontQuery(collectionQuery)

    return (
        <section className="mx-auto max-w-2xl space-y-12">
            <h1 className="text-center text-xl font-bold text-primary">Collections Directory</h1>
            <ul className={cn("grid gap-4 sm:gap-6", "grid-cols-2 md:grid-cols-3")}>
                {edges.map(({ node }) => {
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
                                    alt={image?.altText || "temp"}
                                    width={image?.width || 1024}
                                    height={image?.height || 1024}
                                    placeholder="blur"
                                    blurDataURL={blurShirt.src}
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

import Image, { StaticImageData } from "next/image"
import cn from "clsx"
import temp from "@/static/brand/placeholder.webp"
import CollectionHeading from "./components/CollectionHeading"
import { SwatchGroup, SwatchButton } from "./components/Swatch"

import storefrontQuery, { productsQuery } from "@/lib/shopifyClient"

export default async function Collections() {
    const data = await storefrontQuery(productsQuery("creative-minds"))
    console.log(data)

    return (
        <section className="mx-auto max-w-2xl space-y-12">
            <CollectionHeading />
            <ul className={cn("grid gap-4 sm:gap-6", "grid-cols-2 md:grid-cols-3")}>
                {products.map(({ title, imgSrc, colors }, i) => {
                    return (
                        <li
                            key={i}
                            className={cn("bg-blur-100 card h-full", "transition hover:scale-105")}
                        >
                            <label
                                className={cn("transition", "hover:brightness-125 active:scale-95")}
                            >
                                <figure className="relative cursor-pointer">
                                    <Image
                                        src={imgSrc}
                                        alt="temp"
                                        className={cn("bg-glass rounded-t-box")}
                                    />
                                    <h2
                                        className={cn(
                                            "absolute bottom-0 left-0",
                                            "overflow-hidden text-ellipsis whitespace-nowrap",
                                            "w-full px-2 py-1 text-xs font-bold sm:text-sm",
                                            "bg-blur-clear text-base-content/80"
                                        )}
                                    >
                                        {title}
                                    </h2>
                                </figure>
                            </label>
                            <SwatchGroup>
                                <SwatchButton />
                                <SwatchButton />
                                <SwatchButton />
                                <SwatchButton />
                            </SwatchGroup>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

type ProductData = {
    title: string
    imgSrc: StaticImageData
    colors: string
}

const products: ProductData[] = Array(8).fill({
    title: "Product Title Hello World",
    imgSrc: temp,
    colors: "[ ] [ ] [ ] [ ]",
})

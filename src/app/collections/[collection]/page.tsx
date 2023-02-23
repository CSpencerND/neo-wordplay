import Link from "next/link"
import Image, { StaticImageData } from "next/image"
import cn from "clsx"
import temp from "@/static/brand/placeholder.webp"
import logo from "@/static/brand/wp4l.webp"
import CollectionHeading from "./PathName"

export default function Collections() {
    return (
        <section className="mx-auto max-w-2xl space-y-12">
            <CollectionHeading />
            <ul className={cn("grid gap-4 sm:gap-6", "grid-cols-2 md:grid-cols-3")}>
                {links.map(({ title, href, imgSrc }, i) => {
                    return (
                        <li key={i}>
                            <Link
                                href={href}
                                className={cn(
                                    "card relative h-full",
                                    "transition",
                                    "hover:scale-105 hover:brightness-150",
                                    "active:scale-90"
                                )}
                            >
                                <Image
                                    src={imgSrc}
                                    alt="temp"
                                    className={cn(
                                        "bg-grayscale rounded-box",
                                        imgSrc === logo && "h-full object-contain p-4"
                                    )}
                                />
                                <div
                                    className={cn(
                                        "card-body",
                                        "absolute bottom-0 w-full",
                                        "p-1 sm:p-2",
                                        "bg-blur-200 rounded-b-box"
                                    )}
                                >
                                    <h2 className="card-title mx-auto whitespace-nowrap text-sm text-primary">
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

type CollectionLinkData = {
    title: string
    href: string
    imgSrc: StaticImageData
}

const links: CollectionLinkData[] = [
    {
        title: "Staff Picks",
        href: "collections/staff-picks",
        imgSrc: temp,
    },
    {
        title: "Summer '22",
        href: "collections/summer-22",
        imgSrc: temp,
    },
    {
        title: "Mindset",
        href: "collections/mindset",
        imgSrc: temp,
    },
    {
        title: "Creativity",
        href: "collections/creativity",
        imgSrc: temp,
    },
    {
        title: "Lifestyle",
        href: "collections/lifestyle",
        imgSrc: temp,
    },
    {
        title: "See All",
        href: "collections/all",
        imgSrc: logo,
    },
]
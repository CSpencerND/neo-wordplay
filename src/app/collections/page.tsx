import Link from "next/link"
import Image, { StaticImageData } from "next/image"
import cn from "clsx"
import temp from "@/static/brand/placeholder.webp"
import logo from "@/static/brand/wp4l.webp"

export default function Collections() {
    return (
        <section className="mx-auto max-w-2xl space-y-12">
            <h1 className="text-center text-xl font-bold text-info">Collections Directory</h1>
            <ul className={cn("grid grid-cols-2 gap-2", "md:grid-cols-3 md:gap-6")}>
                {CollectionCards}
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
        title: "All",
        href: "collections/all",
        imgSrc: logo,
    },
]

const CollectionCards = links.map(({ title, href, imgSrc }, i) => {
    return (
        <li key={i}>
            <Link href={href} className="card relative">
                <Image src={imgSrc} alt="temp" className="bg-grayscale rounded-box" />
                <div
                    className={cn(
                        "card-body",
                        "absolute bottom-0 w-full p-1",
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
})

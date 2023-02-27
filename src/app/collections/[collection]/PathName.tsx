"use client"

import { usePathname } from "next/navigation"

const pathData: { [x: string]: string } = {
    "/collections/staff-picks": "Staff Picks",
    "/collections/summer-22": "Summer '22",
    "/collections/mindset": "Mindset",
    "/collections/lifestyle": "Lifestyle",
    "/collections/creativity": "Creativity",
    "/collections/catalog":"Full Catalog"
}

export default function CollectionHeading() {
    const pathname = usePathname() as string
    const title = pathData[pathname]

    return <h1 className="text-center text-xl font-bold text-primary">{title}</h1>
}

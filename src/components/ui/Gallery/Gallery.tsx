"use client"

import galleryImageData from "@/static/gallery/index"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Image from "next/image"

const galleryImages = galleryImageData.map(({ src, alt }, i) => {
    return <Image src={src} alt={alt} key={i} className="rounded-box shadow-box" />
})

export default function Gallery() {
    return (
        <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 360: 2, 1024: 3 }}>
            <Masonry gutter="1rem">{galleryImages}</Masonry>
        </ResponsiveMasonry>
    )
}

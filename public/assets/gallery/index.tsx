import { StaticImageData } from "next/image"

import blazin from "./blazin.webp"
import city from "./city.webp"
import creativity from "./creativity.webp"
import petty from "./petty.webp"
import responsibility from "./responsibility.webp"
import savage from "./savage.webp"

interface GalleryImage {
    src: StaticImageData
    alt: string
}

const galleryImageData: GalleryImage[] = [
    {
        src: blazin,
        alt: "Blazin'",
    },
    {
        src: city,
        alt: "City Vibes",
    },
    {
        src: creativity,
        alt: "Creativity",
    },
    {
        src: petty,
        alt: "Petty as f*ck",
    },
    {
        src: responsibility,
        alt: "Responsibility is why I drink",
    },
    {
        src: savage,
        alt: "Savage",
    },
]

export default galleryImageData

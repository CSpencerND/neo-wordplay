import Image from "next/image"
import cn from "clsx"

import hero from "@/static/brand/hero.webp"
import localFont from "@next/font/local"
const graffiti = localFont({
    src: "../../static/font/don_graffiti/DonGraffiti.otf",
})

export default function Hero() {
    return (
        <section className="hero text-primary-content">
            <Image src={hero} alt="We Play With Words" placeholder="blur" priority />
            <h1 className={cn(graffiti.className)}>We Play With Words</h1>
        </section>
    )
}

/** components */
import Image from "next/image"

/** assets */
import hero from "@/static/brand/hero.webp"
import localFont from "next/font/local"
const graffiti = localFont({
    src: "../../static/font/don_graffiti/DonGraffiti.otf",
})

/** utils */
import cn from "clsx"

export default function Hero() {
    return (
        <section className="hero overflow-hidden rounded-3xl shadow-box">
            <Image
                className="aspect-video max-h-[calc(100vh-196px)] object-cover object-top"
                src={hero}
                alt="We Play With Words"
                placeholder="blur"
                priority
            />
            <div
                aria-hidden
                className="hero-overlay bg-black/30"
            />
            <div className="hero-content">
                <h1
                    className={cn(graffiti.className, "text-3xl")}
                    style={{
                        textShadow: "1px 2px 2px black, -1px -2px 2px black",
                    }}
                >
                    We Play With Words
                </h1>
            </div>
        </section>
    )
}

/** components */
import Image from "next/image"

/** assets */
import hero from "@/static/brand/hero.webp"
import localFont from "@next/font/local"
const graffiti = localFont({
    src: "../../../static/font/don_graffiti/DonGraffiti.otf",
})

/** utils */
import cn from "clsx"

export default function Hero() {
    return (
        <div className="hero rounded-box text-primary-content shadow-box">
            <Image
                className={cn(
                    "rounded-box aspect-video",
                    "max-h-[calc(100dvh-196px)] object-cover object-top"
                )}
                src={hero}
                alt="We Play With Words"
                placeholder="blur"
                priority
            />
            <div aria-hidden className="hero-overlay rounded-box bg-opacity-30" />
            <div className="hero-content">
                <h1
                    className={cn(graffiti.className, "text-5xl")}
                    style={{
                        textShadow: "1px 2px 2px black, -1px -2px 2px black",
                    }}
                >
                    We Play With Words
                </h1>
            </div>
        </div>
    )
}

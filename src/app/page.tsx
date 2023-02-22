import Image from "next/image"
import Hero from "@/components/ui/Hero"
import Featured from "@/components/ui/Featured"
import Gallery from "@/components/ui/Gallery"
import cn from "clsx"

export default function Home() {
    return (
        <>
            <section>
                <Hero />
            </section>

            <section className="bg-blur-100 rounded-box space-y-6 py-6 shadow-box">
                <Featured />
            </section>

            <section className={cn("prose max-w-none", "relative")}>
                <Image
                    aria-hidden
                    src="/assets/effects/about-bg.svg"
                    alt="hidden"
                    width={300}
                    height={300}
                    className={cn("absolute inset-0 h-full w-full overflow-visible object-cover")}
                />
                <article className="relative z-10">
                    <h3 className="text-base md:text-lg">Why we love what we do</h3>
                    <p>
                        When we think about WORDPLAY4LYFE, what comes to mind is Artistic Expression
                        - being able to express yourself freely and not be judged. We use our
                        Imagination because the fact that you can come up with different ideas for
                        something that&apos;s yours is just amazing. The fact that you can daydream
                        about those different ideas and bring them to life is really exciting, which
                        is an excellent way to share my Creativeness with the rest of the world. We
                        want WORDPLAY4LYFE to represent Culture in all walks of life because without
                        culture there is no WORDPLAY4LYFE.
                    </p>
                    <p>
                        Artistic Expression, Imagination, Creativeness and Culture represents our
                        brand (AEICC)
                    </p>
                </article>
            </section>

            <section>
                <Gallery />
            </section>
        </>
    )
}

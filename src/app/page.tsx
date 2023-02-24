import type { Metadata } from "next"

import Hero from "./components/ui/Hero"
import Featured from "./components/ui/Featured"
import Gallery from "./components/ui/Gallery"

import cn from "clsx"

export default function Home() {
    return (
        <>
            <section>
                <Hero />
            </section>

            <section className="bg-blur-100 card space-y-6 py-6">
                <Featured />
            </section>

            <section
                style={{
                    backgroundImage: `url("/assets/effects/circle-scatter-haikei.svg")`,
                }}
            >
                {/* <section className={cn("bg-blur-100 card p-6")}> */}
                <article className="prose max-w-none">
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

import Hero from "./components/Hero"
import Featured from "./components/Featured"
import Gallery from "./components/Gallery"
import Blob from "./components/Blob"

export default function Home() {
    return (
        <>
            <section>
                <Hero />
            </section>

            <section className="bg-blur-200 card space-y-6 py-6">
                <Featured />
            </section>

            <section className="relative">
                <Blob size="md" opacity={30} />
                <Blob size="lg" placement="right" opacity={20} />
                <Blob size="sm" placement="bottom" opacity={50} />

                <article className="prose relative max-w-none space-y-6">
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

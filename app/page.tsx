import { Featured, Gallery, Hero, Statement } from "@/components/home"
import { Suspense } from "react"

import { galleryImageData, hero } from "@/static"
import font from "next/font/local"

const heroFont = font({
    src: "./static/font/don_graffiti/DonGraffiti.otf",
})

export default async function HomePage() {
    return (
        <>
            {/*@ts-expect-error Async Component*/}
            <Hero
                image={hero}
                font={heroFont}
                rounded
            />
            <Suspense>
                {/*@ts-expect-error Async Component*/}
                <Featured collectionHandle="staff-picks" />
            </Suspense>
            <Statement heading="Why we love what we do">
                <p>
                    When we think about WORDPLAY4LYFE what comes to mind is Artistic expression
                    which is being able to express yourself freely and not be judged. We use our
                    Imagination because the fact that you can come up with different ideas for
                    something that's yours is just amazing. The fact that you can daydream about
                    those different ideas and bring them to life is really exciting, which is an
                    excellent way to share my Creativeness with the rest of the world.We want
                    WORDPLAY4LYFE to represent Culture in all walks of life because without
                    culture there is no WORDPLAY4LYFE.
                </p>
                <p>
                    Artistic Expression, Imagination, Creativeness and Culture represents our
                    brand. (AEICC)
                </p>
            </Statement>
            <Gallery galleryImageData={galleryImageData} />
        </>
    )
}

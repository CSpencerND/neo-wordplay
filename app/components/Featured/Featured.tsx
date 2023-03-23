"use client"

import type { Product } from "@shopify/hydrogen-react/storefront-api-types"

/** components */
import AliceCarousel from "react-alice-carousel"
import ProductImage from "@/components/ProductImage"
import Link from "next/link"

/** utils */
import { useLoader } from "@/lib/hooks"
import { useRef } from "react"
import { useWindowSize } from "@react-hookz/web/esm/useWindowSize"

/** assets */
import { ChevronLeft, ChevronRight } from "react-iconly"

/** styles */
import "react-alice-carousel/lib/alice-carousel.css"
import "./carousel.css"

export default function Featured({ featured }: { featured: Product[] }) {
    const sliderRef = useRef<AliceCarousel>(null)
    const { width } = useWindowSize(undefined, true)
    const { LoadingSpinner, setLoading } = useLoader()

    const carouselItems = featured.map(({ featuredImage, title }) => (
        <ProductImage
            image={featuredImage}
            key={featuredImage?.id}
            title={title}
            onDragStart={(e) => e.preventDefault()}
        />
    ))

    return (
        <section className="bg-blur-200 card space-y-6 rounded-3xl py-6">
            <h2 className="text-center text-lg font-bold text-accent-content">
                Featured Items
            </h2>

            <LoadingSpinner />

            <AliceCarousel
                onInitialized={() => setLoading(false)}
                ref={sliderRef}
                items={carouselItems}
                infinite
                keyboardNavigation
                disableDotsControls
                disableButtonsControls
                mouseTracking
                paddingLeft={70}
                paddingRight={70}
                autoPlay
                autoPlayStrategy="all"
                autoPlayInterval={1250}
                innerWidth={width}
                responsive={{
                    0: {
                        items: 1,
                    },
                    640: {
                        items: 2,
                    },
                    1024: {
                        items: 3,
                    },
                    1280: {
                        items: 4,
                    },
                }}
            />
            <div className="flex items-center justify-evenly">
                <Link
                    href="collections/staff-picks"
                    className="btn-primary btn rounded-xl"
                >
                    See More
                </Link>

                <span className="flex gap-2">
                    <button
                        aria-controls="alice-carousel"
                        className="squircle btn-square btn-sm btn bg-base-100"
                        onClick={() => sliderRef?.current?.slidePrev() || null}
                    >
                        <ChevronLeft set="curved" />
                    </button>

                    <button
                        aria-controls="alice-carousel"
                        className="squircle btn-square btn-sm btn bg-base-100"
                        onClick={() => sliderRef?.current?.slideNext() || null}
                    >
                        <ChevronRight set="curved" />
                    </button>
                </span>
            </div>
        </section>
    )
}

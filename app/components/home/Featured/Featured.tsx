"use client"

import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import "./Featured.css"

import Product from "@/components/product"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

import { useHydrated, useLoader } from "@/lib/state"
import { useWindowSize } from "@react-hookz/web/esm/useWindowSize"
import { useRef } from "react"

import type { Image, Product as TProduct } from "@shopify/hydrogen-react/storefront-api-types"
import type { HTMLAttributes } from "react"

type FeaturedProps = {
    featured: TProduct[]
} & HTMLAttributes<HTMLElement>

export function FeaturedCollection({ featured, ...props }: FeaturedProps) {
    const { toggleLoading, LoadingSpinner } = useLoader()

    const sliderRef = useRef<AliceCarousel>(null)
    const width = useWindowSize(undefined, true).width

    const autoplay: boolean = useHydrated()

    const carouselItems = featured.map(({ featuredImage, title }, i) => (
        <Product.Card
            carouselItem
            key={i}
        >
            <Product.Image.Static
                key={featuredImage?.id}
                image={featuredImage as Image}
                title={title}
                imageProps={{
                    onDragStart: (e) => e.preventDefault(),
                }}
            />
            <Product.Title.Overlay rounded>
                <Product.Title
                    className="p-2"
                    title={title}
                    truncate
                    centered
                />
            </Product.Title.Overlay>
        </Product.Card>
    ))

    return (
        <section
            className="card bg-blur space-y-6 rounded-3xl bg-base-200/60 py-6"
            {...props}
        >
            <h2 className="text-center text-lg font-bold text-accent-content">
                Featured Items
            </h2>

            <LoadingSpinner />

            <AliceCarousel
                onInitialized={toggleLoading}
                ref={sliderRef}
                items={carouselItems}
                infinite
                keyboardNavigation
                disableDotsControls
                disableButtonsControls
                mouseTracking
                paddingLeft={70}
                paddingRight={70}
                autoPlay={autoplay}
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
                    className="btn-primary btn"
                >
                    See More
                </Link>

                <span className="flex gap-2">
                    <button
                        aria-controls="alice-carousel"
                        className="btn-square btn-sm rounded-lg btn bg-base-100"
                        onClick={() => sliderRef?.current?.slidePrev() || null}
                    >
                        <ChevronLeft />
                    </button>

                    <button
                        aria-controls="alice-carousel"
                        className="btn-square btn-sm btn rounded-lg bg-base-100"
                        onClick={() => sliderRef?.current?.slideNext() || null}
                    >
                        <ChevronRight />
                    </button>
                </span>
            </div>
        </section>
    )
}

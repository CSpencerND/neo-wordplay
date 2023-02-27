"use client"

/** components */
import Image from "next/image"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"

/** utils */
import { useRef } from "react"
import { useInnerWidth, useLoader } from "@/lib"
import cn from "clsx"

/** assets */
import temp from "@/static/brand/placeholder.webp"
import { ChevronRight, ChevronLeft } from "react-iconly"

export default function Featured() {
    const sliderRef = useRef<AliceCarousel>(null)
    const innerWidth = useInnerWidth()
    const { loaderComponent, setLoading } = useLoader()

    return (
        <>
            <h2 className="text-center text-lg font-bold text-info">Featured Items</h2>

            {loaderComponent}

            <AliceCarousel
                onInitialized={() => setLoading(false)}
                ref={sliderRef}
                items={images}
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
                innerWidth={innerWidth}
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
                <button
                    className={cn(
                        "btn",
                        "border-none btn-info",
                    )}
                >
                    See More
                </button>

                <span className="btn-group">
                    <button
                        aria-controls="alice-carousel"
                        className={cn(
                            "btn btn-square btn-sm",
                            "bg-neutral-content/20",
                            "hover:bg-neutral-content/40"
                        )}
                        onClick={() => sliderRef?.current?.slidePrev() || null}
                    >
                        <ChevronLeft set="curved" />
                    </button>

                    <button
                        aria-controls="alice-carousel"
                        onClick={() => sliderRef?.current?.slideNext() || null}
                        className={cn(
                            "btn btn-square btn-sm",
                            "bg-neutral-content/20",
                            "hover:bg-neutral-content/40"
                        )}
                    >
                        <ChevronRight set="curved" />
                    </button>
                </span>
            </div>
        </>
    )
}

const images = [
    <Image
        key={1}
        src={temp}
        alt="temp"
        onDragStart={(e) => e.preventDefault()}
        role="presentation"
        className="bg-glass rounded-box shadow-box"
    />,
    <Image
        key={2}
        src={temp}
        alt="temp"
        onDragStart={(e) => e.preventDefault()}
        role="presentation"
        className="bg-glass rounded-box shadow-box"
    />,
    <Image
        key={3}
        src={temp}
        alt="temp"
        onDragStart={(e) => e.preventDefault()}
        role="presentation"
        className="bg-glass rounded-box shadow-box"
    />,
    <Image
        key={4}
        src={temp}
        alt="temp"
        onDragStart={(e) => e.preventDefault()}
        role="presentation"
        className="bg-glass rounded-box shadow-box"
    />,
    <Image
        key={5}
        src={temp}
        alt="temp"
        onDragStart={(e) => e.preventDefault()}
        role="presentation"
        className="bg-glass rounded-box shadow-box"
    />,
    <Image
        key={6}
        src={temp}
        alt="temp"
        onDragStart={(e) => e.preventDefault()}
        role="presentation"
        className="bg-glass rounded-box shadow-box"
    />,
]

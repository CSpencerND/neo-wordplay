"use client"

/** components */
import Image from "next/image"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import Loader from "react-spinners/HashLoader"

/** utils */
import { useRef, useState, useEffect } from "react"
import cn from "clsx"

/** assets */
import temp from "@/static/brand/placeholder.webp"
import { ChevronRight, ChevronLeft } from "react-iconly"

export default function Featured() {
    const sliderRef = useRef<AliceCarousel>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [infinite, setInfinite] = useState<boolean>(false)

    useEffect(() => {
        setInfinite(true)
        return () => {
            setInfinite(false)
            setLoading(true)
        }
    }, [])

    return (
        <div className="bg-blur-100 rounded-box space-y-6 py-6 shadow-xl">
            <h2 className="text-center text-lg font-bold text-info/75">Featured Items</h2>

            <Loader
                className="mx-auto !h-36"
                color="#3abff8"
                size={72}
                loading={loading}
                aria-label="Loading Spinner"
                data-testid="loader"
            />

            <AliceCarousel
                onInitialized={() => setLoading(false)}
                ref={sliderRef}
                items={images}
                infinite={infinite}
                keyboardNavigation
                disableDotsControls
                disableButtonsControls
                mouseTracking
                paddingLeft={70}
                paddingRight={70}
                autoPlay
                autoPlayStrategy="all"
                autoPlayInterval={1250}
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
                        "border-none bg-info-content text-info",
                        "hover:bg-info hover:text-info-content"
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
        </div>
    )
}

const images = [
    <div className="rounded-box relative">
        <span className="rounded-box bg-grayscale absolute inset-0 z-40 h-full w-full" />
        <Image
            key={1}
            src={temp}
            alt="temp"
            onDragStart={(e) => e.preventDefault()}
            role="presentation"
            className="rounded-box relative z-50 backdrop-blur-sm"
        />
    </div>,
    <Image
        key={2}
        src={temp}
        alt="temp"
        onDragStart={(e) => e.preventDefault()}
        role="presentation"
        className="rounded-box bg-grayscale"
    />,
    <Image
        key={3}
        src={temp}
        alt="temp"
        onDragStart={(e) => e.preventDefault()}
        role="presentation"
        className="rounded-box bg-grayscale"
    />,
    <Image
        key={4}
        src={temp}
        alt="temp"
        onDragStart={(e) => e.preventDefault()}
        role="presentation"
        className="rounded-box bg-grayscale"
    />,
    <Image
        key={5}
        src={temp}
        alt="temp"
        onDragStart={(e) => e.preventDefault()}
        role="presentation"
        className="rounded-box bg-grayscale"
    />,
    <Image
        key={6}
        src={temp}
        alt="temp"
        onDragStart={(e) => e.preventDefault()}
        role="presentation"
        className="rounded-box bg-grayscale"
    />,
]

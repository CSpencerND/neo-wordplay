"use client"

import NextImage from "next/image"
import useProduct from "../../context/ProductContext"
import { useLoader } from "@/lib"
import cn from "clsx"

export default function ProductLabel() {
    const { loaderComponent, setLoading } = useLoader()
    const {
        openModal,
        currentImage,
        info: { title },
    } = useProduct()

    return (
        <label
            className="transition hover:brightness-105 active:scale-95"
            onClick={openModal}
        >
            <figure className="bg-glass rounded-t-box relative cursor-pointer">
                {loaderComponent}

                {currentImage !== null ? (
                    <NextImage
                        onLoadingComplete={() => setLoading(false)}
                        src={currentImage.url ?? ""}
                        alt={currentImage.altText ?? ""}
                        width={currentImage.width ?? 0}
                        height={currentImage.height ?? 0}
                        key={currentImage.id ?? ""}
                    />
                ) : null}
                <h2
                    className={cn(
                        "absolute bottom-0 left-0",
                        "overflow-hidden text-ellipsis whitespace-nowrap",
                        "w-full px-2 py-1 text-xs font-bold sm:text-sm",
                        "bg-blur-clear-sm text-base-content/80"
                    )}
                >
                    {title}
                </h2>
            </figure>
        </label>
    )
}

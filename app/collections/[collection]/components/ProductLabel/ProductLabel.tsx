"use client"

import NextImage from "next/image"
import useProduct from "../../context/ProductContext"
import { useLoader } from "@/lib"
import { useRouter, usePathname } from "next/navigation"
import cn from "clsx"
import { useEffect } from "react"

export default function ProductLabel() {
    const { loaderComponent, setLoading } = useLoader()
    const {
        openModal,
        currentImage,
        info: { title, handle },
    } = useProduct()

    const router = useRouter()
    const pathname = usePathname()

    const handleLabelClick = () => {
        const idPath = `${pathname}#${handle}`

        openModal()
        router.push(idPath)
    }

    useEffect(() => {
        const hash = window.location.hash
        if (hash !== `#${handle}`) return
        openModal()
    }, [])

    return (
        <label
            id={handle}
            className="transition hover:brightness-105 active:scale-95"
            onClick={handleLabelClick}
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
                        "w-full px-2 py-1 text-xs font-bold lg:text-sm",
                        "bg-blur-clear-sm text-base-content/80"
                    )}
                >
                    {title}
                </h2>
            </figure>
        </label>
    )
}

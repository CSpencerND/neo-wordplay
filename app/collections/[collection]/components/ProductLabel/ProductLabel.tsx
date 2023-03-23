"use client"

// import useProduct from "../../context/ProductContext"
import ProductImage from "@/components/ProductImage"
import { useLoader } from "@/lib/hooks"
import temp from "@/static/brand/placeholder.webp"
import cn from "clsx"
import { info } from "console"
import { usePathname, useRouter } from "next/navigation"
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
        router.push(idPath)

        setTimeout(() => {
            openModal()
        }, 300)
    }

    useEffect(() => {
        const hash = window.location.hash
        if (hash !== `#${handle}`) return
        openModal()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const nullImage = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'%3E%3C/svg%3E`

    return (
        <label
            id={handle}
            className="transition hover:brightness-105 active:scale-95"
            onClick={handleLabelClick}
        >
            <figure className="bg-glass rounded-t-box relative cursor-pointer">
                {loaderComponent}

                <ProductImage
                    image={currentImage}
                    title={title}
                    key={currentImage.id}
                    onLoadingComplete={() => setLoading(false)}
                />

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

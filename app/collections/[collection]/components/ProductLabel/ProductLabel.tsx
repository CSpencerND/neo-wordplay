"use client"

import ProductImage from "@/components/ProductImage"
import useProduct, { useLoader } from "@/lib/hooks"
import { useMountEffect } from "@react-hookz/web"
import { usePathname, useRouter } from "next/navigation"

export default function ProductLabel() {
    const { LoadingSpinner, setLoading } = useLoader()
    const currentImage = useProduct((s) => s.currentImage)
    const setModalOpen = useProduct((s) => s.setModalOpen)
    const title = useProduct((s) => s.product.title!)
    const handle = useProduct((s) => s.product.handle)

    const router = useRouter()
    const pathname = usePathname()

    const handleModalOpen = () => {
        const idPath = `${pathname}#${handle}`
        router.push(idPath)

        setTimeout(() => {
            setModalOpen()
        }, 300)
    }

    useMountEffect(() => {
        const hash = window.location.hash
        if (hash !== `#${handle}`) return
        setModalOpen()
    })

    return (
        <label
            id={title}
            className="relative cursor-pointer transition hover:scale-105 active:scale-95"
            onClick={handleModalOpen}
        >
            <LoadingSpinner />

            <ProductImage
                image={currentImage}
                title={title}
                key={currentImage.id}
                rounded="top"
                onLoadingComplete={() => setLoading(false)}
            />
            <ProductTitle />
        </label>
    )
}

function ProductTitle() {
    const title = useProduct((s) => s.product.title!)
    return (
        <div
            className={`
                bg-blur-300 card-body
                absolute bottom-0 w-full
                border-t border-base-100 p-1
            `}
        >
            <h2
                className={`
                    overflow-hidden text-ellipsis whitespace-nowrap
                    text-xs font-bold text-primary-content
                `}
            >
                {title}
            </h2>
        </div>
    )
}

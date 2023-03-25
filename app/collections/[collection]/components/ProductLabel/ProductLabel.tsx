"use client"

import ProductImage from "@/components/ProductImage"
import useProduct, { useLoader, useLog } from "@/lib/hooks"
import { useEffect } from "react"
// import { usePathname, useRouter } from "next/navigation"
// import { useEffect } from "react"

type Title = { title: string }

export default function ProductLabel({ title }: Title) {
    const { LoadingSpinner, setLoading } = useLoader()
    const currentImage = useProduct((s) => s.currentImage)
    
    // const router = useRouter()
    // const pathname = usePathname()

    // const handleLabelClick = () => {
    //     const idPath = `${pathname}#${handle}`
    //     router.push(idPath)

    //     setTimeout(() => {
    //         openModal()
    //     }, 300)
    // }

    // useEffect(() => {
    //     const hash = window.location.hash
    //     if (hash !== `#${handle}`) return
    //     openModal()
    // }, [])

    return (
        <label
            id={title}
            className="relative transition hover:scale-105 active:scale-95"
            // onClick={handleLabelClick}
        >
            <LoadingSpinner />

            <ProductImage
                image={currentImage}
                title={title}
                key={currentImage.id}
                rounded={false}
                onLoadingComplete={() => setLoading(false)}
            />
            <ProductTitle title={title} />
        </label>
    )
}

function ProductTitle({ title }: Title) {
    return (
        <div
            className={`
                bg-blur-300 card-body
                absolute bottom-0 w-full
                border-t border-base-100
                p-1 sm:p-2
            `}
        >
            <h2
                className={`
                    overflow-hidden text-ellipsis whitespace-nowrap
                    text-xs font-bold text-primary-content
                    lg:text-sm
                `}
            >
                {title}
            </h2>
        </div>
    )
}

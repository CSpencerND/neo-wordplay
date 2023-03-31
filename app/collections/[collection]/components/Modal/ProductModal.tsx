"use client"

import CloseButton from "@/components/CloseButton"
import { ProductPrice } from "@shopify/hydrogen-react"
import { AddToCart, ModalProductImage, ModalWrapper, SizeSelect, Swatch } from "./_Modal"

import ProductDescription from "@/components/ProductDescription"
import useProduct from "@/lib/hooks/useProduct"
import { usePathname, useRouter } from "next/navigation"

export default function ProductModal() {
    const title = useProduct((s) => s.product.title)
    const data = useProduct((s) => s.product)
    const setModalClose = useProduct((s) => s.setModalClose)

    const router = useRouter()
    const pathname = usePathname()
    const setPathName = () => {
        if (pathname) {
            router.push(pathname)
        }
    }

    return (
        <ModalWrapper>
            <div
                className="absolute top-2 right-2"
                onClick={setPathName}
            >
                <CloseButton onClick={setModalClose} />
            </div>
            <section className="h-fit overflow-hidden rounded-2xl">
                <ModalProductImage />
            </section>
            <section className="card-body space-y-3 p-0 text-sm font-bold lg:text-sm">
                <div className="space-y-2">
                    <h2>{title}</h2>
                    <ProductPrice
                        className="text-xs font-bold"
                        as="p"
                        data={data}
                        priceType="regular"
                        valueType="max"
                        withoutTrailingZeros
                    />
                </div>

                <Swatch className="ml-0.5 [&_#swatchColor]:h-7 [&_#swatchColor]:w-7" />

                <SizeSelect />

                <AddToCart />

                <ProductDescription />

                <div onClick={setPathName}>
                    <CloseButton
                        icon="arrowLeft"
                        onClick={setModalClose}
                    />
                </div>
            </section>
        </ModalWrapper>
    )
}

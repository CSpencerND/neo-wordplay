"use client"

import CloseButton from "@/components/CloseButton"
import { Dialog } from "@headlessui/react"
import { ProductPrice } from "@shopify/hydrogen-react"
import Modal from "./_Modal"

import useProduct from "@/lib/hooks/useProduct"
import { useIsomorphicLayoutEffect, useUpdateEffect } from "@react-hookz/web"
import { useProduct as useShopifyProduct } from "@shopify/hydrogen-react"
import { sanitize } from "dompurify"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"

export default function ProductModal() {
    const title = useProduct((s) => s.product.title)
    const data = useProduct((s) => s.product)

    const sanitizedDescription = useSanitizedDescription()
    const selectedOptions = useSelectedOptions()

    const router = useRouter()
    const pathname = usePathname()
    const setPathName = () => {
        if (pathname) {
            router.push(pathname)
        }
    }

    return (
        <Modal.Wrapper>
            <div
                className="absolute top-2 right-2"
                onClick={setPathName}
            >
                <CloseButton />
            </div>
            <section>
                <Modal.Image />
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
                <Modal.Swatch className="ml-0.5 [&_#swatchColor]:h-7 [&_#swatchColor]:w-7" />
                <Modal.Size />
                <Dialog.Description
                    as="article"
                    className="prose [&_strong]:text-accent-content"
                    dangerouslySetInnerHTML={{
                        __html: sanitizedDescription,
                    }}
                />
                <div onClick={setPathName}>
                    <CloseButton icon="arrowLeft" />
                </div>
            </section>
        </Modal.Wrapper>
    )
}

function useSanitizedDescription() {
    const { descriptionHtml } = useProduct((s) => s.product)
    const [sanitizedDescription, setSanitezedDescription] = useState<string>("")
    useIsomorphicLayoutEffect(() => {
        if (!descriptionHtml) return
        const desc = sanitize(descriptionHtml)
        setSanitezedDescription(desc)
    }, [])
    return sanitizedDescription
}

function useSelectedOptions() {
    const { setSelectedOption, selectedOptions } = useShopifyProduct()

    const selectedColor = useProduct((s) => s.selectedColor)
    useUpdateEffect(() => {
        if (!selectedColor) return
        setSelectedOption("Color", selectedColor)
    }, [selectedColor])

    const selectedSize = useProduct((s) => s.selectedSize)
    useUpdateEffect(() => {
        if (!selectedSize) return
        setSelectedOption("Size", selectedSize)
    }, [selectedSize])

    return selectedOptions
}


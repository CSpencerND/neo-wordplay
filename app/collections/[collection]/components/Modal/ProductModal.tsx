"use client"

import CloseButton from "@/components/CloseButton"
import { Dialog } from "@headlessui/react"
import { AddToCartButton, ProductPrice } from "@shopify/hydrogen-react"
import { Plus } from "react-iconly"
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
    const setModalClose = useProduct((s) => s.setModalClose)

    const sanitizedDescription = useSanitizedDescription()

    const router = useRouter()
    const pathname = usePathname()
    const setPathName = () => {
        if (pathname) {
            router.push(pathname)
        }
    }

    const { variantName, variantID } = useSelectedOptions()

    return (
        <Modal.Wrapper>
            <div
                className="absolute top-2 right-2"
                onClick={setPathName}
            >
                <CloseButton onClick={setModalClose} />
            </div>
            <section className="h-fit overflow-hidden rounded-2xl">
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

                <span className="text-xs text-info">Selected: {variantName}</span>

                <AddToCartButton
                    variantId={variantID}
                    accessibleAddingToCartLabel="Item is being added to cart with selected color and size"
                    className="btn-secondary btn-block btn-sm btn flex gap-2 text-xs shadow-box"
                >
                    <Plus set="light" />
                    Add to Bag
                </AddToCartButton>

                {/* TODO: <BuyNowButton /> */}

                <Dialog.Description
                    as="article"
                    className="prose [&_strong]:text-accent-content"
                    dangerouslySetInnerHTML={{
                        __html: sanitizedDescription,
                    }}
                />
                <div onClick={setPathName}>
                    <CloseButton icon="arrowLeft" onClick={setModalClose} />
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

type VariantData = {
    variantName: string | undefined
    variantID: string | undefined
}

function useSelectedOptions(): VariantData {
    const { variants } = useShopifyProduct()
    const [data, setData] = useState<VariantData>({
        variantName: variants?.[0]?.selectedOptions?.[0]?.name,
        variantID: variants?.[0]?.id,
    })

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

    useUpdateEffect(() => {
        if (!selectedOptions) return

        const optionsString = JSON.stringify(
            Object.entries(selectedOptions).map(([key, value]) => {
                return { name: key, value: value }
            })
        )

        variants?.forEach((variant) => {
            if (!variant) return
            const variantString = JSON.stringify(variant?.selectedOptions)
            if (optionsString === variantString) {
                const data = {
                    variantName: variant.title,
                    variantID: variant.id,
                } as VariantData
                setData(data)
            }
        })
    }, [selectedOptions])

    return data
}

"use client"

import CloseButton from "@/components/CloseButton"
import { Dialog } from "@headlessui/react"
import { ProductPrice } from "@shopify/hydrogen-react"
import SizeSelect from "../SizeSelect"
import Swatch from "../Swatch"
import ModalProductImage from "./_ModalProductImage"
import ModalWrapper from "./_ModalWrapper"

import useProduct from "@/lib/hooks/useProduct"
import { useMountEffect } from "@react-hookz/web"
import { sanitize } from "dompurify"
import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"

export default function ProductModal() {
    const title = useProduct((s) => s.product.title)
    const data = useProduct((s) => s.product)

    const [sanitizedDescription, setSanitezedDescription] = useState<string>("")
    useMountEffect(() => {
        if (!data.descriptionHtml) return
        const desc = sanitize(data.descriptionHtml)
        setSanitezedDescription(desc)
    })

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
                <CloseButton />
            </div>
            <section>
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
        </ModalWrapper>
    )
}

// <div className="rounded-box h-fit overflow-hidden">
//     <ProductImage />
// </div>
// <div className="card-body p-0">
//     <ProductTitle />
//     <Price price={price} />
//     {/* <div className="flex flex-row items-center justify-between"> */}
//     <ColorSelect />
//     {/* </div> */}
//     <SizeSelect />
//     <AddToBag
//         size={sizeOptionString}
//         color={colorOptionString}
//         onClick={handleAddToBag}
//         variantID={variantID}
//     />
//     <Description />
//     <CloseButtonArrow handleClose={handleClose} />
// </div>

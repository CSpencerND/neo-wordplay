"use client"

import CloseButton from "@/components/CloseButton"
import useProduct from "@/lib/hooks/useProduct"
import { ProductPrice } from "@shopify/hydrogen-react"
import Swatch from "../Swatch"
import ModalProductImage from "./_ModalProductImage"
import ModalWrapper from "./_ModalWrapper"
import SizeSelect from "../SizeSelect"

export default function ProductModal() {
    const title = useProduct((s) => s.product.title)
    const data = useProduct((s) => s.product)

    return (
        <ModalWrapper>
            <div className="absolute top-1 right-1">
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

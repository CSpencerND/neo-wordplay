"use client"

import CloseButton from "@/components/CloseButton"
// import useProduct from "@/lib/hooks/useProduct"
import ModalWrapper from "./_ModalWrapper"

// export default function ProductModal({price}: {price: ReactNode}) {}
export default function ProductModal() {
    return (
        <ModalWrapper>
            <div className="absolute top-1 right-1">
                <CloseButton />
            </div>
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

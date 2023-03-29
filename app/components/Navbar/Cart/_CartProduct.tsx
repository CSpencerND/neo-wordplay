"use client"

import ProductImage from "@/components/ProductImage"
import Link from "next/link"
import {
    CartLineQuantity,
    CartCost,
    CartCheckoutButton,
    CartLineQuantityAdjustButton,
    Money,
} from "@shopify/hydrogen-react"

import { CartLineProvider, useCart, useCartLine } from "@shopify/hydrogen-react"

import type { CartLine, Image } from "@shopify/hydrogen-react/storefront-api-types"
import type { HTMLAttributes } from "react"
import type Children from "types"

export default function CartProducts() {
    const { lines } = useCart()

    return (
        <ul
            role="list"
            className="divide-y divide-base-100"
        >
            {lines?.map((line) => {
                if (!line) throw new Error("No line found!")
                return (
                    <CartLineProvider
                        line={line}
                        key={line.id}
                    >
                        <CartLineItem />
                    </CartLineProvider>
                )
            })}
        </ul>
    )
}

function CartLineItem() {
    const { merchandise, quantity, cost } = useCartLine() as CartLine
    const { product, title: variantTitle, image, price } = merchandise
    const { title: productTitle, handle } = product
    const { totalAmount, subtotalAmount, amountPerQuantity } = cost

    const productURL = `/collections/${handle}`

    return (
        <CartItem className="flex py-4">
            <ProductImage
                containerProps={{ className: "w-1/4" }}
                image={image}
                title={productTitle}
            />

            <CartItemBody>
                <div className="flex items-baseline justify-between">
                    <h3 className="text-sm">
                        {/* <Link href={productURL}>{productTitle}</Link> */}
                        {productTitle}
                    </h3>
                    <Money
                        as="span"
                        data={price}
                    />
                </div>

                <div className="mt-1">
                    <span>{variantTitle}</span>
                </div>

                <div className="flex flex-1 items-end justify-between">
                    <p className="">
                        <span>Qty </span>
                        <span>{quantity}</span>
                    </p>

                    <div className="flex">
                        <button
                            type="button"
                            className="font-medium text-secondary-content hover:text-opacity-80"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </CartItemBody>
        </CartItem>
    )
}

function CartItemBody({ children }: Children) {
    return <div className="ml-4 flex flex-1 flex-col text-xs">{children}</div>
}

function CartItem({ children, ...props }: Children & HTMLAttributes<HTMLLIElement>) {
    return <li {...props}>{children}</li>
}

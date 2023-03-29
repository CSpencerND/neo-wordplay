"use client"

// TODO: Add Transition to each CartItem just like the NavMenu

import ProductImage from "@/components/ProductImage"
import { CartLineQuantity, CartLineQuantityAdjustButton, Money } from "@shopify/hydrogen-react"
import NextImage from "next/image"
import Link from "next/link"
import { Delete, Plus } from "react-iconly"
import { Minus } from "@/static"
import { Transition } from "@headlessui/react"

import { CartLineProvider, useCart, useCartLine } from "@shopify/hydrogen-react"

import type { CartLine } from "@shopify/hydrogen-react/storefront-api-types"
import type { HTMLAttributes } from "react"
import type Children from "types"

const baseDelay = 300

export default function CartProducts() {
    const { lines } = useCart()

    return (
        <ul
            role="list"
            className="divide-y divide-base-100"
        >
            {lines?.map((line, i) => {
                if (!line) throw new Error("No line found!")
                const delay = `${baseDelay + i * 50}ms`

                return (
                    <Transition
                        appear
                        key={line.id}
                        enter="transition-all ease-out"
                        enterFrom="opacity-0 translate-x-6"
                        enterTo="opacity-100 translate-x-0"
                        leave="transition-all"
                        leaveFrom="opacity-100 translate-x-0"
                        leaveTo="opacity-0 translate-x-6"
                        style={{ transitionDelay: delay }}
                    >
                        <CartLineProvider line={line}>
                            <CartLineItem />
                        </CartLineProvider>
                    </Transition>
                )
            })}
        </ul>
    )
}

function CartLineItem() {
    const { merchandise } = useCartLine() as CartLine
    const { product, title: variantTitle, image, price } = merchandise
    const { title: productTitle, handle } = product

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
                    <h3 className="w-2/3 overflow-hidden text-ellipsis whitespace-nowrap text-sm">
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

                <div className="relative flex flex-1 items-end justify-between">
                    <p className="">
                        <span>Qty </span>
                        <CartLineQuantity />
                    </p>

                    <div className="relative -bottom-1.5 grid grid-cols-3 gap-3">
                        <CartLineQuantityAdjustButton
                            adjust="decrease"
                            className="btn-secondary btn-square btn-xs btn rounded-md"
                        >
                            <span className="sr-only">Decrease Quantity</span>
                            <NextImage
                                className="pl-[1px]"
                                src={Minus}
                                alt="minus"
                            />
                        </CartLineQuantityAdjustButton>

                        <CartLineQuantityAdjustButton
                            adjust="increase"
                            className="btn-secondary btn-square btn-xs btn rounded-md"
                        >
                            <span className="sr-only">Increase Quantity</span>
                            <Plus set="light" />
                        </CartLineQuantityAdjustButton>

                        <CartLineQuantityAdjustButton
                            adjust="remove"
                            className="btn-secondary btn-square btn-xs btn rounded-md"
                        >
                            <span className="sr-only">Remove Item</span>
                            <Delete set="light" />
                        </CartLineQuantityAdjustButton>
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

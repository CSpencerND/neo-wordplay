"use client"

import Cart from "./_Cart"

// import { useUpdateEffect } from "@react-hookz/web"
// import { useCart } from "@shopify/hydrogen-react"

export default function ShoppingCart() {
    // const { status, error } = useCart()
    // useUpdateEffect(() => {
    //     if (error) {
    //         alert(error)
    //     }
    //     
    //     console.log("Cart status changed", status)
    // }, [status, error])

    return (
        <>
            <Cart.Button />
            <Cart.Wrapper>
                <Cart.Header />
                <Cart.Body>
                    <Cart.Products />
                </Cart.Body>
                <Cart.Footer />
            </Cart.Wrapper>
        </>
    )
}

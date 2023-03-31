"use client"

import Cart from "./_Cart"

export default function ShoppingCart() {
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

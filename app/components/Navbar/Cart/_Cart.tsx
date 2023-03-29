import CartBody from "./_CartBody"
import CartButton from "./_CartButton"
import CartFooter from "./_CartFooter"
import CartHeader from "./_CartHeader"
import CartProducts from "./_CartProduct"
import CartWrapper from "./_CartWrapper"

function Cart({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}

Cart.Body = CartBody
Cart.Button = CartButton
Cart.Footer = CartFooter
Cart.Header = CartHeader
Cart.Products = CartProducts
Cart.Wrapper = CartWrapper

export default Cart

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

// export function Cart() {
//     const [isShowing, setIsShowing] = useState<boolean>(false)

//     const { status, totalQuantity, lines, cost: totalCost } = useCart()
//     const { cost, quantity, attributes, merchandise } = useCartLine()

//     useEffect(() => {
//         // console.log(JSON.stringify({ status, cost, lines }, null, 2))
//     }, [status, lines, totalCost])

//     return (
//         <>
//             <button
//                 className="btn-ghost btn-square btn"
//                 onClick={() => setIsShowing((isShowing) => !isShowing)}
//             >
//                 <div className="indicator">
//                     <CartIcon set="curved" />
//                     <span className="badge-accent badge badge-sm indicator-item h-4 w-5">
//                         {totalQuantity}
//                     </span>
//                 </div>
//             </button>

//             <Transition show={isShowing}>
//                 <Transition.Child
//                     className={cn(
//                         "absolute top-0 right-0 z-50",
//                         "flex h-screen min-w-[75vw] flex-row",
//                         "border-r border-base-200 bg-black/60"
//                     )}
//                     enter="transition ease-out duration-300 transform"
//                     enterFrom="translate-x-[100vw]"
//                     enterTo="translate-x-0"
//                     leave="transition ease-out duration-300 transform"
//                     leaveFrom="translate-x-0"
//                     leaveTo="translate-x-[100vw]"
//                 >
//                     <div className="w-full">
//                         <header className="bg-blur-300 w-full border-b border-b-base-100">
//                             <div className="flex flex-row items-center justify-between p-4">
//                                 <h2 className="">In Your Bag</h2>
//                                 <button
//                                     className={`
//                                         btn-ghost btn-square btn-sm btn
//                                         text-primary-content hover:bg-primary-focus
//                                     `}
//                                     onClick={() => setIsShowing(false)}
//                                 >
//                                     <ArrowRightSquare />
//                                 </button>
//                             </div>
//                         </header>
//                         <ul
//                             id="navMenu"
//                             tabIndex={0}
//                             className="menu mt-4 [&_*]:hover:cursor-default [&_*]:hover:bg-inherit"
//                         >
//                             {lines?.map((line) => {
//                                 if (!line) return
//                                 return (
//                                     <CartLineProvider
//                                         key={line.id}
//                                         line={line}
//                                     >
//                                         <Transition.Child
//                                             as="li"
//                                             // key={i}
//                                             enter={cn("transition-all ease-out")}
//                                             enterFrom="opacity-0 translate-x-6"
//                                             enterTo="opacity-100 translate-x-0"
//                                             leave="transition-all"
//                                             leaveFrom="opacity-100 translate-x-0"
//                                             leaveTo="opacity-0 translate-x-6"
//                                             // style={{ transitionDelay: delay }}
//                                         >
//                                         </Transition.Child>
//                                     </CartLineProvider>
//                                 )
//                             })}
//                         </ul>
//                         <footer></footer>
//                     </div>
//                 </Transition.Child>
//                 <Transition.Child
//                     as="label"
//                     onClick={() => setIsShowing(false)}
//                     className={cn(
//                         "absolute top-0 right-0",
//                         "h-screen w-screen",
//                         "after-blur-clear",
//                         "hover:cursor-pointer"
//                     )}
//                     enter="transition-opacity duration-75"
//                     enterFrom="opacity-0"
//                     enterTo="opacity-100"
//                     leave="transition-opacity duration-150"
//                     leaveFrom="opacity-100"
//                     leaveTo="opacity-0"
//                 />
//             </Transition>
//         </>
//     )
// }

import { create } from "zustand"

type CartStore = {
    isCartOpen: boolean
    setCartOpen: () => void
    setCartClose: () => void
}

const useCartStore = create<CartStore>()((set) => ({
    isCartOpen: true,
    setCartOpen: () => set({ isCartOpen: true }),
    setCartClose: () => set({ isCartOpen: false }),
}))

export default useCartStore

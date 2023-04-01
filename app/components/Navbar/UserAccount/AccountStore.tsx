import { create } from "zustand"

type AccountStore = {
    isAccountShown: boolean
    setAccountShown: () => void
    setAccountHidden: () => void
}

const useAccount = create<AccountStore>()((set) => ({
    isAccountShown: false,
    setAccountShown: () => set({ isAccountShown: true }),
    setAccountHidden: () => set({ isAccountShown: false }),
}))

export default useAccount

"use client"

import { Dialog } from "@headlessui/react"
import { User as LoginIcon } from "react-iconly"
import AccountModalWrapper from "./_AccountModalWrapper"

import CloseButton from "@/components/CloseButton"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Link from "next/link"
import useAccount from "./AccountStore"

const queryClient = new QueryClient()

export default function UserAccount() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <AccountButton />
                {/*     <Example /> */}
                <LoginModal />
            </QueryClientProvider>
        </>
    )
}

function AccountButton() {
    const setAccountShown = useAccount((s) => s.setAccountShown)
    return (
        <button
            className="btn-ghost btn-square btn rounded-md"
            onClick={setAccountShown}
        >
            <LoginIcon set="light" />
        </button>
    )
}

function LoginModal() {
    const setAccountHidden = useAccount((s) => s.setAccountHidden)

    return (
        <AccountModalWrapper>
            <Dialog.Panel className="bg-blur-100 relative transform overflow-hidden rounded-2xl shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="absolute top-2 right-2">
                    <CloseButton onClick={setAccountHidden} />
                </div>
                {/* <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4"> */}
                    {/* <div className="sm:flex sm:items-start"> */}
                    {/*     <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"> */}
                            {/* <Dialog.Title */}
                            {/*     as="h3" */}
                            {/*     className="text-base font-semibold leading-6" */}
                            {/* > */}
                            {/*     Deactivate account */}
                            {/* </Dialog.Title> */}
                            {/* <div className="mt-2"> */}
                            {/*     <p className="text-sm"> */}
                            {/*         Are you sure you want to deactivate your account? All of */}
                            {/*         your data will be permanently removed. This action cannot be */}
                            {/*         undone. */}
                            {/*     </p> */}
                            {/* </div> */}
                        {/* </div> */}
                    {/* </div> */}
                {/* </div> */}
                <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <Link
                        className="btn-secondary btn-block btn-sm btn"
                        // onClick={setAccountHidden}
                        href="https://shopify.com/59552858306/account?locale=en"
                    >
                        Register/Login
                    </Link>
                </div>
            </Dialog.Panel>
        </AccountModalWrapper>
    )
}

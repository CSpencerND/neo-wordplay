import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"

import useAccount from "./AccountStore"

import Children from "types"

export default function AccountModalWrapper({ children }: Children) {
    const isAccountShown = useAccount((s) => s.isAccountShown)
    const setAccountHidden = useAccount((s) => s.setAccountHidden)

    return (
        <Transition
            appear
            show={isAccountShown}
            as={Fragment}
        >
            <Dialog
                // id={handle}
                as="div"
                className="relative z-40"
                onClose={setAccountHidden}
            >
                {/** overlay */}
                <Transition.Child
                    as="div"
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    aria-hidden="true"
                    className="bg-blur-black fixed inset-0"
                />

                <div
                    role="dialog"
                    className="fixed inset-0 grid place-items-center overflow-y-auto"
                >
                    <Transition.Child
                        as="div"
                        className="flex items-center justify-center p-4 text-center"
                        // enter="ease-out duration-300"
                        // enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        // enterTo="opacity-100 translate-y-0 sm:scale-100"
                        // leave="ease-in duration-200"
                        // leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        // leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"

                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        {children}
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    )
}

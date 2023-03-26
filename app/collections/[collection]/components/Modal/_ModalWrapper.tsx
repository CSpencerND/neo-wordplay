import useProduct from "@/lib/hooks/useProduct"
import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"
import type Children from "types"

export default function ModalWrapper({ children }: Children) {
    const isModalOpen = useProduct((s) => s.isModalOpen)
    const setModalClose = useProduct((s) => s.setModalClose)
    const handle = useProduct((s) => s.product.handle)

    return (
        <Transition
            appear
            show={isModalOpen}
            as={Fragment}
        >
            <Dialog
                id={handle}
                as="div"
                className="relative z-40"
                onClose={setModalClose}
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
                    className="fixed inset-0 overflow-y-auto"
                >
                    <Transition.Child
                        as="div"
                        className="flex items-center justify-center p-4 text-center"
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel
                            className={`
                                bg-blur-100 card rounded-box flex max-w-xs
                                transform flex-col gap-6 overflow-hidden
                                p-6 pt-12 text-left align-middle shadow-box transition-all
                                lg:card-side sm:max-w-sm lg:max-w-xl lg:flex-row xl:max-w-3xl
                            `}
                        >
                            {children}
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    )
}

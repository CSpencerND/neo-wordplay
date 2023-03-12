"use client"

import type { ProductEdge, Product, Image } from "@shopify/hydrogen-react/storefront-api-types"

/** components */
import { ProductProvider } from "@shopify/hydrogen-react"
import { RadioGroup, Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"
import NextImage from "next/image"
import { CloseSquare } from "react-iconly"

/** utils */
// import temp from "@/static/brand/placeholder.webp"
import cn from "clsx"
import { useState } from "react"
import { useLoader } from "@/lib"
import { useProduct, flattenConnection } from "@shopify/hydrogen-react"

export default function Products({ products }: { products: ProductEdge[] }) {
    return (
        <>
            {products.map(({ node }) => {
                const { id, title, handle, images, descriptionHtml, metafield } =
                    node satisfies Product

                const swatchColors: string[] = JSON.parse(metafield!.value)
                const imageArray = flattenConnection(images)

                return (
                    <li
                        key={id}
                        className={cn("bg-blur-100 card h-full", "transition hover:scale-105")}
                    >
                        <ProductProvider data={node}>
                            <Product
                                id={id}
                                title={title}
                                handle={handle}
                                images={imageArray}
                                descriptionHtml={descriptionHtml}
                                swatchColors={swatchColors}
                            />
                        </ProductProvider>
                    </li>
                )
            })}
        </>
    )
}

interface ProductProps {
    id?: string
    title: string
    handle?: string
    images: Image[]
    descriptionHtml?: string
    swatchColors: string[]
}

function Product({ title, images, descriptionHtml, swatchColors }: ProductProps) {
    /** image setting */
    const [currentImage, setCurrentImage] = useState<Image | null>(images[0])

    /** option setting */
    const { options, setSelectedOption } = useProduct()
    const colorOptions = options?.find((option) => option?.name === "Color")?.values as string[]
    const [selectedColor, setSelectedColor] = useState<string>(colorOptions[0])
    // const sizeOptions = options?.find((option) => option?.name === "Size")?.values

    /** modal */
    const [isOpen, setIsOpen] = useState(false)
    const closeModal = () => setIsOpen(false)
    const openModal = () => setIsOpen(true)

    /** utility */
    const { loaderComponent, setLoading } = useLoader()

    return (
        <>
            <label
                className="transition hover:brightness-105 active:scale-95"
                onClick={openModal}
            >
                <figure className="bg-glass rounded-t-box relative cursor-pointer">
                    {loaderComponent}

                    {currentImage !== null ? (
                        <NextImage
                            onLoadingComplete={() => setLoading(false)}
                            src={currentImage.url}
                            alt={currentImage.altText || "placeholder image"}
                            width={currentImage.width || 1024}
                            height={currentImage.height || 1024}
                            key={currentImage.id}
                            onChange={() => {}}
                        />
                    ) : null}
                    <h2
                        className={cn(
                            "absolute bottom-0 left-0",
                            "overflow-hidden text-ellipsis whitespace-nowrap",
                            "w-full px-2 py-1 text-xs font-bold sm:text-sm",
                            "bg-blur-clear-sm text-base-content/80"
                        )}
                    >
                        {title}
                    </h2>
                </figure>
            </label>

            {/** Swatches *******************************************************************/}
            <RadioGroup
                value={selectedColor}
                onChange={setSelectedColor}
                role="radiogroup"
                as="span"
                className={cn(
                    "rounded-lg bg-base-100 transition",
                    "inline-flex h-fit w-fit gap-2",
                    "m-2 p-1.5 sm:p-2",
                    "focus-within:brightness-150"
                )}
            >
                {swatchColors.map((colorCode, i) => {
                    return (
                        <RadioGroup.Option
                            key={i}
                            role="radio"
                            value={colorOptions[i]}
                            style={{ backgroundColor: colorCode }}
                            className={({ checked }) =>
                                cn(
                                    "cursor-pointer rounded-[4px] sm:rounded",
                                    "p-2 transition-all duration-200 sm:p-3",
                                    "outline outline-1 outline-white/60",
                                    "focus:outline focus:outline-1 focus:outline-white/60",
                                    checked ? "outline-offset-[3px]" : ""
                                )
                            }
                            onClick={() => {
                                setCurrentImage(null)
                                setLoading(true)
                                setCurrentImage(images[i])
                            }}
                        />
                    )
                })}
            </RadioGroup>

            {/** Modal **********************************************************************/}
            <Transition
                appear
                show={isOpen}
                as={Fragment}
            >
                <Dialog
                    role="dialog"
                    as="div"
                    className="relative z-50"
                    onClose={closeModal}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        {/** overlay */}
                        <div
                            aria-hidden="true"
                            className="bg-blur-black fixed inset-0"
                        />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    className={cn(
                                        "bg-blur-100 card rounded-box space-y-6 p-6",
                                        "w-full max-w-md transform overflow-hidden",
                                        "text-left align-middle shadow-box transition-all"
                                    )}
                                >
                                    <div className="absolute top-0 right-0">
                                        <button
                                            type="button"
                                            className={cn(
                                                "btn-square btn-sm btn text-base-content/80",
                                                "absolute right-2 top-2 rounded-xl bg-base-300 focus:outline-base-100"
                                            )}
                                            onClick={closeModal}
                                        >
                                            <CloseSquare
                                                set="curved"
                                                size="large"
                                            />
                                        </button>
                                    </div>
                                    <Dialog.Title
                                        as="h3"
                                        className="card-title"
                                    >
                                        Payment successful
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="">
                                            Your payment has been successfully submitted. We’ve
                                            sent you an email with all of the details of your
                                            order.
                                        </p>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

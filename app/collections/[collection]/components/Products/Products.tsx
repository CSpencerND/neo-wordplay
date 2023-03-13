"use client"

import type { ProductEdge, Product, Image } from "@shopify/hydrogen-react/storefront-api-types"

/** components */
import { ProductProvider } from "@shopify/hydrogen-react"
import { RadioGroup, Dialog, Transition } from "@headlessui/react"
import { Fragment, useCallback, useEffect } from "react"
import NextImage from "next/image"
import { CloseSquare, Plus } from "react-iconly"

/** utils */
// import temp from "@/static/brand/placeholder.webp"
import cn from "clsx"
import { useState } from "react"
import { useLoader } from "@/lib"
import { useProduct, flattenConnection } from "@shopify/hydrogen-react"
import { sanitize } from "dompurify"

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
                        className={cn(
                            "bg-blur-100 card relative h-full",
                            "transition hover:scale-105"
                        )}
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
    descriptionHtml: string
    swatchColors: string[]
}

function Product({ title, images, descriptionHtml, swatchColors }: ProductProps) {
    /** option setting */
    const { options, setSelectedOption } = useProduct()
    const colorOptions = options?.find((option) => option?.name === "Color")?.values as string[]
    const [selectedColor, setSelectedColor] = useState<string>(colorOptions[0])
    const sizeOptions = options?.find((option) => option?.name === "Size")?.values as string[]

    const sizeText: { [size: string]: string } = {
        XS: "XS",
        S: "S",
        M: "M",
        L: "L",
        XL: "XL",
        "2XL": "2X",
        "3XL": "3X",
        "4XL": "4X",
        "5XL": "5X",
    }

    /** modal */
    const [isOpen, setIsOpen] = useState(false)
    const closeModal = () => setIsOpen(false)
    const openModal = () => setIsOpen(true)

    /** loading spinner */
    const { loaderComponent, setLoading } = useLoader()

    /** swatch functionality */
    const [currentImage, setCurrentImage] = useState<Image | null>(images[0])
    const changeImage = useCallback(
        (i: number) => {
            if (currentImage !== images[i] && images.length > 1) {
                setCurrentImage(null)
                setLoading(true)
                setCurrentImage(images[i])
            }
        },
        [currentImage, images]
    )

    /** product description*/
    const [sanitizedDescription, setSanitizedDescription] = useState<string>()
    useEffect(() => {
        const desc = sanitize(descriptionHtml)
        setSanitizedDescription(desc)
    }, [])

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
                            alt={currentImage.altText || "placeholder"}
                            width={currentImage.width || 1024}
                            height={currentImage.height || 1024}
                            key={currentImage.id}
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

            {/** Swatches */}
            <RadioGroup
                value={selectedColor}
                onChange={setSelectedColor}
                role="radiogroup"
                as="span"
                className={cn(
                    "rounded-lg bg-base-100 transition",
                    "inline-flex h-fit max-w-fit gap-2",
                    "m-2 overflow-x-scroll p-2 sm:p-3",
                    "focus-within:bg-neutral-focus/60"
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
                                    "ring-1 ring-white/60 ring-offset-black/60",
                                    "focus-visible:ring-1 focus-visible:ring-white/60",
                                    checked ? "ring-offset-[3px]" : ""
                                )
                            }
                            onFocus={() => changeImage(i)}
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
                    className="relative z-40"
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
                                    {/** Close Modal Button */}
                                    <div className="absolute top-0 right-0">
                                        <button
                                            type="button"
                                            className={cn(
                                                "btn-ghost btn-square btn text-base-content/80",
                                                "rounded-box absolute right-2 top-2",
                                                "focus-visible:bg-base-100 focus-visible:outline-none focus-visible:ring-0"
                                            )}
                                            onClick={closeModal}
                                        >
                                            <CloseSquare
                                                set="curved"
                                                size="xlarge"
                                            />
                                        </button>
                                    </div>
                                    <Dialog.Title
                                        as="h3"
                                        className="card-title !mt-0"
                                    >
                                        {title}
                                    </Dialog.Title>
                                    <figure className="bg-glass rounded-box">
                                        {loaderComponent}

                                        {currentImage !== null ? (
                                            <NextImage
                                                onLoadingComplete={() => setLoading(false)}
                                                src={currentImage.url}
                                                alt={currentImage.altText || "placeholder"}
                                                width={currentImage.width || 1024}
                                                height={currentImage.height || 1024}
                                                key={currentImage.id}
                                            />
                                        ) : null}
                                    </figure>
                                    <section className="flex justify-between">
                                        {/** Swatches */}
                                        <RadioGroup
                                            value={selectedColor}
                                            onChange={setSelectedColor}
                                            role="radiogroup"
                                            as="span"
                                            className={cn(
                                                "rounded-xl bg-base-100 transition",
                                                "inline-flex h-fit w-fit gap-3 p-2",
                                                "focus-within:bg-neutral-focus/40",
                                                "sm:gap-4 sm:rounded-2xl sm:p-4"
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
                                                                "cursor-pointer rounded-md",
                                                                "p-3 transition-all duration-200",
                                                                "ring-1 ring-white/60",
                                                                "ring-offset-black/60 focus-visible:ring-1 focus-visible:ring-white/60",
                                                                "sm:rounded-[0.4375rem] sm:p-4",
                                                                checked
                                                                    ? "ring-offset-[5px] sm:ring-offset-[7px]"
                                                                    : ""
                                                            )
                                                        }
                                                        onFocus={() => changeImage(i)}
                                                    />
                                                )
                                            })}
                                        </RadioGroup>
                                        {/** Price */}
                                        <span className="self-center text-sm font-bold text-info sm:text-base">
                                            $30
                                        </span>
                                    </section>
                                    <section className="space-y-6">
                                        {/** Size Selection */}
                                        <RadioGroup
                                            // value={selectedColor}
                                            // onChange={setSelectedColor}
                                            role="radiogroup"
                                            as="span"
                                            className={cn(
                                                "mx-auto grid max-w-fit grid-cols-5 gap-3 p-2",
                                                "rounded-xl bg-base-100 transition",
                                                "focus-within:bg-neutral-focus/40",
                                                "sm:gap-4 sm:rounded-2xl sm:p-4 md:rounded-2xl"
                                            )}
                                        >
                                            {sizeOptions.map((size, i) => {
                                                return (
                                                    <RadioGroup.Option
                                                        key={i}
                                                        role="radio"
                                                        value={size}
                                                        className={({ checked }) =>
                                                            cn(
                                                                "btn-square btn-sm btn bg-base-200",
                                                                "cursor-pointer rounded-md text-sm",
                                                                "transition-all duration-200",
                                                                "hover:bg-secondary-focus focus-visible:ring-1 focus-visible:ring-white/60",
                                                                "md:btn-md sm:rounded-lg md:rounded-lg md:text-base",
                                                                checked ? "!bg-secondary" : ""
                                                            )
                                                        }
                                                        onClick={(
                                                            e: React.MouseEvent<HTMLDivElement>
                                                        ) => console.log(e.target)}
                                                    >
                                                        {sizeText[size]}
                                                    </RadioGroup.Option>
                                                )
                                            })}
                                        </RadioGroup>
                                        <span className="flex w-full justify-center">
                                            <button className="btn-info btn flex gap-2">
                                                <Plus
                                                    set="curved"
                                                    size="large"
                                                />
                                                Add to Bag
                                            </button>
                                        </span>
                                    </section>
                                    <Dialog.Description
                                        as="article"
                                        className="prose"
                                        dangerouslySetInnerHTML={{
                                            __html: sanitizedDescription!,
                                        }}
                                    />
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

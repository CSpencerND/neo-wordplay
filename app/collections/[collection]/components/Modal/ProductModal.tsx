"use client"

import { RadioGroup, Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"
import { ArrowLeftSquare, CloseSquare, Plus } from "react-iconly"
import NextImage from "next/image"
import { useRouter, usePathname } from "next/navigation"
import { useLoader } from "@/lib"
import useProduct from "../../context/ProductContext"
import cn from "clsx"
import { useProduct as useShopifyProduct } from "@shopify/hydrogen-react"
import { SelectedOptions } from "@shopify/hydrogen-react/dist/types/ProductProvider"
import Children from "types"

export default function ProductModal({ children }: Children) {
    const {
        isOpen,
        closeModal,
        currentImage,
        changeImage,
        selectedColor,
        setSelectedColor,
        colorOptions,
        sizeOptions,
        sizeText,
        selectedSize,
        setSelectedSize,
        hexCodes,
        sanitizedDescription,
        info: { title, handle },
    } = useProduct()
    const { loaderComponent, setLoading } = useLoader()

    const router = useRouter()
    const pathname = usePathname()

    const handleClose = () => {
        router.push(pathname)
        setTimeout(() => {
            closeModal()
        }, 300)
    }

    const selectedOptions = useShopifyProduct().selectedOptions as SelectedOptions
    const colorOptionString = selectedOptions.Size
    const sizeOptionString = selectedOptions.Color

    return (
        <Transition
            appear
            show={isOpen}
            as={Fragment}
        >
            <Dialog
                id={handle}
                role="dialog"
                as="div"
                className="relative z-40"
                onClose={handleClose}
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
                                            "btn-ghost btn-square btn text-primary-focus",
                                            "rounded-box absolute right-2 top-2",
                                            "focus-visible:bg-base-100 focus-visible:outline-none focus-visible:ring-0"
                                        )}
                                        onClick={handleClose}
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
                                            src={currentImage.url ?? ""}
                                            alt={currentImage.altText ?? ""}
                                            width={currentImage.width ?? 0}
                                            height={currentImage.height ?? 0}
                                            key={currentImage.id ?? ""}
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
                                        {hexCodes.map((code, i) => {
                                            return (
                                                <RadioGroup.Option
                                                    key={i}
                                                    role="radio"
                                                    value={colorOptions[i]}
                                                    style={{ backgroundColor: code }}
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
                                        {children}
                                    </span>
                                </section>
                                <section className="space-y-6">
                                    {/** Size Selection */}
                                    <RadioGroup
                                        value={selectedSize}
                                        onChange={setSelectedSize}
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
                                                            "hover:!bg-info/60 focus-visible:ring-1 focus-visible:ring-white/60",
                                                            "md:btn-md sm:rounded-lg md:rounded-lg md:text-base",
                                                            checked
                                                                ? "bg-info text-info-content"
                                                                : ""
                                                        )
                                                    }
                                                >
                                                    {sizeText[size]}
                                                </RadioGroup.Option>
                                            )
                                        })}
                                    </RadioGroup>
                                    <section className="space-y-2 transition-all">
                                        <div className="mx-auto max-w-fit divide-x divide-neutral font-bold text-info">
                                            <span className="whitespace-nowrap px-2">
                                                {sizeOptionString}
                                            </span>
                                            <span className="whitespace-nowrap px-2">
                                                {colorOptionString}
                                            </span>
                                        </div>
                                        <button className="btn-primary btn mx-auto flex gap-2">
                                            <Plus
                                                set="curved"
                                                size="large"
                                            />
                                            Add to Bag
                                        </button>
                                    </section>
                                </section>
                                <Dialog.Description
                                    as="article"
                                    className="prose"
                                    dangerouslySetInnerHTML={{
                                        __html: sanitizedDescription!,
                                    }}
                                />
                                {/** Close Modal Button */}
                                <button
                                    type="button"
                                    className={cn(
                                        "btn-ghost btn-square btn text-primary-focus",
                                        "rounded-box",
                                        "focus-visible:bg-base-100 focus-visible:outline-none focus-visible:ring-0"
                                    )}
                                    onClick={handleClose}
                                >
                                    <ArrowLeftSquare
                                        set="curved"
                                        size="xlarge"
                                    />
                                </button>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

"use client"

import { RadioGroup, Dialog, Transition } from "@headlessui/react"
import { Fragment, ReactNode } from "react"
import { ArrowLeftSquare, CloseSquare, Plus } from "react-iconly"
import NextImage from "next/image"
import { useRouter, usePathname } from "next/navigation"
import { useLoader } from "@/lib"
import useProduct from "../../context/ProductContext"
import { useProduct as useShopifyProduct } from "@shopify/hydrogen-react"
import cn from "clsx"

import type { SelectedOptions } from "@shopify/hydrogen-react/dist/types/ProductProvider"

import Children from "types"

type HandleClose = { handleClose: () => void }

type OptionStrings = {
    size?: string
    color?: string
}

export default function ProductModal({ price }: { price: ReactNode }) {
    const { closeModal } = useProduct()

    const router = useRouter()
    const pathname = usePathname()

    const handleClose = () => {
        router.push(pathname)
        setTimeout(() => {
            closeModal()
        }, 300)
    }

    // const selectedOptions = useShopifyProduct().selectedOptions as SelectedOptions
    // const colorOptionString = selectedOptions.Size
    // const sizeOptionString = selectedOptions.Color

    return (
        <ModalWrapper handleClose={handleClose}>
            <Dialog.Panel
                className={`
                    bg-blur-100 card rounded-box flex
                    w-full max-w-lg transform flex-col gap-6 overflow-hidden 
                    p-6 pt-12 text-left align-middle shadow-box transition-all 
                    lg:card-side lg:max-w-xl lg:flex-row xl:max-w-3xl
                `}
            >
                <CloseButtonX handleClose={handleClose} />
                <div className="rounded-box h-fit overflow-hidden">
                    <ProductImage />
                </div>
                <div className="card-body p-0">
                    <ProductTitle />
                    <div className="flex flex-row items-center justify-between">
                        <ColorSelect />
                        <Price price={price} />
                    </div>
                    <SizeSelect />
                    <AddToBag
                    // size={sizeOptionString}
                    // color={colorOptionString}
                    />
                    <Description />
                    <CloseButtonArrow handleClose={handleClose} />
                </div>
            </Dialog.Panel>
        </ModalWrapper>
    )
}

function ModalWrapper({ children, handleClose }: Children & HandleClose) {
    const { isOpen, info: { handle } } = useProduct() // prettier-ignore

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

                <div className="fixed inset-0 overflow-y-auto">
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
                        {children}
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    )
}

function ProductTitle() {
    const { info: { title } } = useProduct() // prettier-ignore

    return (
        <Dialog.Title
            as="h3"
            className="p-2 text-sm font-bold"
        >
            {title}
        </Dialog.Title>
    )
}

function ProductImage() {
    const { loaderComponent, setLoading } = useLoader()
    const { currentImage } = useProduct()

    return (
        <figure className="bg-glass">
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
    )
}

function Price({ price }: { price: ReactNode }) {
    return <span className="self-center p-2 text-xs font-bold">{price}</span>
}

function ColorSelect() {
    const {
        selectedColor,
        setSelectedColor,
        hexCodes,
        colorOptions,
        changeImage,
    } = useProduct() // prettier-ignore

    return (
        <RadioGroup
            value={selectedColor}
            onChange={setSelectedColor}
            role="radiogroup"
            as="span"
            className={`
                inline-flex h-fit w-fit
                gap-3 rounded-xl p-3 transition
                focus-within:bg-neutral-focus/40
                sm:gap-4 sm:rounded-2xl
            `}
        >
            {hexCodes.map((code, i) => {
                return (
                    <RadioGroup.Option
                        key={i}
                        role="radio"
                        value={colorOptions[i]}
                        style={{
                            backgroundColor:
                                code === "#212226" || code === "0D0D0D" ? "#070707" : code,
                        }}
                        className={({ checked }) =>
                            cn(
                                `cursor-pointer rounded-md p-3 
                                ring-1 ring-white ring-offset-base-100 
                                transition-all duration-200
                                focus-visible:ring-1 focus-visible:ring-white
                                sm:rounded-[0.4375rem]`,
                                checked
                                    ? "ring-white ring-offset-[5px] sm:ring-offset-[7px]"
                                    : ""
                            )
                        }
                        onFocus={() => changeImage(i)}
                    />
                )
            })}
        </RadioGroup>
    )
}

function SizeSelect() {
    const { selectedSize, setSelectedSize, sizeOptions, sizeText } = useProduct()

    return (
        <RadioGroup
            value={selectedSize}
            onChange={setSelectedSize}
            role="radiogroup"
            as="span"
            className={`
                flex flex-wrap gap-3 rounded-xl
                p-2 transition
                focus-within:bg-neutral-focus/40
                sm:gap-4 sm:rounded-2xl
            `}
        >
            {sizeOptions.map((size, i) => {
                return (
                    <RadioGroup.Option
                        key={i}
                        role="radio"
                        value={size}
                        className={({ checked }) =>
                            cn(
                                "btn-square btn-sm btn bg-base-100",
                                "cursor-pointer rounded-md !text-xs",
                                "transition-all duration-200",
                                "hover:!bg-secondary-focus",
                                "focus-visible:ring-1 focus-visible:ring-white",
                                "sm:rounded-lg md:text-base",
                                checked ? "bg-secondary text-secondary-content" : ""
                            )
                        }
                    >
                        {sizeText[size]}
                    </RadioGroup.Option>
                )
            })}
        </RadioGroup>
    )
}

function AddToBag({ size, color }: OptionStrings) {
    return (
        <section className="space-y-2 p-2 transition-all">
            {size && color ? (
                <div className="mx-auto max-w-fit divide-x divide-neutral font-bold text-secondary-content">
                    <span className="whitespace-nowrap px-2">{size}</span>
                    <span className="whitespace-nowrap px-2">{color}</span>
                </div>
            ) : null}
            <button
                className={`
                    btn-secondary btn-block btn-sm btn
                    flex gap-2 !text-xs !shadow-box
                `}
            >
                <Plus set="curved" />
                Add to Bag
            </button>
        </section>
    )
}

function Description() {
    const { sanitizedDescription } = useProduct()

    return (
        <Dialog.Description
            as="article"
            className="prose p-2 [&_strong]:text-accent-content"
            dangerouslySetInnerHTML={{
                __html: sanitizedDescription,
            }}
        />
    )
}

function CloseButtonArrow({ handleClose }: HandleClose) {
    return (
        <button
            type="button"
            className={`
                btn-ghost btn-square btn-sm btn rounded-xl text-primary-content hover:bg-primary
                focus-visible:bg-primary focus-visible:outline-none focus-visible:ring-0
            `}
            onClick={handleClose}
        >
            <ArrowLeftSquare
                set="curved"
                size="large"
            />
        </button>
    )
}

function CloseButtonX({ handleClose }: HandleClose) {
    return (
        <div className="absolute top-1 right-1">
            <button
                type="button"
                className={`
                    btn-ghost btn-square btn-sm btn rounded-xl text-primary-content hover:bg-primary
                    focus-visible:bg-primary focus-visible:outline-none focus-visible:ring-0
                `}
                onClick={handleClose}
            >
                <CloseSquare
                    set="curved"
                    size="large"
                />
            </button>
        </div>
    )
}

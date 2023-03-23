"use client"

import { getVariantBySelectedOptions } from "@/lib/server"
import { useLoader } from "@/lib/hooks"
import { useCart } from "@/lib/hooks"
import { Dialog, RadioGroup, Transition } from "@headlessui/react"
import NextImage from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { Fragment, ReactNode, useEffect, useState } from "react"
import { ArrowLeftSquare, CloseSquare, Plus } from "react-iconly"
// import useProduct from "../../context/ProductContext"

import temp from "@/static/brand/placeholder.webp"
import cn from "clsx"

import { AddToCartButton, useProduct as useShopifyProduct } from "@shopify/hydrogen-react"
import type { SelectedOptions } from "@shopify/hydrogen-react/dist/types/ProductProvider"

import Children from "types"

type HandleClose = { handleClose: () => void }

type OptionStrings = {
    size?: string
    color?: string
    onClick?: () => void
    variantID?: string
}

export default function ProductModal({ price }: { price: ReactNode }) {
    const [variantID, setVariantID] = useState<string>("")

    const {
        closeModal,
        info: { handle },
    } = useProduct()

    const { status, totalQuantity, cost, error } = useCart()

    const router = useRouter()
    const pathname = usePathname()

    const handleClose = () => {
        if (pathname) {
            router.push(pathname)
        }
        setTimeout(() => {
            closeModal()
        }, 300)
    }

    const selectedOptions = useShopifyProduct().selectedOptions as SelectedOptions
    const colorOptionString = selectedOptions.Size
    const sizeOptionString = selectedOptions.Color

    useEffect(() => {
        const getSelectedVariantID = async () => {
            const variant = await getVariantIdBySelectedOptions(handle, selectedOptions)
            const variantID = variant.variantBySelectedOptions?.id

            if (!variantID) {
                alert("Error: VariantID not found. Unable to update state!")
                return
            }

            setVariantID(variantID)
        }
        getSelectedVariantID()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const handleAddToBag = () => {
        if (!variantID) {
            alert("Error: VariantID not found. Unable to add item to bag!")
            return
        }

        const cartInfo = { status: status, qty: totalQuantity, cost: cost, error: error }

        console.log(JSON.stringify(cartInfo, null, 2))
        // alert(JSON.stringify(cartInfo, null, 2))
    }

    return (
        <ModalWrapper handleClose={handleClose}>
            <Dialog.Panel
                className={`
                    bg-blur-100 card rounded-box flex max-w-xs
                    transform flex-col gap-6 overflow-hidden
                    p-6 pt-12 text-left align-middle shadow-box transition-all
                    lg:card-side sm:max-w-sm lg:max-w-xl lg:flex-row xl:max-w-3xl
                `}
            >
                <CloseButtonX handleClose={handleClose} />
                <div className="rounded-box h-fit overflow-hidden">
                    <ProductImage />
                </div>
                <div className="card-body p-0">
                    <ProductTitle />
                    <Price price={price} />
                    {/* <div className="flex flex-row items-center justify-between"> */}
                    <ColorSelect />
                    {/* </div> */}
                    <SizeSelect />
                    <AddToBag
                        size={sizeOptionString}
                        color={colorOptionString}
                        onClick={handleAddToBag}
                        variantID={variantID}
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
            className="-mb-2 p-2 text-sm font-bold"
        >
            {title}
        </Dialog.Title>
    )
}

function ProductImage() {
    const { LoadingSpinner, setLoading } = useLoader()
    const { currentImage } = useProduct()
    const nullImage = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'%3E%3C/svg%3E`

    return (
        <figure className="bg-glass">
            <LoadingSpinner />
            {currentImage !== null ? (
                <NextImage
                    onLoadingComplete={() => setLoading(false)}
                    src={currentImage.url ?? nullImage}
                    alt={currentImage.altText ?? "temporary placeholder image"}
                    width={currentImage.width ?? 1024}
                    height={currentImage.height ?? 1024}
                    key={currentImage.id ?? "temp"}
                    placeholder="blur"
                    blurDataURL={temp.blurDataURL}
                />
            ) : (
                <NextImage
                    src={nullImage}
                    alt="temporary placeholder image"
                    key="temp"
                    width={1024}
                    height={1024}
                    placeholder="blur"
                    blurDataURL={temp.blurDataURL}
                />
            )}
        </figure>
    )
}

function Price({ price }: { price: ReactNode }) {
    return <span className="p-2 text-xs font-bold">{price}</span>
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
            as="span"
            className={`
                inline-flex h-fit w-fit
                gap-4 rounded-xl p-2 transition
                focus-within:bg-neutral-focus/40
                sm:gap-4 sm:rounded-2xl
            `}
        >
            <h4 className="sr-only pl-2 text-xs">Color</h4>
            {hexCodes.map((code, i) => {
                return (
                    <RadioGroup.Option
                        key={i}
                        value={colorOptions[i]}
                        style={{
                            backgroundColor:
                                code === "#212226" || code === "0D0D0D" ? "#070707" : code,
                        }}
                        className={({ checked }) =>
                            cn(
                                `h-7 w-7 cursor-pointer rounded-sq
                                ring-1 ring-white ring-offset-base-100 
                                transition-all duration-200
                                focus-visible:ring-1 focus-visible:ring-white
                                `,
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
            as="span"
            className={`
                flex flex-wrap gap-4 rounded-xl
                p-2 transition
                focus-within:bg-neutral-focus/40
                sm:gap-4 sm:rounded-2xl
            `}
        >
            <h4 className="sr-only pl-2 text-xs">Size</h4>
            {sizeOptions.map((size, i) => {
                return (
                    <RadioGroup.Option
                        key={i}
                        value={size}
                        className={({ checked }) =>
                            cn(
                                "grid h-7 w-7 place-items-center rounded-sq bg-base-100",
                                "cursor-pointer rounded-md text-xs",
                                "transition-all duration-200",
                                "hover:!bg-secondary-focus",
                                "focus-visible:ring-1 focus-visible:ring-white",
                                "md:text-base",
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

function AddToBag({ size, color, onClick, variantID }: OptionStrings) {
    return (
        <section className="space-y-2 p-2 transition-all">
            {size && color ? (
                <div className="mx-auto max-w-fit divide-x divide-neutral font-bold text-secondary-content">
                    {/* <span className="whitespace-nowrap px-2">{size}</span> */}
                    {/* <span className="whitespace-nowrap px-2">{color}</span> */}
                </div>
            ) : null}
            <AddToCartButton
                variantId={variantID}
                className={`
                    btn-secondary btn-block btn-sm btn
                    !mt-0 flex gap-2 !text-xs !shadow-box
                `}
                onClick={onClick}
            >
                <Plus set="curved" />
                Add to Bag
            </AddToCartButton>
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
            className="btn-primary btn-square btn-sm btn"
            onClick={handleClose}
        >
            <span className="sr-only">Close panel</span>
            <ArrowLeftSquare
                set="light"
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
                className="btn-primary btn-square btn-sm btn"
                onClick={handleClose}
            >
                <span className="sr-only">Close panel</span>
                <CloseSquare
                    set="light"
                    size="large"
                />
            </button>
        </div>
    )
}

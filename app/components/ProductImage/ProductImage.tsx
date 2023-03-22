import NextImage from "next/image"
import nullImage, { placeholder } from "@/static"
import type { Image, Maybe } from "@shopify/hydrogen-react/storefront-api-types"

type ProductImageProps = {
    image: Maybe<Image> | undefined
    title: string
}

export default function ProductImage({ image, title }: ProductImageProps) {
    const altText = image?.altText ?? title

    return (
        <figure className="bg-glass overflow-hidden rounded-2xl">
            <NextImage
                role="presentation"
                src={image?.url ?? nullImage}
                alt={altText ?? "loading"}
                width={image?.width ?? 1024}
                height={image?.height ?? 1024}
                placeholder="blur"
                blurDataURL={placeholder.blurDataURL}
            />
        </figure>
    )
}

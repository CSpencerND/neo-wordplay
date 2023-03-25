import nullImage, { placeholder } from "@/static"
import type { Image, Maybe } from "@shopify/hydrogen-react/storefront-api-types"
import cn from "clsx"
import NextImage, { ImageProps } from "next/image"

type ProductImageProps = Partial<ImageProps> & {
    image: Maybe<Image> | undefined
    title: string
    rounded?: boolean
}

export default function ProductImage({
    image,
    title,
    rounded = true,
    ...props
}: ProductImageProps) {
    const altText = image?.altText ?? title

    return (
        <figure className={cn("bg-glass overflow-hidden", rounded ? "rounded-2xl" : "")}>
            <NextImage
                role="presentation"
                src={image?.url ?? nullImage}
                alt={altText ?? "loading"}
                width={image?.width ?? 1024}
                height={image?.height ?? 1024}
                placeholder="blur"
                blurDataURL={placeholder.blurDataURL}
                {...props}
            />
        </figure>
    )
}

import nullImage, { placeholder } from "@/static"
import type { Image, Maybe } from "@shopify/hydrogen-react/storefront-api-types"
import cn from "clsx"
import NextImage, { ImageProps } from "next/image"

type ProductImageProps = Partial<ImageProps> & {
    image: Maybe<Partial<Image>> | undefined
    title: string
    rounded?: true | false | "top" | "bottom"
    containerProps?: React.HTMLAttributes<HTMLDivElement>
}

export default function ProductImage({
    image,
    title,
    rounded = true,
    containerProps,
    ...props
}: ProductImageProps) {
    const altText = image?.altText ?? title

    return (
        <figure
            className={cn(
                "bg-glass overflow-hidden",
                rounded === true ? "rounded-2xl" : "",
                rounded === "top" ? "rounded-t-2xl" : "",
                rounded === "bottom" ? "rounded-b-2xl" : "",
                containerProps?.className ?? ""
            )}
        >
            <NextImage
                role="presentation"
                src={image?.url ?? nullImage}
                width={image?.width ?? 1024}
                height={image?.height ?? 1024}
                alt={altText ?? "loading"}
                placeholder="blur"
                blurDataURL={placeholder.blurDataURL}
                {...props}
            />
        </figure>
    )
}

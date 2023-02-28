import cn from "clsx"

type BlobProps = {
    size: "sm" | "md" | "lg"
    placement?: "right" | "bottom"
    opacity?: 10 | 20 | 30 | 40 | 50 | 60
}

export default function Blob({ size, placement, opacity }: BlobProps) {
    const sizes = {
        sm: "h-24 w-24",
        md: "h-36 w-36",
        lg: "h-48 w-48",
    }

    const placements = {
        right: "right-0 top-1/3",
        bottom: "bottom-0 left-1/3",
    }

    const opacities = {
        10: "opacity-10",
        20: "opacity-20",
        30: "opacity-30",
        40: "opacity-40",
        50: "opacity-50",
        60: "opacity-60",
    }

    return (
        <div
            aria-hidden
            className={cn(
                "absolute",
                "rounded-full bg-gradient-to-bl from-accent/80 to-primary/80",
                "blur-3xl",
                sizes[size],
                placement && placements[placement],
                opacity && opacities[opacity]
            )}
        ></div>
    )
}

import cn from "clsx"

type BlobProps = {
    size: "xs" | "sm" | "md" | "lg"
    placement?: "top" | "right" | "bottom" | "left"
    opacity?: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80
    from?: "primary" | "secondary" | "accent" | "cyan" | "green" | "yellow"
    to?: "primary" | "secondary" | "accent" | "cyan" | "green" | "yellow"
}

export default function Blob({ size, placement, opacity, from, to }: BlobProps) {
    const sizes = {
        xs: "h-12 w-12 sm:h-16 sm:w-16",
        sm: "h-20 w-20 sm:h-24 sm:w-24",
        md: "h-28 w-28 sm:h-36 sm:w-36",
        lg: "h-36 w-36 sm:h-48 sm:w-48",
    }

    const placements = {
        top: "top-0",
        right: "right-0 top-1/3",
        bottom: "bottom-0 left-1/3",
        left: "left-0 top-1/2",
    }

    const opacities = {
        10: "opacity-10",
        20: "opacity-20",
        30: "opacity-30",
        40: "opacity-40",
        50: "opacity-50",
        60: "opacity-60",
        70: "opacity-70",
        80: "opacity-80",
    }

    const froms = {
        primary: "from-primary/80",
        secondary: "from-secondary/80",
        accent: "from-accent/80",
        cyan: "from-info/80",
        green: "from-success/80",
        yellow: "from-warning/80",
    }

    const tos = {
        primary: "to-primary/80",
        secondary: "to-secondary/80",
        accent: "to-accent/80",
        cyan: "to-info/80",
        green: "to-success/80",
        yellow: "to-warning/80",
    }

    return (
        <div
            aria-hidden
            className={cn(
                "absolute blur-3xl",
                "rounded-full bg-gradient-to-br",
                from ? froms[from] : "from-accent/80",
                to ? tos[to] : "to-primary/80",
                sizes[size],
                placement ? placements[placement] : "",
                opacity ? opacities[opacity] : ""
            )}
        />
    )
}

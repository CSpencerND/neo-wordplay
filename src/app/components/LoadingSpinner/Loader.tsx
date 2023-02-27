import { CSSProperties } from "react"
import Loader from "react-spinners/HashLoader"

type LoaderProps = {
    size?: number
    color?: string
    loading?: boolean
    className?: string
    style?: CSSProperties
}

export function LoadingSpinner({
    color = "#3abff8",
    size = 96,
    loading = true,
    className,
    style,
}: LoaderProps) {
    return (
        <Loader
            size={size}
            color={color}
            loading={loading}
            className={`mx-auto ${className}`}
            style={style}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    )
}

export default function LoadingPage() {
    return (
        <section className="min-h-screen">
            <LoadingSpinner />
        </section>
    )
}

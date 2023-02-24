import { useState, useEffect } from "react"

export function useInnerWidth(): number {
    const [innerWidth, setInnerWidth] = useState<number>(0)

    useEffect(() => {
        setInnerWidth(window.innerWidth)

        const handleResize = () => {
            setInnerWidth(window.innerWidth)
        }

        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return innerWidth
}

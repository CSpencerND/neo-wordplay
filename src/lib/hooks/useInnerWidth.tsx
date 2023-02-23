import { useState, useEffect } from "react"

export default function useInnerWidth() {
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

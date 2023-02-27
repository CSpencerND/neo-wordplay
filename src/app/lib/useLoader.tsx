import type { Dispatch, SetStateAction } from "react"

import { useState } from "react"
import { LoadingSpinner } from "@/components/LoadingSpinner"

type UseLoaderReturnType = {
    loaderComponent: JSX.Element
    setLoading: Dispatch<SetStateAction<boolean>>
}

export function useLoader(size: number = 96, color: string = "#3abff8"): UseLoaderReturnType {
    const [loading, setLoading] = useState<boolean>(true)

    const loaderComponent = <LoadingSpinner color={color} size={size} loading={loading} />

    return { loaderComponent, setLoading }
}

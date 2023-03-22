"use client"

import type { Dispatch, SetStateAction } from "react"

import { LoadingSpinner } from "@/components/LoadingSpinner"
import { useState } from "react"

type UseLoader = {
    loaderComponent: JSX.Element
    setLoading: Dispatch<SetStateAction<boolean>>
    loading: boolean
}

export function useLoader(size: number = 96, color: string = "#3abff8"): UseLoader {
    const [loading, setLoading] = useState<boolean>(true)

    const loaderComponent = (
        <LoadingSpinner
            color={color}
            size={size}
            loading={loading}
        />
    )

    return { loaderComponent, setLoading, loading }
}

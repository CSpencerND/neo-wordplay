"use client"

import type { Dispatch, SetStateAction } from "react"

import { LoadingSpinner as Spinner } from "@/components/LoadingSpinner"
import { useState } from "react"

type UseLoader = {
    LoadingSpinner: () => JSX.Element
    setLoading: Dispatch<SetStateAction<boolean>>
    loading: boolean
}

export function useLoader(size: number = 96, color: string = "#3abff8"): UseLoader {
    const [loading, setLoading] = useState<boolean>(true)

    const LoadingSpinner = () => (
        <Spinner
            color={color}
            size={size}
            loading={loading}
        />
    )

    return { LoadingSpinner, setLoading, loading }
}

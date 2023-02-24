import type {Dispatch, SetStateAction} from "react"

import { useState } from "react"
import Loader from "react-spinners/HashLoader"

type UseLoaderReturnType = {
    loaderComponent: JSX.Element
    setLoading: Dispatch<SetStateAction<boolean>>
}

export function useLoader(size: number = 96, color: string = "#3abff8"): UseLoaderReturnType {
    const [loading, setLoading] = useState<boolean>(true)

    const loaderComponent = (
        <Loader
            className="mx-auto"
            color={color}
            size={size}
            loading={loading}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    )

    return { loaderComponent, setLoading }
}

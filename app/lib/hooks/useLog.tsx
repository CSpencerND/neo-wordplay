"use client"

import { useEffect } from "react"

export function useLog<T>(value: T): void {
    useEffect(() => {
        console.log(value)
    }, [value])
}

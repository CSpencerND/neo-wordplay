"use client"

import { useMountEffect } from '@react-hookz/web/esm/useMountEffect';

export function useLog<T>(value: T): void {

    useMountEffect(() => {
        console.log(value)
    })
}

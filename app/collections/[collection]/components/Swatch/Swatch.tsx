"use client"

import cn from "clsx"
import "./swatch.css"

import { useState } from "react"
import { RadioGroup, Transition } from "@headlessui/react"

type SwatchGroupChildren = { children: JSX.Element | JSX.Element[] }

export function SwatchGroup({ children }: SwatchGroupChildren) {
    return (
        <RadioGroup
            as="span"
            className={cn(
                "bg-blur-200 rounded-b-box",
                "inline-flex gap-2 px-2 py-4",
                "[&>label]:swatch [&>input]:hidden"
            )}
        >
            {children}
        </RadioGroup>
    )
}

export function SwatchButton() {
    return (
        <RadioGroup.Option
            value={1}
            className={({ active, checked }) =>
                `${active
                    ? "ring-1 ring-base-content/80 ring-offset-2 border-none ring-offset-base-200"
                    : ""
                }
                    cursor-pointer rounded sm:rounded-md bg-sky-500 border border-base-content/80 p-2 sm:p-3 focus:outline-none`
            }
        />
    )
}

"use client"

import { RadioGroup } from "@headlessui/react"
import useProduct from "@/lib/hooks"

export default function Swatch() {
    // const {
    //     selectedColor,
    //     setSelectedColor,
    //     hexCodes,
    //     colorOptions,
    //     changeImage
    // } = useProduct() // prettier-ignore

    return (
        <RadioGroup
            // value={selectedColor}
            // onChange={setSelectedColor}
            as="span"
            className={`
                m-2 inline-flex h-fit max-w-fit gap-2
                overflow-x-scroll rounded-lg p-2 transition
                focus-within:bg-neutral-focus/60 sm:p-3
            `}
        >
            {hexCodes.map((code, i) => {
                return (
                    <RadioGroup.Option
                        key={i}
                        value={colorOptions[i]}
                        style={{
                            backgroundColor:
                                code === "#212226" || code === "0D0D0D" ? "#070707" : code,
                        }}
                        className={`
                            h-6 w-6 cursor-pointer rounded-sq
                            ring-1 ring-white ring-offset-base-100
                            transition-all duration-200
                            focus-visible:ring-1 focus-visible:ring-white
                            ui-checked:ring ui-checked:ring-offset-[3px]
                            sm:p-3 sm:ui-checked:ring-offset-[5px]
                        `}
                        onFocus={() => changeImage(i)}
                    />
                )
            })}
        </RadioGroup>
    )
}

"use client"

import Image from "next/image"
import { SwatchGroup, SwatchButton } from "../Swatch"
import cn from "clsx"

export default function Products({}: {}) {
    return (
        <h1>Products</h1>
        // {products.map(({ title, imgSrc, colors }, i) => {
        //     return (
        //         <li
        //             key={i}
        //             className={cn("bg-blur-100 card h-full", "transition hover:scale-105")}
        //         >
        //             <label className={cn("transition", "hover:brightness-125 active:scale-95")}>
        //                 <figure className="relative cursor-pointer">
        //                     <Image
        //                         src={imgSrc}
        //                         alt="temp"
        //                         className={cn("bg-glass rounded-t-box")}
        //                     />
        //                     <h2
        //                         className={cn(
        //                             "absolute bottom-0 left-0",
        //                             "overflow-hidden text-ellipsis whitespace-nowrap",
        //                             "w-full px-2 py-1 text-xs font-bold sm:text-sm",
        //                             "bg-blur-clear text-base-content/80"
        //                         )}
        //                     >
        //                         {title}
        //                     </h2>
        //                 </figure>
        //             </label>
        //             <SwatchGroup>
        //                 <SwatchButton />
        //                 <SwatchButton />
        //                 <SwatchButton />
        //                 <SwatchButton />
        //             </SwatchGroup>
        //         </li>
        //     )
        // })}
    )
}

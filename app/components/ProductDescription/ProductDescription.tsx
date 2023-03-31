import { Dialog } from "@headlessui/react"

import useProduct from "@/lib/hooks/useProduct"
import { useIsomorphicLayoutEffect } from "@react-hookz/web"
import { sanitize } from "dompurify"
import { useState } from "react"

export default function ProductDescription() {
    const sanitizedDescription = useSanitizedDescription()

    return (
        <Dialog.Description
            as="article"
            className="prose text-xs font-normal [&_strong]:text-accent-content"
            dangerouslySetInnerHTML={{
                __html: sanitizedDescription,
            }}
        />
    )
}

function useSanitizedDescription() {
    const descriptionHtml = useProduct((s) => s.product.descriptionHtml)
    const [sanitizedDescription, setSanitezedDescription] = useState<string>("")
    useIsomorphicLayoutEffect(() => {
        if (!descriptionHtml) return
        const desc = sanitize(descriptionHtml)
        setSanitezedDescription(desc)
    }, [])
    return sanitizedDescription
}

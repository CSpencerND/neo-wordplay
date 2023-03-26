import ProductImage from "@/components/ProductImage"
import { useLoader } from "@/lib/hooks"
import useProduct from "@/lib/hooks/useProduct"

export default function ModalProductImage() {
    const { LoadingSpinner, setLoading } = useLoader()
    const currentImage = useProduct((s) => s.currentImage)
    const title = useProduct((s) => s.product.title!)

    return (
        <>
            <LoadingSpinner />

            <ProductImage
                image={currentImage}
                title={title}
                key={currentImage.id}
                onLoadingComplete={() => setLoading(false)}
            />
        </>
    )
}

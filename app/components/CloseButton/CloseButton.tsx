import type { IconProps } from "react-iconly"
import { ArrowLeftSquare, ArrowRightSquare, CloseSquare } from "react-iconly"

type CloseButtonProps = {
    onClick: () => void
    children?: React.ReactNode
    icon?: "arrowLeft" | "arrowRight" | "x"
    props?: React.HTMLAttributes<HTMLButtonElement>
}

const iconProps: IconProps = {
    set: "light",
    size: "large",
}

export default function CloseButton({ icon, onClick, ...props }: CloseButtonProps) {
    const Icon = () => {
        let buttonIcon: JSX.Element

        switch (icon) {
            case "arrowLeft":
                buttonIcon = (
                    <ArrowLeftSquare
                        {...iconProps}
                        {...props}
                    />
                )
                break

            case "arrowRight":
                buttonIcon = (
                    <ArrowRightSquare
                        {...iconProps}
                        {...props}
                    />
                )
                break

            default:
                buttonIcon = (
                    <CloseSquare
                        {...iconProps}
                        {...props}
                    />
                )
                break
        }

        return buttonIcon
    }

    return (
        <button
            type="button"
            className="btn-primary btn-square btn-sm btn"
            onClick={onClick}
        >
            <span className="sr-only">Close panel</span>
            <Icon />
        </button>
    )
}

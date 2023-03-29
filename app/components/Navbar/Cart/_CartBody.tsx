export default function CartBody({ children }: { children?: React.ReactNode }) {
    return (
        <div className="flex-1 overflow-y-auto py-2 px-4 sm:px-6">
            <div className="">
                <div className="flow-root">{children}</div>
            </div>
        </div>
    )
}

import { ReactNode } from "react"
import locale from "@currency-exchanger/lib/locale.json"

interface SkeletonProps {
    amount: ReactNode
    selectFrom: ReactNode
    swapButton: ReactNode
    selectTo: ReactNode
    footer: ReactNode
}

export default function ExchangeSkeleton({ amount, selectFrom, swapButton, selectTo, footer }: SkeletonProps) {
    return (
        <div className="flex flex-col justify-center items-center h-full w-full">
            <h1 className='text-white text-center text-4xl font-black p-14'>
                {locale.appTitle}
            </h1>
            <div className="p-10 place-items-center min-h-fit w-[70%] bg-white rounded-xl shadow-lg">
                <div className="grid grid-cols-7 gap-5">
                    <div className="grid lg:col-span-2 col-span-7 w-full items-center gap-1.5">
                        {amount}
                    </div>
                    <div className="grid lg:col-span-2 md:col-span-3 col-span-7 w-full items-center gap-1.5">
                        {selectFrom}
                    </div>
                    <div className="grid lg:col-span-1 md:col-span-1 col-span-7 place-items-center w-full">
                        {swapButton}
                    </div>
                    <div className="grid lg:col-span-2 md:col-span-3 col-span-7 w-full items-center gap-1.5">
                        {selectTo}
                    </div>
                    <div className="grid lg:col-span-2 md:col-span-3 col-span-7 w-full items-center gap-1.5">
                        {footer}
                    </div>
                </div>
            </div>
        </div>
    )
}
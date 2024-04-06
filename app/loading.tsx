import { SkeletonLoader } from "@currency-exchanger/lib/ui";
import { ExchangeSkeleton } from "./exchange-calculator/components";

export default function() {
    return (
        <div className="h-screen w-screen">
            <ExchangeSkeleton
                amount={<SkeletonLoader className="h-10 w-full" />}
                selectFrom={<SkeletonLoader className="h-10 w-full" />} 
                selectTo={<SkeletonLoader className="h-10 w-full" />}
                swapButton={<SkeletonLoader className="h-12 w-12 rounded-full" />}
                footer={<SkeletonLoader className="h-8 rounded-full w-full mb-4" />}
            />
        </div>
    )
}
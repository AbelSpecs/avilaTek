import { FC } from "react";
import { contracts } from "@/public/data/contracts";
import { ContractImage } from "@/components/ui/contractImage";

interface CollageProps {
}

export const Collage: FC<CollageProps> = () => {
    const images = contracts();
    return (
        <>
            <div className="flex flex-col items-center gap-y-2 mb-2 lg:flex-row lg:justify-center lg:items-end gap-2">
                {
                    images.slice(0, 2).reverse().map((src, index) => {
                        return (
                            <ContractImage key={index} src={src}/>
                        )
                    })
                }
            </div>
            <div className="w-full flex flex-col items-center gap-y-2 lg:flex-row lg:justify-start lg:items-start lg:gap-2">
                {
                    images.slice(2, 5).map((src, index) => {
                        return (
                            <ContractImage key={index} src={src}/>
                        )
                    })
                }
            </div>
        </>
    )
}
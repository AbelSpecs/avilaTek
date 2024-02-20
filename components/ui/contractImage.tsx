import { FC } from "react";
import Image from "next/image";

interface ContractImageProps {
    src: string
}

export const ContractImage: FC<ContractImageProps> = ({src}) => {
    return (
        <div className="relative w-full h-52 overflow-hidden lg:w-auto lg:h-auto">
            <Image src={src} alt="banner" className="w-full object-fill"/>
        </div>
    )
}
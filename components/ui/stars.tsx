import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface StarsProps {
    src: string;
}

export const Stars: FC<StarsProps> = ({src}) => {
    return (
        <div className="px-5 mt-10 flex gap-1">
            <Image src={src} alt="star" />
            <Image src={src} alt="star" />
            <Image src={src} alt="star" />
            <Image src={src} alt="star" />
            <Image src={src} alt="star" />
        </div>
    )
}
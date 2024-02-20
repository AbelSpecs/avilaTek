import { FC } from "react";
import Image from "next/image";

interface StarsProps {
    src: string;
}

export const Stars: FC<StarsProps> = ({src}) => {
    return (
        <div className="px-5 mt-10 flex gap-1">
            {
                Array.from({length: 5 }, (_, index) => {
                    return (
                        <Image key={index} src={src} alt="star" />
                    )
                })
            }
        </div>
    )
}
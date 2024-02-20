import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import arrow from '@/public/tools/arrow.svg'

interface FeatureToolProps {
    icon: string;
    title: string;
    paragraph: string;
    isTool: boolean;
}

export const FeatureTool: FC<FeatureToolProps> = ({icon, title, paragraph, isTool}) => {
    return (
        <div className="flex flex-col justify-center items-center mt-5 px-2">
            <Image src={icon} alt="icon"/>
            <h1 className="text-black font-bold mt-2">{title}</h1>
            <p className="text-black text-center font-light mt-5">{paragraph}</p>
            <div className="flex my-5">
                <Link href='#' className="text-linkColor font-semibold">{isTool ? 'View integration' : 'Learn More'}</Link>
                <Image src={arrow} alt="arrow" />
            </div>
        </div>
    )
}
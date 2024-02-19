import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import arrow from '@/public/tools/arrow.svg'

interface ToolProps {
    icon: string;
    title: string;
    paragraph: string;
}

export const Tool: FC<ToolProps> = ({icon, title, paragraph}) => {
    return (
        <div className="flex flex-col justify-center items-center mt-5">
            <Image src={icon} alt="icon"/>
            <h1 className="text-black font-bold">{title}</h1>
            <p className="text-black text-center font-light mt-5">{paragraph}</p>
            <div className="flex my-5">
                <Link href='#' className="text-linkColor">View integration</Link>
                <Image src={arrow} alt="arrow" />
            </div>
        </div>
    )
}
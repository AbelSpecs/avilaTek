import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
    logo: string;
}

export const Logo: FC<LogoProps> = ({logo}) => {
    return (
        <div className="flex gap-2 items-center justify-center text-black">
            <Image src={logo} alt='logo'/>
            <Link href='#' className="font-bold">Untitled UI</Link>
        </div>
    )
}
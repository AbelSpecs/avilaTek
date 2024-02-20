import { FC } from "react";
import Link from "next/link";

interface LinksProps {
    title?: string;
    links: string[];
    containerClassName?: string;
    linkClassName?: string;
}

export const Links: FC<LinksProps> = ({title, links, containerClassName, linkClassName}) => {
    return (
        <div className={`${containerClassName}`}>
            <p className="text-black font-semibold">{title}</p>
            {
                links.map((item, index) => {
                    return (
                        <Link key={index} href="#" className={linkClassName}>{item}</Link>
                    )
                })
            }
        </div>
    )
}
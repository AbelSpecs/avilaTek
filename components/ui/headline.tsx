import { FC } from "react";


interface HeadlineProps {
    title: string;
    title2?: string;
    paragraph?: string;
    titleClassName?: string;
    paragraphClassName?: string;
}

export const Headline: FC<HeadlineProps> = ({title, title2, paragraph, titleClassName, paragraphClassName}) => {
    return (
        <div className="px-5">
            <h1 className={`pt-10 ${titleClassName}`}>{title}</h1>
            <h1 className={`text-2xl font-semibold text-center sm:text-4xl xl:text-5xl text-secondaryText`}>{title2}</h1>
            <p className={`mt-5 font-light ${paragraphClassName}`}>{paragraph}</p>
        </div>
    )
}
import { FC } from "react";


interface HeadlineProps {
    title: string;
    title2?: string;
    paragraph: string;
    titleClassName?: string;
    paragraphClassName?: string;
}

export const Headline: FC<HeadlineProps> = ({title, title2, paragraph, titleClassName, paragraphClassName}) => {
    return (
        <>
            <h1 className={`font-semibold text-center pt-10 ${titleClassName}`}>{title}</h1>
            <h1 className={`text-4xl font-semibold text-center xl:text-5xl text-secondaryText`}>{title2}</h1>
            <p className={`mt-5 text-center font-light px-2 ${paragraphClassName}`}>{paragraph}</p>
        </>
    )
}
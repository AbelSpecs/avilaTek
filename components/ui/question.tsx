import { FC } from "react";
import Image from "next/image";


interface QuestionProps {
    question: string;
    answer?: string;
    icon: string
}

export const Question: FC<QuestionProps> = ({question, answer, icon}) => {
    return (
        <>
            <div className="w-full flex justify-between items-center px-2">
                <h1 className="text-black font-bold mt-2">{question}</h1>
                <Image src={icon} alt="icon"/>
            </div>
            <p className="text-black text-left font-light mt-5 px-2">{answer}</p>
        </>
    )
}
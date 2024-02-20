import { FC } from "react";
import Image from "next/image";

interface ButtonsProps {
    firstButtonText?: string;
    secondButtonText?: string;
    firstClassName?: string;
    secondClassName?: string;
    containerClassName: string;
    iconFirstButton?: string;
    iconSecondButton?: string;
}

export const Buttons: FC<ButtonsProps> = ({firstButtonText, secondButtonText, firstClassName, secondClassName, containerClassName, iconFirstButton, iconSecondButton}) => {
    return (
        <div className={`${containerClassName}`}>
            <button className={firstClassName}>{firstButtonText}{iconFirstButton && <Image src={iconFirstButton} alt="icon"/>}</button>
            <button className={secondClassName}>{secondButtonText}{iconSecondButton && <Image src={iconSecondButton} alt="icon"/>}</button>
        </div>
    )
}
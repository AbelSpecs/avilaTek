import { FC } from "react";
import Image from "next/image";
import { Headline } from "@/components/commons/headline";
import testimonialBanner from "@/public/testimonials/testimonialBanner.svg"
import star from "@/public/testimonials/star.svg"
import { Stars } from "@/components/testimonials/stars";

interface TestimonialBannerProps {
    title: string;
    bannerClassName: string;
    textClassName?: string;
    isAction: boolean
}

export const TestimonialBanner: FC<TestimonialBannerProps> = ({title, bannerClassName, textClassName}) => {
    return (
        <div className={`flex flex-col justify-center items-center p-2 mt-10 lg:flex-row lg:h-[67vh]`}>
            <Image src={testimonialBanner} alt="banner" className="w-full rounded-t-xl lg:w-auto lg:rounded-l-xl lg:rounded-br-none lg:rounded-tr-none xl:h-[65vh]"/>
            <div className={`${bannerClassName} w-full rounded-b-xl lg:min-h-full lg:relative lg:rounded-r-xl lg:rounded-tl-none lg:rounded-bl-none`}>
                <div className="lg:min-h-full lg:w-full lg:px-5 lg:absolute lg:top-20">
                    <Stars src={star}/>
                    <Headline title={title}
                                titleClassName={`text-2xl text-left font-light ${textClassName}`}  
                    />
                    <div className="px-5 mb-10 lg:flex lg:flex-col lg:w-96">
                        <p className="">— Renee Wells</p>
                        <p className="font-light text-secondaryText">Product Designer, Quotient</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
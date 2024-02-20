import { FC } from "react";
import Image from "next/image";
import { Headline } from "@/components/commons/headline";
import { Buttons } from "@/components/ui/buttons";
import { Collage } from "@/components/ui/collage";
import actionBanner from "@/public/action/actionBanner.svg"

interface BannerProps {
    title: string;
    paragraph: string;
    bannerClassName: string;
    textClassName?: string;
    isAction: boolean
}

export const Banner: FC<BannerProps> = ({title, paragraph, bannerClassName, textClassName, isAction}) => {
    
    return (
        <div className={`${!isAction && bannerClassName} flex flex-col justify-center items-center p-2 mt-10 lg:flex-row ${isAction ? 'lg:h-[60vh]' : 'lg:h-[80vh]'}`}>
            <div className={`${bannerClassName} w-full rounded-t-xl lg:min-h-full lg:w-full lg:relative lg:rounded-l-xl lg:rounded-tr-none`}>
                <div className="lg:min-h-full lg:w-full lg:px-5 lg:absolute lg:inset-y-1/4">
                    <Headline title={title}
                                titleClassName={`text-2xl text-left font-semibold ${textClassName}`}  
                                paragraph={paragraph}
                                paragraphClassName={`text-left ${textClassName}`}
                    />
                    <Buttons firstButtonText="Get Started" secondButtonText="Learn More" 
                                firstClassName="mt-5 w-full h-10 rounded-lg bg-primaryButton border-secondaryBorder"
                                secondClassName="mt-5 w-full h-10 rounded-lg bg-white text-tercearyText"
                                containerClassName="px-5 mb-10 lg:flex lg:flex-row-reverse lg:gap-10 lg:w-96" />
                </div>
            </div>
            {
               isAction && <Image src={actionBanner} alt="banner" className="w-full rounded-b-xl lg:w-auto lg:rounded-r-xl lg:rounded-bl-none"/>
            }
            {
                !isAction &&
                <div className='w-full flex flex-col lg:flex-wrap lg:gap-y-2 lg:justify-center'>
                    <Collage />
                </div>
            }
        </div>
    )
}
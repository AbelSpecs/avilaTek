import { FC } from "react";
import Image from "next/image";
import { Headline } from "@/components/ui/headline";
import actionBanner from "@/public/actionBanner.svg"
import contract1 from '@/public/contracts/contract1.svg'
import contract2 from '@/public/contracts/contract2.svg'
import contract3 from '@/public/contracts/contract3.svg'
import contract4 from '@/public/contracts/contract4.svg'
import contract5 from '@/public/contracts/contract5.svg'
import { Buttons } from "@/components/ui/buttons";

interface BannerProps {
    title: string;
    paragraph: string;
    bannerClassName: string;
    textClassName?: string;
    isAction: boolean
}

export const Banner: FC<BannerProps> = ({title, paragraph, bannerClassName, textClassName, isAction}) => {
    return (
        <div className={`${bannerClassName} flex flex-col justify-center items-center p-2 mt-10 lg:flex-row lg:h-[60vh]`}>
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
                    <div className="flex flex-col items-center gap-y-2 mb-2 lg:flex-row lg:justify-center lg:items-end gap-2">
                        <div className="relative w-full h-40 overflow-hidden">
                            <Image src={contract2} alt="banner" className="w-full object-fill"/>
                        </div>
                        <div className="relative w-full h-40 overflow-hidden">
                            <Image src={contract1} alt="banner" className="w-full object-fill"/>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center gap-y-2 lg:flex-row lg:justify-start lg:items-start lg:gap-2">
                        <div className="relative w-full h-40 overflow-hidden">
                            <Image src={contract3} alt="banner" className="w-full object-fill"/>
                        </div>
                        <div className="relative w-full h-40 overflow-hidden">
                            <Image src={contract4} alt="banner" className="w-full object-fill"/>
                        </div>
                        <div className="relative w-full h-40 overflow-hidden">
                            <Image src={contract5} alt="banner" className="w-full object-fill"/>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
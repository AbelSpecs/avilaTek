
import Image from "next/image"
import graphic from "@/public/action/graphic.svg";
import { Headline } from "@/components/commons/headline";

interface HeaderProps {}

export const Header = () => {
    return (
        <div className="w-full h-[75vh] bg-bannerColor mt-10 sm:h-[65vh] md:h-[70vh] lg:h-[80vh] lg:rounded-xl">
            <div className="px-2 sm:px-6 md:px-40 lg:px-64">
                <Headline title="Grow your users."
                            titleClassName="text-2xl font-semibold sm:text-4xl xl:text-5xl text-center"
                            title2="Smarter."
                            paragraph="Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups."
                            paragraphClassName="text-slate-300 text-center"
                />            
                <div className="mt-5 mx-auto flex flex-wrap justify-center lg:flex-row lg:flex-nowrap lg:gap-3">
                    <div className="w-full flex flex-col justify-center gap-2 pt-5 ">
                        <input type="text" placeholder="Enter your email" className="w-full h-10 px-4 rounded-lg"/>
                        <p className="text-xs text-left text-slate-300 font-light">We care about your data in our privacy policy.</p>
                    </div>
                    <button className="mt-5 w-full h-10 rounded-lg bg-primaryButton lg:flex-0.5">Get Started</button>
                </div>
            </div>
            <Image src={graphic} alt="graphic" className="mx-auto mt-10 "/>
        </div>
    )
}
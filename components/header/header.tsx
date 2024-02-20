
import Image from "next/image"
import graphic from "@/public/graphic.svg";
import { Headline } from "../ui/headline";

interface HeaderProps {}

export const Header = () => {
    return (
        <div className="w-full h-[80vh] bg-bannerColor mt-10 lg:rounded-xl">
            <div className="px-2 lg:px-80">
                <Headline title="Grow your users."
                            titleClassName="text-4xl xl:text-5xl text-center"
                            title2="Smarter."
                            paragraph="Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups."
                            paragraphClassName="text-slate-300 text-center"
                />            
                <div className="mt-5 mx-auto flex flex-wrap justify-center">
                    <div className="w-full flex flex-col justify-center gap-2 pt-5">
                        <input type="text" placeholder="Enter your email" className="w-full h-10 px-4 rounded-lg"/>
                        <p className="text-xs text-left text-slate-300 font-light">We care about your data in our privacy policy.</p>
                    </div>
                    <button className="mt-5 w-full h-10 rounded-lg bg-primaryButton">Get Started</button>
                </div>
            </div>
            <Image src={graphic} alt="graphic" className="mt-10 mx-auto"/>
        </div>
    )
}
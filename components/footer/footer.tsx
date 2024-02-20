import { company } from "@/public/data/company";
import { products } from "@/public/data/product"
import { Links } from "@/components/ui/links";
import { Buttons } from "@/components/ui/buttons";
import apple from "@/public/footer/apple.svg";
import google from "@/public/footer/google.svg";
import logo from '@/public/logo.svg'
import { Logo } from "@/components/ui/logo";

interface FooterProps {}

export const Footer = () => {
    const productLinks = products();
    const companyLinks = company();

    return (
        <>
            <div className="px-2 my-12 lg:flex lg:flex-row-reverse lg:justify-between">
                <div>
                    <p className="text-black">Get the app</p>
                    <Buttons containerClassName="flex gap-5 mt-5" iconFirstButton={apple} iconSecondButton={google}/>
                </div>
                <div className="flex gap-28 mt-10">
                    <Links title="Product" links={productLinks} containerClassName="flex flex-col gap-y-2" linkClassName="text-linkColor"/>
                    <Links title="Company" links={companyLinks} containerClassName="flex flex-col gap-y-2" linkClassName="text-linkColor"/>
                </div>
            </div>
            <hr className="mb-5"/>
            <div className="flex flex-col items-start gap-y-2 mb-10 px-2 lg:flex-row lg:justify-between lg:items-center">
                <Logo logo={logo}/>
                <p className="text-center text-slate-400">© 2077 Untitled UI. All rights reserved.</p>
            </div>
        </>
    )
}
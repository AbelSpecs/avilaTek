import { company } from "@/public/data/company";
import { products } from "@/public/data/product"
import { Links } from "@/components/ui/links";
import { Buttons } from "@/components/ui/buttons";
import apple from "@/public/footer/apple.svg";
import google from "@/public/footer/google.svg";

interface FooterProps {}

export const Footer = () => {
    const productLinks = products();
    const companyLinks = company();

    return (
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
    )
}
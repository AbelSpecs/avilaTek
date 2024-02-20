
import Image from "next/image"
import hamburguer from '@/public/navbar/hamburguer.svg'
import logo from '@/public/navbar/logo.svg'
import { Buttons } from "@/components/ui/buttons"
import { Links } from "@/components/commons/links"
import { navLinks } from "@/public/data/navLinks"
import { Logo } from "@/components/ui/logo"

interface NavbarProps {}

export const Navbar = () => {
    const links = navLinks();

    return (
        <nav className="w-full h-10 flex items-center justify-between p-5">
            <div className="flex items-center">
                <Logo logo={logo} />
                <Links links={links} containerClassName="hidden lg:flex lg:flex-row lg:gap-10" linkClassName="text-black"/>
            </div>
            <div className="lg:hidden">
                <Image src={hamburguer} alt="hamburguer"/>
            </div>
            <Buttons firstButtonText="Log in" secondButtonText="Sign up" firstClassName="bg-white px-3 py-2 rounded-lg" 
                    secondClassName="bg-primaryButton text-white px-3 py-2 rounded-lg" 
                    containerClassName="hidden text-black lg:flex lg:gap-10"/>
        </nav>
    )
}
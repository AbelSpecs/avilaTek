
import Link from "next/link"
import Image from "next/image"
import hamburguer from '@/public/hamburguer.svg'
import logo from '@/public/logo.svg'
import { Buttons } from "../ui/buttons"
import { Links } from "@/components/ui/links"
import { navLinks } from "@/public/data/navLinks"

interface NavbarProps {}

export const Navbar = () => {
    const links = navLinks();

    return (
        <nav className="w-full h-10 flex items-center justify-between p-5">
            <div className="flex gap-2 items-center justify-center text-black">
                <Image src={logo} alt='logo'/>
                <Link href='#' className="font-bold">Untitled UI</Link>
            </div>
            <div className="lg:hidden">
                <Image src={hamburguer} alt="hamburguer"/>
            </div>
            <Links links={links} containerClassName="hidden lg:flex lg:flex-row lg:gap-10" linkClassName="text-black"/>
            <Buttons firstButtonText="Log in" secondButtonText="Sign up" containerClassName="hidden text-black lg:flex lg:gap-10"/>
        </nav>
    )
}
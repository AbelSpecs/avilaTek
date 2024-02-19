
import Link from "next/link"
import Image from "next/image"
import hamburguer from '@/public/hamburguer.svg'
import logo from '@/public/logo.svg'

interface NavbarProps {}

export const Navbar = () => {
    return (
        <nav className="w-full h-10 flex items-center justify-between p-5">
            <div className="flex gap-2 items-center justify-center text-black">
                <Image src={logo} alt='logo'/>
                <Link href='#' className="font-bold">Untitled UI</Link>
            </div>
            <div className="lg:hidden">
                <Image src={hamburguer} alt="hamburguer"/>
            </div>
            <div className="hidden text-black lg:flex lg:gap-10">
                <Link href='#'>Home</Link>
                <Link href='#'>Products</Link>
                <Link href='#'>Resources</Link>
                <Link href='#'>Pricing</Link>
            </div>
            <div className="hidden text-black lg:flex lg:gap-10">
                <button>Log in</button>
                <button>Sign up</button>
            </div>
        </nav>
    )
}
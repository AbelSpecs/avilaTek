import { Action } from "@/components/action/action"
import { Contracts } from "@/components/contracts/contracts"
import { Feature } from "@/components/feature/feature"
import { Footer } from "@/components/footer/footer"
import { Header } from "@/components/header/header"
import { Navbar } from "@/components/navbar/navbar"
import { Questions } from "@/components/questions/questions"
import { Testimonials } from "@/components/testimonials/testimonials"
import { Tools } from "@/components/tools/tools"


export default function Dashboard() {
    return (
        <main>
            <Navbar/>
            <Header/>
            <Tools />
            <Action />
            <Feature />
            <Contracts />
            <Questions />
            <Testimonials />
            <Footer />
        </main>
    )
}
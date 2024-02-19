import { Header } from "@/components/header/header"
import { Navbar } from "@/components/navbar/navbar"
import { Tools } from "@/components/tools/tools"

export default function Dashboard() {
    return (
        <main>
            <Navbar/>
            <Header/>
            <Tools />
        </main>
    )
}
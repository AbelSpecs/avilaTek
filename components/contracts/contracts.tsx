
import { Banner } from "@/components/ui/banner";

interface ContractsProps {}

export const Contracts = () => {
    return (
        <Banner title="No long-term contracts. No catches." 
                paragraph="Start your 30-day free trial today."
                bannerClassName="bg-secondaryBg"
                textClassName="text-black"
                isAction={false}
        />
    )
}
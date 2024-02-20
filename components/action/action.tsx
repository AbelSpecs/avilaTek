
import { Banner } from "@/components/ui/banner";

interface ActionProps {}

export const Action = () => {
    return (
        <Banner title="Give us a shot" 
                paragraph="Join over 4,000+ startups already growing with Untitled."
                bannerClassName="bg-bannerColor"
                isAction
        />
    )
}
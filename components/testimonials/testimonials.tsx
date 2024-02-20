
import { Banner } from "@/components/ui/banner";
import { TestimonialBanner } from "../ui/testimonialBanner";

interface TestimonialsProps {}

export const Testimonials = () => {
    return (
        <TestimonialBanner title="Love the simplicity of the service and the prompt customer support. We can’t imagine working without it." 
                paragraph="Join over 4,000+ startups already growing with Untitled."
                bannerClassName="bg-bannerColor"
                isAction
        />
    )
}
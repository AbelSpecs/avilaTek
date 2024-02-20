
import { Banner } from "@/components/ui/banner";
import { TestimonialBanner } from "./testimonialBanner";

interface TestimonialsProps {}

export const Testimonials = () => {
    return (
        <TestimonialBanner title="Love the simplicity of the service and the prompt customer support. We can’t imagine working without it." 
                bannerClassName="bg-bannerColor"
                isAction
        />
    )
}
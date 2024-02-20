

import { Headline } from "@/components/ui/headline";
import { features } from "@/public/data/features";
import { FeatureTool } from "@/components/ui/featureTool";

interface FeatureProps {}

export const Feature = () => {
    const featuresInformation = features();
    return (
        <>
            <Headline title="Cutting-edge features for advanced analytics"
                        titleClassName="text-black text-center text-2xl"
                        paragraph="Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups."
                        paragraphClassName="text-black text-center"
            />
                        
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {
                    featuresInformation.map(({icon, title, paragraph}, index) => {
                        return (
                            <FeatureTool key={index}
                                    icon={icon} 
                                    title={title} 
                                    paragraph={paragraph} 
                                    isTool={false}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}
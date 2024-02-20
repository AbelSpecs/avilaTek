
import { Headline } from "@/components/ui/headline";
import { FeatureTool } from "@/components/ui/featureTool";
import { tools } from "@/public/data/tools";


interface ToolsProps {}

export const Tools = () => {
    const toolsInformation = tools();

    return (
        <div className="w-full mt-52 xs:mt-96">
            <div className="px-2">
                <Headline title="Get more value from your tools" 
                            titleClassName="text-2xl text-black text-center font-semibold"
                            paragraph="Connect your tools, connect your teams. With over 100 apps already available in our directory, your team’s favourite tools are just a click away."
                            paragraphClassName="text-black text-center lg:px-40"
                />
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                    {
                        toolsInformation.map(({icon, title, paragraph}, index) => {
                            return (
                                <FeatureTool key={index}
                                        icon={icon} 
                                        title={title} 
                                        paragraph={paragraph} 
                                        isTool
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
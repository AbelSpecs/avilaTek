
import { Headline } from "@/components/ui/headline";
import { questions } from "@/public/data/questions";
import { Question } from "@/components/ui/question";


interface QuestionsProps {}

export const Questions = () => {
    const questionsInfo = questions();

    return (
        <div className="mt-10">
            <Headline title="Frequently asked questions"
                        titleClassName="text-black text-center text-2xl font-semibold"
                        paragraph="Everything you need to know about the product and billing."
                        paragraphClassName="text-black text-center"
            />
            <div className="grid grid-cols-1 gap-5 mt-10">
                {
                    questionsInfo.map(({question, answer, icon}, index) => {
                        return (
                            
                            <Question key={index} question={question} answer={answer} icon={icon}/>
                            
                        )
                    })
                }
            </div>
        </div>
    )
}

import { Headline } from "@/components/commons/headline";
import { questions } from "@/public/data/questions";
import { Question } from "@/components/questions/question";


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
                            <div key={index} className="flex flex-col justify-center items-center mt-5 px-2 lg:px-52">
                                <Question question={question} answer={answer} icon={icon}/>
                                { index < 6 && <hr className="mt-5 w-full"/>}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
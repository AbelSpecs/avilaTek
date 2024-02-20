import { Question } from "@/types/questions";
import minus from "@/public/questions/minus.svg"
import plus from "@/public/questions/plus.svg"

export const questions = (): Question[] => {
  return [
    {
        
        question: 'Is there a free trial available?',
        answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
        icon: minus
    },
    {
        
        question: 'Can I change my plan later?',
        icon: plus
    },
    {
        
        question: 'Google Drive integration',
        icon: plus
    },
    {
        
        question: 'What is your cancellation policy?',
        icon: plus
    },
    {
        
        question: 'Can other info be added to an invoice?',
        icon: plus
    },
    {
        
        question: 'How does billing work?',
        icon: plus
    },
    {
        
        question: 'How do I change my account email?',
        icon: plus
    }
  ];
};

import { ToolFeature } from "@/types/toolsFeatures";
import message from "@/public/features/message.svg"
import zap from "@/public/features/zap.svg"
import chart from "@/public/features/chart.svg"

// footer links
export const features = (): ToolFeature[] => {
  return [
    {
        icon: message,
        title: 'Share team inboxes',
        paragraph: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.'
    },
    {
        icon: zap,
        title: 'Deliver instant answers',
        paragraph: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.'
    },
    {
        icon: chart,
        title: 'Manage your team with reports',
        paragraph: 'Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.'
    }
  ];
};

import { Tool } from "@/types/tools";
import notion from '@/public/tools/notion.svg'
import slack from '@/public/tools/slack.svg'
import drive from '@/public/tools/drive.svg'
import intercom from '@/public/tools/intercom.svg'
import jira from '@/public/tools/jira.svg'
import dropbox from '@/public/tools/dropbox.svg'

// footer links
export const tools = (): Tool[] => {
  return [
    {
        icon: notion,
        title: 'Notion integration',
        paragraph: 'Work faster and smarter by integrating directly with Notion, right in the app.'
    },
    {
        icon: slack,
        title: 'Slack integration',
        paragraph: 'Work faster and smarter by integrating directly with Slack, right in the app.'
    },
    {
        icon: drive,
        title: 'Google Drive integration',
        paragraph: 'Work faster and smarter by integrating directly with Google Drive, right in the app.'
    },
    {
        icon: intercom,
        title: 'Intercom integration',
        paragraph: 'Work faster and smarter by integrating directly with Intercom, right in the app.'
    },
    {
        icon: jira,
        title: 'Jira integration',
        paragraph: 'Work faster and smarter by integrating directly with Jira, right in the app.'
    },
    {
        icon: dropbox,
        title: 'Dropbox integration',
        paragraph: 'Work faster and smarter by integrating directly with Dropbox, right in the app.'
    }
  ];
};

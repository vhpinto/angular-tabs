// YourComponent.stories.ts

import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { NavComponent } from 'src/app/components/nav.component';
import { TabComponent } from 'src/app/components/tab.component';


import { TabsComponent } from '../app/components/tabs.component';

//π This default export determines where your story goes in the story list
export default {
  /* π The title prop is optional.
  * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Tabs/TabsComponent',
  component: TabsComponent,
  decorators:[
      moduleMetadata({
          declarations: [TabComponent, NavComponent],
          imports: [CommonModule]
      }),
  ],
} as Meta;

//π We create a βtemplateβ of how args map to rendering
const Template: Story = (args) => ({
  props:args,
});

export const FirstStory = Template.bind({});
FirstStory.args= {
 //π The args you need here will depend on your component
    tabs: [
        {
            title: 'Stories tab 1 title',
            statement: 'Stories tab 1 content',
        },
        {
            title: 'Stories tab 2 title',
            statement: 'Stories tab 2 content',
        },
        {
            title: 'Stories tab 3 title',
            statement: 'Stories tab 3 content',
        },
        {
            title: 'Stories tab 4 title',
            statement: 'Stories tab 4 content',
        },
    ],
};
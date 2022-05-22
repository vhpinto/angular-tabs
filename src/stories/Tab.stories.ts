// YourComponent.stories.ts

import { Meta, Story } from '@storybook/angular';


import { TabComponent } from '../app/components/tab.component';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Tabs/TabComponent',
  component: TabComponent,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story = (args) => ({
  props:args,
});

export const FirstStory = Template.bind({});
FirstStory.args= {
 //👇 The args you need here will depend on your component
 statement: "Story statement"
};
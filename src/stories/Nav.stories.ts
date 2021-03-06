// YourComponent.stories.ts

import { Meta, Story } from '@storybook/angular';


import { NavComponent } from '../app/components/nav.component';

//π This default export determines where your story goes in the story list
export default {
  /* π The title prop is optional.
  * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Tabs/NavComponent',
  component: NavComponent,
} as Meta;

//π We create a βtemplateβ of how args map to rendering
const Template: Story = (args) => ({
  props:args,
});

export const FirstStory = Template.bind({});
FirstStory.args= {
 //π The args you need here will depend on your component
 title: "Story title", 
};
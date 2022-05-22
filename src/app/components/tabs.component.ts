import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-tabs',
  template: `
    <div class="tabs">
        <my-nav
          class="my-nav"
          *ngFor="let tab of tabs; let i = index"
          [title]="tab?.title"
          [selected]="selectedTab?.title === tab?.title"
          (onSelection)="select($event)"
        ></my-nav>
      <my-tab
        [statement]="selectedTab?.statement"
      >
      </my-tab>
    </div>
  `,
  styles: [
    `


    .my-nav {
      display: inline-block;
      margin: 10px;
    }
    `,
  ],
})
export class TabsComponent {
  @Input('tabs') tabs: {title: string, statement: string}[] = [
    {
      title: 'Tab 1 title',
      statement: 'Tab 1 content',
    },
    {
      title: 'Tab 2 title',
      statement: 'Tab 2 content',
    },
    {
      title: 'Tab 3 title',
      statement: 'Tab 3 content',
    },
    {
      title: 'Tab 4 title',
      statement: 'Tab 4 content',
    },
  ];
    
  selectedTab?: {title: string, statement: string} = this.tabs[0];

  select(title: string) {
    const newSelectedTab = this.tabs.find((tab) => title === tab.title);
    this.selectedTab = newSelectedTab;
  }
}
/**
 * The main component that renders single TabComponent
 * instances.
 */

 import {
    Component,
    ContentChildren,
    QueryList,
    AfterContentInit,
    ViewChild,
    ViewContainerRef
  } from '@angular/core';
  
  import { TabComponent } from './tab.component';
  
  @Component({
    selector: 'my-tabs',
    template: `
        <div class="container">
          <div class="tabs">
            <my-tab
              *ngFor="let tab of tabs"
              [ngClass]="title == tab.title ? 'selected' : 'my-tab'"
              [tabTitle]="tab.title"
              [tabStatement]="tab.statement"
              (changeMessage)="changeText($event)">
            </my-tab>
          </div>
          <div class="board">
            {{bodyContent}}
          </div>
        </div>
    `,
    styles: [`
      .container {
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
      }
    
      .tabs {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 15px;
      }

      .my-tab {
        background-color: grey;
        border-radius: 5px;
        padding: 10px 20px;
        margin-right: 6px;
      }

      .selected {
        font-weight: bold;
        background-color:  #45b39d ;
        border-radius: 5px;
        padding: 10px 20px;
        margin-right: 6px;
      }

      .board {
        border: 2px solid grey;
        height: 100px;
        padding: 5px;
        border-radius: 5px;
      }
    `]
  })
  export class TabsComponent {
    tabs = [
      {
        title: "tab1",
        statement: "Conteúdo tab 1"
      },
      {
        title: "tab2",
        statement: "Conteúdo tab 2"
      },
      {
        title: "tab3",
        statement: "Conteúdo tab 3"
      },
    ];

    bodyContent = this.tabs[0].statement;
    title = this.tabs[0].title;

    changeText(event: any) {
      this.bodyContent = event.statement;
      this.title = event.title;
    }
  }
  
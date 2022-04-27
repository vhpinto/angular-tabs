/**
 * A single tab page. It renders the passed template
 * via the @Input properties by using the ngTemplateOutlet
 * and ngTemplateOutletContext directives.
 */

 import { Component, EventEmitter, Input, Output } from '@angular/core';

 @Component({
   selector: 'my-tab',
   template: `
     <a (click)="changeBoardMessage()">{{title}}</a>
   `,
   styles: [
     `

     `
   ]
 })
 export class TabComponent {
   @Input('tabTitle') title!: string;
   @Input('tabStatement') statement!: string;
   @Output() changeMessage = new EventEmitter();


   changeBoardMessage() {
     this.changeMessage.emit(this);
   }
 }
 
import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-tab',
  template: `
    <p>
      {{ statement }}
    </p>
  `,
  styles: [
    `
      
    `,
  ],
})
export class TabComponent {
  @Input('statement') statement?: string = '';
}
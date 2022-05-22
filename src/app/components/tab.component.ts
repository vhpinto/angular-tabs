import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-tab',
  template: `
    <p class="tab">
      {{ statement }}
    </p>
  `,
  styles: [
    `
    .tab {
      width: 30%;
      height: auto;
      min-height: 400px;
      background: #053742;
      padding: 2rem 1rem;
      color: #e8f0f2;
      border-radius: 2rem;
    }
    `,
  ],
})
export class TabComponent {
  @Input('statement') statement?: string;
}
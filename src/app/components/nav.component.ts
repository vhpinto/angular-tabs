import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'my-nav',
  template: `
  <div class="nav">
    <span
      (click)="select(title)"
    >
      {{ title }}
    </span>
  </div>
  `,
  styles: [
    `
      .nav span {
        text-decoration: none;
        width: auto;
        background-color: #053742;
        color: #e8f0f2;
        padding: 5px;
        border: 1px solid #CCCCCC;
        border-radius: 8px;
      }

      .nav span:hover {
        color: #008080;
        cursor: pointer;
      }
  
    `,
  ],
})
export class NavComponent {
  @Input('title') title?: string = '';
  @Input('selected') selected?: boolean = false;

  @Output('onSelection') onSelection = new EventEmitter<string>();

  select(title?: string) {
    this.onSelection.emit(title);
  }
}
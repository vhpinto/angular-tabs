import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'my-nav',
  template: `
    <button
      type="button"
      (click)="select(title)"
    >
      {{ title }}
    </button>
  `,
  styles: [
    `

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
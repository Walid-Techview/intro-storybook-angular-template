import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatRadioChange, MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'rva-radio-button',
  standalone: true,
  imports: [CommonModule, MatRadioModule],
  template: `
    <mat-radio-button
      class="rva-radio"
      [name]="name"
      [value]="value"
      [checked]="checked"
      [disabled]="disabled"
      (change)="handleChange($event)"
    >
      {{ label }}
    </mat-radio-button>
  `,
  styleUrls: ['./radio.css'],
})
export class RadioButtonComponent {
  /** Text label rendered next to the control */
  @Input() label = 'Radio option';

  /** Group name so radios can share selection */
  @Input() name = 'rva-radio';

  /** Value emitted when the radio is selected */
  @Input() value = 'option';

  /** Whether the control starts selected */
  @Input() checked = false;

  /** Disable focus and interactions */
  @Input() disabled = false;

  /** Emits when the checked state changes */
  @Output() selectionChange = new EventEmitter<boolean>();

  handleChange(event: MatRadioChange): void {
    this.selectionChange.emit(event.source.checked);
  }
}

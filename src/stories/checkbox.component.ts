import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'rva-checkbox',
  standalone: true,
  imports: [CommonModule, MatCheckboxModule],
  template: `
    <mat-checkbox
      class="rva-checkbox"
      [checked]="checked"
      [disabled]="disabled"
      (change)="handleChange($event)"
    >
      {{ label }}
    </mat-checkbox>
  `,
  styleUrls: ['./checkbox.css'],
})
export class CheckboxComponent {
  /** Text label rendered next to the control */
  @Input() label = 'Checkbox option';

  /** Whether the checkbox starts checked */
  @Input() checked = false;

  /** Disable focus and interactions */
  @Input() disabled = false;

  /** Emits when the checked state changes */
  @Output() checkedChange = new EventEmitter<boolean>();

  handleChange(event: MatCheckboxChange): void {
    this.checkedChange.emit(event.checked);
  }
}

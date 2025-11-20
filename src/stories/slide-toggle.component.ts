import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'rva-slide-toggle',
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule],
  template: `
    <mat-slide-toggle
      class="rva-slide-toggle"
      [checked]="checked"
      [disabled]="disabled"
      [labelPosition]="labelPosition"
      (change)="handleChange($event)"
    >
      {{ label }}
    </mat-slide-toggle>
  `,
  styleUrls: ['./slide-toggle.css'],
})
export class SlideToggleComponent {
  /** Text rendered next to the control */
  @Input() label = 'Slide toggle';

  /** Whether the toggle is on */
  @Input() checked = false;

  /** Disable focus and interactions */
  @Input() disabled = false;

  /** Choose where the label renders */
  @Input() labelPosition: 'before' | 'after' = 'after';

  /** Emits when the checked state changes */
  @Output() checkedChange = new EventEmitter<boolean>();

  handleChange(event: MatSlideToggleChange): void {
    this.checkedChange.emit(event.checked);
  }
}

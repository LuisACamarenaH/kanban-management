import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-kanban-input',
  templateUrl: './kanban-input.component.html',
})
export class KanbanInputComponent {
  @Input() text: string;

  @Input() placeholder: string;

  @Input() inputType: string;

  @Input() form: FormControl;
}

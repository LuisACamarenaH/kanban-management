import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-kanban-dropdown',
  templateUrl: './kanban-dropdown.component.html',
})
export class KanbanDropdownComponent {
  @Input() list = [];

  @Input() form: FormControl;

  @Input() placeholder: string;

  @Input() text: string;
}

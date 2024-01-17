import { Component, Input } from '@angular/core';

//ButtonIconPosition = 'left' | 'right' | 'top' | 'bottom';

@Component({
  selector: 'app-kanban-button',
  templateUrl: './kanban-button.component.html',
})
export class KanbanButtonComponent {
  @Input() text: string;
  @Input() iconPosition: 'left' | 'right' | 'top' | 'bottom';
  @Input() icon: string;
  @Input() outlined = false;
  @Input() rounded = true;
  @Input() backgroundColor:
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'help'
    | 'danger';
}

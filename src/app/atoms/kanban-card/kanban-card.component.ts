import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-kanban-card',
  templateUrl: './kanban-card.component.html',
})
export class KanbanCardComponent {
  @Input() title: string;

  @Input() description: string;
}

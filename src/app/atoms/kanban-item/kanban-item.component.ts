import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-kanban-item',
  templateUrl: './kanban-item.component.html',
})
export class KanbanItemComponent {
  @Input() selection = false;

  @Input() text: string;

  @Input() icon = 'pi-bars';
}

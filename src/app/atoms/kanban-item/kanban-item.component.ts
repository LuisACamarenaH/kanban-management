import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMenuOptions } from '../../interfaces/menu.interface';

@Component({
  selector: 'app-kanban-item',
  templateUrl: './kanban-item.component.html',
})
export class KanbanItemComponent {
  @Input() item: IMenuOptions;

  @Output() itemSelected$ = new EventEmitter<IMenuOptions>();
}

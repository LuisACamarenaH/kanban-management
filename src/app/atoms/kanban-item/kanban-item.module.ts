import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanItemComponent } from './kanban-item.component';

@NgModule({
  declarations: [KanbanItemComponent],
  imports: [CommonModule],
  exports: [KanbanItemComponent],
})
export class KanbanItemModule {}

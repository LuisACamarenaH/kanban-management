import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanHeaderComponent } from './kanban-header.component';
import { KanbanButtonModule } from '../../atoms/kanban-button/kanban-button.module';

@NgModule({
  declarations: [KanbanHeaderComponent],
  imports: [CommonModule, KanbanButtonModule],
  exports: [KanbanHeaderComponent],
})
export class KanbanHeaderModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanBoardComponent } from './kanban-board.component';
import { KanbanCardModule } from '../../atoms/kanban-card/kanban-card.module';

@NgModule({
  declarations: [KanbanBoardComponent],
  imports: [CommonModule, KanbanCardModule],
  exports: [KanbanBoardComponent],
})
export class KanbanBoardModule {}

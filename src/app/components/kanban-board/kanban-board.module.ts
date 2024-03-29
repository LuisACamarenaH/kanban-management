import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanBoardComponent } from './kanban-board.component';
import { KanbanCardModule } from '../../atoms/kanban-card/kanban-card.module';
import {
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  DragDropModule,
} from '@angular/cdk/drag-drop';
import { BoardService } from '../../services/board/board.service';
import { TaskDonePipe } from '../../pipes/task-done.pipe';

@NgModule({
  declarations: [KanbanBoardComponent],
  imports: [
    CommonModule,
    KanbanCardModule,
    DragDropModule,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
  ],
  exports: [KanbanBoardComponent],
  providers: [BoardService, TaskDonePipe],
})
export class KanbanBoardModule {}

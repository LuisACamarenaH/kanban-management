import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanCardComponent } from './kanban-card.component';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [KanbanCardComponent],
  imports: [CommonModule, CardModule],
  exports: [KanbanCardComponent],
})
export class KanbanCardModule {}

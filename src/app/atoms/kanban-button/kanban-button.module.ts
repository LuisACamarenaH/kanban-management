import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanButtonComponent } from './kanban-button.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [KanbanButtonComponent],
  imports: [CommonModule, ButtonModule],
  exports: [KanbanButtonComponent],
})
export class KanbanButtonModule {}

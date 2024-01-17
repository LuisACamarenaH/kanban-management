import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanInputComponent } from './kanban-input.component';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [KanbanInputComponent],
  exports: [KanbanInputComponent],
  imports: [CommonModule, InputTextModule, ReactiveFormsModule],
})
export class KanbanInputModule {}

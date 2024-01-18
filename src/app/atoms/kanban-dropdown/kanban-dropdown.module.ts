import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanDropdownComponent } from './kanban-dropdown.component';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [KanbanDropdownComponent],
  imports: [CommonModule, DropdownModule, ReactiveFormsModule],
  exports: [KanbanDropdownComponent],
})
export class KanbanDropdownModule {}

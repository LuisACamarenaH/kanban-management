import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanMenuComponent } from './kanban-menu.component';
import { KanbanItemModule } from '../../atoms/kanban-item/kanban-item.module';
import { KanbanThemeModule } from '../../atoms/kanban-theme/kanban-theme.module';

@NgModule({
  declarations: [KanbanMenuComponent],
  imports: [CommonModule, KanbanItemModule, KanbanThemeModule],
  exports: [KanbanMenuComponent],
})
export class KanbanMenuModule {}

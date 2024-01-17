import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanThemeComponent } from './kanban-theme.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ThemeService } from '../../services/theme.service';

@NgModule({
  declarations: [KanbanThemeComponent],
  imports: [CommonModule, InputSwitchModule],
  exports: [KanbanThemeComponent],
  providers: [ThemeService],
})
export class KanbanThemeModule {}

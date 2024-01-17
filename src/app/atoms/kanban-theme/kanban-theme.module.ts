import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanThemeComponent } from './kanban-theme.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ThemeService } from '../../services/theme.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [KanbanThemeComponent],
  imports: [CommonModule, InputSwitchModule, FormsModule],
  exports: [KanbanThemeComponent],
  providers: [ThemeService],
})
export class KanbanThemeModule {}

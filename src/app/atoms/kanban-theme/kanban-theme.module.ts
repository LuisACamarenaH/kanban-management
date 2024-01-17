import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanThemeComponent } from './kanban-theme.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../services/theme/theme.service';

@NgModule({
  declarations: [KanbanThemeComponent],
  imports: [CommonModule, InputSwitchModule, FormsModule],
  exports: [KanbanThemeComponent],
  providers: [ThemeService],
})
export class KanbanThemeModule {}

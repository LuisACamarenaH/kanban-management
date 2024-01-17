import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-kanban-theme',
  templateUrl: './kanban-theme.component.html',
})
export class KanbanThemeComponent {
  themeSelected = true;

  constructor(private readonly _themeService: ThemeService) {}

  changeTheme(theme: boolean): void {
    this._themeService.changeTheme(theme);
  }
}

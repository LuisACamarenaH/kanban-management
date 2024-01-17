import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme/theme.service';
import { Store } from '@ngrx/store';
import {
  themeSelected,
  themeInit,
} from '../../store-data/actions/theme.action';
import { Observable } from 'rxjs';
import { themeDataState } from '../../store-data/selectors/theme.selector';
import { themes } from '../../constants/constants.constant';

@Component({
  selector: 'app-kanban-theme',
  templateUrl: './kanban-theme.component.html',
})
export class KanbanThemeComponent implements OnInit {
  themeSelected$: Observable<any> = this._store.select(themeDataState);

  themeSelected: boolean;

  constructor(
    private readonly _themeService: ThemeService,
    private readonly _store: Store
  ) {}

  ngOnInit(): void {
    this._store.dispatch(themeInit());
    this.themeSelected$.subscribe(
      (response) => (this.themeSelected = response === themes.dark)
    );
  }

  changeTheme(theme: boolean): void {
    this._store.dispatch(
      themeSelected({ theme: this._themeService.returnThemeName(theme) })
    );
  }
}

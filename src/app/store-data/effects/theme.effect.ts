import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, exhaustMap, map } from 'rxjs';
import { ThemeService } from '../../services/theme/theme.service';
import {
  themeSelected,
  saveThemeSelected,
  themeInit,
  themeLoad,
} from '../actions/theme.action';

@Injectable()
export class ThemeEffects {
  initTheme$ = createEffect(() =>
    this._actions$.pipe(
      ofType(themeInit),
      exhaustMap(() =>
        this._themeService
          .loadTheme()
          .pipe(map((response) => themeLoad({ theme: response })))
      )
    )
  );

  changeThemeSelected$ = createEffect(() =>
    this._actions$.pipe(
      ofType(themeSelected),
      concatMap((themeName: any) => {
        return this._themeService.saveThemeSelected(themeName).pipe(
          map((themeName) => {
            this._themeService.loadTheme().subscribe();
            return saveThemeSelected(themeName);
          })
        );
      })
    )
  );

  constructor(
    private readonly _actions$: Actions,
    private readonly _themeService: ThemeService
  ) {}
}

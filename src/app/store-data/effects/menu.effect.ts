import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  initMenu,
  loadMenuOptions,
  menuOptionSelected,
  saveMenuOptionsSelected,
} from '../actions/menu.actions';
import { concatMap, exhaustMap, map } from 'rxjs';
import { MenuService } from '../../services/menu/menu.service';

@Injectable()
export class MenuEffects {
  loadAll$ = createEffect(() =>
    this._actions$.pipe(
      ofType(initMenu),
      exhaustMap(() =>
        this._menuService
          .getMenuOptions()
          .pipe(map((response) => loadMenuOptions({ menu: response })))
      )
    )
  );

  MenuOptionSelected$ = createEffect(() =>
    this._actions$.pipe(
      ofType(menuOptionSelected),
      concatMap((menuOptions) => {
        return this._menuService
          .saveMenuOptionSelected(menuOptions)
          .pipe(
            map((saveMenuOption) => saveMenuOptionsSelected(saveMenuOption))
          );
      })
    )
  );

  constructor(
    private readonly _actions$: Actions,
    private readonly _menuService: MenuService
  ) {}
}

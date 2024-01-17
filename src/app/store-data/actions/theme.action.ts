import { createAction, props } from '@ngrx/store';

export const themeInit = createAction('[Theme init] init');

export const themeSelected = createAction(
  '[Theme selected] Selected',
  props<{ theme: string }>()
);

export const themeLoad = createAction(
  '[Theme load] load',
  props<{ theme: string }>()
);

export const saveThemeSelected = createAction(
  '[Save theme selected] Save theme selected',
  props<{ theme: string }>()
);

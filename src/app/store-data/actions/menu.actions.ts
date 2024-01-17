import { createAction, props } from '@ngrx/store';
import { IMenuOptions } from '../../interfaces/menu.interface';

export const initMenu = createAction('[Menu init] init');

export const menuOptionSelected = createAction(
  '[Menu option Selected] menu option selected',
  props<{ menu: IMenuOptions }>()
);

export const loadMenuOptions = createAction(
  '[Load menu options] load menu options',
  props<{ menu: IMenuOptions[] }>()
);

export const saveMenuOptionsSelected = createAction(
  '[Save menu option selected] Save menu option selected',
  props<{ menu: IMenuOptions[] }>()
);

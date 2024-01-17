import { createReducer, on } from '@ngrx/store';
import {
  loadMenuOptions,
  saveMenuOptionsSelected,
} from '../actions/menu.actions';
import { IMenuList } from '../../interfaces/menu.interface';

const initialState: IMenuList = {
  menu: [],
};

export const initReducer = createReducer(
  initialState,
  on(loadMenuOptions, (currentState, action) => ({
    ...currentState,
    menu: action.menu,
  })),
  on(saveMenuOptionsSelected, (currentState, action) => ({
    ...currentState,
    menu: action.menu,
  }))
);

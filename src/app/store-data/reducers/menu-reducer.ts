import { createReducer, on } from '@ngrx/store';
import { menuOptionSelected, initMenu } from '../actions/menu.actions';
import { IMenuList } from '../../interfaces/menu.interface';
import { menuOptions } from '../../constants/constants.constant';

const initialState: IMenuList = {
  menu: [],
};

export const initReducer = createReducer(
  initialState,
  on(initMenu, (currentState) => ({ ...currentState, menu: menuOptions })),
  on(menuOptionSelected, (currentState, action) => ({
    ...currentState,
    menu: currentState.menu.map((todo) => ({
      ...todo,
      selected: todo.id === action.menu.id,
    })),
  }))
);

import { createReducer, on } from '@ngrx/store';
import { saveThemeSelected, themeLoad } from '../actions/theme.action';

const initialState = {
  theme: '',
};

export const initThemeReducer = createReducer(
  initialState,
  on(themeLoad, (currentState, action) => ({
    ...currentState,
    theme: action.theme,
  })),
  on(saveThemeSelected, (currentState, action) => ({
    ...currentState,
    menu: action.theme,
  }))
);

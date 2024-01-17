import { createFeatureSelector, createSelector } from '@ngrx/store';
import { keysStore } from '../../constants/constants.constant';

const themeState = createFeatureSelector<{ theme: string }>(
  keysStore.themeStore
);

export const themeDataState = createSelector(
  themeState,
  (state) => state.theme
);

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { keysStore } from '../../constants/constants.constant';
import { IMenuList } from '../../interfaces/menu.interface';

const menuOptionsState = createFeatureSelector<IMenuList>(keysStore.menuStore);

export const dataState = createSelector(
  menuOptionsState,
  (state) => state.menu
);

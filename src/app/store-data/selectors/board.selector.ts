import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IListArray } from '../../interfaces/board.interface';
import { keysStore } from '../../constants/constants.constant';

const boardState = createFeatureSelector<{ list: IListArray }>(
  keysStore.boardStore
);

export const dataBoardState = createSelector(boardState, (state) => state.list);

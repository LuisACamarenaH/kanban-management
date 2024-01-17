import { createAction, props } from '@ngrx/store';
import { IListArray } from '../../interfaces/board.interface';

export const initBoard = createAction('[Board init] Init');

export const changeTaskOfBoard = createAction(
  '[Change task of board] Change task of board',
  props<{ list: IListArray }>()
);
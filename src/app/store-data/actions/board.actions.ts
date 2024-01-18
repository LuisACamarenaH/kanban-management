import { createAction, props } from '@ngrx/store';
import { IListArray, Itask } from '../../interfaces/board.interface';

export const initBoard = createAction('[Board init] Init');

export const loadBoard = createAction(
  '[Load of board] load of board',
  props<{ list: IListArray }>()
);

export const changeTaskOfBoard = createAction(
  '[Change task of board] Change task of board',
  props<{ list: IListArray }>()
);

export const saveTaskOfBoard = createAction(
  '[Save task of board] Save task of board',
  props<{ list: IListArray }>()
);

export const addNewTask = createAction(
  '[Add new task] Add new task',
  props<{ task: Itask }>()
);

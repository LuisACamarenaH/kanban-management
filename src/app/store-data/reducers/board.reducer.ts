import { createReducer, on } from '@ngrx/store';
import { loadBoard, saveTaskOfBoard } from '../actions/board.actions';
import { IListArray } from '../../interfaces/board.interface';
const initialState: IListArray = {
  list: [],
};

export const initBoardReducer = createReducer(
  {
    initialState,
  },
  on(loadBoard, (currentState, action) => ({
    ...currentState,
    list: action,
  })),
  on(saveTaskOfBoard, (currentState, action) => ({
    ...currentState,
    list: action,
  }))
);

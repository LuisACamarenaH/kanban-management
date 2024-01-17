import { createReducer, on } from '@ngrx/store';
import { changeTaskOfBoard, initBoard } from '../actions/board.actions';
import { initialListTask } from '../../constants/constants.constant';
import { IListArray } from '../../interfaces/board.interface';
const initialState: IListArray = {
  list: [],
};

export const initBoardReducer = createReducer(
  {
    initialState,
  },
  on(initBoard, (currentState) => ({ ...currentState, list: initialListTask })),
  on(changeTaskOfBoard, (currentState, action) => ({
    ...currentState,
    list: action.list,
  }))
);

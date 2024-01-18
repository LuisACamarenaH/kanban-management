import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, exhaustMap, map } from 'rxjs';
import {
  addNewTask,
  changeTaskOfBoard,
  initBoard,
  loadBoard,
  saveTaskOfBoard,
  updatedTask,
} from '../actions/board.actions';
import { BoardService } from '../../services/board/board.service';
import { Itask } from '../../interfaces/board.interface';

@Injectable()
export class BoardEffects {
  initBoard$ = createEffect(() =>
    this._actions$.pipe(
      ofType(initBoard),
      exhaustMap(() =>
        this._boardService
          .loadListTask()
          .pipe(map((response) => loadBoard({ list: response.list })))
      )
    )
  );

  saveListsTasks$ = createEffect(() =>
    this._actions$.pipe(
      ofType(changeTaskOfBoard),
      exhaustMap((listsTasks) => {
        return this._boardService.saveListTask(listsTasks).pipe(
          map((listsTasks) => {
            return saveTaskOfBoard(listsTasks);
          })
        );
      })
    )
  );

  addNewTask$ = createEffect(() =>
    this._actions$.pipe(
      ofType(addNewTask),
      exhaustMap((addNewTask: any) => {
        return this._boardService.addNewTask(addNewTask).pipe(
          map((addNewTask) => {
            return saveTaskOfBoard(addNewTask);
          })
        );
      })
    )
  );

  updatedTask$ = createEffect(() =>
    this._actions$.pipe(
      ofType(updatedTask),
      exhaustMap(({ task }) => {
        return this._boardService.updatedTask(task).pipe(
          map((updatedTask) => {
            return saveTaskOfBoard(updatedTask);
          })
        );
      })
    )
  );

  constructor(
    private readonly _actions$: Actions,
    private readonly _boardService: BoardService
  ) {}
}

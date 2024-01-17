import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, exhaustMap, map } from 'rxjs';
import {
  changeTaskOfBoard,
  initBoard,
  loadBoard,
  saveTaskOfBoard,
} from '../actions/board.actions';
import { BoardService } from '../../services/board/board.service';

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
      concatMap((listsTasks) => {
        return this._boardService.saveListTask(listsTasks).pipe(
          map((listsTasks) => {
            return saveTaskOfBoard(listsTasks);
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

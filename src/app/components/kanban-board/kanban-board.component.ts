import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { dataBoardState } from '../../store-data/selectors/board.selector';
import {
  changeTaskOfBoard,
  initBoard,
} from '../../store-data/actions/board.actions';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { BoardService } from '../../services/board/board.service';
import { IListArray, IListTasks } from '../../interfaces/board.interface';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
})
export class KanbanBoardComponent implements OnInit {
  listTask: IListArray;

  listIds: string[] = [];

  private IListArray$: Observable<IListArray> =
    this._store.select(dataBoardState);

  constructor(
    private readonly _store: Store,
    private readonly _boardService: BoardService
  ) {}

  ngOnInit(): void {
    this._store.dispatch(initBoard());

    this.IListArray$.subscribe((listBoardResponse) => {
      this.listTask = listBoardResponse;
      this.listIds = this.listTask.list?.map(
        (_list, idx: number) => `list-${idx}`
      );
    });
  }

  drop(event: CdkDragDrop<IListTasks>): void {
    const { previousIndex, currentIndex } = event;
    const { container } = event;
    const { previousContainer } = event;

    if (event.previousContainer === event.container) {
      this._boardService.moveTaskInList(
        container.data,
        previousIndex,
        currentIndex
      );
    } else {
      this._boardService.moveTaskOtherList(
        previousContainer.data,
        container.data,
        previousIndex,
        currentIndex
      );
    }

    this._store.dispatch(changeTaskOfBoard({ list: { ...this.listTask } }));
  }
}

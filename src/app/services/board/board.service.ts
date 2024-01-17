import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';
import { IListTasks } from '../../interfaces/board.interface';

@Injectable()
export class BoardService {
  moveTaskInList(
    list: IListTasks,
    previousIndex: number,
    currentIndex: number
  ): void {
    moveItemInArray(list.tasks, previousIndex, currentIndex);
  }

  moveTaskOtherList(
    previousList: IListTasks,
    list: IListTasks,
    previousIndex: number,
    currentIndex: number
  ): void {
    transferArrayItem(
      previousList.tasks,
      list.tasks,
      previousIndex,
      currentIndex
    );
  }
}

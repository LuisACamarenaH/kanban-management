import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';
import {
  IListArray,
  IListTasks,
  Itask,
} from '../../interfaces/board.interface';
import { Observable, of, switchMap } from 'rxjs';
import { initialListTask } from '../../constants/constants.constant';

@Injectable({
  providedIn: 'root',
})
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

  loadListTask(): Observable<{ list: IListArray }> {
    const listTasks = JSON.parse(sessionStorage.getItem('listTasks') as any);
    return of(listTasks ? listTasks : initialListTask);
  }

  saveListTask(listTasks: any): Observable<{ list: IListArray }> {
    sessionStorage.setItem('listTasks', JSON.stringify(listTasks.list));
    return of(listTasks.list);
  }

  addNewTask(addNewTask: Itask): Observable<{ list: IListArray }> {
    return this.loadListTask().pipe(
      switchMap((listTask: any) => {
        listTask.list.map((element: IListTasks) => {
          if (element.id === addNewTask.status.code) {
            element.tasks.push(addNewTask);
          }
          return element;
        });
        return this.saveListTask({ list: listTask });
      })
    );
  }
}

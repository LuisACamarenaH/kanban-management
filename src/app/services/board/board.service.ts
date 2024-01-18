import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';
import {
  IListArray,
  IListTasks,
  Itask,
} from '../../interfaces/board.interface';
import { Observable, of, switchMap } from 'rxjs';
import {
  initialListTask,
  listStatus,
} from '../../constants/constants.constant';

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

    list.tasks[currentIndex].status = listStatus.find(
      (status) => status.code === list.id
    ) as { code: string; name: string };
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

  updatedTask(updatedTask: Itask): Observable<{ list: IListArray }> {
    return this.loadListTask().pipe(
      switchMap((listTask: any) => {
        const listTaskUpdated = listTask.list.reduce(
          (accumulator: any[], currentvalue: any) => {
            const filterTask = currentvalue.tasks.find(
              (task: Itask) =>
                task.id === updatedTask.id &&
                currentvalue.id === updatedTask.status.code
            );
            if (filterTask) {
              currentvalue.tasks = currentvalue.tasks.map((task: Itask) => {
                if (task.id === updatedTask.id) {
                  task = {
                    ...updatedTask,
                  };
                }
                return task;
              });
            } else {
              const taskIndex = currentvalue.tasks.findIndex(
                (task: Itask) => task.id === updatedTask.id
              );
              if (taskIndex > -1) {
                currentvalue.tasks.splice(taskIndex, 1);
              }

              if (currentvalue.id === updatedTask.status.code) {
                currentvalue.tasks.push(updatedTask);
              }
            }

            accumulator.push(currentvalue);
            return accumulator;
          },
          []
        );

        return this.saveListTask({ list: { list: listTaskUpdated } });
      })
    );
  }
}

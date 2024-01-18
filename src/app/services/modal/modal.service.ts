import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import {
  addNewTask,
  updatedTask,
} from '../../store-data/actions/board.actions';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  ref: DynamicDialogRef | undefined;

  constructor(
    private readonly _dialogService: DialogService,
    private readonly _store: Store
  ) {}

  openModal(component: any, data?: any): void {
    const modal = this._dialogService.open(component, {
      data,
      header: 'Add new task',
      width: '450px',
      maximizable: true,
    });

    modal.onClose.subscribe((dataResponse) => {
      if (dataResponse && dataResponse.addNewTask && dataResponse.added) {
        this._store.dispatch(addNewTask(dataResponse.addNewTask));
      }

      if (dataResponse && dataResponse.updatedTask && dataResponse.updated) {
        this._store.dispatch(
          updatedTask({
            task: dataResponse.updatedTask,
          })
        );
      }
    });
  }
}

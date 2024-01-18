import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { addNewTask } from '../../store-data/actions/board.actions';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  ref: DynamicDialogRef | undefined;

  constructor(
    private readonly _dialogService: DialogService,
    private readonly _store: Store
  ) {}

  openModal(component: any): void {
    const modal = this._dialogService.open(component, {
      header: 'Add new task',
      width: '450px',
      height: '750px',
      maximizable: true,
    });

    modal.onClose.subscribe((dataResponse) => {
      if (dataResponse) {
        this._store.dispatch(addNewTask(dataResponse));
      }
    });
  }
}

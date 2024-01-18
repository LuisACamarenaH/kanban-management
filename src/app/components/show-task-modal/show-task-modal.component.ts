import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KanbanDropdownModule } from '../../atoms/kanban-dropdown/kanban-dropdown.module';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Itask } from '../../interfaces/board.interface';
import { listStatus } from '../../constants/constants.constant';
import { TaskDonePipe } from '../../pipes/task-done.pipe';
import { KanbanButtonModule } from '../../atoms/kanban-button/kanban-button.module';

@Component({
  selector: 'app-show-task-modal',
  templateUrl: './show-task-modal.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    KanbanDropdownModule,
    KanbanButtonModule,
    CheckboxModule,
    TaskDonePipe,
  ],
  providers: [],
})
export class ShowTaskModalComponent {
  data: Itask;

  doneTask: number;

  listStatus = listStatus;

  showTask: FormControl;

  constructor(
    private _ref: DynamicDialogRef,
    private readonly _dialogService: DialogService
  ) {
    this._init();
    this.showTask = new FormControl(this.data.status);
  }

  private _init(): void {
    const {
      config: { data },
    } = this._dialogService.getInstance(this._ref);
    this.data = data;
  }

  updateTask(): void {
    this._ref.close({
      updatedTask: { ...this.data, status: this.showTask.value },
      updated: true,
    });
  }
}

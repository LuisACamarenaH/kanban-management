import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { KanbanInputModule } from '../../atoms/kanban-input/kanban-input.module';
import { KanbanButtonModule } from '../../atoms/kanban-button/kanban-button.module';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { KanbanDropdownModule } from '../../atoms/kanban-dropdown/kanban-dropdown.module';
import { listStatus } from '../../constants/constants.constant';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-create-task-modal',
  imports: [
    CommonModule,
    KanbanInputModule,
    KanbanButtonModule,
    ReactiveFormsModule,
    KanbanDropdownModule,
  ],
  standalone: true,
  templateUrl: './create-task-modal.component.html',
})
export class CreateTaskModalComponent {
  formModal: any;

  listStatus = listStatus;

  constructor(
    private readonly _fbBuilder: FormBuilder,
    private readonly _ref: DynamicDialogRef
  ) {
    this.createForm();
  }

  createForm() {
    this.formModal = this._fbBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required],
      subTasks: this._fbBuilder.array([
        this._fbBuilder.group({
          task: [''],
          done: false,
        }),
        this._fbBuilder.group({
          task: [''],
          done: false,
        }),
      ]),
    });
  }

  addTask() {
    const hola = this._fbBuilder.group({
      task: [''],
    });
    this.tasks.push(hola);
  }

  removeSubTask(index: number): void {
    this.tasks.removeAt(index);
  }

  createTask() {
    console.log(this.formModal.value);
    this._ref.close(this.formModal.value);
  }

  get tasks(): FormArray {
    return this.formModal.controls['subTasks'] as FormArray;
  }
}

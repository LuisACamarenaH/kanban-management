import { Component } from '@angular/core';
import { ModalService } from '../../services/modal/modal.service';
import { CreateTaskModalComponent } from '../create-task-modal/create-task-modal.component';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-kanban-header',
  templateUrl: './kanban-header.component.html',
  providers: [DialogService],
})
export class KanbanHeaderComponent {
  constructor(private readonly _modalService: ModalService) {}

  openModal() {
    this._modalService.openModal(CreateTaskModalComponent);
  }
}

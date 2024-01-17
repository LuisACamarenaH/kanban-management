import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { KanbanMenuModule } from './components/kanban-menu/kanban-menu.module';
import { KanbanBoardModule } from './components/kanban-board/kanban-board.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ButtonModule,
    KanbanMenuModule,
    KanbanBoardModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'kanban-task-management';
}

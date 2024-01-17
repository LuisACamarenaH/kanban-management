import { Component } from '@angular/core';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
})
export class KanbanBoardComponent {
  listsTasks = [
    {
      title: 'TODO',
      color: '#F4D03F',
      tasks: [
        {
          title: 'title 1',
          description: 'completed 1 to 212 tasks',
        },
        {
          title: 'title 2',
          description: 'completed 1 to 3 tasks',
        },
        {
          title: 'title 3',
          description: 'completed 1 to 34 tasks',
        },
        {
          title: 'title 4',
          description: 'completed 1 to 6 tasks',
        },
      ],
    },
    {
      title: 'DOING',
      color: '#58D68D',
      tasks: [
        {
          title: 'title 1',
          description: 'completed 1 to 212 tasks',
        },
        {
          title: 'title 2',
          description: 'completed 1 to 3 tasks',
        },
        {
          title: 'title 3',
          description: 'completed 1 to 34 tasks',
        },
        {
          title: 'title 4',
          description: 'completed 1 to 6 tasks',
        },
        {
          title: 'title 3',
          description: 'completed 1 to 34 tasks',
        },
        {
          title: 'title 4',
          description: 'completed 1 to 6 tasks',
        },
      ],
    },
    {
      title: 'DONE',
      color: '#5DADE2',
      tasks: [
        {
          title: 'title 1',
          description: 'completed 1 to 212 tasks',
        },
        {
          title: 'title 2',
          description: 'completed 1 to 3 tasks',
        },
        {
          title: 'title 3',
          description: 'completed 1 to 34 tasks',
        },
        {
          title: 'title 4',
          description: 'completed 1 to 6 tasks',
        },
        {
          title: 'title 3',
          description: 'completed 1 to 34 tasks',
        },
        {
          title: 'title 4',
          description: 'completed 1 to 6 tasks',
        },
        {
          title: 'title 3',
          description: 'completed 1 to 34 tasks',
        },
        {
          title: 'title 4',
          description: 'completed 1 to 6 tasks',
        },
      ],
    },
  ];
}

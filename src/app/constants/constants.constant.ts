import { IMenuOptions } from '../interfaces/menu.interface';

export const menuOptions: IMenuOptions[] = [
  {
    id: 1,
    title: 'Platform launch',
    selected: true,
    icon: 'pi-bars',
  },
  {
    id: 2,
    title: 'Marketing plan',
    selected: false,
    icon: 'pi-bars',
  },
  {
    id: 3,
    title: 'Road map',
    selected: false,
    icon: 'pi-bars',
  },
];

export const listStatus = [
  { name: 'Todo', code: 'TD' },
  { name: 'Doing', code: 'DNG' },
  { name: 'Done', code: 'DN' },
];

export const initialListTask = {
  list: [
    {
      title: 'TODO',
      color: '#F4D03F',
      id: 'TD',
      tasks: [
        {
          id: 1,
          title: 'title 1',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente officia accusamus qui voluptate officiis. Sequi magni recusandae harum laborum nesciunt ex distinctio dolores iste, qui iure voluptatem sit, quasi inventore?',
          status: {
            code: 'TD',
            name: 'Todo',
          },
          subTasks: [
            {
              task: 'First task',
              done: true,
            },
            {
              task: 'Second task',
              done: false,
            },
          ],
        },
        {
          id: 2,
          title: 'title 2',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente officia accusamus qui voluptate officiis. Sequi magni recusandae harum laborum nesciunt ex distinctio dolores iste, qui iure voluptatem sit, quasi inventore?',
          status: {
            code: 'TD',
            name: 'Todo',
          },
          subTasks: [
            {
              task: 'First task',
              done: false,
            },
            {
              task: 'Second task',
              done: false,
            },
          ],
        },
      ],
    },
    {
      title: 'DOING',
      color: '#58D68D',
      id: 'DNG',
      tasks: [
        {
          id: 3,
          title: 'title 1',
          description: 'completed 1 to 212 tasks',
          status: {
            code: 'DNG',
            name: 'Todo',
          },
          subTasks: [
            {
              task: 'First task',
              done: false,
            },
            {
              task: 'Second task',
              done: false,
            },
          ],
        },
        {
          id: 4,
          title: 'title 2',
          description: 'completed 1 to 3 tasks',
          status: {
            code: 'DNG',
            name: 'Todo',
          },
          subTasks: [
            {
              task: 'First task',
              done: false,
            },
            {
              task: 'Second task',
              done: false,
            },
          ],
        },
        {
          id: 5,
          title: 'title 3',
          description: 'completed 1 to 34 tasks',
          status: {
            code: 'DNG',
            name: 'Todo',
          },
          subTasks: [
            {
              task: 'First task',
              done: false,
            },
            {
              task: 'Second task',
              done: false,
            },
          ],
        },
        {
          id: 6,
          title: 'title 4',
          description: 'completed 1 to 6 tasks',
          status: {
            code: 'DNG',
            name: 'Todo',
          },
          subTasks: [
            {
              task: 'First task',
              done: false,
            },
            {
              task: 'Second task',
              done: false,
            },
          ],
        },
        {
          id: 7,
          title: 'title 5',
          description: 'completed 1 to 34 tasks',
          status: {
            code: 'DNG',
            name: 'Todo',
          },
          subTasks: [
            {
              task: 'First task',
              done: false,
            },
            {
              task: 'Second task',
              done: false,
            },
          ],
        },
        {
          id: 8,
          title: 'title 6',
          description: 'completed 1 to 6 tasks',
          status: {
            code: 'DNG',
            name: 'Todo',
          },
          subTasks: [
            {
              task: 'First task',
              done: false,
            },
            {
              task: 'Second task',
              done: false,
            },
          ],
        },
      ],
    },
    {
      title: 'DONE',
      color: '#5DADE2',
      id: 'DN',
      tasks: [
        {
          id: 9,
          title: 'Firt task',
          description: 'completed 1 to 212 tasks',
          status: {
            code: 'DN',
            name: 'Todo',
          },
          subTasks: [
            {
              task: 'First task',
              done: false,
            },
            {
              task: 'Second task',
              done: false,
            },
          ],
        },
        {
          id: 10,
          title: 'title 2',
          description: 'completed 1 to 3 tasks',
          status: {
            code: 'DN',
            name: 'Todo',
          },
          subTasks: [
            {
              task: 'First task',
              done: false,
            },
            {
              task: 'Second task',
              done: false,
            },
          ],
        },
        {
          id: 11,
          title: 'title 3',
          description: 'completed 1 to 34 tasks',
          status: {
            code: 'DN',
            name: 'Todo',
          },
          subTasks: [
            {
              task: 'First task',
              done: false,
            },
            {
              task: 'Second task',
              done: false,
            },
          ],
        },
        {
          id: 12,
          title: 'title 4',
          description: 'completed 1 to 6 tasks',
          status: {
            code: 'DN',
            name: 'Todo',
          },
          subTasks: [
            {
              task: 'First task',
              done: false,
            },
            {
              task: 'Second task',
              done: false,
            },
          ],
        },
        {
          id: 13,
          title: 'title 5',
          description: 'completed 1 to 34 tasks',
          status: {
            code: 'DN',
            name: 'Todo',
          },
          subTasks: [
            {
              task: 'First task',
              done: false,
            },
            {
              task: 'Second task',
              done: false,
            },
          ],
        },
        {
          id: 14,
          title: 'title 6',
          description: 'completed 1 to 6 tasks',
          status: {
            code: 'DN',
            name: 'Todo',
          },
          subTasks: [
            {
              task: 'First task',
              done: false,
            },
            {
              task: 'Second task',
              done: false,
            },
          ],
        },
        {
          id: 15,
          title: 'title 7',
          description: 'completed 1 to 34 tasks',
          status: {
            code: 'DN',
            name: 'Todo',
          },
          subTasks: [
            {
              task: 'First task',
              done: false,
            },
            {
              task: 'Second task',
              done: false,
            },
          ],
        },
        {
          id: 16,
          title: 'title 8',
          description: 'completed 1 to 6 tasks',
          status: {
            code: 'DN',
            name: 'Todo',
          },
          subTasks: [
            {
              task: 'First task',
              done: false,
            },
            {
              task: 'Second task',
              done: false,
            },
          ],
        },
      ],
    },
  ],
};

export enum keysStore {
  menuStore = 'menuStore',
  boardStore = 'boardStore',
  themeStore = 'themeStore',
}

export enum themes {
  dark = 'dark.css',
  white = 'white.css',
}

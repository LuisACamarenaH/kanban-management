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

export const initialListTask = {
  list: [
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
          title: 'title 5',
          description: 'completed 1 to 34 tasks',
        },
        {
          title: 'title 6',
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
          title: 'title 5',
          description: 'completed 1 to 34 tasks',
        },
        {
          title: 'title 6',
          description: 'completed 1 to 6 tasks',
        },
        {
          title: 'title 7',
          description: 'completed 1 to 34 tasks',
        },
        {
          title: 'title 8',
          description: 'completed 1 to 6 tasks',
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

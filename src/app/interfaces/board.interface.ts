export interface Itask {
  title: string;
  description: string;
  status: {
    code: string;
    name: string;
  };
  subTasks: [
    {
      task: string;
      done: boolean;
    }
  ];
}

export interface IListTasks {
  title: string;
  color: string;
  tasks: Itask[];
  id: string;
}

export interface IListArray {
  list: IListTasks[];
}

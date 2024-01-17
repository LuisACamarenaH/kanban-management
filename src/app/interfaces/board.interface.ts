export interface Itask {
  title: string;
  description: string;
}

export interface IListTasks {
  title: string;
  color: string;
  tasks: Itask[];
}

export interface IListArray {
  list: IListTasks[];
}

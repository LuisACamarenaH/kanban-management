export interface IMenuOptions {
  id: number;
  title: string;
  selected: boolean;
  icon?: string;
}

export interface IMenuList {
  menu: IMenuOptions[];
}

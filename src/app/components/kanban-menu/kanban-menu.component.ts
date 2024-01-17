import { Component, OnInit } from '@angular/core';
import { IMenuOptions } from '../../interfaces/menu.interface';
import { Observable, of } from 'rxjs';
import { menuOptions } from '../../constants/constants.constant';

@Component({
  selector: 'app-kanban-menu',
  templateUrl: './kanban-menu.component.html',
})
export class KanbanMenuComponent implements OnInit {
  menuOptions: IMenuOptions[] = menuOptions;

  constructor() {}

  ngOnInit(): void {
    this.menuOptions = menuOptions;
  }

  optionSelected(menu: IMenuOptions): void {
    console.log({ menu });
  }
}

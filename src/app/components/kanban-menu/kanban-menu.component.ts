import { Component, OnInit } from '@angular/core';
import { IMenuOptions } from '../../interfaces/menu.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { dataState } from '../../store-data/selectors/menu-selector';
import {
  initMenu,
  menuOptionSelected,
} from '../../store-data/actions/menu.actions';

@Component({
  selector: 'app-kanban-menu',
  templateUrl: './kanban-menu.component.html',
})
export class KanbanMenuComponent implements OnInit {
  menuOptions$: Observable<IMenuOptions[]> = this._store.select(dataState);

  constructor(private readonly _store: Store) {}

  ngOnInit(): void {
    this._store.dispatch(initMenu());
  }

  optionSelected(menu: IMenuOptions): void {
    this._store.dispatch(menuOptionSelected({ menu }));
  }
}

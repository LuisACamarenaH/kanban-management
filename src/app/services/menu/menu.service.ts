import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IMenuOptions } from '../../interfaces/menu.interface';
import { menuOptions } from '../../constants/constants.constant';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  getMenuOptions(): Observable<IMenuOptions[]> {
    const menuOptionsStorage: IMenuOptions[] = JSON.parse(
      sessionStorage.getItem('menuOptions') as any
    );
    return of(menuOptionsStorage ? menuOptionsStorage : menuOptions);
  }

  saveMenuOptionSelected(menu: {
    menu: IMenuOptions;
  }): Observable<{ menu: IMenuOptions[] }> {
    const menuOptionsSelected = menuOptions.map((todo: any) => ({
      ...todo,
      selected: todo.id === menu.menu.id,
    }));
    sessionStorage.setItem('menuOptions', JSON.stringify(menuOptionsSelected));
    return of({ menu: menuOptionsSelected });
  }
}

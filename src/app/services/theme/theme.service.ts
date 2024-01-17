import { DOCUMENT } from '@angular/common';
import { INJECTOR, Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { themes } from '../../constants/constants.constant';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(@Inject(DOCUMENT) private readonly _document: Document) {}

  loadTheme(): Observable<any> {
    const themeLink = this._document.getElementById(
      'app-theme'
    ) as HTMLLinkElement;

    const themeStorage = sessionStorage.getItem('theme');

    if (themeLink) {
      themeLink.href = `${themeStorage ? themeStorage : themes.dark}`;
    }

    return of(themeStorage ? themeStorage : themes.dark);
  }

  saveThemeSelected(themeName: {
    theme: string;
  }): Observable<{ theme: string }> {
    sessionStorage.setItem('theme', themeName.theme);
    return of({ theme: themeName.theme });
  }

  returnThemeName(theme: boolean): string {
    return `${theme ? themes.dark : themes.white}`;
  }
}

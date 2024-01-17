import { DOCUMENT } from '@angular/common';
import { INJECTOR, Inject, Injectable } from '@angular/core';

@Injectable()
export class ThemeService {
  constructor(@Inject(DOCUMENT) private readonly _document: Document) {}

  changeTheme(theme: boolean): void {
    const themeLink = this._document.getElementById(
      'app-theme'
    ) as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = `${theme ? 'white' : 'dark'}.css`;
    }
  }
}

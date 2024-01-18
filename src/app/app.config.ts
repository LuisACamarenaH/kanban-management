import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { META_REDUCERS, provideStore } from '@ngrx/store';
import { initReducer } from './store-data/reducers/menu-reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { initBoardReducer } from './store-data/reducers/board.reducer';
import { provideEffects } from '@ngrx/effects';
import { keysStore } from './constants/constants.constant';
import { MenuEffects } from './store-data/effects/menu.effect';
import { initThemeReducer } from './store-data/reducers/theme.reducer';
import { ThemeEffects } from './store-data/effects/theme.effect';
import { BoardEffects } from './store-data/effects/board.effect';
import { DialogService } from 'primeng/dynamicdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const reducers = {
  [keysStore.boardStore]: initBoardReducer,
  [keysStore.menuStore]: initReducer,
  [keysStore.themeStore]: initThemeReducer,
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(reducers, {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
      },
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects([MenuEffects, ThemeEffects, BoardEffects]),
    DialogService,
    importProvidersFrom([BrowserAnimationsModule]),
  ],
};

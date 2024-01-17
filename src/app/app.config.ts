import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { keysStore } from './constants/constants.constant';
import { initReducer } from './store-data/reducers/menu-reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({
      [keysStore.kanbanStore]: initReducer,
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};

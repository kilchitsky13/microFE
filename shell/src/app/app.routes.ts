import { Routes } from '@angular/router';
import { LoggedOnlyGuard } from './core/guards/logged-only.guard';
import { UnloggedOnlyGuard } from './core/guards/unlogged-only.guard';
import { Microfrontend } from './core/services/microfrontends/microfrontend.types';
import { environment } from 'src/environments/environment';

export const APP_ROUTES: Routes = [];

export const MICROFRONTEND_ROUTES: Microfrontend[] = [
  {
    ...environment.microfrontends.dashboard,
    exposedModule: environment.microfrontends.dashboard.exposedModule[0],

    // For Routing, enabling us to ngFor over the microfrontends and dynamically create links for the routes
    displayName: 'Dashboard',
    routePath: '',
    ngModuleName: 'DashboardModule',
    canActivate: [LoggedOnlyGuard]
  },
  {
    ...environment.microfrontends.registerPage,
    exposedModule: environment.microfrontends.registerPage.exposedModule[0],

    displayName: 'Register',
    routePath: 'signup',
    ngModuleName: 'RegisterPageModule',
    canActivate: [UnloggedOnlyGuard]
  },
  {
    ...environment.microfrontends.products,
    exposedModule: environment.microfrontends.products.exposedModule[0],

    displayName: 'Products',
    routePath: 'products',
    ngModuleName: 'ProductsModule',
    //canActivate: [UnloggedOnlyGuard]
  }
]

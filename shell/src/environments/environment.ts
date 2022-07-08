// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  microfrontends: {
    dashboard: {
      remoteEntry: 'https://nice-grass-0b6c62e0f.1.azurestaticapps.net/remoteEntry.js',
      remoteName: 'dashboard',
      exposedModule: ['DashboardModule'],
    },
    registerPage : {
      remoteEntry: 'https://proud-flower-04e7b8a0f.1.azurestaticapps.net/remoteEntry.js',
      remoteName: 'register',
      exposedModule: ['RegisterPageModule'],
    },
    layout: {
      remoteEntry: 'https://nice-beach-0c89b170f.1.azurestaticapps.net/remoteEntry.js',
      remoteName: 'layout',
      exposedModule: ['Header', 'Footer', 'LayoutModule'],
    },
    products: {
      remoteEntry: 'https://witty-meadow-0a888a10f.1.azurestaticapps.net/remoteEntry.js',
      remoteName: 'products',
      exposedModule: ['ProductsModule'],      
    }
  }
};

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  microfrontends: {
    dashboard: {
      remoteEntry: 'https://polite-desert-0b03d470f.1.azurestaticapps.net/remoteEntry.js',
      remoteName: 'dashboard',
      exposedModule: ['DashboardModule'],
    },
    registerPage : {
      remoteEntry: 'https://ashy-river-0d4b2af0f.1.azurestaticapps.net/remoteEntry.js',
      remoteName: 'register',
      exposedModule: ['RegisterPageModule'],
    },
    layout: {
      remoteEntry: 'https://polite-smoke-021becf0f.1.azurestaticapps.net/remoteEntry.js',
      remoteName: 'layout',
      exposedModule: ['Header', 'Footer', 'LayoutModule'],
    }
  }
};

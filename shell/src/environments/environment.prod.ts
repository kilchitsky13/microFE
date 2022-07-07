export const environment = {
  production: true,

  microfrontends: {
    dashboard: {
      remoteEntry: 'http://localhost:4204/remoteEntry.js',
      remoteName: 'dashboard',
      exposedModule: ['DashboardModule'],
    },
    registerPage : {
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      remoteName: 'register',
      exposedModule: ['RegisterPageModule'],
    },
    layout: {
      remoteEntry: 'http://localhost:4205/remoteEntry.js',
      remoteName: 'layout',
      exposedModule: ['Header', 'Footer', 'LayoutModule'],
    }
  }
};
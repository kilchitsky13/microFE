export const environment = {
  production: true,

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
    },
    products: {
      remoteEntry: 'https://witty-meadow-0a888a10f.1.azurestaticapps.net/remoteEntry.js',
      remoteName: 'products',
      exposedModule: ['ProductsModule'],      
    }
  }
};

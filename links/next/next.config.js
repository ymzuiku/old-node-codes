const withSass = require('@zeit/next-sass');
module.exports = withSass({
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2
  },
  pageExtensions: ['jsx', 'js'],
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static'
  }
  // cssModules: true,
  // cssLoaderOptions: {
  //   importLoaders: 1,
  //   localIdentName: "[local]___[hash:base64:5]",
  // },
  // webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
  //   // Perform customizations to webpack config
  //   // Important: return the modified config
  //   // config.resolve.alias = Object.assign({}, config.resolve.alias, {
  //   //   'react': 'nervjs',
  //   //   'react-dom': 'nervjs'
  //   // })
  //   return config
  // },
  // webpackDevMiddleware: config => {
  //   // Perform customizations to webpack dev middleware config

  //   // Important: return the modified config
  //   return config
  // }
});

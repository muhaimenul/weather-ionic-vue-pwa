// config for swerivce worker/pwa options
// workbox is a library for service worker
// normally chaches static files but for api response need to use runtimeCaching
module.exports = {
    pwa: {
      workboxPluginMode: 'GenerateSW', // another option: InjectManifest
      workboxOptions: {
        navigateFallback: '/index.html',
        runtimeCaching: [
          {
            urlPattern: new RegExp('^https://api.zippopotam.us/us/'),
            handler: 'networkFirst',
            options: {
              networkTimeoutSeconds: 20,
              cacheName: 'api-cache',
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    }
  };
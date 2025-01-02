import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { PROD_CONFIG } from './src/config'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  console.log('Loaded environment variables:', {
    APP_ID: env.VITE_APP_ID || PROD_CONFIG.APP_ID,
    WS_URL: env.VITE_WS_URL || PROD_CONFIG.WS_URL,
    OAUTH_URL: env.VITE_OAUTH_URL || PROD_CONFIG.OAUTH_URL
  })

  return {
    plugins: [
      react(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico', 'robots.txt', 'icons/*.png'],
        manifest: {
          name: 'Copy Trading App',
          short_name: 'CopyTrade',
          description: 'A React-based copy trading application',
          theme_color: '#000000',
          background_color: '#ffffff',
          display: 'standalone',
          start_url: '/copy-trading/',
          scope: '/copy-trading/',
          screenshots: [
            {
              src: 'screenshots/desktop.png',
              sizes: '1920x1080',
              type: 'image/png',
              form_factor: 'wide',
              label: 'Desktop view of Copy Trading'
            },
            {
              src: 'screenshots/mobile.png',
              sizes: '1080x1920',
              type: 'image/png',
              label: 'Mobile view of Copy Trading'
            }
          ],
          icons: [
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any'
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any'
            },
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'maskable'
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable'
            }
          ]
        }
      })
    ],
    server: {
      port: 8443,
    },
    base: '/copy-trading/',
    define: {
      'import.meta.env.VITE_APP_ID': JSON.stringify(env.VITE_APP_ID || PROD_CONFIG.APP_ID),
      'import.meta.env.VITE_WS_URL': JSON.stringify(env.VITE_WS_URL || PROD_CONFIG.WS_URL),
      'import.meta.env.VITE_OAUTH_URL': JSON.stringify(env.VITE_OAUTH_URL || PROD_CONFIG.OAUTH_URL),
      __APP_ENV__: env.APP_ENV
    }
  }
})

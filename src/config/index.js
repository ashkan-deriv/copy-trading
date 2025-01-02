// Production configuration
export const PROD_CONFIG = {
    APP_ID: '66963',
    WS_URL: 'wss://ws.derivws.com/websockets/v3',
    OAUTH_URL: 'https://oauth.deriv.com'
}

// Development configuration
export const DEV_CONFIG = {
    APP_ID: '9999',
    WS_URL: 'wss://qa47.deriv.dev/websockets/v3',
    OAUTH_URL: 'https://qa47.deriv.dev',
    REDIRECT_URL: 'http://localhost:8443'
}

// Get configuration with fallback to production values
export const getConfig = () => {
    // Use development config if all dev env variables are present
    if (import.meta.env.DEV) {
        return DEV_CONFIG
    }

    // Fallback to production config
    return PROD_CONFIG
}

if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/copy-trading/sw.js', { scope: '/copy-trading/' })})}
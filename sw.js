if(!self.define){let e,i={};const n=(n,c)=>(n=new URL(n+".js",c).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let r={};const d=e=>n(e,o),a={module:{uri:o},exports:r,require:d};i[o]=Promise.all(c.map((e=>a[e]||d(e)))).then((e=>(s(...e),r)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-B7scUcR3.js",revision:null},{url:"assets/index-DialPXOZ.css",revision:null},{url:"index.html",revision:"46d9f12682a36313387deefaf30931f3"},{url:"registerSW.js",revision:"7845a4462c5dbdf16d64fdedf520d6dd"},{url:"pwa-192x192.png",revision:"9bfd57b9b3b25fcc5afc389b7e67cd68"},{url:"pwa-512x512.png",revision:"ca5dc5ae0a509859f414fe0fa046f9da"},{url:"icons/icon-128x128.png",revision:"168548be935cb80c4e1cedab782a2e9e"},{url:"icons/icon-144x144.png",revision:"c84a8b21dacaa7c160c6a47e7f9d6ba3"},{url:"icons/icon-152x152.png",revision:"51640308066f1057adca28aa9acda184"},{url:"icons/icon-192x192.png",revision:"714fcdfabca86fe2696f676115a692ca"},{url:"icons/icon-384x384.png",revision:"0b748eccbc53eb232dd4dd5b8150a9d3"},{url:"icons/icon-512x512.png",revision:"aebf455d441a76e66cdb516beecd96b4"},{url:"icons/icon-72x72.png",revision:"cfc9dfd1e26007ad504f8a2f184e49d5"},{url:"icons/icon-96x96.png",revision:"4b288110c00c52b5c2c9244cfbbd07f5"},{url:"manifest.webmanifest",revision:"b34abe629ea82e94023e1a76da5785c0"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

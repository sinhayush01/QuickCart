// Service Worker for PWA E-Commerce
const CACHE_NAME = 'pwa-shop-v1.0.0';
const STATIC_CACHE = 'pwa-shop-static-v1.0.0';
const DYNAMIC_CACHE = 'pwa-shop-dynamic-v1.0.0';

// Files to cache immediately
const STATIC_FILES = [
    '/',
    '/index.html',
    '/manifest.json',
    '/styles/main.css',
    '/styles/responsive.css',
    '/js/app.js',
    '/js/push-notifications.js',
    '/icons/icon-72x72.png',
    '/icons/icon-96x96.png',
    '/icons/icon-128x128.png',
    '/icons/icon-144x144.png',
    '/icons/icon-152x152.png',
    '/icons/icon-192x192.png',
    '/icons/icon-384x384.png',
    '/icons/icon-512x512.png'
];

// Install event - cache static files
self.addEventListener('install', (event) => {
    console.log('Service Worker: Installing...');
    
    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then((cache) => {
                console.log('Service Worker: Caching static files');
                return cache.addAll(STATIC_FILES);
            })
            .then(() => {
                console.log('Service Worker: Static files cached successfully');
                return self.skipWaiting();
            })
            .catch((error) => {
                console.error('Service Worker: Error caching static files:', error);
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activating...');
    
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        if (cacheName !== STATIC_CACHE && 
                            cacheName !== DYNAMIC_CACHE) {
                            console.log('Service Worker: Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => {
                console.log('Service Worker: Activated successfully');
                return self.clients.claim();
            })
    );
});

// Fetch event - handle network requests
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);
    
    // Skip non-GET requests
    if (request.method !== 'GET') {
        return;
    }
    
    // Handle different types of requests
    if (url.pathname === '/' || url.pathname === '/index.html') {
        // Home page - cache first strategy
        event.respondWith(cacheFirst(request, STATIC_CACHE));
    } else if (STATIC_FILES.some(file => url.pathname.endsWith(file))) {
        // Static assets - cache first strategy
        event.respondWith(cacheFirst(request, STATIC_CACHE));
    } else {
        // Other requests - network first with cache fallback
        event.respondWith(networkFirst(request, DYNAMIC_CACHE));
    }
});

// Cache first strategy
async function cacheFirst(request, cacheName) {
    try {
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
            return cachedResponse;
        }
        
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            const cache = await caches.open(cacheName);
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    } catch (error) {
        console.error('Cache first strategy failed:', error);
        return new Response('Offline content not available', { status: 503 });
    }
}

// Network first strategy
async function networkFirst(request, cacheName) {
    try {
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            const cache = await caches.open(cacheName);
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    } catch (error) {
        console.log('Network failed, trying cache:', error);
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
            return cachedResponse;
        }
        return new Response('Offline content not available', { status: 503 });
    }
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
    if (event.tag === 'background-sync') {
        event.waitUntil(doBackgroundSync());
    }
});

async function doBackgroundSync() {
    try {
        console.log('Background sync started');
        
        // Get pending actions from IndexedDB
        const pendingActions = await getPendingActions();
        
        if (pendingActions.length === 0) {
            console.log('No pending actions to sync');
            return;
        }
        
        console.log(`Processing ${pendingActions.length} pending actions`);
        
        // Process each pending action
        for (const action of pendingActions) {
            try {
                await processPendingAction(action);
                await removePendingAction(action.id);
                console.log(`Successfully processed action: ${action.type}`);
            } catch (error) {
                console.error(`Failed to process action ${action.id}:`, error);
            }
        }
        
        // Show notification to user
        const clients = await self.clients.matchAll();
        clients.forEach(client => {
            client.postMessage({
                type: 'SYNC_COMPLETE',
                message: `Successfully synced ${pendingActions.length} actions`
            });
        });
        
    } catch (error) {
        console.error('Background sync failed:', error);
    }
}

// Push notification event
self.addEventListener('push', (event) => {
    console.log('Push notification received:', event);
    
    let notificationData = {
        title: 'QuickCart',
        body: 'You have a new notification!',
        icon: '/icons/icon-192x192.png',
        badge: '/icons/icon-72x72.png',
        data: {
            url: '/'
        }
    };
    
    if (event.data) {
        try {
            const data = event.data.json();
            notificationData = { ...notificationData, ...data };
        } catch (error) {
            console.error('Error parsing push data:', error);
        }
    }
    
    event.waitUntil(
        self.registration.showNotification(notificationData.title, notificationData)
    );
});

// Notification click event
self.addEventListener('notificationclick', (event) => {
    console.log('Notification clicked:', event);
    
    event.notification.close();
    
    event.waitUntil(
        self.clients.matchAll({ type: 'window' })
            .then((clients) => {
                // If app is already open, focus it
                if (clients.length > 0) {
                    clients[0].focus();
                    if (event.notification.data && event.notification.data.url) {
                        clients[0].navigate(event.notification.data.url);
                    }
                } else {
                    // Open app in new window
                    self.clients.openWindow('/');
                }
            })
    );
});

// Helper functions for IndexedDB operations
async function getPendingActions() {
    // This would typically use IndexedDB
    // For now, return empty array as we're not implementing server-side sync
    return [];
}

async function processPendingAction(action) {
    // This would typically send data to server
    // For now, just log the action
    console.log('Processing action:', action);
}

async function removePendingAction(actionId) {
    // This would typically remove from IndexedDB
    console.log('Removing action:', actionId);
}

// Content sync for offline updates
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SYNC_CONTENT') {
        event.waitUntil(syncContent());
    }
});

async function syncContent() {
    try {
        console.log('Syncing content...');
        
        // Update static cache with new content
        const cache = await caches.open(STATIC_CACHE);
        
        // Re-cache main files
        const filesToSync = [
            '/',
            '/index.html',
            '/styles/main.css',
            '/styles/responsive.css',
            '/js/app.js'
        ];
        
        for (const file of filesToSync) {
            try {
                const response = await fetch(file);
                if (response.ok) {
                    await cache.put(file, response);
                    console.log(`Synced: ${file}`);
                }
            } catch (error) {
                console.error(`Failed to sync ${file}:`, error);
            }
        }
        
        console.log('Content sync completed');
        
    } catch (error) {
        console.error('Content sync failed:', error);
    }
}

// Utility functions for request type detection
function isImageRequest(request) {
    return request.destination === 'image';
}

function isFontRequest(request) {
    return request.destination === 'font';
}

function isScriptRequest(request) {
    return request.destination === 'script';
}

function isStyleRequest(request) {
    return request.destination === 'style';
}

// Clean up old caches periodically
async function cleanOldCaches() {
    try {
        const cacheNames = await caches.keys();
        const currentCaches = [STATIC_CACHE, DYNAMIC_CACHE];
        
        for (const cacheName of cacheNames) {
            if (!currentCaches.includes(cacheName)) {
                await caches.delete(cacheName);
                console.log('Cleaned up old cache:', cacheName);
            }
        }
    } catch (error) {
        console.error('Error cleaning old caches:', error);
    }
} 
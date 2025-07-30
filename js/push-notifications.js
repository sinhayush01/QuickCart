// Push Notifications for PWA E-Commerce
class PushNotificationManager {
    constructor() {
        this.subscription = null;
        this.isSupported = 'serviceWorker' in navigator && 'PushManager' in window;
        
        this.init();
    }

    async init() {
        if (!this.isSupported) {
            console.log('Push notifications are not supported in this browser');
            return;
        }

        this.setupEventListeners();
        await this.checkSubscription();
        this.updateUI();
    }

    setupEventListeners() {
        // Notification permission checkbox
        const pushCheckbox = document.getElementById('pushNotifications');
        if (pushCheckbox) {
            pushCheckbox.addEventListener('change', (e) => {
                if (e.target.checked) {
                    this.subscribe();
                } else {
                    this.unsubscribe();
                }
            });
        }

        // Test notification button
        const testBtn = document.getElementById('testNotificationBtn');
        if (testBtn) {
            testBtn.addEventListener('click', () => {
                this.showTestNotification();
            });
        }
    }

    async checkSubscription() {
        try {
            const registration = await navigator.serviceWorker.ready;
            this.subscription = await registration.pushManager.getSubscription();
            
            // Update checkbox state
            const pushCheckbox = document.getElementById('pushNotifications');
            if (pushCheckbox) {
                pushCheckbox.checked = !!this.subscription;
            }
            
            console.log('Current subscription:', this.subscription);
        } catch (error) {
            console.error('Error checking subscription:', error);
        }
    }

    async subscribe() {
        try {
            // Request notification permission
            const permission = await Notification.requestPermission();
            
            if (permission !== 'granted') {
                console.log('Notification permission denied');
                this.updateUI();
                return;
            }

            // Get service worker registration
            const registration = await navigator.serviceWorker.ready;
            
            // Subscribe to push notifications (simplified for client-side only)
            this.subscription = await registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: this.generateVapidKey()
            });
            
            console.log('Successfully subscribed to push notifications');
            this.updateUI();
            
            // Show success message
            if (window.app) {
                window.app.showToast('Push notifications enabled! 🔔', 'success');
            }
            
        } catch (error) {
            console.error('Error subscribing to push notifications:', error);
            if (window.app) {
                window.app.showToast('Failed to enable push notifications', 'error');
            }
        }
    }

    async unsubscribe() {
        try {
            if (this.subscription) {
                await this.subscription.unsubscribe();
                this.subscription = null;
                
                console.log('Successfully unsubscribed from push notifications');
                this.updateUI();
                
                if (window.app) {
                    window.app.showToast('Push notifications disabled', 'info');
                }
            }
        } catch (error) {
            console.error('Error unsubscribing from push notifications:', error);
        }
    }

    // Generate a simple VAPID key for client-side testing
    generateVapidKey() {
        // This is a simplified approach for client-side only
        // In a real app, you'd get this from your server
        const key = new Uint8Array(65);
        for (let i = 0; i < key.length; i++) {
            key[i] = Math.floor(Math.random() * 256);
        }
        return key;
    }

    async showTestNotification() {
        try {
            if (!this.subscription) {
                if (window.app) {
                    window.app.showToast('Please enable push notifications first', 'warning');
                }
                return;
            }

            // Show a test notification
            const notification = new Notification('QuickCart Test', {
                body: 'This is a test notification from QuickCart! 🦄',
                icon: '/icons/icon-192x192.png',
                badge: '/icons/icon-72x72.png',
                tag: 'test-notification',
                requireInteraction: false,
                data: {
                    url: '/',
                    type: 'test'
                }
            });

            // Auto-close after 5 seconds
            setTimeout(() => {
                notification.close();
            }, 5000);

            if (window.app) {
                window.app.showToast('Test notification sent! 🔔', 'success');
            }

        } catch (error) {
            console.error('Error showing test notification:', error);
            if (window.app) {
                window.app.showToast('Failed to send test notification', 'error');
            }
        }
    }

    async sendNotification(title, body, options = {}) {
        try {
            if (!this.subscription) {
                console.log('No push subscription available');
                return;
            }

            const defaultOptions = {
                icon: '/icons/icon-192x192.png',
                badge: '/icons/icon-72x72.png',
                tag: 'quickcart-notification',
                requireInteraction: false,
                data: {
                    url: '/',
                    type: 'general'
                }
            };

            const notification = new Notification(title, {
                ...defaultOptions,
                ...options
            });

            // Auto-close after 8 seconds
            setTimeout(() => {
                notification.close();
            }, 8000);

        } catch (error) {
            console.error('Error sending notification:', error);
        }
    }

    updateUI() {
        const pushCheckbox = document.getElementById('pushNotifications');
        const testBtn = document.getElementById('testNotificationBtn');
        
        if (pushCheckbox) {
            pushCheckbox.checked = !!this.subscription;
            pushCheckbox.disabled = !this.isSupported;
        }
        
        if (testBtn) {
            testBtn.disabled = !this.subscription;
        }
    }

    getSubscriptionInfo() {
        if (!this.subscription) {
            return null;
        }

        return {
            endpoint: this.subscription.endpoint,
            keys: this.subscription.toJSON().keys
        };
    }

    async checkNotificationSupport() {
        const support = {
            serviceWorker: 'serviceWorker' in navigator,
            pushManager: 'PushManager' in window,
            notifications: 'Notification' in window,
            permission: 'permission' in Notification
        };

        console.log('Notification support:', support);
        return support;
    }

    async requestPermission() {
        try {
            const permission = await Notification.requestPermission();
            console.log('Notification permission:', permission);
            return permission;
        } catch (error) {
            console.error('Error requesting notification permission:', error);
            return 'denied';
        }
    }

    // Client-side notification methods
    async sendOrderConfirmation(orderId, total) {
        await this.sendNotification(
            'Order Confirmed! 🎉',
            `Your order #${orderId} has been confirmed. Total: $${total.toFixed(2)}`,
            {
                tag: 'order-confirmation',
                data: { url: '/#account', type: 'order' }
            }
        );
    }

    async sendPriceDropNotification(productName, oldPrice, newPrice) {
        await this.sendNotification(
            'Price Drop Alert! 📉',
            `${productName} is now $${newPrice} (was $${oldPrice})`,
            {
                tag: 'price-drop',
                data: { url: '/#products', type: 'price-drop' }
            }
        );
    }

    async sendBackInStockNotification(productName) {
        await this.sendNotification(
            'Back in Stock! 🎊',
            `${productName} is back in stock and ready to order!`,
            {
                tag: 'back-in-stock',
                data: { url: '/#products', type: 'stock' }
            }
        );
    }

    async sendPromotionalNotification(title, message, url = '/') {
        await this.sendNotification(title, message, {
            tag: 'promotional',
            data: { url, type: 'promotional' }
        });
    }

    // Handle notification clicks
    handleNotificationClick(notification) {
        notification.close();
        
        const data = notification.data;
        if (data && data.url) {
            // Navigate to the specified URL
            if (window.app) {
                window.app.navigateToSection(data.url.replace('#', ''));
            }
        }
    }
}

// Initialize push notification manager
let pushManager;

document.addEventListener('DOMContentLoaded', () => {
    pushManager = new PushNotificationManager();
});

// Export for global access
window.pushManager = pushManager; 
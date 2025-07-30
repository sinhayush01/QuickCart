// PWA E-Commerce Application
class PWAShop {
    constructor() {
        this.products = [
            {
                id: 1,
                name: "Wireless Noise-Canceling Headphones",
                price: 199.99,
                originalPrice: 249.99,
                description: "Premium wireless headphones with active noise cancellation, 30-hour battery life, and crystal-clear sound quality. Perfect for music lovers and professionals.",
                category: "Electronics",
                rating: 4.8,
                reviews: 1247,
                stock: 15,
                image: "🎧",
                colors: ["Black", "White", "Rose Gold", "Blue"],
                features: ["Active Noise Cancellation", "30h Battery Life", "Bluetooth 5.0", "Touch Controls", "Built-in Microphone"],
                inWishlist: false
            },
            {
                id: 2,
                name: "iPhone 15 Pro Max",
                price: 1199.99,
                originalPrice: 1299.99,
                description: "Latest iPhone with A17 Pro chip, 48MP camera system, and titanium design. Experience the future of mobile technology.",
                category: "Electronics",
                rating: 4.9,
                reviews: 2156,
                stock: 8,
                image: "📱",
                colors: ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"],
                features: ["A17 Pro Chip", "48MP Camera", "5G Ready", "256GB Storage", "Titanium Design"],
                inWishlist: false
            },
            {
                id: 3,
                name: "Organic Cotton T-Shirt Collection",
                price: 29.99,
                originalPrice: 39.99,
                description: "Premium 100% organic cotton t-shirts with sustainable manufacturing. Available in multiple colors and sizes for everyday comfort.",
                category: "Clothing",
                rating: 4.6,
                reviews: 892,
                stock: 45,
                image: "👕",
                colors: ["White", "Black", "Navy", "Pink", "Gray", "Olive"],
                features: ["100% Organic Cotton", "Breathable Fabric", "Machine Washable", "Sustainable", "Multiple Sizes"],
                inWishlist: false
            },
            {
                id: 4,
                name: "Nike Air Zoom Running Shoes",
                price: 129.99,
                originalPrice: 159.99,
                description: "Professional running shoes with Nike Air Zoom technology, responsive cushioning, and breathable mesh upper for optimal performance.",
                category: "Sports",
                rating: 4.7,
                reviews: 1567,
                stock: 23,
                image: "👟",
                colors: ["White/Black", "Blue/White", "Pink/White", "Gray/Orange"],
                features: ["Air Zoom Technology", "Breathable Mesh", "Responsive Cushioning", "Durable Outsole", "Lightweight Design"],
                inWishlist: false
            },
            {
                id: 5,
                name: "Complete Web Development Bootcamp",
                price: 49.99,
                originalPrice: 69.99,
                description: "Comprehensive guide to modern web development covering HTML, CSS, JavaScript, React, and Node.js with hands-on projects.",
                category: "Books",
                rating: 4.5,
                reviews: 634,
                stock: 12,
                image: "📚",
                colors: ["Paperback", "Hardcover", "Digital", "Audiobook"],
                features: ["500+ Pages", "Hands-on Projects", "Updated Content", "Online Resources", "Certificate Included"],
                inWishlist: false
            },
            {
                id: 6,
                name: "Monstera Deliciosa Plant",
                price: 34.99,
                originalPrice: 44.99,
                description: "Beautiful indoor plant known for its distinctive leaves. Perfect for home decoration and air purification.",
                category: "Home & Garden",
                rating: 4.4,
                reviews: 445,
                stock: 67,
                image: "🌱",
                colors: ["Green", "Variegated", "Large Leaf"],
                features: ["Air Purifying", "Low Maintenance", "Pet Safe", "Grow Guide Included", "Ceramic Pot"],
                inWishlist: false
            },
            {
                id: 7,
                name: "Apple Watch Series 9",
                price: 399.99,
                originalPrice: 449.99,
                description: "Advanced smartwatch with health monitoring, GPS tracking, and seamless iPhone integration. Stay connected and healthy.",
                category: "Electronics",
                rating: 4.6,
                reviews: 987,
                stock: 18,
                image: "⌚",
                colors: ["Midnight", "Starlight", "Pink", "Blue", "Red"],
                features: ["Heart Rate Monitor", "GPS", "Water Resistant", "ECG", "Fall Detection"],
                inWishlist: false
            },
            {
                id: 8,
                name: "Premium Yoga Mat Set",
                price: 49.99,
                originalPrice: 64.99,
                description: "Professional yoga mat with alignment lines, non-slip surface, and carrying strap. Perfect for home and studio practice.",
                category: "Sports",
                rating: 4.3,
                reviews: 723,
                stock: 34,
                image: "🧘",
                colors: ["Purple", "Blue", "Pink", "Black", "Green"],
                features: ["Non-Slip Surface", "6mm Thick", "Eco-Friendly", "Alignment Lines", "Carrying Strap"],
                inWishlist: false
            },
            {
                id: 9,
                name: "MacBook Pro 16-inch",
                price: 2499.99,
                originalPrice: 2799.99,
                description: "Powerful laptop with M2 Pro chip, 16GB RAM, and stunning Liquid Retina display. Perfect for professionals and creatives.",
                category: "Electronics",
                rating: 4.7,
                reviews: 892,
                stock: 6,
                image: "💻",
                colors: ["Space Gray", "Silver"],
                features: ["M2 Pro Chip", "16GB RAM", "512GB SSD", "16-inch Display", "Backlit Keyboard"],
                inWishlist: false
            },
            {
                id: 10,
                name: "Premium Denim Jeans",
                price: 89.99,
                originalPrice: 119.99,
                description: "High-quality denim jeans with perfect fit, stretch comfort, and classic styling. Available in multiple washes and sizes.",
                category: "Clothing",
                rating: 4.5,
                reviews: 567,
                stock: 28,
                image: "👖",
                colors: ["Light Blue", "Dark Blue", "Black", "Gray", "White"],
                features: ["Stretch Denim", "Perfect Fit", "Durable Construction", "Multiple Washes", "Classic Styling"],
                inWishlist: false
            },
            {
                id: 11,
                name: "Breville Coffee Machine",
                price: 299.99,
                originalPrice: 399.99,
                description: "Professional coffee machine with built-in grinder, milk frother, and programmable settings. Barista-quality coffee at home.",
                category: "Home & Garden",
                rating: 4.4,
                reviews: 445,
                stock: 15,
                image: "☕",
                colors: ["Stainless Steel", "Black", "White"],
                features: ["Built-in Grinder", "Milk Frother", "Programmable", "Thermal Carafe", "PID Temperature Control"],
                inWishlist: false
            },
            {
                id: 12,
                name: "Fitbit Charge 6",
                price: 159.99,
                originalPrice: 199.99,
                description: "Advanced fitness tracker with heart rate monitoring, sleep tracking, and 7-day battery life. Track your health goals.",
                category: "Sports",
                rating: 4.6,
                reviews: 678,
                stock: 22,
                image: "⌚",
                colors: ["Black", "Blue", "Pink", "White"],
                features: ["Heart Rate Monitor", "Sleep Tracking", "7-day Battery", "GPS", "Water Resistant"],
                inWishlist: false
            },
            {
                id: 13,
                name: "Bestseller Novel Collection",
                price: 39.99,
                originalPrice: 54.99,
                description: "Collection of bestselling novels with beautiful hardcover designs. Perfect for book lovers and collectors.",
                category: "Books",
                rating: 4.8,
                reviews: 1234,
                stock: 19,
                image: "📖",
                colors: ["Hardcover", "Paperback", "Digital", "Audiobook"],
                features: ["Bestseller Collection", "Beautiful Design", "Great Stories", "Collector's Edition", "Author Signed"],
                inWishlist: false
            },
            {
                id: 14,
                name: "JBL Flip 6 Speaker",
                price: 129.99,
                originalPrice: 159.99,
                description: "Portable Bluetooth speaker with 360-degree sound, waterproof design, and 12-hour battery life. Perfect for outdoor adventures.",
                category: "Electronics",
                rating: 4.5,
                reviews: 789,
                stock: 31,
                image: "🔊",
                colors: ["Black", "Blue", "Red", "Green", "Pink"],
                features: ["360° Sound", "Waterproof", "12h Battery", "PartyBoost", "Durable Design"],
                inWishlist: false
            },
            {
                id: 15,
                name: "North Face Winter Jacket",
                price: 299.99,
                originalPrice: 399.99,
                description: "Premium winter jacket with waterproof exterior, thermal insulation, and adjustable hood. Stay warm in any weather.",
                category: "Clothing",
                rating: 4.7,
                reviews: 456,
                stock: 12,
                image: "🧥",
                colors: ["Black", "Navy", "Red", "Gray", "Olive"],
                features: ["Waterproof", "Thermal Insulation", "Adjustable Hood", "Windproof", "Multiple Pockets"],
                inWishlist: false
            },
            {
                id: 16,
                name: "Logitech G Pro Gaming Mouse",
                price: 149.99,
                originalPrice: 199.99,
                description: "Professional gaming mouse with HERO sensor, customizable RGB lighting, and programmable buttons. Dominate your games.",
                category: "Electronics",
                rating: 4.6,
                reviews: 567,
                stock: 25,
                image: "🖱️",
                colors: ["Black", "White", "RGB"],
                features: ["HERO Sensor", "RGB Lighting", "Programmable Buttons", "Lightweight", "Wireless"],
                inWishlist: false
            },
            {
                id: 17,
                name: "All-Clad Cookware Set",
                price: 399.99,
                originalPrice: 549.99,
                description: "Professional cookware set with stainless steel construction, non-stick coating, and dishwasher safe design.",
                category: "Home & Garden",
                rating: 4.4,
                reviews: 334,
                stock: 18,
                image: "🍳",
                colors: ["Stainless Steel", "Black", "Copper"],
                features: ["Stainless Steel", "Non-Stick Coating", "Dishwasher Safe", "Oven Safe", "Lifetime Warranty"],
                inWishlist: false
            },
            {
                id: 18,
                name: "Spalding NBA Basketball",
                price: 69.99,
                originalPrice: 89.99,
                description: "Official NBA basketball with superior grip, durability, and performance. Perfect for indoor and outdoor play.",
                category: "Sports",
                rating: 4.5,
                reviews: 234,
                stock: 42,
                image: "🏀",
                colors: ["Orange", "Black", "Multi-color"],
                features: ["Official NBA", "Superior Grip", "Durable", "Indoor/Outdoor", "Size 7"],
                inWishlist: false
            },
            {
                id: 19,
                name: "Professional Art Supplies Kit",
                price: 89.99,
                originalPrice: 119.99,
                description: "Complete professional art supplies kit with premium paints, brushes, canvas, and carrying case.",
                category: "Books",
                rating: 4.3,
                reviews: 189,
                stock: 26,
                image: "🎨",
                colors: ["Mixed Colors", "Professional Set"],
                features: ["Premium Paints", "Professional Brushes", "Canvas Included", "Carrying Case", "Tutorial Guide"],
                inWishlist: false
            },
            {
                id: 20,
                name: "Philips Hue Smart Bulb Set",
                price: 79.99,
                originalPrice: 99.99,
                description: "Smart LED bulbs with 16 million colors, voice control, and energy efficiency. Transform your home lighting.",
                category: "Home & Garden",
                rating: 4.4,
                reviews: 278,
                stock: 33,
                image: "💡",
                colors: ["White", "Color", "Ambiance"],
                features: ["16M Colors", "Voice Control", "Energy Efficient", "App Control", "Works with Alexa"],
                inWishlist: false
            },
            {
                id: 21,
                name: "Sony WH-1000XM5 Headphones",
                price: 349.99,
                originalPrice: 399.99,
                description: "Industry-leading noise-canceling headphones with exceptional sound quality and 30-hour battery life.",
                category: "Electronics",
                rating: 4.9,
                reviews: 2156,
                stock: 11,
                image: "🎧",
                colors: ["Black", "Silver", "Blue"],
                features: ["Industry-leading ANC", "30h Battery", "Touch Controls", "Quick Charge", "Premium Sound"],
                inWishlist: false
            },
            {
                id: 22,
                name: "Samsung Galaxy S24 Ultra",
                price: 1199.99,
                originalPrice: 1299.99,
                description: "Flagship smartphone with S Pen, 200MP camera, and AI-powered features. Experience the future of mobile.",
                category: "Electronics",
                rating: 4.8,
                reviews: 1892,
                stock: 7,
                image: "📱",
                colors: ["Titanium Black", "Titanium Gray", "Titanium Violet", "Titanium Yellow"],
                features: ["S Pen", "200MP Camera", "AI Features", "5G", "256GB Storage"],
                inWishlist: false
            },
            {
                id: 23,
                name: "Lululemon Align Leggings",
                price: 98.00,
                originalPrice: 128.00,
                description: "Ultra-soft, lightweight leggings perfect for yoga and everyday wear. Buttery-soft Nulu fabric.",
                category: "Clothing",
                rating: 4.7,
                reviews: 2341,
                stock: 34,
                image: "👖",
                colors: ["Black", "Navy", "Gray", "Pink", "Green"],
                features: ["Nulu Fabric", "4-way Stretch", "Squat-proof", "High-rise", "Buttery-soft"],
                inWishlist: false
            },
            {
                id: 24,
                name: "Adidas Ultraboost 22",
                price: 189.99,
                originalPrice: 229.99,
                description: "Revolutionary running shoes with Boost midsole technology and Primeknit upper for ultimate comfort.",
                category: "Sports",
                rating: 4.6,
                reviews: 1456,
                stock: 19,
                image: "👟",
                colors: ["White/Black", "Blue/White", "Gray/Orange", "Black/Red"],
                features: ["Boost Midsole", "Primeknit Upper", "Continental Rubber", "Energy Return", "Breathable"],
                inWishlist: false
            },
            {
                id: 25,
                name: "Kindle Paperwhite",
                price: 139.99,
                originalPrice: 169.99,
                description: "Waterproof e-reader with 6.8-inch display, adjustable warm light, and weeks of battery life.",
                category: "Electronics",
                rating: 4.5,
                reviews: 892,
                stock: 28,
                image: "📚",
                colors: ["Black", "Blue", "Sage"],
                features: ["6.8-inch Display", "Waterproof", "Warm Light", "Weeks Battery", "8GB Storage"],
                inWishlist: false
            },
            {
                id: 26,
                name: "Dyson V15 Detect Vacuum",
                price: 699.99,
                originalPrice: 799.99,
                description: "Cord-free vacuum with laser technology, powerful suction, and 60-minute runtime. See what you're cleaning.",
                category: "Home & Garden",
                rating: 4.8,
                reviews: 567,
                stock: 9,
                image: "🧹",
                colors: ["Gold", "Nickel", "Copper"],
                features: ["Laser Technology", "60min Runtime", "Powerful Suction", "HEPA Filter", "Cord-free"],
                inWishlist: false
            },
            {
                id: 27,
                name: "GoPro Hero 12 Black",
                price: 399.99,
                originalPrice: 449.99,
                description: "5.3K video camera with HyperSmooth 6.0 stabilization and 8x slow motion. Capture your adventures.",
                category: "Electronics",
                rating: 4.7,
                reviews: 734,
                stock: 16,
                image: "📷",
                colors: ["Black"],
                features: ["5.3K Video", "HyperSmooth 6.0", "8x Slow Motion", "Waterproof", "Voice Control"],
                inWishlist: false
            },
            {
                id: 28,
                name: "Instant Pot Duo Plus",
                price: 119.99,
                originalPrice: 149.99,
                description: "9-in-1 pressure cooker with 15 safety features and 13 one-touch programs. Cook faster, eat healthier.",
                category: "Home & Garden",
                rating: 4.6,
                reviews: 1234,
                stock: 31,
                image: "🍳",
                colors: ["Stainless Steel", "Black", "Blue"],
                features: ["9-in-1 Functions", "15 Safety Features", "13 Programs", "6QT Capacity", "Easy Clean"],
                inWishlist: false
            },
            {
                id: 29,
                name: "Peloton Bike+",
                price: 2495.00,
                originalPrice: 2695.00,
                description: "Premium indoor cycling bike with 24-inch rotating HD touchscreen and integrated speakers.",
                category: "Sports",
                rating: 4.5,
                reviews: 892,
                stock: 4,
                image: "🚴",
                colors: ["Black", "White"],
                features: ["24-inch HD Screen", "Rotating Display", "Integrated Speakers", "Live Classes", "Performance Tracking"],
                inWishlist: false
            },
            {
                id: 30,
                name: "Nest Learning Thermostat",
                price: 249.99,
                originalPrice: 299.99,
                description: "Smart thermostat that learns your schedule and saves energy. Control from anywhere with your phone.",
                category: "Home & Garden",
                rating: 4.4,
                reviews: 456,
                stock: 22,
                image: "🌡️",
                colors: ["Stainless Steel", "Black", "White", "Copper"],
                features: ["Learning Technology", "Energy Saving", "Remote Control", "Works with Alexa", "Easy Installation"],
                inWishlist: false
            }
        ];
        
        this.cart = [];
        this.wishlist = [];
        this.currentCategory = 'All';
        this.currentSort = 'featured';
        this.searchQuery = '';
        this.isOnline = navigator.onLine;
        
        this.init();
    }

    init() {
        console.log('Initializing QuickCart app...');
        this.setupEventListeners();
        this.loadCartFromStorage();
        this.loadProducts();
        this.updateCartCount();
        this.registerServiceWorker();
        this.setupPWAFeatures();
        this.setupPushNotifications();
        this.loadProfile();
        
        // Restore last viewed section if available
        const lastSection = localStorage.getItem('quickcart-last-section');
        if (lastSection && lastSection !== 'home') {
            this.navigateToSection(lastSection);
        }
        
        console.log('QuickCart app initialized successfully');
    }

    loadCartFromStorage() {
        const savedCart = localStorage.getItem('quickcart-cart');
        if (savedCart) {
            this.cart = JSON.parse(savedCart);
        }
        
        const savedWishlist = localStorage.getItem('quickcart-wishlist');
        if (savedWishlist) {
            this.wishlist = JSON.parse(savedWishlist);
            // Update wishlist status in products
            this.wishlist.forEach(id => {
                const product = this.products.find(p => p.id === id);
                if (product) product.inWishlist = true;
            });
        }
    }

    saveCartToStorage() {
        localStorage.setItem('quickcart-cart', JSON.stringify(this.cart));
        localStorage.setItem('quickcart-wishlist', JSON.stringify(this.wishlist));
    }

    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.navigateTo(e.target.getAttribute('href').substring(1));
            });
        });

        // Mobile navigation toggle
        const navToggle = document.getElementById('navToggle');
        const navList = document.getElementById('navList');
        if (navToggle && navList) {
            navToggle.addEventListener('click', () => {
                navList.classList.toggle('slide-in');
                navToggle.classList.toggle('active');
            });
        }

        // Browse button
        const browseBtn = document.getElementById('browseBtn');
        if (browseBtn) {
            browseBtn.addEventListener('click', () => this.navigateTo('products'));
        }

        // Learn more button
        const learnMoreBtn = document.getElementById('learnMoreBtn');
        if (learnMoreBtn) {
            learnMoreBtn.addEventListener('click', () => this.showAboutModal());
        }

        // Cart toggle
        const cartBtn = document.getElementById('cartBtn');
        if (cartBtn) {
            cartBtn.addEventListener('click', () => this.navigateTo('cart'));
        }

        // Clear cart button
        const clearCartBtn = document.getElementById('clearCartBtn');
        if (clearCartBtn) {
            clearCartBtn.addEventListener('click', () => this.clearCart());
        }

        // Checkout button
        const checkoutBtn = document.getElementById('checkoutBtn');
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', () => this.checkout());
        }

        // Profile form submission
        const profileForm = document.getElementById('profileForm');
        if (profileForm) {
            profileForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.updateProfile();
            });
        }

        // Enhanced Account functionality
        const changePasswordBtn = document.getElementById('changePasswordBtn');
        if (changePasswordBtn) {
            changePasswordBtn.addEventListener('click', () => this.showChangePasswordModal());
        }

        // Keyboard shortcuts for better UX
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + K to focus search
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                const searchInput = document.querySelector('.search-box input');
                if (searchInput) {
                    searchInput.focus();
                }
            }
            
            // Escape to close modals
            if (e.key === 'Escape') {
                const activeModal = document.querySelector('.modal.active');
                if (activeModal) {
                    this.closeModal();
                }
            }
            
            // Ctrl/Cmd + B to go to cart
            if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
                e.preventDefault();
                this.navigateTo('cart');
            }
        });

        const orderHistoryBtn = document.getElementById('orderHistoryBtn');
        if (orderHistoryBtn) {
            orderHistoryBtn.addEventListener('click', () => this.showOrderHistory());
        }

        const wishlistBtn = document.getElementById('wishlistBtn');
        if (wishlistBtn) {
            wishlistBtn.addEventListener('click', () => this.showWishlist());
        }

        const helpSupportBtn = document.getElementById('helpSupportBtn');
        if (helpSupportBtn) {
            helpSupportBtn.addEventListener('click', () => this.showHelpSupport());
        }

        const aboutBtn = document.getElementById('aboutBtn');
        if (aboutBtn) {
            aboutBtn.addEventListener('click', () => this.showAboutModal());
        }



        const exportDataBtn = document.getElementById('exportDataBtn');
        if (exportDataBtn) {
            exportDataBtn.addEventListener('click', () => this.exportUserData());
        }

        // Test notification button
        const testNotificationBtn = document.getElementById('testNotificationBtn');
        if (testNotificationBtn) {
            testNotificationBtn.addEventListener('click', () => this.testNotification());
        }

        // Install prompt buttons
        const installBtn = document.getElementById('installBtn');
        if (installBtn) {
            installBtn.addEventListener('click', () => this.installPWA());
        }

        const dismissInstallBtn = document.getElementById('dismissInstallBtn');
        if (dismissInstallBtn) {
            dismissInstallBtn.addEventListener('click', () => this.dismissInstallPrompt());
        }

        // Push notification toggle
        const notificationBtn = document.getElementById('notificationBtn');
        if (notificationBtn) {
            notificationBtn.addEventListener('click', () => this.toggleNotifications());
        }

        // Enhanced search and filter functionality
        this.setupSearchAndFilterListeners();

        // Clear filters button
        const clearFiltersBtn = document.getElementById('clearFiltersBtn');
        if (clearFiltersBtn) {
            clearFiltersBtn.addEventListener('click', () => this.clearAllFilters());
        }

        // Reset search button
        const resetSearchBtn = document.getElementById('resetSearchBtn');
        if (resetSearchBtn) {
            resetSearchBtn.addEventListener('click', () => this.resetSearch());
        }

        // Search button
        const searchBtn = document.getElementById('searchBtn');
        if (searchBtn) {
            searchBtn.addEventListener('click', () => this.performSearch());
        }

        // Close modals when clicking outside
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                this.closeModal();
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
            if (e.ctrlKey && e.key === 'k') {
                e.preventDefault();
                const searchInput = document.getElementById('searchInput');
                if (searchInput) {
                    searchInput.focus();
                }
            }
            if (e.key === 'Enter' && document.activeElement.id === 'searchInput') {
                this.performSearch();
            }
        });

        // Handle window resize for mobile navigation
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                const navList = document.getElementById('navList');
                const navToggle = document.getElementById('navToggle');
                if (navList) navList.classList.remove('slide-in');
                if (navToggle) navToggle.classList.remove('active');
            }
        });

        // Add smooth scrolling for better UX
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    setupSearchAndFilterListeners() {
        // Search input with debouncing
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            let searchTimeout;
            searchInput.addEventListener('input', (e) => {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    this.searchQuery = e.target.value;
                    this.loadProducts();
                }, 300); // Debounce for 300ms
            });
        }

        // Category filter
        const categoryFilter = document.getElementById('categoryFilter');
        if (categoryFilter) {
            categoryFilter.addEventListener('change', (e) => {
                this.currentCategory = e.target.value;
                this.loadProducts();
            });
        }

        // Sort filter
        const sortFilter = document.getElementById('sortFilter');
        if (sortFilter) {
            sortFilter.addEventListener('change', (e) => {
                this.currentSort = e.target.value;
                this.loadProducts();
            });
        }
    }

    loadProducts() {
        const productsGrid = document.getElementById('productsGrid');
        const loading = document.getElementById('loading');
        
        if (!productsGrid) return;

        // Show skeleton loader
        loading.style.display = 'none';
        productsGrid.innerHTML = `
            <div class="products-header">
                <div class="products-controls">
                    <div class="search-box">
                        <input type="text" id="searchInput" placeholder="🔍 Search products..." value="${this.searchQuery}">
                    </div>
                    <div class="filter-controls">
                        <select id="categoryFilter">
                            <option value="All" ${this.currentCategory === 'All' ? 'selected' : ''}>All Categories</option>
                            <option value="Electronics" ${this.currentCategory === 'Electronics' ? 'selected' : ''}>Electronics</option>
                            <option value="Clothing" ${this.currentCategory === 'Clothing' ? 'selected' : ''}>Clothing</option>
                            <option value="Sports" ${this.currentCategory === 'Sports' ? 'selected' : ''}>Sports</option>
                            <option value="Books" ${this.currentCategory === 'Books' ? 'selected' : ''}>Books</option>
                            <option value="Home & Garden" ${this.currentCategory === 'Home & Garden' ? 'selected' : ''}>Home & Garden</option>
                        </select>
                        <select id="sortFilter">
                            <option value="featured" ${this.currentSort === 'featured' ? 'selected' : ''}>Featured</option>
                            <option value="price-low" ${this.currentSort === 'price-low' ? 'selected' : ''}>Price: Low to High</option>
                            <option value="price-high" ${this.currentSort === 'price-high' ? 'selected' : ''}>Price: High to Low</option>
                            <option value="rating" ${this.currentSort === 'rating' ? 'selected' : ''}>Highest Rated</option>
                            <option value="newest" ${this.currentSort === 'newest' ? 'selected' : ''}>Newest</option>
                        </select>
                    </div>
                </div>
                <div class="products-stats">
                    <span id="productCount">0 products</span>
                </div>
            </div>
            <div class="skeleton-grid">
                ${Array(8).fill('<div class="skeleton" style="height:400px;"></div>').join('')}
            </div>
        `;

        // Simulate loading delay
        setTimeout(() => {
            this.renderProducts();
        }, 800);
    }

    renderProducts() {
        console.log('renderProducts called');
        const productsGrid = document.getElementById('productsGrid');
        const noResults = document.getElementById('noResults');
        if (!productsGrid) {
            console.error('Products grid not found');
            return;
        }

        // Filter products
        let filteredProducts = this.products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                                product.description.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                                product.category.toLowerCase().includes(this.searchQuery.toLowerCase());
            const matchesCategory = this.currentCategory === 'All' || product.category === this.currentCategory;
            return matchesSearch && matchesCategory;
        });

        // Sort products
        switch (this.currentSort) {
            case 'name':
                filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'price-low':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                filteredProducts.sort((a, b) => b.rating - a.rating);
                break;
            case 'newest':
                filteredProducts.sort((a, b) => b.id - a.id);
                break;
            case 'featured':
            default:
                // Featured: high rating + good stock + recent
                filteredProducts.sort((a, b) => {
                    const scoreA = (a.rating * 0.4) + (Math.min(a.stock, 20) * 0.3) + (a.id * 0.3);
                    const scoreB = (b.rating * 0.4) + (Math.min(b.stock, 20) * 0.3) + (b.id * 0.3);
                    return scoreB - scoreA;
                });
                break;
        }

        // Update product statistics
        const productCount = document.getElementById('productCount');
        const resultsInfo = document.getElementById('resultsInfo');
        
        if (productCount) {
            productCount.textContent = `${filteredProducts.length} product${filteredProducts.length !== 1 ? 's' : ''}`;
        }
        
        if (resultsInfo) {
            if (this.searchQuery || this.currentCategory !== 'All') {
                const filters = [];
                if (this.searchQuery) filters.push(`"${this.searchQuery}"`);
                if (this.currentCategory !== 'All') filters.push(this.currentCategory);
                resultsInfo.textContent = `Showing ${filteredProducts.length} result${filteredProducts.length !== 1 ? 's' : ''} for ${filters.join(' in ')}`;
            } else {
                resultsInfo.textContent = 'Showing all products';
            }
        }

        // Show/hide no results
        if (noResults) {
            if (filteredProducts.length === 0) {
                noResults.style.display = 'block';
                productsGrid.innerHTML = '';
                return;
            } else {
                noResults.style.display = 'none';
            }
        }

        // Render products
        productsGrid.innerHTML = filteredProducts.map(product => this.renderProductCard(product)).join('');
        
        console.log(`Rendered ${filteredProducts.length} products`);
        
        // Re-attach event listeners
        this.attachProductEventListeners();
        this.setupSearchAndFilterListeners();
    }

    renderProductCard(product) {
        const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
        const stockStatus = product.stock === 0 ? 'out-of-stock' : product.stock < 5 ? 'low-stock' : 'in-stock';
        const stockText = product.stock === 0 ? 'Out of Stock' : product.stock < 5 ? `Only ${product.stock} left!` : 'In Stock';
        const stockIcon = product.stock === 0 ? '❌' : product.stock < 5 ? '⚠️' : '✅';

        return `
            <div class="product-card ${stockStatus}" data-product-id="${product.id}" tabindex="0">
                <div class="product-header">
                    <div class="product-image" aria-label="${product.name}">
                        ${product.image}
                        <div class="product-overlay">
                            <button class="btn btn-primary quick-view-btn" data-product-id="${product.id}">
                                Quick View
                            </button>
                        </div>
                    </div>
                    <button class="wishlist-btn ${product.inWishlist ? 'active' : ''}" 
                            data-product-id="${product.id}" 
                            aria-label="${product.inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}"
                            title="${product.inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}">
                        ${product.inWishlist ? '💖' : '🤍'}
                    </button>
                    ${discount > 0 ? `<div class="discount-badge" aria-label="${discount}% off">-${discount}%</div>` : ''}
                </div>
                <div class="product-info">
                    <h3 class="product-name" title="${product.name}">${product.name}</h3>
                    <div class="product-rating" aria-label="Rating: ${product.rating} out of 5 stars">
                        <div class="stars" role="img" aria-label="${product.rating} out of 5 stars">
                            ${this.renderStars(product.rating)}
                        </div>
                        <span class="rating-text">${product.rating} (${product.reviews.toLocaleString()})</span>
                    </div>
                    <div class="product-price">
                        <span class="current-price" aria-label="Current price: $${product.price.toFixed(2)}">$${product.price.toFixed(2)}</span>
                        ${product.originalPrice ? `<span class="original-price" aria-label="Original price: $${product.originalPrice.toFixed(2)}">$${product.originalPrice.toFixed(2)}</span>` : ''}
                    </div>
                    <p class="product-description" title="${product.description}">${product.description}</p>
                    <div class="product-meta">
                        <span class="stock-status ${stockStatus}" aria-label="${stockText}">
                            ${stockIcon} ${stockText}
                        </span>
                        <span class="product-category" aria-label="Category: ${product.category}">
                            📂 ${product.category}
                        </span>
                    </div>
                    <div class="product-features-preview">
                        ${product.features.slice(0, 2).map(feature => `<span class="feature-tag">✨ ${feature}</span>`).join('')}
                        ${product.features.length > 2 ? `<span class="feature-more">+${product.features.length - 2} more</span>` : ''}
                    </div>
                </div>
                <div class="product-actions">
                    <button class="btn btn-primary add-to-cart-btn" 
                            data-product-id="${product.id}"
                            ${product.stock === 0 ? 'disabled' : ''}
                            aria-label="${product.stock === 0 ? 'Out of stock' : `Add ${product.name} to cart`}">
                        ${product.stock === 0 ? '❌ Out of Stock' : '🛒 Add to Cart'}
                    </button>
                    <button class="btn btn-secondary view-details-btn" 
                            data-product-id="${product.id}"
                            aria-label="View detailed information for ${product.name}">
                        📋 View Details
                    </button>
                </div>
                <div class="product-hover-info">
                    <div class="hover-features">
                        <h4>Key Features:</h4>
                        <ul>
                            ${product.features.map(feature => `<li>✨ ${feature}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="hover-colors">
                        <h4>Available Colors:</h4>
                        <div class="color-preview">
                            ${product.colors.map(color => `<span class="color-dot" title="${color}">●</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    renderStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        
        return '⭐'.repeat(fullStars) + 
               (hasHalfStar ? '⭐' : '') + 
               '☆'.repeat(emptyStars);
    }

    attachProductEventListeners() {
        console.log('Attaching product event listeners...');
        
        // Remove any existing event listeners to prevent duplicates
        document.removeEventListener('click', this.handleProductClick);
        
        // Add to cart buttons - using event delegation for better reliability
        this.handleProductClick = (e) => {
            if (e.target.classList.contains('add-to-cart-btn')) {
                e.preventDefault();
                e.stopPropagation();
                const productId = parseInt(e.target.dataset.productId);
                console.log('Add to cart button clicked for product:', productId);
                this.addToCart(productId);
            }
        };
        
        document.addEventListener('click', this.handleProductClick);

        // Quick view buttons (both in overlay and actions)
        document.querySelectorAll('.quick-view-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const productId = parseInt(e.target.dataset.productId);
                this.showQuickView(productId);
            });
        });

        // View details buttons
        document.querySelectorAll('.view-details-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const productId = parseInt(e.target.dataset.productId);
                this.showProductDetails(productId);
            });
        });

        // Wishlist buttons - using event delegation for better reliability
        document.removeEventListener('click', this.handleWishlistClick);
        
        this.handleWishlistClick = (e) => {
            if (e.target.classList.contains('wishlist-btn')) {
                e.stopPropagation();
                const productId = parseInt(e.target.dataset.productId);
                console.log('Wishlist button clicked for product:', productId);
                this.toggleWishlist(productId);
            }
        };
        
        document.addEventListener('click', this.handleWishlistClick);

        // Product card clicks and keyboard navigation
        document.querySelectorAll('.product-card').forEach(card => {
            // Click handler
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.product-actions') && !e.target.closest('.wishlist-btn') && !e.target.closest('.product-overlay')) {
                    const productId = parseInt(card.dataset.productId);
                    this.showProductDetails(productId);
                }
            });

            // Keyboard navigation
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const productId = parseInt(card.dataset.productId);
                    this.showProductDetails(productId);
                }
            });

            // Hover effects for mobile
            card.addEventListener('touchstart', () => {
                card.classList.add('touch-active');
            });

            card.addEventListener('touchend', () => {
                setTimeout(() => {
                    card.classList.remove('touch-active');
                }, 300);
            });
        });

        // Re-attach search and filter listeners
        this.setupSearchAndFilterListeners();
        
        console.log('Product event listeners attached successfully');
    }

    showQuickView(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        const modal = document.getElementById('quickViewModal');
        const modalContent = modal.querySelector('.modal-content');
        
        modalContent.innerHTML = `
            <div class="quick-view">
                <div class="quick-view-image">
                    <div class="product-image-large">${product.image}</div>
                </div>
                <div class="quick-view-details">
                    <h2>${product.name}</h2>
                    <div class="product-rating">
                        <div class="stars">${this.renderStars(product.rating)}</div>
                        <span>${product.rating} (${product.reviews} reviews)</span>
                    </div>
                    <div class="product-price">
                        <span class="current-price">$${product.price.toFixed(2)}</span>
                        ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                    </div>
                    <p>${product.description}</p>
                    <div class="product-features">
                        <h4>Features:</h4>
                        <ul>
                            ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="product-colors">
                        <h4>Available Colors:</h4>
                        <div class="color-options">
                            ${product.colors.map(color => `<span class="color-option">${color}</span>`).join('')}
                        </div>
                    </div>
                    <div class="quick-view-actions">
                        <button class="btn btn-primary" onclick="app.addToCart(${product.id})">
                            Add to Cart
                        </button>
                        <button class="btn btn-secondary" onclick="app.showProductDetails(${product.id})">
                            View Full Details
                        </button>
                    </div>
                </div>
            </div>
        `;

        this.openModal(modal);
    }

    showProductDetails(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        const modal = document.getElementById('productModal');
        const modalContent = modal.querySelector('.modal-content');
        
        modalContent.innerHTML = `
            <div class="product-details">
                <div class="product-gallery">
                    <div class="main-image">${product.image}</div>
                    <div class="thumbnail-images">
                        ${product.colors.map(color => `<div class="thumbnail">${product.image}</div>`).join('')}
                    </div>
                </div>
                <div class="product-info-detailed">
                    <h1>${product.name}</h1>
                    <div class="product-rating">
                        <div class="stars">${this.renderStars(product.rating)}</div>
                        <span>${product.rating} out of 5 (${product.reviews} reviews)</span>
                    </div>
                    <div class="product-price">
                        <span class="current-price">$${product.price.toFixed(2)}</span>
                        ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                    </div>
                    <p class="product-description">${product.description}</p>
                    
                    <div class="product-options">
                        <div class="option-group">
                            <label>Color:</label>
                            <select class="color-select">
                                ${product.colors.map(color => `<option value="${color}">${color}</option>`).join('')}
                            </select>
                        </div>
                        <div class="option-group">
                            <label>Quantity:</label>
                            <div class="quantity-selector">
                                <button class="quantity-btn" onclick="this.parentElement.querySelector('input').value = Math.max(1, parseInt(this.parentElement.querySelector('input').value) - 1)">-</button>
                                <input type="number" value="1" min="1" max="${product.stock}">
                                <button class="quantity-btn" onclick="this.parentElement.querySelector('input').value = Math.min(${product.stock}, parseInt(this.parentElement.querySelector('input').value) + 1)">+</button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="product-features">
                        <h3>Features</h3>
                        <ul>
                            ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="product-actions-detailed">
                        <button class="btn btn-primary" onclick="app.addToCart(${product.id}, parseInt(document.querySelector('.quantity-selector input').value))">
                            Add to Cart
                        </button>
                        <button class="btn btn-secondary wishlist-btn ${product.inWishlist ? 'active' : ''}" onclick="app.toggleWishlist(${product.id})">
                            ${product.inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
                        </button>
                    </div>
                </div>
            </div>
        `;

        this.openModal(modal);
    }

    toggleWishlist(productId) {
        console.log('toggleWishlist called with productId:', productId);
        
        const product = this.products.find(p => p.id === productId);
        if (!product) {
            console.error('Product not found:', productId);
            return;
        }

        product.inWishlist = !product.inWishlist;
        
        if (product.inWishlist) {
            if (!this.wishlist.includes(productId)) {
                this.wishlist.push(productId);
            }
            this.showToast('Added to wishlist! 💖', 'success');
        } else {
            this.wishlist = this.wishlist.filter(id => id !== productId);
            this.showToast('Removed from wishlist', 'info');
        }

        // Save to storage
        this.saveCartToStorage();
        
        // Update UI
        this.renderProducts();
        
        // Update account stats if on account page
        this.updateAccountStats();
    }

    addToCart(productId, quantity = 1) {
        console.log('addToCart called with productId:', productId, 'quantity:', quantity);
        
        // Add loading state to button
        const addToCartBtn = document.querySelector(`[data-product-id="${productId}"].add-to-cart-btn`);
        if (addToCartBtn) {
            addToCartBtn.classList.add('loading');
            addToCartBtn.disabled = true;
        }
        
        // Simulate a small delay for better UX
        setTimeout(() => {
            const product = this.products.find(p => p.id === productId);
            if (!product) {
                console.error('Product not found:', productId);
                this.showToast('Product not found!', 'error');
                this.removeLoadingState(addToCartBtn);
                return;
            }
            
            if (product.stock === 0) {
                this.showToast('Product is out of stock!', 'error');
                this.removeLoadingState(addToCartBtn);
                return;
            }

            if (quantity > product.stock) {
                this.showToast(`Only ${product.stock} items available!`, 'warning');
                quantity = product.stock;
            }

            const existingItem = this.cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += quantity;
                console.log('Updated existing cart item:', existingItem);
            } else {
                const newItem = {
                    ...product,
                    quantity: quantity
                };
                this.cart.push(newItem);
                console.log('Added new item to cart:', newItem);
            }

            // Update stock
            product.stock = Math.max(0, product.stock - quantity);

            this.saveCartToStorage();
            this.updateCartCount(true);
            this.showToast(`Added ${quantity} ${quantity === 1 ? 'item' : 'items'} to cart! 🛒`, 'success');
            
            // Update products display
            this.renderProducts();
            
            // Add cart bounce animation
            const cartBtn = document.querySelector('#cartBtn');
            if (cartBtn) {
                cartBtn.classList.add('bounce');
                setTimeout(() => cartBtn.classList.remove('bounce'), 300);
            }
            
            // Add button feedback animation
            if (addToCartBtn) {
                this.removeLoadingState(addToCartBtn);
                addToCartBtn.classList.add('added');
                setTimeout(() => addToCartBtn.classList.remove('added'), 1000);
            }
        }, 300); // Small delay for better UX
    }
    
    removeLoadingState(button) {
        if (button) {
            button.classList.remove('loading');
            button.disabled = false;
        }
    }

    removeFromCart(productId) {
        console.log('removeFromCart called:', productId);
        const item = this.cart.find(item => item.id === productId);
        if (!item) {
            console.error('Item not found in cart for removal:', productId);
            return;
        }

        // Add removal animation
        const cartItem = document.querySelector(`[data-item-id="${productId}"]`);
        if (cartItem) {
            cartItem.style.transition = 'all 0.3s ease';
            cartItem.style.transform = 'translateX(100%)';
            cartItem.style.opacity = '0';
            
            setTimeout(() => {
                // Restore stock
                const product = this.products.find(p => p.id === productId);
                if (product) {
                    product.stock += item.quantity;
                }

                this.cart = this.cart.filter(item => item.id !== productId);
                this.saveCartToStorage();
                this.updateCartCount();
                this.updateCartDisplay();
                this.renderProducts(); // Update product stock display
                
                this.showToast(`Removed ${item.name} from cart`, 'info');
            }, 300);
        } else {
            // Fallback if animation element not found
            const product = this.products.find(p => p.id === productId);
            if (product) {
                product.stock += item.quantity;
            }

            this.cart = this.cart.filter(item => item.id !== productId);
            this.saveCartToStorage();
            this.updateCartCount();
            this.updateCartDisplay();
            this.renderProducts();
            
            this.showToast(`Removed ${item.name} from cart`, 'info');
        }
    }

    updateQuantity(productId, change) {
        console.log('updateQuantity called:', productId, change);
        const item = this.cart.find(item => item.id === productId);
        if (!item) {
            console.error('Item not found in cart:', productId);
            return;
        }

        const newQuantity = item.quantity + change;
        
        if (newQuantity <= 0) {
            this.removeFromCart(productId);
            return;
        }

        // Check stock availability - we need to consider the current item quantity
        const product = this.products.find(p => p.id === productId);
        if (product) {
            // Calculate available stock: original stock - (current cart quantity - current item quantity)
            const otherItemsInCart = this.cart.filter(cartItem => cartItem.id === productId && cartItem !== item);
            const otherItemsQuantity = otherItemsInCart.reduce((sum, cartItem) => sum + cartItem.quantity, 0);
            const availableStock = product.stock + item.quantity + otherItemsQuantity;
            
            if (newQuantity > availableStock) {
                this.showToast(`Only ${availableStock} items available!`, 'warning');
                return;
            }
        }

        // Add button feedback animation
        const button = event?.target;
        if (button && button.classList.contains('quantity-btn')) {
            button.style.transform = 'scale(0.9)';
            setTimeout(() => {
                button.style.transform = '';
            }, 150);
        }

        // Update stock
        if (product) {
            product.stock = product.stock + item.quantity - newQuantity;
        }

        item.quantity = newQuantity;
        this.saveCartToStorage();
        this.updateCartCount();
        this.updateCartDisplay();
        this.renderProducts(); // Update product stock display
        
        // Show feedback for quantity changes
        if (change > 0) {
            this.showToast(`Added 1 more ${item.name} to cart`, 'success');
        } else if (change < 0) {
            this.showToast(`Removed 1 ${item.name} from cart`, 'info');
        }
    }

    clearCart() {
        if (this.cart.length === 0) {
            this.showToast('Your cart is already empty!', 'info');
            return;
        }
        
        if (confirm('Are you sure you want to clear your cart?')) {
            // Restore all stock
            this.cart.forEach(item => {
                const product = this.products.find(p => p.id === item.id);
                if (product) {
                    product.stock += item.quantity;
                }
            });

            this.cart = [];
            this.saveCartToStorage();
            this.updateCartCount();
            this.updateCartDisplay();
            this.renderProducts(); // Update product stock display
            this.showToast('Cart cleared!', 'success');
        }
    }

    updateCartDisplay() {
        console.log('updateCartDisplay called, cart items:', this.cart.length);
        const cartItems = document.getElementById('cartItems');
        
        if (!cartItems) {
            console.error('Cart items container not found');
            return;
        }
        
        if (this.cart.length === 0) {
            cartItems.innerHTML = `
                <div class="empty-cart">
                    <div class="empty-cart-icon">🛒</div>
                    <h3>Your cart is empty</h3>
                    <p>Add some amazing products to get started!</p>
                    <button class="btn btn-primary" onclick="app.navigateToSection('products')">
                        🛍️ Start Shopping
                    </button>
                </div>
            `;
            this.updateCartSummary();
            return;
        }

        cartItems.innerHTML = this.cart.map(item => {
            const product = this.products.find(p => p.id === item.id);
            const availableStock = product ? product.stock + item.quantity : item.stock;
            
            return `
                <div class="cart-item" data-item-id="${item.id}">
                    <div class="cart-item-image">
                        <div class="product-image-small" onclick="app.showProductDetails(${item.id})" style="cursor: pointer;">${item.image}</div>
                    </div>
                    <div class="cart-item-details">
                        <h4 class="cart-item-title" onclick="app.showProductDetails(${item.id})" style="cursor: pointer;">${item.name}</h4>
                        <div class="cart-item-price">
                            <span class="current-price">$${item.price.toFixed(2)}</span>
                            ${item.originalPrice ? `<span class="original-price">$${item.originalPrice.toFixed(2)}</span>` : ''}
                        </div>
                        <div class="cart-item-meta">
                            <span class="stock-info">${availableStock} available</span>
                            <span class="item-total">Total: $${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    </div>
                    <div class="cart-item-actions">
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="app.updateQuantity(${item.id}, -1)" 
                                    ${item.quantity <= 1 ? 'disabled' : ''} aria-label="Decrease quantity">
                                -
                            </button>
                            <span class="quantity-display">${item.quantity}</span>
                            <button class="quantity-btn" onclick="app.updateQuantity(${item.id}, 1)" 
                                    ${item.quantity >= availableStock ? 'disabled' : ''} aria-label="Increase quantity">
                                +
                            </button>
                        </div>
                        <button class="btn btn-sm btn-danger remove-btn" onclick="app.removeFromCart(${item.id})" 
                                aria-label="Remove ${item.name} from cart">
                            🗑️ Remove
                        </button>
                    </div>
                </div>
            `;
        }).join('');

        this.updateCartSummary();
        console.log('Cart display updated successfully');
    }

    updateCartSummary() {
        const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const tax = subtotal * 0.08; // 8% tax
        const total = subtotal + tax;

        document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
        document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
        document.getElementById('total').textContent = `$${total.toFixed(2)}`;
    }

    updateCartCount(animate = false) {
        const cartCount = document.querySelector('.cart-count');
        const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        
        if (cartCount) {
            cartCount.textContent = totalItems;
            cartCount.style.display = totalItems > 0 ? 'block' : 'none';
            
            if (animate) {
                cartCount.classList.add('pulse');
                setTimeout(() => cartCount.classList.remove('pulse'), 600);
            }
        }
        
        // Update cart link text
        const cartLink = document.querySelector('a[href="#cart"]');
        if (cartLink) {
            const cartText = cartLink.querySelector('.nav-link-text') || cartLink;
            if (totalItems > 0) {
                cartText.innerHTML = `<span class="nav-icon">🛒</span>Cart (${totalItems})`;
            } else {
                cartText.innerHTML = `<span class="nav-icon">🛒</span>Cart`;
            }
        }
    }

    loadCart() {
        const saved = localStorage.getItem('pwa-shop-cart');
        return saved ? JSON.parse(saved) : [];
    }

    saveCart() {
        localStorage.setItem('pwa-shop-cart', JSON.stringify(this.cart));
    }

    checkout() {
        if (this.cart.length === 0) {
            this.showToast('Your cart is empty!', 'error');
            return;
        }

        // Show loading state
        const checkoutBtn = document.getElementById('checkoutBtn');
        if (checkoutBtn) {
            checkoutBtn.textContent = 'Processing...';
            checkoutBtn.disabled = true;
        }

        // Simulate checkout process
        this.showToast('Processing your order...', 'info');
        
        setTimeout(() => {
            // Restore stock (simulate successful order)
            this.cart.forEach(item => {
                const product = this.products.find(p => p.id === item.id);
                if (product) {
                    // Stock was already reduced when added to cart
                    // In a real app, this would be handled by the backend
                }
            });

            const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const tax = total * 0.08;
            const finalTotal = total + tax;

            this.cart = [];
            this.saveCartToStorage();
            this.updateCartCount();
            this.updateCartDisplay();
            
            // Reset checkout button
            if (checkoutBtn) {
                checkoutBtn.textContent = 'Proceed to Checkout';
                checkoutBtn.disabled = false;
            }

            this.navigateTo('home');
            this.showToast(`Order placed successfully! Total: $${finalTotal.toFixed(2)} 💖`, 'success');
            
            // Show order confirmation
            this.showOrderConfirmation(finalTotal);
        }, 2000);
    }

    showOrderConfirmation(total) {
        const modal = document.getElementById('productModal');
        const modalContent = modal.querySelector('.modal-content');
        
        modalContent.innerHTML = `
            <div class="order-confirmation">
                <div class="confirmation-icon">🎉</div>
                <h2>Order Confirmed!</h2>
                <p>Thank you for your purchase!</p>
                <div class="order-details">
                    <p><strong>Order Total:</strong> $${total.toFixed(2)}</p>
                    <p><strong>Order Number:</strong> #${Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                    <p>You'll receive an email confirmation shortly.</p>
                </div>
                <button class="btn btn-primary" onclick="app.closeModal(); app.navigateTo('home')">Continue Shopping</button>
            </div>
        `;

        this.openModal(modal);
    }

    // Profile Management
    updateProfile() {
        const formData = new FormData(document.getElementById('profileForm'));
        const profile = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone')
        };

        localStorage.setItem('pwa-shop-profile', JSON.stringify(profile));
        this.showToast('Profile updated successfully!', 'success');
    }

    loadProfile() {
        const saved = localStorage.getItem('pwa-shop-profile');
        if (saved) {
            const profile = JSON.parse(saved);
            document.getElementById('name').value = profile.name || '';
            document.getElementById('email').value = profile.email || '';
            document.getElementById('phone').value = profile.phone || '';
        }
    }

    // Navigation
    navigateTo(section) {
        this.navigateToSection(section);
        window.location.hash = `#${section}`;
        // Save the current section to localStorage for better UX
        localStorage.setItem('quickcart-last-section', section);
    }

    navigateToSection(section) {
        // Hide all sections
        document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
        
        // Show target section
        const targetSection = document.getElementById(section);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Update navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        
        const activeLink = document.querySelector(`[href="#${section}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }

        // Load section-specific content
        switch (section) {
            case 'products':
                this.loadProducts();
                break;
            case 'cart':
                this.updateCartDisplay();
                break;
            case 'account':
                this.loadProfile();
                break;
        }
    }

    // PWA Features
    setupPWAFeatures() {
        this.setupOfflineDetection();
        this.setupInstallPrompt();
    }

    setupOfflineDetection() {
        window.addEventListener('online', () => {
            this.isOnline = true;
            document.getElementById('offlineIndicator').classList.remove('show');
            this.showToast('You are back online!', 'success');
        });

        window.addEventListener('offline', () => {
            this.isOnline = false;
            document.getElementById('offlineIndicator').classList.add('show');
            this.showToast('You are offline. Some features may be limited.', 'warning');
        });
    }

    setupInstallPrompt() {
        let deferredPrompt;

        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
            
            // Show install prompt after 5 seconds
            setTimeout(() => {
                if (deferredPrompt) {
                    document.getElementById('installPrompt').classList.add('show');
                }
            }, 5000);
        });

        window.addEventListener('appinstalled', () => {
            document.getElementById('installPrompt').classList.remove('show');
            this.showToast('App installed successfully!', 'success');
        });
    }

    async installApp() {
        if (window.deferredPrompt) {
            window.deferredPrompt.prompt();
            const { outcome } = await window.deferredPrompt.userChoice;
            
            if (outcome === 'accepted') {
                this.showToast('App installation started!', 'info');
            }
            
            window.deferredPrompt = null;
            document.getElementById('installPrompt').classList.remove('show');
        }
    }

    dismissInstallPrompt() {
        document.getElementById('installPrompt').classList.remove('show');
        localStorage.setItem('pwa-install-dismissed', Date.now());
    }

    async registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            try {
                const registration = await navigator.serviceWorker.register('/js/service-worker.js');
                console.log('Service Worker registered:', registration);
            } catch (error) {
                console.error('Service Worker registration failed:', error);
            }
        }
    }

    setupPushNotifications() {
        // This will be handled by push-notifications.js
    }

    installPWA() {
        this.installApp();
    }

    toggleNotifications() {
        // This will be handled by push-notifications.js
    }

    // Notifications
    async testNotification() {
        if ('Notification' in window) {
            if (Notification.permission === 'granted') {
                new Notification('QuickCart', {
                    body: 'This is a test notification from QuickCart!',
                    icon: '/icons/icon-192x192.png',
                    badge: '/icons/icon-72x72.png'
                });
            } else if (Notification.permission !== 'denied') {
                const permission = await Notification.requestPermission();
                if (permission === 'granted') {
                    this.testNotification();
                }
            }
        }
    }

    // Utility Functions
    showToast(message, type = 'info') {
        let toast = document.querySelector('.toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.className = 'toast';
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        toast.classList.add('show');
        if (type === 'error') toast.style.background = 'var(--error)';
        else if (type === 'success') toast.style.background = 'var(--success)';
        else toast.style.background = 'var(--primary-color)';
        setTimeout(() => toast.classList.remove('show'), 2500);
    }

    // Modal accessibility and swipe-to-close
    openModal(modal) {
        modal.classList.add('active');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('tabindex', '-1');
        modal.focus();
        // Trap focus
        this.trapFocus(modal);
        // Swipe-to-close for mobile
        this.enableSwipeToClose(modal);
    }
    closeModal() {
        const modal = document.getElementById('productModal');
        modal.classList.remove('active');
        modal.removeAttribute('aria-modal');
        modal.removeAttribute('role');
        modal.removeAttribute('tabindex');
        this.releaseFocusTrap();
    }
    trapFocus(modal) {
        const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        modal.addEventListener('keydown', this.focusTrapHandler = (e) => {
            if (e.key === 'Tab') {
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault(); last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault(); first.focus();
                }
            }
            if (e.key === 'Escape') this.closeModal();
        });
    }
    releaseFocusTrap() {
        const modal = document.getElementById('productModal');
        if (this.focusTrapHandler) modal.removeEventListener('keydown', this.focusTrapHandler);
    }
    enableSwipeToClose(modal) {
        let startY = null;
        const onTouchStart = (e) => { startY = e.touches[0].clientY; };
        const onTouchMove = (e) => {
            if (startY !== null) {
                const diff = e.touches[0].clientY - startY;
                if (diff > 80) { this.closeModal(); startY = null; }
            }
        };
        modal.addEventListener('touchstart', onTouchStart);
        modal.addEventListener('touchmove', onTouchMove);
        modal.addEventListener('touchend', () => { startY = null; });
    }

    // Enhanced Account Methods
    loadUserData() {
        const userSession = localStorage.getItem('quickcart_user_session');
        if (userSession) {
            try {
                this.userData = JSON.parse(userSession);
            } catch (e) {
                console.error('Error parsing user session:', e);
                this.userData = null;
            }
        } else {
            this.userData = null;
        }
    }

    updateAccountDisplay() {
        if (!this.userData) {
            this.showToast('Please create an account to access your profile', 'info');
            return;
        }

        // Update user info
        const userName = document.getElementById('userName');
        const userEmail = document.getElementById('userEmail');
        
        if (userName) {
            userName.textContent = `Welcome, ${this.userData.firstName || this.userData.email.split('@')[0]}!`;
        }
        
        if (userEmail) {
            userEmail.textContent = this.userData.email;
        }

        // Update stats
        this.updateAccountStats();
        

    }
    


    updateAccountStats() {
        const totalOrders = document.getElementById('totalOrders');
        const wishlistCount = document.getElementById('wishlistCount');
        const reviewsCount = document.getElementById('reviewsCount');
        const savingsAmount = document.getElementById('savingsAmount');

        if (totalOrders) {
            totalOrders.textContent = this.userData.totalOrders || 0;
        }
        
        if (wishlistCount) {
            wishlistCount.textContent = this.wishlist.length;
        }
        
        if (reviewsCount) {
            reviewsCount.textContent = this.userData.reviewsCount || 0;
        }
        
        if (savingsAmount) {
            const savings = this.userData.totalSavings || 0;
            savingsAmount.textContent = `$${savings.toFixed(2)}`;
        }
    }



    showChangePasswordModal() {
        const modal = document.createElement('div');
        modal.className = 'modal active';
        modal.innerHTML = `
            <div class="modal-content">
                <button class="modal-close" onclick="this.parentElement.parentElement.remove()">×</button>
                <h3>Change Password 🔒</h3>
                <form id="changePasswordForm">
                    <div class="form-group">
                        <label for="currentPassword">Current Password</label>
                        <input type="password" id="currentPassword" required>
                    </div>
                    <div class="form-group">
                        <label for="newPassword">New Password</label>
                        <input type="password" id="newPassword" required>
                    </div>
                    <div class="form-group">
                        <label for="confirmNewPassword">Confirm New Password</label>
                        <input type="password" id="confirmNewPassword" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Update Password</button>
                </form>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Add form handler
        const form = modal.querySelector('#changePasswordForm');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.changePassword();
            modal.remove();
        });
    }

    changePassword() {
        const currentPassword = document.getElementById('currentPassword').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmNewPassword').value;

        if (newPassword !== confirmPassword) {
            this.showToast('New passwords do not match', 'error');
            return;
        }

        if (newPassword.length < 8) {
            this.showToast('Password must be at least 8 characters long', 'error');
            return;
        }

        // Simulate password change
        this.showToast('Password updated successfully! 🔐', 'success');
    }

    showOrderHistory() {
        const modal = document.createElement('div');
        modal.className = 'modal active';
        modal.innerHTML = `
            <div class="modal-content">
                <button class="modal-close" onclick="this.parentElement.parentElement.remove()">×</button>
                <h3>Order History 📋</h3>
                <div class="order-history">
                    <p>No orders found. Start shopping to see your order history!</p>
                    <button class="btn btn-primary" onclick="this.parentElement.parentElement.parentElement.remove(); app.navigateTo('products')">
                        Browse Products
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    showWishlist() {
        const modal = document.createElement('div');
        modal.className = 'modal active';
        modal.innerHTML = `
            <div class="modal-content">
                <button class="modal-close" onclick="this.parentElement.parentElement.remove()">×</button>
                <h3>My Wishlist 💖</h3>
                <div class="wishlist-items">
                    ${this.wishlist.length === 0 ? 
                        '<p>Your wishlist is empty. Add some products to your wishlist!</p>' :
                        this.wishlist.map(item => `
                            <div class="wishlist-item">
                                <span class="item-icon">${item.image}</span>
                                <span class="item-name">${item.name}</span>
                                <span class="item-price">$${item.price.toFixed(2)}</span>
                                <button class="btn btn-primary btn-sm" onclick="app.addToCart(${item.id})">Add to Cart</button>
                            </div>
                        `).join('')
                    }
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    showHelpSupport() {
        const modal = document.createElement('div');
        modal.className = 'modal active';
        modal.innerHTML = `
            <div class="modal-content">
                <button class="modal-close" onclick="this.parentElement.parentElement.remove()">×</button>
                <h3>Help & Support ❓</h3>
                <div class="help-content">
                    <div class="help-section">
                        <h4>📧 Contact Us</h4>
                        <p>Email: support@quickcart.com</p>
                        <p>Phone: 1-800-QUICKCART</p>
                    </div>
                    <div class="help-section">
                        <h4>⌨️ Keyboard Shortcuts</h4>
                        <ul>
                            <li><strong>Ctrl/Cmd + K:</strong> Focus search bar</li>
                            <li><strong>Ctrl/Cmd + B:</strong> Go to cart</li>
                            <li><strong>Escape:</strong> Close modals</li>
                            <li><strong>Enter:</strong> Submit forms</li>
                        </ul>
                    </div>
                    <div class="help-section">
                        <h4>📚 FAQ</h4>
                        <ul>
                            <li>How do I place an order?</li>
                            <li>What payment methods do you accept?</li>
                            <li>How do I track my order?</li>
                            <li>What is your return policy?</li>
                        </ul>
                    </div>
                    <div class="help-section">
                        <h4>💬 Live Chat</h4>
                        <p>Our support team is available 24/7 to help you!</p>
                        <button class="btn btn-primary">Start Chat</button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    showAboutModal() {
        const modal = document.createElement('div');
        modal.className = 'modal active';
        modal.innerHTML = `
            <div class="modal-content">
                <button class="modal-close" onclick="this.parentElement.parentElement.remove()">×</button>
                <h3>About QuickCart 🦄</h3>
                <div class="about-content">
                    <div class="about-section">
                        <h4>Our Story</h4>
                        <p>QuickCart was born from a simple idea: shopping should be fast, fun, and accessible to everyone. We believe that technology should make life easier, not more complicated.</p>
                    </div>
                    <div class="about-section">
                        <h4>Our Mission</h4>
                        <p>To provide an adorable, offline-ready shopping experience that works seamlessly across all devices, making shopping delightful for everyone.</p>
                    </div>
                    <div class="about-section">
                        <h4>Features</h4>
                        <ul>
                            <li>✨ Offline shopping capability</li>
                            <li>🔔 Smart push notifications</li>
                            <li>📱 Progressive Web App</li>
                            <li>🎨 Beautiful, accessible design</li>
                            <li>⚡ Lightning-fast performance</li>
                        </ul>
                    </div>
                    <div class="about-section">
                        <h4>Version</h4>
                        <p>QuickCart v1.0.0 - Made with 💖</p>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }



    exportUserData() {
        const userData = {
            profile: this.userData,
            cart: this.cart,
            wishlist: this.wishlist,
            preferences: {
                pushNotifications: document.getElementById('pushNotifications')?.checked,
                emailNotifications: document.getElementById('emailNotifications')?.checked,
                smsNotifications: document.getElementById('smsNotifications')?.checked
            },
            exportDate: new Date().toISOString()
        };

        const dataStr = JSON.stringify(userData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = `quickcart-data-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        URL.revokeObjectURL(url);
        this.showToast('Data exported successfully! 📤', 'success');
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing QuickCart...');
    window.app = new PWAShop();
    
    // Load profile data
    app.loadProfile();
    
    // Load user data and update account display
    app.loadUserData();
    app.updateAccountDisplay();
    
    // Update cart display if on cart page
    if (window.location.hash === '#cart') {
        app.navigateToSection('cart');
    }
    app.updateCartDisplay();
    

});

// Handle browser back/forward buttons
window.addEventListener('popstate', () => {
    const section = window.location.hash.substring(1) || 'home';
    app.navigateToSection(section);
}); 
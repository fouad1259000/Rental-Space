// Rental Space - Main JavaScript File
console.log('Rental Space website loaded successfully!');

// Property data
const properties = [
    {
        id: 1,
        title: "Modern Downtown Apartment",
        price: 2500,
        location: "123 Main Street, Downtown, NY",
        bedrooms: 2,
        bathrooms: 2,
        type: "apartment",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
        featured: true
    },
    {
        id: 2,
        title: "Luxury Family Home",
        price: 3200,
        location: "456 Oak Avenue, Suburbs, NY",
        bedrooms: 4,
        bathrooms: 3,
        type: "house",
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&h=300&fit=crop",
        featured: true
    },
    {
        id: 3,
        title: "Cozy Studio Apartment",
        price: 1800,
        location: "789 Pine Street, Arts District, NY",
        bedrooms: 1,
        bathrooms: 1,
        type: "apartment",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
        featured: true
    },
    {
        id: 4,
        title: "Beachfront Condo",
        price: 2800,
        location: "321 Ocean Drive, Beachside, CA",
        bedrooms: 3,
        bathrooms: 2,
        type: "condo",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
        featured: false
    },
    {
        id: 5,
        title: "Mountain Cabin",
        price: 2200,
        location: "654 Mountain Road, Pine Valley, CO",
        bedrooms: 3,
        bathrooms: 2,
        type: "house",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
        featured: false
    },
    {
        id: 6,
        title: "Urban Loft",
        price: 2100,
        location: "987 Warehouse District, Industrial, NY",
        bedrooms: 2,
        bathrooms: 1,
        type: "apartment",
        image: "https://images.unsplash.com/photo-1505842381624-c6b057962c4f?w=400&h=300&fit=crop",
        featured: false
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded');
    
    const currentPage = getCurrentPage();
    
    switch(currentPage) {
        case 'index':
            loadFeaturedProperties();
            animateStats();
            break;
        case 'listings':
            loadAllProperties();
            break;
        case 'dashboard':
            // Dashboard specific initialization
            break;
        case 'login':
            // Login page has its own script
            break;
    }
});

function getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('listings.html')) return 'listings';
    if (path.includes('dashboard.html')) return 'dashboard';
    if (path.includes('login.html')) return 'login';
    return 'index';
}

// Load featured properties on homepage
function loadFeaturedProperties() {
    const container = document.getElementById('featured-properties');
    
    if (container) {
        const featuredProps = properties.filter(p => p.featured);
        container.innerHTML = featuredProps.map(property => `
            <div class="property-card bg-white rounded-lg shadow-md overflow-hidden cursor-pointer" onclick="viewProperty(${property.id})">
                <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover">
                <div class="p-6">
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">${property.title}</h3>
                    <p class="text-gray-600 mb-3">${property.location}</p>
                    <div class="flex items-center justify-between">
                        <div class="text-2xl font-bold text-green-600">$${property.price}<span class="text-sm font-normal text-gray-600">/month</span></div>
                        <div class="flex items-center gap-2 text-sm text-gray-600">
                            <span>${property.bedrooms} bed</span>
                            <span>${property.bathrooms} bath</span>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Load all properties on listings page
function loadAllProperties() {
    const container = document.getElementById('properties-grid');
    
    if (container) {
        container.innerHTML = properties.map(property => `
            <div class="property-card content-card rounded-2xl overflow-hidden cursor-pointer border border-white/20" onclick="viewProperty(${property.id})">
                <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover">
                <div class="p-6">
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">${property.title}</h3>
                    <p class="text-gray-600 mb-3">${property.location}</p>
                    <div class="flex items-center justify-between">
                        <div class="text-2xl font-bold text-green-600">$${property.price}<span class="text-sm font-normal text-gray-600">/month</span></div>
                        <div class="flex items-center gap-2 text-sm text-gray-600">
                            <span>${property.bedrooms} bed</span>
                            <span>${property.bathrooms} bath</span>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Update results count
        const resultsCount = document.getElementById('results-count');
        if (resultsCount) {
            resultsCount.textContent = properties.length;
        }
    }
}

// Animate stats counter
function animateStats() {
    const counters = document.querySelectorAll('[data-count]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counter.textContent = Math.floor(current).toLocaleString();
        }, 16);
    });
}

// Navigation functions
function viewProperty(propertyId) {
    alert(`Viewing property ${propertyId} - This would open the property details page`);
    // window.location.href = `property.html?id=${propertyId}`;
}

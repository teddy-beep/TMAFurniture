// Shop JavaScript for Tilahun Metal Art Furniture

document.addEventListener('DOMContentLoaded', () => {
    const filterCheckboxes = document.querySelectorAll('.filter-checkbox');
    const productCards = document.querySelectorAll('.product-card');
    const priceRange = document.getElementById('price-range');
    const priceValue = document.getElementById('price-value');
    const resetFiltersBtn = document.getElementById('reset-filters');
    const sortSelect = document.getElementById('sort-select');
    const productCount = document.getElementById('product-count');
    
    let activeFilters = {
        category: [],
        metal: [],
        room: [],
        maxPrice: 5000
    };
    
    // Update product count
    function updateProductCount() {
        const visibleProducts = document.querySelectorAll('.product-card:not(.hidden)');
        productCount.textContent = visibleProducts.length;
    }
    
    // Filter products
    function filterProducts() {
        productCards.forEach(card => {
            const category = card.dataset.category;
            const metal = card.dataset.metal;
            const room = card.dataset.room;
            const price = parseInt(card.dataset.price);
            
            let isVisible = true;
            
            // Check category filter
            if (activeFilters.category.length > 0 && !activeFilters.category.includes(category)) {
                isVisible = false;
            }
            
            // Check metal filter
            if (activeFilters.metal.length > 0 && !activeFilters.metal.includes(metal)) {
                isVisible = false;
            }
            
            // Check room filter
            if (activeFilters.room.length > 0 && !activeFilters.room.includes(room)) {
                isVisible = false;
            }
            
            // Check price filter
            if (price > activeFilters.maxPrice) {
                isVisible = false;
            }
            
            if (isVisible) {
                card.classList.remove('hidden');
                card.classList.add('visible');
            } else {
                card.classList.add('hidden');
                card.classList.remove('visible');
            }
        });
        
        updateProductCount();
    }
    
    // Category filter
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const filterType = checkbox.dataset.filter;
            const value = checkbox.value;
            
            if (checkbox.checked) {
                activeFilters[filterType].push(value);
            } else {
                const index = activeFilters[filterType].indexOf(value);
                if (index > -1) {
                    activeFilters[filterType].splice(index, 1);
                }
            }
            
            filterProducts();
        });
    });
    
    // Price range filter
    if (priceRange) {
        priceRange.addEventListener('input', (e) => {
            const value = e.target.value;
            priceValue.textContent = `$${parseInt(value).toLocaleString()}`;
            activeFilters.maxPrice = parseInt(value);
            filterProducts();
        });
    }
    
    // Reset filters
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', () => {
            // Reset all checkboxes
            filterCheckboxes.forEach(checkbox => {
                checkbox.checked = false;
            });
            
            // Reset price range
            if (priceRange) {
                priceRange.value = 5000;
                priceValue.textContent = '$5,000';
            }
            
            // Reset active filters
            activeFilters = {
                category: [],
                metal: [],
                room: [],
                maxPrice: 5000
            };
            
            // Show all products
            productCards.forEach(card => {
                card.classList.remove('hidden');
                card.classList.add('visible');
            });
            
            updateProductCount();
        });
    }
    
    // Sort products
    if (sortSelect) {
        sortSelect.addEventListener('change', () => {
            const sortBy = sortSelect.value;
            const grid = document.getElementById('products-grid');
            const products = Array.from(productCards);
            
            products.sort((a, b) => {
                switch (sortBy) {
                    case 'price-low':
                        return parseInt(a.dataset.price) - parseInt(b.dataset.price);
                    case 'price-high':
                        return parseInt(b.dataset.price) - parseInt(a.dataset.price);
                    case 'newest':
                        return -1; // Placeholder - would need date data
                    case 'featured':
                    default:
                        return 0;
                }
            });
            
            // Reorder in DOM
            products.forEach(product => {
                grid.appendChild(product);
            });
        });
    }
    
    // Initialize
    updateProductCount();
});

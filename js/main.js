// Main JavaScript for Tilahun Metal Art Furniture

// Navigation scroll effect
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuClose = document.getElementById('mobile-menu-close');

// Scroll effect for navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.remove('bg-transparent');
        navbar.classList.add('bg-matte-black', 'shadow-lg');
    } else {
        navbar.classList.add('bg-transparent');
        navbar.classList.remove('bg-matte-black', 'shadow-lg');
    }
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

mobileMenuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenu.classList.remove('active');
    }
});

// Smooth scroll for anchor links
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

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.card-hover, .section-padding > div').forEach(el => {
    observer.observe(el);
});

// Add to cart functionality (placeholder)
document.querySelectorAll('.btn-primary').forEach(btn => {
    if (btn.textContent.includes('Add to Cart')) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const originalText = this.textContent;
            this.textContent = 'Added!';
            this.style.backgroundColor = '#128C7E';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.backgroundColor = '';
            }, 2000);
        });
    }
});

// Inquiry button functionality (placeholder)
document.querySelectorAll('.btn-primary').forEach(btn => {
    if (btn.textContent.includes('Inquire')) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'contact.html';
        });
    }
});

// Cart counter (placeholder)
let cartCount = 0;
const cartCounter = document.createElement('div');
cartCounter.className = 'hidden md:flex items-center justify-center w-8 h-8 bg-burnished-gold text-white rounded-full text-sm font-bold ml-4';
cartCounter.textContent = '0';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Add any initialization code here
    console.log('TMAF Furniture website loaded');
});

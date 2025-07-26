// Global Variables
let currentTestimonial = 0;
let testimonials = [];
let blogPosts = [];
let isAdminLoggedIn = false;
let map;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    initializeNavigation();
    initializeThemeToggle();
    initializeMobileMenu();
    initializeTestimonials();
    initializeBlogFunctionality();
    initializeMap();
    initializeAdminFunctionality();
    initializeAnimations();
    initializeCTAButtons();
});

// Initialize the application
function initializeApp() {
    // Load theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-color-scheme', savedTheme);
    updateThemeToggle(savedTheme);
    
    // Show home section by default
    showSection('home');
    
    // Initialize data
    initializeData();
    
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
}

// Initialize data
function initializeData() {
    testimonials = [
        {
            id: 1,
            name: "Rajesh Kumar",
            business: "FitZone Gym, Gurgaon",
            rating: 5,
            text: "RJR Consultancy transformed our gym from struggling to profitable in just 6 months. Their lead generation system increased our membership by 300%."
        },
        {
            id: 2,
            name: "Priya Sharma",
            business: "Wellness Café, Noida",
            rating: 5,
            text: "The sales funnel they built for us automated our entire customer journey. We now get quality leads daily without constant manual effort."
        },
        {
            id: 3,
            name: "Amit Singh",
            business: "TechStart Academy, Delhi",
            rating: 5,
            text: "Their staff training program and performance tracking dashboard helped us scale from 50 to 200 students in one year. Incredible results!"
        }
    ];
    
    blogPosts = [
        {
            id: 1,
            title: "5 Proven Strategies to Double Your Gym Membership",
            excerpt: "Learn the exact tactics we used to help fitness centers grow their membership base by 200-300% in the Delhi NCR market.",
            date: "2024-04-15",
            category: "Fitness Business"
        },
        {
            id: 2,
            title: "WhatsApp Marketing for Local Businesses: Complete Guide",
            excerpt: "Discover how to leverage WhatsApp automation to nurture leads and convert prospects into paying customers for your local business.",
            date: "2024-04-20",
            category: "Digital Marketing"
        },
        {
            id: 3,
            title: "Building Trust in the Delhi NCR Market: A Local Business Guide",
            excerpt: "Essential strategies for establishing credibility and building lasting customer relationships in the competitive Delhi NCR business landscape.",
            date: "2024-04-25",
            category: "Business Strategy"
        }
    ];
}

// Navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                const targetSection = href.substring(1);
                showSection(targetSection);
                
                // Update active nav link
                navLinks.forEach(nl => nl.classList.remove('active'));
                this.classList.add('active');
                
                // Close mobile menu if open
                closeMobileMenu();
            }
        });
    });
    
    // Also handle logo click to go to home
    const navBrand = document.querySelector('.nav-brand');
    if (navBrand) {
        navBrand.addEventListener('click', function(e) {
            e.preventDefault();
            showSection('home');
            
            // Update active nav link
            navLinks.forEach(nl => nl.classList.remove('active'));
            document.querySelector('.nav-link[href="#home"]').classList.add('active');
            
            closeMobileMenu();
        });
        navBrand.style.cursor = 'pointer';
    }
}

// Show specific section
function showSection(sectionId) {
    console.log('Showing section:', sectionId);
    
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        targetSection.style.display = 'block';
        targetSection.classList.add('fade-in');
        
        // Update URL hash
        if (history.pushState) {
            history.pushState(null, null, `#${sectionId}`);
        }
        
        // Initialize map if contact section
        if (sectionId === 'contact') {
            setTimeout(() => {
                if (map) {
                    map.invalidateSize();
                }
            }, 300);
        }
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Initialize CTA buttons
function initializeCTAButtons() {
    // Book Free Growth Audit button
    const auditButtons = document.querySelectorAll('button[onclick*="contact"], .btn[onclick*="contact"]');
    auditButtons.forEach(button => {
        button.removeAttribute('onclick'); // Remove inline onclick
        button.addEventListener('click', function(e) {
            e.preventDefault();
            showSection('contact');
            
            // Update nav
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(nl => nl.classList.remove('active'));
            document.querySelector('.nav-link[href="#contact"]').classList.add('active');
        });
    });
    
    // WhatsApp buttons
    const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            openWhatsApp('Hi! I\'m interested in learning more about your business growth services.');
        });
    });
}

// Theme toggle functionality
function initializeThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const currentTheme = document.documentElement.getAttribute('data-color-scheme') || 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            console.log('Switching theme from', currentTheme, 'to', newTheme);
            
            document.documentElement.setAttribute('data-color-scheme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeToggle(newTheme);
        });
    }
}

// Update theme toggle button
function updateThemeToggle(theme) {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
        themeToggle.setAttribute('title', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
}

// Mobile menu functionality
function initializeMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                closeMobileMenu();
            }
        });
    }
}

// Close mobile menu
function closeMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
}

// Testimonials functionality
function initializeTestimonials() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    if (testimonialCards.length > 0) {
        showTestimonial(0);
        
        // Auto-rotate testimonials every 5 seconds
        setInterval(nextTestimonial, 5000);
    }
}

// Show specific testimonial
function showTestimonial(index) {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach((card, i) => {
        card.classList.remove('active');
        card.style.display = 'none';
        if (i === index) {
            card.classList.add('active');
            card.style.display = 'block';
        }
    });
    
    currentTestimonial = index;
}

// Next testimonial
function nextTestimonial() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    if (testimonialCards.length > 0) {
        currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
        showTestimonial(currentTestimonial);
    }
}

// Previous testimonial
function prevTestimonial() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    if (testimonialCards.length > 0) {
        currentTestimonial = currentTestimonial === 0 ? testimonialCards.length - 1 : currentTestimonial - 1;
        showTestimonial(currentTestimonial);
    }
}

// Blog functionality
function initializeBlogFunctionality() {
    const searchInput = document.getElementById('blog-search');
    const filterSelect = document.getElementById('blog-filter');
    
    if (searchInput) {
        searchInput.addEventListener('input', filterBlogPosts);
    }
    
    if (filterSelect) {
        filterSelect.addEventListener('change', filterBlogPosts);
    }
}

// Filter blog posts
function filterBlogPosts() {
    const searchInput = document.getElementById('blog-search');
    const filterSelect = document.getElementById('blog-filter');
    
    if (!searchInput || !filterSelect) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = filterSelect.value;
    const blogCards = document.querySelectorAll('.blog-card');
    
    blogCards.forEach(card => {
        const title = card.querySelector('h3')?.textContent?.toLowerCase() || '';
        const excerpt = card.querySelector('p')?.textContent?.toLowerCase() || '';
        const category = card.getAttribute('data-category') || '';
        
        const matchesSearch = title.includes(searchTerm) || excerpt.includes(searchTerm);
        const matchesCategory = !selectedCategory || category === selectedCategory;
        
        if (matchesSearch && matchesCategory) {
            card.style.display = 'block';
            card.classList.add('fade-in');
        } else {
            card.style.display = 'none';
        }
    });
}

// Map functionality
function initializeMap() {
    try {
        const mapElement = document.getElementById('map');
        if (!mapElement || typeof L === 'undefined') {
            console.log('Map element or Leaflet library not found');
            return;
        }
        
        // Initialize map with Delhi NCR center
        map = L.map('map').setView([28.5355, 77.3910], 10);
        
        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
        
        // Define locations
        const locations = [
            {
                name: "New Delhi",
                lat: 28.6139,
                lng: 77.2090,
                description: "Central Business District - Serving corporate offices and established businesses"
            },
            {
                name: "Gurgaon",
                lat: 28.4595,
                lng: 77.0266,
                description: "IT Hub & Financial Center - Focusing on tech startups and financial services"
            },
            {
                name: "Noida",
                lat: 28.5355,
                lng: 77.3910,
                description: "Tech & Media Hub - Supporting media companies and technology businesses"
            },
            {
                name: "Faridabad",
                lat: 28.4089,
                lng: 77.3178,
                description: "Industrial Center - Helping manufacturing and industrial businesses grow"
            }
        ];
        
        // Add markers for each location
        locations.forEach(location => {
            const marker = L.marker([location.lat, location.lng]).addTo(map);
            marker.bindPopup(`
                <div style="text-align: center; padding: 10px;">
                    <h4 style="color: #2563eb; margin-bottom: 8px;">${location.name}</h4>
                    <p style="margin: 0; font-size: 14px;">${location.description}</p>
                </div>
            `);
        });
        
        // Add service area circle
        const serviceArea = L.circle([28.5355, 77.3910], {
            color: '#2563eb',
            fillColor: '#2563eb',
            fillOpacity: 0.1,
            radius: 50000 // 50km radius
        }).addTo(map);
        
        serviceArea.bindPopup(`
            <div style="text-align: center; padding: 10px;">
                <h4 style="color: #2563eb; margin-bottom: 8px;">Service Area</h4>
                <p style="margin: 0; font-size: 14px;">Delhi NCR & Surrounding Areas</p>
            </div>
        `);
        
        console.log('Map initialized successfully');
    } catch (error) {
        console.error('Error initializing map:', error);
    }
}

// Admin functionality
function initializeAdminFunctionality() {
    const adminAccessBtn = document.getElementById('admin-access');
    const loginModal = document.getElementById('login-modal');
    const loginForm = document.getElementById('login-form');
    const closeLoginBtn = document.getElementById('close-login');
    const adminLogoutBtn = document.getElementById('admin-logout');
    
    if (!adminAccessBtn || !loginModal || !loginForm) return;
    
    // Show admin access button on triple click
    let clickCount = 0;
    document.addEventListener('click', function() {
        clickCount++;
        if (clickCount === 3) {
            adminAccessBtn.classList.remove('hidden');
            setTimeout(() => {
                adminAccessBtn.classList.add('hidden');
                clickCount = 0;
            }, 5000);
        }
        setTimeout(() => {
            if (clickCount < 3) clickCount = 0;
        }, 1000);
    });
    
    // Admin access button click
    adminAccessBtn.addEventListener('click', function() {
        loginModal.classList.remove('hidden');
    });
    
    // Close login modal
    if (closeLoginBtn) {
        closeLoginBtn.addEventListener('click', function() {
            loginModal.classList.add('hidden');
        });
    }
    
    // Handle login form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('login-email')?.value;
        const password = document.getElementById('login-password')?.value;
        
        // Simple authentication check
        if (email === 'ixglobal012345@gmail.com' && password === 'admin123') {
            isAdminLoggedIn = true;
            loginModal.classList.add('hidden');
            showAdminPanel();
            
            // Clear form
            loginForm.reset();
        } else {
            alert('Invalid credentials. Please try again.');
        }
    });
    
    // Admin logout
    if (adminLogoutBtn) {
        adminLogoutBtn.addEventListener('click', function() {
            isAdminLoggedIn = false;
            hideAdminPanel();
        });
    }
    
    // Initialize admin panel content
    initializeAdminPanel();
}

// Show admin panel
function showAdminPanel() {
    const adminPanel = document.getElementById('admin-panel');
    if (adminPanel) {
        adminPanel.classList.remove('hidden');
        populateAdminPanel();
    }
}

// Hide admin panel
function hideAdminPanel() {
    const adminPanel = document.getElementById('admin-panel');
    if (adminPanel) {
        adminPanel.classList.add('hidden');
    }
}

// Initialize admin panel
function initializeAdminPanel() {
    const addBlogBtn = document.getElementById('add-blog');
    const addTestimonialBtn = document.getElementById('add-testimonial');
    
    if (addBlogBtn) {
        addBlogBtn.addEventListener('click', function() {
            const title = prompt('Enter blog post title:');
            const excerpt = prompt('Enter blog post excerpt:');
            const category = prompt('Enter category:');
            
            if (title && excerpt && category) {
                const newPost = {
                    id: blogPosts.length + 1,
                    title: title,
                    excerpt: excerpt,
                    date: new Date().toISOString().split('T')[0],
                    category: category
                };
                
                blogPosts.push(newPost);
                addBlogPostToDOM(newPost);
                populateAdminPanel();
                alert('Blog post added successfully!');
            }
        });
    }
    
    if (addTestimonialBtn) {
        addTestimonialBtn.addEventListener('click', function() {
            const name = prompt('Enter client name:');
            const business = prompt('Enter business name:');
            const text = prompt('Enter testimonial text:');
            
            if (name && business && text) {
                const newTestimonial = {
                    id: testimonials.length + 1,
                    name: name,
                    business: business,
                    rating: 5,
                    text: text
                };
                
                testimonials.push(newTestimonial);
                addTestimonialToDOM(newTestimonial);
                populateAdminPanel();
                alert('Testimonial added successfully!');
            }
        });
    }
}

// Populate admin panel
function populateAdminPanel() {
    const blogList = document.getElementById('blog-list');
    const testimonialList = document.getElementById('testimonial-list');
    
    if (!blogList || !testimonialList) return;
    
    // Clear existing content
    blogList.innerHTML = '';
    testimonialList.innerHTML = '';
    
    // Populate blog posts
    blogPosts.forEach(post => {
        const blogItem = document.createElement('div');
        blogItem.className = 'admin-item';
        blogItem.innerHTML = `
            <div>
                <h4>${post.title}</h4>
                <p>${post.category} - ${post.date}</p>
            </div>
            <button class="btn btn--secondary" onclick="deleteBlogPost(${post.id})">Delete</button>
        `;
        blogList.appendChild(blogItem);
    });
    
    // Populate testimonials
    testimonials.forEach(testimonial => {
        const testimonialItem = document.createElement('div');
        testimonialItem.className = 'admin-item';
        testimonialItem.innerHTML = `
            <div>
                <h4>${testimonial.name}</h4>
                <p>${testimonial.business}</p>
            </div>
            <button class="btn btn--secondary" onclick="deleteTestimonial(${testimonial.id})">Delete</button>
        `;
        testimonialList.appendChild(testimonialItem);
    });
}

// Add blog post to DOM
function addBlogPostToDOM(post) {
    const blogGrid = document.getElementById('blog-grid');
    if (!blogGrid) return;
    
    const blogCard = document.createElement('article');
    blogCard.className = 'blog-card';
    blogCard.setAttribute('data-category', post.category);
    blogCard.innerHTML = `
        <div class="blog-meta">
            <span class="blog-date">${formatDate(post.date)}</span>
            <span class="blog-category">${post.category}</span>
        </div>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <a href="#" class="blog-link">Read More →</a>
    `;
    blogGrid.appendChild(blogCard);
}

// Add testimonial to DOM
function addTestimonialToDOM(testimonial) {
    const testimonialSlider = document.getElementById('testimonial-slider');
    if (!testimonialSlider) return;
    
    const testimonialCard = document.createElement('div');
    testimonialCard.className = 'testimonial-card';
    testimonialCard.innerHTML = `
        <div class="testimonial-rating">⭐⭐⭐⭐⭐</div>
        <p class="testimonial-text">"${testimonial.text}"</p>
        <div class="testimonial-author">
            <h4>${testimonial.name}</h4>
            <p>${testimonial.business}</p>
        </div>
    `;
    testimonialSlider.appendChild(testimonialCard);
}

// Delete blog post
function deleteBlogPost(id) {
    if (confirm('Are you sure you want to delete this blog post?')) {
        blogPosts = blogPosts.filter(post => post.id !== id);
        
        // Remove from DOM
        const blogCards = document.querySelectorAll('.blog-card');
        blogCards.forEach(card => {
            const title = card.querySelector('h3')?.textContent;
            const postToDelete = blogPosts.find(post => post.title === title);
            if (!postToDelete) {
                card.remove();
            }
        });
        
        populateAdminPanel();
        alert('Blog post deleted successfully!');
    }
}

// Delete testimonial
function deleteTestimonial(id) {
    if (confirm('Are you sure you want to delete this testimonial?')) {
        testimonials = testimonials.filter(testimonial => testimonial.id !== id);
        
        // Remove from DOM and rebuild testimonial slider
        const testimonialSlider = document.getElementById('testimonial-slider');
        if (testimonialSlider) {
            testimonialSlider.innerHTML = '';
            
            testimonials.forEach((testimonial, index) => {
                addTestimonialToDOM(testimonial);
            });
            
            // Reset current testimonial
            currentTestimonial = 0;
            if (testimonials.length > 0) {
                showTestimonial(0);
            }
        }
        
        populateAdminPanel();
        alert('Testimonial deleted successfully!');
    }
}

// Utility function to format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
}

// Animation functionality
function initializeAnimations() {
    // Add intersection observer for scroll animations
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);
        
        // Observe all animatable elements
        const animatableElements = document.querySelectorAll('.service-card, .service-detail-card, .blog-card, .stat-item, .contact-method');
        animatableElements.forEach(el => {
            observer.observe(el);
        });
    }
}

// WhatsApp integration helper
function openWhatsApp(message = '') {
    const phoneNumber = '919599863263';
    const encodedMessage = encodeURIComponent(message || 'Hi! I\'m interested in learning more about your business growth services.');
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}

// Instagram integration helper
function openInstagram() {
    const instagramURL = 'https://instagram.com/realjeetsingh';
    window.open(instagramURL, '_blank');
}

// Email integration helper
function openEmail(subject = '', body = '') {
    const email = 'ixglobal012345@gmail.com';
    const mailtoURL = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoURL;
}

// Handle browser back/forward buttons
window.addEventListener('popstate', function() {
    const hash = window.location.hash.substring(1) || 'home';
    showSection(hash);
    
    // Update active nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${hash}`) {
            link.classList.add('active');
        }
    });
});

// Handle initial page load with hash
window.addEventListener('load', function() {
    const hash = window.location.hash.substring(1);
    if (hash && hash !== 'home') {
        showSection(hash);
        
        // Update active nav link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${hash}`) {
                link.classList.add('active');
            }
        });
    }
});

// Performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('Application error:', e.error);
});

// Unhandled promise rejection handling
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    e.preventDefault();
});

// Export functions for global access
window.showSection = showSection;
window.nextTestimonial = nextTestimonial;
window.prevTestimonial = prevTestimonial;
window.deleteBlogPost = deleteBlogPost;
window.deleteTestimonial = deleteTestimonial;
window.openWhatsApp = openWhatsApp;
window.openInstagram = openInstagram;
window.openEmail = openEmail;
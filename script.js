// Modern Portfolio JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Add JS enabled class for progressive enhancement
    document.body.classList.add('js-enabled');
    
    // Initialize navigation
    initializeNavigation();
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
    
    // Initialize scroll animations
    initializeScrollAnimations();
    
    // Initialize contact form (if needed)
    initializeContactFeatures();
});

// Navigation functionality
function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');

    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Enhanced navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
            navbar.style.borderBottom = '1px solid rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
            navbar.style.borderBottom = '1px solid rgba(0, 0, 0, 0.1)';
        }
    });

    // Active nav link highlighting with smooth transitions
    const sections = document.querySelectorAll('section');
    const navLinksArray = Array.from(navLinks);

    function updateActiveNavLink() {
        let current = 'home'; // Default to home
        const scrollPosition = window.pageYOffset + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = sectionId;
            }
        });

        navLinksArray.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href').substring(1);
            if (href === current) {
                link.classList.add('active');
            }
        });
    }

    // Throttle scroll events for better performance
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateActiveNavLink);
            ticking = true;
            setTimeout(() => { ticking = false; }, 10);
        }
    });

    // Set initial active state
    updateActiveNavLink();

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link, .btn[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Scroll animations - improved and flicker-free
function initializeScrollAnimations() {
    // Improved animation options
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate counters in about section - only once
                if (entry.target.classList.contains('about') && !entry.target.dataset.animated) {
                    entry.target.dataset.animated = 'true';
                    setTimeout(() => animateCounters(), 300);
                }
                
                // Animate skill items with stagger
                if (entry.target.classList.contains('skills') && !entry.target.dataset.animated) {
                    entry.target.dataset.animated = 'true';
                    setTimeout(() => animateSkillItems(), 200);
                }
                
                // Animate project cards with stagger
                if (entry.target.classList.contains('projects') && !entry.target.dataset.animated) {
                    entry.target.dataset.animated = 'true';
                    setTimeout(() => animateProjectCards(), 300);
                }
            }
        });
    }, observerOptions);

    // Observe main sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('animate-on-scroll');
        observer.observe(section);
    });
}

// Animate number counters - improved with one-time execution
function animateCounters() {
    const counters = document.querySelectorAll('.highlight-number');
    
    counters.forEach(counter => {
        if (counter.dataset.animated) return; // Prevent re-animation
        
        counter.dataset.animated = 'true';
        const target = parseInt(counter.innerText);
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.innerText = Math.ceil(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target + '+';
            }
        };
        
        updateCounter();
    });
}

// Animate skill items with stagger effect
function animateSkillItems() {
    const skillCategories = document.querySelectorAll('.skill-category');
    
    skillCategories.forEach((category, categoryIndex) => {
        setTimeout(() => {
            category.style.opacity = '1';
            category.style.transform = 'translateY(0)';
            
            // Animate skill list items
            const skillItems = category.querySelectorAll('.skill-list li');
            skillItems.forEach((item, itemIndex) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, itemIndex * 50);
            });
        }, categoryIndex * 150);
    });
}

// Animate project cards with stagger effect
function animateProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 150);
    });
}

// Contact features
function initializeContactFeatures() {
    // Copy email to clipboard functionality
    const emailElements = document.querySelectorAll('[href="mailto:can_kaygisiz@yahoo.com"], .contact-details p');
    
    emailElements.forEach(element => {
        if (element.textContent.includes('can_kaygisiz@yahoo.com')) {
            element.style.cursor = 'pointer';
            element.title = 'Click to copy email address';
            
            element.addEventListener('click', function(e) {
                if (!element.href) { // Only prevent default if it's not a mailto link
                    e.preventDefault();
                }
                
                navigator.clipboard.writeText('can_kaygisiz@yahoo.com').then(() => {
                    showNotification('Email address copied to clipboard! 📧');
                }).catch(() => {
                    // Fallback for older browsers
                    const textArea = document.createElement('textarea');
                    textArea.value = 'can_kaygisiz@yahoo.com';
                    document.body.appendChild(textArea);
                    textArea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textArea);
                    showNotification('Email address copied to clipboard! 📧');
                });
            });
        }
    });

    // Social links analytics (optional)
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function() {
            const platform = this.textContent.trim();
            console.log(`Clicked on ${platform} social link`);
            // Add analytics tracking here if needed
        });
    });
}

// Utility function to show notifications
function showNotification(message, duration = 3000) {
    // Remove any existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: #007bff;
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        font-weight: 500;
        box-shadow: 0 10px 30px rgba(0, 123, 255, 0.3);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-size: 14px;
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, duration);
}

// Performance optimization: Lazy load images if any are added
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('loading');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize theme switching (if you want to add dark mode later)
function initializeThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '🌙';
    themeToggle.className = 'theme-toggle';
    themeToggle.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: #007bff;
        color: white;
        font-size: 20px;
        cursor: pointer;
        box-shadow: 0 5px 15px rgba(0, 123, 255, 0.3);
        transition: all 0.3s ease;
        z-index: 1000;
    `;

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        this.innerHTML = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
    });

    // Uncomment if you want to add the theme toggle button
    // document.body.appendChild(themeToggle);
}

// Easter egg: Konami code
function initializeEasterEgg() {
    const konamiCode = [
        'KeyH', 'KeyE', 'KeyS', 'KeyO',
        'KeyY', 'KeyA', 'KeyM'
    ];
    let userInput = [];

    document.addEventListener('keydown', function(e) {
        userInput.push(e.code);
        
        if (userInput.length > konamiCode.length) {
            userInput.shift();
        }
        
        if (JSON.stringify(userInput) === JSON.stringify(konamiCode)) {
            showNotification('🎉 Cheat code activated, cash granted!', 5000);
            // Add some fun effect here
            document.body.style.animation = 'rainbow 2s ease-in-out';
            setTimeout(() => {
                document.body.style.animation = '';
            }, 2000);
        }
    });
}

// Add rainbow animation for easter egg
const rainbowCSS = `
@keyframes rainbow {
    0% { filter: hue-rotate(0deg); }
    25% { filter: hue-rotate(90deg); }
    50% { filter: hue-rotate(180deg); }
    75% { filter: hue-rotate(270deg); }
    100% { filter: hue-rotate(360deg); }
}
`;

const style = document.createElement('style');
style.textContent = rainbowCSS;
document.head.appendChild(style);

// Initialize easter egg
initializeEasterEgg();

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
});

// Performance monitoring
window.addEventListener('load', function() {
    const loadTime = performance.now();
    console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
});

// Add CSS for initial hidden states of animated elements
const animationCSS = `
.skill-list li {
    opacity: 0;
    transform: translateX(-20px);
    transition: all 0.5s ease;
}

.project-card {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease;
}

.fade-in .skill-list li,
.fade-in .project-card {
    opacity: 1;
    transform: translate(0);
}
`;

const animationStyle = document.createElement('style');
animationStyle.textContent = animationCSS;
document.head.appendChild(animationStyle);

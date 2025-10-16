// Modern Portfolio JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Add JS enabled class for progressive enhancement
    document.body.classList.add('js-enabled');
    
    // Hide loading screen
    setTimeout(function() {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
            setTimeout(() => loadingScreen.remove(), 500);
        }
    }, 1000);
    
    // Initialize navigation
    initializeNavigation();
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
    
    // Initialize scroll animations
    initializeScrollAnimations();
    
    // Initialize contact form (if needed)
    initializeContactFeatures();
    
    // Initialize scroll to top button
    initializeScrollToTop();
    
    // Initialize CV download
    initializeCVDownload();
});

// Navigation functionality
function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navBackdrop = document.getElementById('nav-backdrop');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');

    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const isActive = navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            if (navBackdrop) navBackdrop.classList.toggle('active');
            
            // Update ARIA attributes
            navToggle.setAttribute('aria-expanded', isActive);
            
            // Prevent body scroll when menu is open
            if (isActive) {
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
                if (navBackdrop) navBackdrop.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                if (navBackdrop) navBackdrop.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking backdrop
        if (navBackdrop) {
            navBackdrop.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navBackdrop.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        }

        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                if (navBackdrop) navBackdrop.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
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
            if (navBackdrop) navBackdrop.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
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
    // Contact form validation and submission
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Clear previous errors
            clearFormErrors();
            
            // Validate form
            if (!validateForm()) {
                return;
            }
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value.trim(),
                email: document.getElementById('email').value.trim(),
                subject: document.getElementById('subject').value.trim(),
                message: document.getElementById('message').value.trim()
            };
            
            // Show loading state
            const submitBtn = contactForm.querySelector('.submit-btn');
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;
            
            try {
                // Simulate form submission (replace with actual endpoint)
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                // Show success message
                showNotification('Message sent successfully! I\'ll get back to you soon. ✉️', 5000);
                
                // Reset form
                contactForm.reset();
            } catch (error) {
                showNotification('Failed to send message. Please try again or email me directly.', 5000);
            } finally {
                // Remove loading state
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
            }
        });
    }
    
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

// Form validation functions
function validateForm() {
    let isValid = true;
    
    // Validate name
    const name = document.getElementById('name').value.trim();
    if (!name) {
        showFieldError('name', 'Name is required');
        isValid = false;
    } else if (name.length < 2) {
        showFieldError('name', 'Name must be at least 2 characters');
        isValid = false;
    }
    
    // Validate email
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        showFieldError('email', 'Email is required');
        isValid = false;
    } else if (!emailRegex.test(email)) {
        showFieldError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate subject
    const subject = document.getElementById('subject').value.trim();
    if (!subject) {
        showFieldError('subject', 'Subject is required');
        isValid = false;
    } else if (subject.length < 3) {
        showFieldError('subject', 'Subject must be at least 3 characters');
        isValid = false;
    }
    
    // Validate message
    const message = document.getElementById('message').value.trim();
    if (!message) {
        showFieldError('message', 'Message is required');
        isValid = false;
    } else if (message.length < 10) {
        showFieldError('message', 'Message must be at least 10 characters');
        isValid = false;
    }
    
    return isValid;
}

function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(`${fieldId}-error`);
    const formGroup = field.closest('.form-group');
    
    if (errorElement) {
        errorElement.textContent = message;
    }
    if (formGroup) {
        formGroup.classList.add('error');
    }
}

function clearFormErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.textContent = '');
    
    const errorGroups = document.querySelectorAll('.form-group.error');
    errorGroups.forEach(group => group.classList.remove('error'));
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

// Dark mode toggle logic
(function() {
  const toggle = document.getElementById('dark-toggle');
  const body = document.body;
  const storageKey = 'darkMode';

  function setDarkMode(on) {
    if (on) {
      body.classList.add('dark-mode');
      localStorage.setItem(storageKey, '1');
      if (toggle) toggle.setAttribute('aria-pressed', 'true');
    } else {
      body.classList.remove('dark-mode');
      localStorage.setItem(storageKey, '0');
      if (toggle) toggle.setAttribute('aria-pressed', 'false');
    }
  }

  // Initial state from localStorage or system preference
  const userPref = localStorage.getItem(storageKey);
  if (userPref === '1' || (userPref === null && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    setDarkMode(true);
  }

  if (toggle) {
    toggle.addEventListener('click', function() {
      setDarkMode(!body.classList.contains('dark-mode'));
    });
  }
})();

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

// Scroll to top button functionality
function initializeScrollToTop() {
    const scrollButton = document.getElementById('scroll-to-top');
    
    if (!scrollButton) return;
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollButton.classList.add('visible');
        } else {
            scrollButton.classList.remove('visible');
        }
    });
    
    // Scroll to top on click
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// CV Download functionality
function initializeCVDownload() {
    const downloadBtn = document.getElementById('download-cv');
    
    if (!downloadBtn) return;
    
    downloadBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Show notification that CV generation is in progress
        showNotification('Preparing your CV download... 📄', 2000);
        
        // Simulate CV download (replace with actual PDF generation/download)
        setTimeout(() => {
            showNotification('CV download ready! (Add your CV file to enable actual download)', 4000);
            // When you have a CV file, uncomment and update the following:
            // window.location.href = 'path/to/your/cv.pdf';
        }, 1000);
    });
}

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

/**
 * Murtons Projects - Main JavaScript
 * Handles mobile menu, form validation, smooth scrolling, and interactions
 */

(function() {
    'use strict';

    // ========================================
    // MOBILE MENU TOGGLE
    // ========================================
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            // Toggle active class on navigation
            mainNav.classList.toggle('active');

            // Update aria-expanded attribute for accessibility
            const isExpanded = mainNav.classList.contains('active');
            mobileMenuToggle.setAttribute('aria-expanded', isExpanded);

            // Change icon
            mobileMenuToggle.textContent = isExpanded ? '✕' : '☰';
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = mainNav.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);

            if (!isClickInsideNav && !isClickOnToggle && mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                mobileMenuToggle.textContent = '☰';
            }
        });

        // Close mobile menu when window is resized to desktop width
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                mobileMenuToggle.textContent = '☰';
            }
        });
    }

    // ========================================
    // SMOOTH SCROLLING FOR ANCHOR LINKS
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Only apply smooth scrolling to anchor links (not just "#")
            if (href !== '#' && href !== '#services') {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const headerOffset = 80; // Account for sticky header
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ========================================
    // FORM VALIDATION
    // ========================================
    const forms = document.querySelectorAll('.contact-form, .quote-form');

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            let isValid = true;
            const formData = new FormData(form);

            // Basic validation
            const requiredFields = form.querySelectorAll('[required]');
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                    showError(field, 'This field is required');
                } else {
                    field.classList.remove('error');
                    removeError(field);
                }
            });

            // Email validation
            const emailFields = form.querySelectorAll('input[type="email"]');
            emailFields.forEach(field => {
                if (field.value && !isValidEmail(field.value)) {
                    isValid = false;
                    field.classList.add('error');
                    showError(field, 'Please enter a valid email address');
                }
            });

            // Phone validation (South African format)
            const phoneFields = form.querySelectorAll('input[type="tel"]');
            phoneFields.forEach(field => {
                if (field.value && !isValidPhone(field.value)) {
                    isValid = false;
                    field.classList.add('error');
                    showError(field, 'Please enter a valid phone number');
                }
            });

            // If validation passes, submit form
            if (isValid) {
                // Here you would typically send the form data to your server
                // For now, we'll just show a success message
                showSuccessMessage(form);
                form.reset();
            }
        });

        // Remove error on input
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                this.classList.remove('error');
                removeError(this);
            });
        });
    });

    // Helper function: Validate email
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Helper function: Validate South African phone number
    function isValidPhone(phone) {
        // Remove spaces, dashes, parentheses
        const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
        // Check for SA format: starts with 0 or +27, followed by 9 digits
        const re = /^(\+27|0)[0-9]{9}$/;
        return re.test(cleanPhone);
    }

    // Helper function: Show error message
    function showError(field, message) {
        removeError(field); // Remove any existing error first

        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.style.color = '#E31837';
        errorDiv.style.fontSize = '14px';
        errorDiv.style.marginTop = '4px';

        field.parentNode.appendChild(errorDiv);
    }

    // Helper function: Remove error message
    function removeError(field) {
        const errorMessage = field.parentNode.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    }

    // Helper function: Show success message
    function showSuccessMessage(form) {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.innerHTML = `
            <p style="background-color: #4CAF50; color: white; padding: 15px; border-radius: 8px; text-align: center;">
                ✓ Thank you! Your message has been sent successfully. We'll contact you shortly at the provided details.
            </p>
        `;

        form.parentNode.insertBefore(successDiv, form);

        // Remove success message after 5 seconds
        setTimeout(() => {
            successDiv.remove();
        }, 5000);

        // Scroll to success message
        successDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // ========================================
    // LAZY LOADING IMAGES
    // ========================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;

                    // Load the image
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }

                    // Load srcset if present
                    if (img.dataset.srcset) {
                        img.srcset = img.dataset.srcset;
                        img.removeAttribute('data-srcset');
                    }

                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        // Observe all images with data-src attribute
        const lazyImages = document.querySelectorAll('img[data-src], img[loading="lazy"]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // ========================================
    // STICKY HEADER SHADOW ON SCROLL
    // ========================================
    const header = document.querySelector('.site-header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Add shadow when scrolled
        if (scrollTop > 10) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }

        lastScrollTop = scrollTop;
    });

    // ========================================
    // DROPDOWN MENU ACCESSIBILITY & MOBILE HANDLING
    // ========================================
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('a');
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');

        if (dropdownLink && dropdownMenu) {
            // Handle click/tap to toggle dropdown (especially for mobile)
            dropdownLink.addEventListener('click', function(e) {
                // On mobile or when screen is narrow, toggle the dropdown
                if (window.innerWidth <= 768) {
                    e.preventDefault();

                    // Close all other dropdowns first
                    dropdowns.forEach(otherDropdown => {
                        if (otherDropdown !== dropdown) {
                            otherDropdown.classList.remove('open');
                            const otherLink = otherDropdown.querySelector('a');
                            if (otherLink) {
                                otherLink.setAttribute('aria-expanded', 'false');
                            }
                        }
                    });

                    // Toggle this dropdown
                    dropdown.classList.toggle('open');
                    const isOpen = dropdown.classList.contains('open');
                    dropdownLink.setAttribute('aria-expanded', isOpen);
                }
            });

            // Handle keyboard navigation
            dropdownLink.addEventListener('keydown', function(e) {
                // Open dropdown on Enter or Space
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    dropdown.classList.toggle('open');
                    const isOpen = dropdown.classList.contains('open');
                    dropdownLink.setAttribute('aria-expanded', isOpen);
                }

                // Close dropdown on Escape
                if (e.key === 'Escape') {
                    dropdown.classList.remove('open');
                    dropdownLink.setAttribute('aria-expanded', 'false');
                }
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', function(e) {
                if (!dropdown.contains(e.target)) {
                    dropdown.classList.remove('open');
                    dropdownLink.setAttribute('aria-expanded', 'false');
                }
            });
        }
    });

    // Close all dropdowns when mobile menu closes
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            // When closing the mobile menu, also close all dropdowns
            if (!mainNav.classList.contains('active')) {
                dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('open');
                    const link = dropdown.querySelector('a');
                    if (link) {
                        link.setAttribute('aria-expanded', 'false');
                    }
                });
            }
        });
    }

    // ========================================
    // CLICK-TO-CALL TRACKING (Optional)
    // ========================================
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            // You can add analytics tracking here
            console.log('Phone link clicked:', this.href);

            // Example: Google Analytics event tracking
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click_to_call', {
                    'event_category': 'Contact',
                    'event_label': 'Phone',
                    'value': this.href
                });
            }
        });
    });

    // ========================================
    // CTA BUTTON TRACKING (Optional)
    // ========================================
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // You can add analytics tracking here
            const buttonText = this.textContent.trim();
            const buttonHref = this.href || 'N/A';

            console.log('CTA Button clicked:', buttonText, buttonHref);

            // Example: Google Analytics event tracking
            if (typeof gtag !== 'undefined') {
                gtag('event', 'cta_click', {
                    'event_category': 'Engagement',
                    'event_label': buttonText,
                    'value': buttonHref
                });
            }
        });
    });

    // ========================================
    // FAQ ACCORDION (If implementing collapsible FAQs)
    // ========================================
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('h3');

        if (question) {
            // Make FAQ items collapsible on mobile
            if (window.innerWidth <= 768) {
                question.style.cursor = 'pointer';

                question.addEventListener('click', function() {
                    const answer = item.querySelector('p');
                    if (answer) {
                        item.classList.toggle('open');

                        // Toggle answer visibility
                        if (item.classList.contains('open')) {
                            answer.style.display = 'block';
                        } else {
                            answer.style.display = 'none';
                        }
                    }
                });
            }
        }
    });

    // ========================================
    // SERVICE CARD HOVER EFFECT ENHANCEMENT
    // ========================================
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // ========================================
    // PRINT FRIENDLY (Remove fixed elements before print)
    // ========================================
    window.addEventListener('beforeprint', function() {
        const mobileCallButton = document.querySelector('.mobile-call-button');
        if (mobileCallButton) {
            mobileCallButton.style.display = 'none';
        }
    });

    window.addEventListener('afterprint', function() {
        const mobileCallButton = document.querySelector('.mobile-call-button');
        if (mobileCallButton) {
            mobileCallButton.style.display = 'block';
        }
    });

    // ========================================
    // INITIALIZATION MESSAGE
    // ========================================
    console.log('Murtons Projects - Website Initialized Successfully');

    // Preload critical images (optional)
    const criticalImages = [
        '/images/hero/roofing-cape-town-hero.jpg'
    ];

    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });

})();

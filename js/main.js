/**
 * Redwood Shores Coalition - Main JavaScript
 */

// Google Sheets CSV URL for News & Updates
const NEWS_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRhSn3ZxfOXYESKFPPQ06owYfvt1xZ0WUPB9WjNJoBNwcXSSZlmixnjE8Mywo97FUXGpOAmnG_gxTOP/pub?output=csv';

document.addEventListener('DOMContentLoaded', function() {
    // Load news from Google Sheets
    loadNewsFromSheet();
    // ========================================
    // Mobile Navigation Toggle
    // ========================================
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking a nav link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target) && navMenu.classList.contains('active')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // ========================================
    // Smooth Scroll for Anchor Links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ========================================
    // Header Scroll Effect
    // ========================================
    const header = document.getElementById('header');
    let lastScroll = 0;

    if (header) {
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;

            // Add shadow on scroll
            if (currentScroll > 50) {
                header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
            } else {
                header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
            }

            lastScroll = currentScroll;
        }, { passive: true });
    }

    // ========================================
    // Active Navigation Highlight
    // ========================================
    const sections = document.querySelectorAll('section[id]');

    function highlightNavigation() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation, { passive: true });

    // ========================================
    // Form Handling (Basic)
    // ========================================

    // Email Signup Form
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;

            // Placeholder - replace with actual form handling
            alert(`Thank you for subscribing! We'll send updates to: ${email}`);
            this.reset();
        });
    }

    // Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const name = formData.get('name');

            // Placeholder - replace with actual form handling
            alert(`Thank you for your message, ${name}! We'll get back to you soon.`);
            this.reset();
        });
    }

    // ========================================
    // Scroll Reveal Animation (Optional)
    // ========================================
    const revealElements = document.querySelectorAll('.concern-card, .action-card, .update-card, .stat');

    function reveal() {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    // Initialize reveal elements
    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    window.addEventListener('scroll', reveal, { passive: true });
    reveal(); // Run once on load

    // ========================================
    // Accessibility: Escape key closes mobile menu
    // ========================================
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
            navToggle.focus();
        }
    });
});

// ========================================
// Load News from Google Sheets
// ========================================
async function loadNewsFromSheet() {
    const updatesList = document.querySelector('.updates-list');
    if (!updatesList) return;

    try {
        const response = await fetch(NEWS_SHEET_URL);
        const csvText = await response.text();
        const newsItems = parseCSV(csvText);

        if (newsItems.length > 0) {
            updatesList.innerHTML = newsItems.map(item => `
                <article class="update-card">
                    <span class="update-date">${formatDate(item.date)}</span>
                    <h3>${escapeHtml(item.title)}</h3>
                    <p>${escapeHtml(item.content)}</p>
                </article>
            `).join('');

            // Re-apply reveal animation to new cards
            const newCards = updatesList.querySelectorAll('.update-card');
            newCards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            });
            setTimeout(() => {
                newCards.forEach(card => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                });
            }, 100);
        }
    } catch (error) {
        console.error('Failed to load news from Google Sheets:', error);
        // Keep existing static content as fallback
    }
}

function parseCSV(csvText) {
    const lines = csvText.split('\n');
    if (lines.length < 2) return [];

    const items = [];
    let i = 1; // Skip header row

    while (i < lines.length) {
        let line = lines[i];

        // Handle multi-line content (fields with newlines inside quotes)
        while (line && (line.match(/"/g) || []).length % 2 !== 0 && i < lines.length - 1) {
            i++;
            line += '\n' + lines[i];
        }

        if (line.trim()) {
            const parsed = parseCSVLine(line);
            if (parsed.length >= 3) {
                items.push({
                    date: parsed[0],
                    title: parsed[1],
                    content: parsed[2]
                });
            }
        }
        i++;
    }

    return items;
}

function parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
        const char = line[i];

        if (char === '"') {
            if (inQuotes && line[i + 1] === '"') {
                current += '"';
                i++;
            } else {
                inQuotes = !inQuotes;
            }
        } else if (char === ',' && !inQuotes) {
            result.push(current.trim());
            current = '';
        } else {
            current += char;
        }
    }
    result.push(current.trim());

    return result;
}

function formatDate(dateStr) {
    try {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    } catch {
        return dateStr;
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

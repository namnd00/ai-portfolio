// Animation handler for scroll effects
document.addEventListener('DOMContentLoaded', () => {
    // Elements to animate on scroll
    const animatedElements = document.querySelectorAll('.animate');
    
    // Add animate classes to various elements
    addAnimationClasses();
    
    // Initialize intersection observer
    initIntersectionObserver();
    
    // Initial animation for elements already in view
    animateElementsInView();
    
    // Animate typed text in hero section
    initTypedText();
    
    // Parallax effect for shapes
    initParallaxEffect();
    
    // Initialize counters for stats section
    initCounters();
    
    // Initialize custom cursor
    initCustomCursor();
});

// Add animation classes to various elements
function addAnimationClasses() {
    // Add animation classes to section titles
    document.querySelectorAll('.section-title').forEach(el => {
        el.classList.add('animate');
    });
    
    // Add animation to timeline items
    document.querySelectorAll('.timeline-item').forEach((el, index) => {
        el.classList.add('animate');
        if (index % 2 === 0) {
            el.classList.add('fade-in-left');
        } else {
            el.classList.add('fade-in-right');
        }
    });
    
    // Add animation to project cards
    document.querySelectorAll('.project-card').forEach((el, index) => {
        el.classList.add('animate', 'scale-in');
        el.style.animationDelay = `${index * 150}ms`;
    });
    
    // Add animation to skill items
    document.querySelectorAll('.skill-item').forEach((el, index) => {
        el.classList.add('animate', 'fade-in');
        el.style.animationDelay = `${index * 100}ms`;
    });
    
    // Add animation to award cards
    document.querySelectorAll('.award-card').forEach((el, index) => {
        el.classList.add('animate', 'fade-in-left');
        el.style.animationDelay = `${index * 200}ms`;
    });
    
    // Add bounce animation to some elements
    document.querySelectorAll('.btn').forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.classList.add('pulse');
        });
        el.addEventListener('mouseleave', () => {
            el.classList.remove('pulse');
        });
    });
}

// Initialize intersection observer for scroll animations
function initIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    document.querySelectorAll('.animate').forEach(el => {
        observer.observe(el);
    });
}

// Animate elements that are already in view on page load
function animateElementsInView() {
    const windowHeight = window.innerHeight;
    
    document.querySelectorAll('.animate').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < windowHeight) {
            el.classList.add('active');
        }
    });
}

// Simulate typed text effect for hero section
function initTypedText() {
    const heroSubtitle = document.querySelector('.hero p');
    if (!heroSubtitle) return;
    
    const text = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    heroSubtitle.style.opacity = '1';
    
    let i = 0;
    const typeInterval = setInterval(() => {
        if (i < text.length) {
            heroSubtitle.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typeInterval);
        }
    }, 50);
}

// Parallax effect for shapes and background elements
function initParallaxEffect() {
    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        
        // Calculate movement based on mouse position
        const moveX = (mouseX - windowWidth / 2) / 50;
        const moveY = (mouseY - windowHeight / 2) / 50;
        
        // Apply parallax to shapes
        document.querySelectorAll('.shape-circle').forEach(shape => {
            shape.style.transform = `translate(${moveX}px, ${moveY}px) ${shape.style.transform}`;
        });
        
        document.querySelectorAll('.shape-rectangle').forEach(shape => {
            shape.style.transform = `translate(${-moveX}px, ${-moveY}px) ${shape.style.transform}`;
        });
    });
}

// Add counters to number statistics
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // ms
        const steps = 60;
        const stepTime = duration / steps;
        const stepValue = target / steps;
        let current = 0;
        
        const updateCounter = () => {
            current += stepValue;
            if (current > target) current = target;
            counter.textContent = Math.round(current);
            
            if (current < target) {
                setTimeout(updateCounter, stepTime);
            }
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(counter);
    });
}

// Initialize on scroll animations
window.addEventListener('scroll', () => {
    animateElementsInView();
});

// Handle resize events
window.addEventListener('resize', () => {
    animateElementsInView();
});

// Custom cursor animation
function initCustomCursor() {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    if (!cursorDot || !cursorOutline) return;
    
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        cursorDot.style.display = 'none';
        cursorOutline.style.display = 'none';
        return;
    }
    
    window.addEventListener('mousemove', (e) => {
        // Position the dot and outline at the cursor position
        cursorDot.style.top = `${e.clientY}px`;
        cursorDot.style.left = `${e.clientX}px`;
        
        // Add slight delay to the outline for a trailing effect
        setTimeout(() => {
            cursorOutline.style.top = `${e.clientY}px`;
            cursorOutline.style.left = `${e.clientX}px`;
        }, 80);
    });
    
    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-item, .timeline-item');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorDot.style.transform = 'translate(-50%, -50%) scale(2)';
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorOutline.style.backgroundColor = 'rgba(26, 188, 156, 0.1)';
            cursorOutline.style.borderColor = 'transparent';
        });
        
        el.addEventListener('mouseleave', () => {
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorOutline.style.backgroundColor = 'transparent';
            cursorOutline.style.borderColor = 'var(--secondary-color)';
        });
    });
    
    // Cursor disappears when leaving the window
    document.addEventListener('mouseleave', () => {
        cursorDot.style.opacity = '0';
        cursorOutline.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', () => {
        cursorDot.style.opacity = '1';
        cursorOutline.style.opacity = '1';
    });
} 
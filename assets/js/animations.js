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
    
    // Initialize AI animation
    initAIAnimation();
    
    // Initialize scroll progress indicator
    initScrollProgressIndicator();
    
    // Initialize floating navigation
    initFloatingNav();
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
    
    // Add animations to process steps
    document.querySelectorAll('.process-step').forEach((el, index) => {
        el.classList.add('animate', 'fade-in');
        const delay = el.getAttribute('data-delay') || index * 150;
        el.style.animationDelay = `${delay}ms`;
    });
    
    // Simplified button hover effect
    document.querySelectorAll('.btn').forEach(el => {
        el.addEventListener('mouseenter', () => {
            // Simple shadow effect, no animations that could affect text
            el.style.boxShadow = '0 5px 15px rgba(26, 188, 156, 0.4)';
        });
        el.addEventListener('mouseleave', () => {
            // Reset shadow
            el.style.boxShadow = '';
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

// Add special effects to AI animation
function initAIAnimation() {
    const aiAnimation = document.querySelector('.ai-animation');
    if (!aiAnimation) return;
    
    // Add mouse interaction to AI animation
    aiAnimation.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = aiAnimation.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        
        // Get all neurons and move them slightly based on cursor position
        const neurons = document.querySelectorAll('.neuron');
        neurons.forEach(neuron => {
            const randomFactor = Math.random() * 10;
            neuron.style.transform = `translate(${x * randomFactor}px, ${y * randomFactor}px)`;
        });
        
        // Rotate connections slightly based on cursor position
        const connections = document.querySelectorAll('.connection');
        connections.forEach(connection => {
            const currentRotation = connection.style.transform.match(/rotate\(([^)]+)\)/);
            const baseRotation = currentRotation ? parseFloat(currentRotation[1]) : 0;
            const newRotation = baseRotation + x * 10;
            
            // Update the rotation part of the transform
            connection.style.transform = connection.style.transform.replace(
                /rotate\([^)]+\)/, 
                `rotate(${newRotation}deg)`
            );
        });
        
        // Move the AI text with parallax effect
        const aiText = document.querySelector('.ai-text');
        if (aiText) {
            aiText.style.transform = `translate(${x * -20}px, ${y * -20}px)`;
        }
    });
    
    // Create new connections periodically
    setInterval(() => {
        const container = document.querySelector('.brain-container');
        if (!container) return;
        
        // Create a new pulse
        const pulse = document.createElement('div');
        pulse.className = 'pulse';
        
        // Random position
        const top = 20 + Math.random() * 60; // Between 20% and 80%
        const left = 20 + Math.random() * 30; // Between 20% and 50%
        
        pulse.style.top = `${top}%`;
        pulse.style.left = `${left}%`;
        
        // Random animation duration between 3s and 5s
        const duration = 3 + Math.random() * 2;
        pulse.style.animation = `movePulse ${duration}s infinite linear, pulseFade ${duration}s infinite`;
        
        container.appendChild(pulse);
        
        // Remove after animation cycle to prevent too many elements
        setTimeout(() => {
            pulse.remove();
        }, duration * 1000);
    }, 3000); // Create new pulse every 3 seconds
}

// Initialize scroll progress indicator
function initScrollProgressIndicator() {
    const progressBar = document.querySelector('.scroll-progress-bar');
    
    // Update progress bar width based on scroll position
    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        
        progressBar.style.width = scrollPercentage + '%';
    });
}

// Initialize floating navigation
function initFloatingNav() {
    const floatingNav = document.querySelector('.floating-nav');
    const navLinks = document.querySelectorAll('.floating-nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    // Show floating nav after scrolling past hero section
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const heroHeight = document.querySelector('.hero').offsetHeight - 100;
        
        if (scrollPosition > heroHeight) {
            floatingNav.classList.add('visible');
        } else {
            floatingNav.classList.remove('visible');
        }
        
        // Highlight active section in floating nav
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Smooth scrolling for floating nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
} 
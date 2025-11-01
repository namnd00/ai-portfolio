// Navigation toggle for mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

// Close mobile menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});

// Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            window.scrollTo({
                top: targetElement.offsetTop - headerHeight,
                behavior: 'smooth'
            });
        }
    });
});

// Project filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active class
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            card.classList.remove('fade-in');
            
            setTimeout(() => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.classList.add('fade-in');
                    }, 10);
                } else {
                    const categories = card.getAttribute('data-categories').split(' ');
                    if (categories.includes(filterValue)) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.classList.add('fade-in');
                        }, 10);
                    } else {
                        card.style.display = 'none';
                    }
                }
            }, 300);
        });
    });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Here you would normally send the form data to a server
        // For this example, we'll just show a success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.section-title, .timeline-item, .project-card, .skills-category, .award-card, .social-link');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.classList.add('fade-in');
        }
    });
};

// Initialize animations
window.addEventListener('load', () => {
    // Add initial animations for elements already in view
    animateOnScroll();
    
    // Initialize project cards with fade-in
    projectCards.forEach(card => {
        card.classList.add('fade-in');
    });
});

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);

// Add geometric shapes dynamically (optional)
const addShapes = () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        // Check if section already has shapes
        const existingShapes = section.querySelectorAll('.shape');
        if (existingShapes.length > 0) return;
        
        // Create circle shape
        const circle = document.createElement('div');
        circle.classList.add('shape', 'shape-circle');
        
        // Create rectangle shape
        const rectangle = document.createElement('div');
        rectangle.classList.add('shape', 'shape-rectangle');
        
        // Add shapes to section
        section.appendChild(circle);
        section.appendChild(rectangle);
        
        // Position shapes randomly within constraints
        const randomPosition = () => {
            circle.style.top = `${Math.random() * 80 - 40}%`;
            circle.style.right = `${Math.random() * 50 - 25}%`;
            circle.style.transform = `scale(${0.5 + Math.random() * 0.5})`;
            
            rectangle.style.bottom = `${Math.random() * 80 - 40}%`;
            rectangle.style.left = `${Math.random() * 50 - 25}%`;
            rectangle.style.transform = `rotate(${Math.random() * 60 - 30}deg) scale(${0.5 + Math.random() * 0.5})`;
        };
        
        randomPosition();
    });
}; 
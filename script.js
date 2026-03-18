// ===== DARK MODE TOGGLE - FIXED VERSION =====
document.addEventListener('DOMContentLoaded', function() {
  const themeBtn = document.getElementById('themeBtn');
  const htmlElement = document.documentElement;

  // Check for saved theme or default to light mode
  const getCurrentTheme = () => {
    return localStorage.getItem('theme') || 'light';
  };

  // Set theme on page load
  const setTheme = (theme) => {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update button icon
    if (theme === 'dark') {
      themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
      themeBtn.setAttribute('title', 'Switch to light mode');
    } else {
      themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
      themeBtn.setAttribute('title', 'Switch to dark mode');
    }
  };

  // Initialize theme immediately
  const savedTheme = getCurrentTheme();
  setTheme(savedTheme);

  // Toggle theme on button click
  themeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });
});

// ===== SMOOTH SCROLL ENHANCEMENT =====
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

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

// ===== SCROLL INDICATOR INTERACTION =====
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
  scrollIndicator.addEventListener('click', () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  });

  // Hide scroll indicator on scroll
  window.addEventListener('scroll', () => {
    if (scrollIndicator) {
      if (window.scrollY > 100) {
        scrollIndicator.style.opacity = '0';
        scrollIndicator.style.pointerEvents = 'none';
      } else {
        scrollIndicator.style.opacity = '1';
        scrollIndicator.style.pointerEvents = 'auto';
      }
    }
  }, { passive: true });
}

// ===== PROJECT CARD INTERACTIONS =====
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.boxShadow = 'var(--shadow-lg)';
  });

  card.addEventListener('mouseleave', function() {
    this.style.boxShadow = 'var(--shadow-sm)';
  });

  card.style.cursor = 'pointer';
  card.addEventListener('click', function(e) {
    console.log('Clicked project:', this.querySelector('h3').textContent);
  });
});

// ===== SKILL BADGE INTERACTIONS =====
document.querySelectorAll('.skill-badge').forEach(badge => {
  badge.addEventListener('click', function(e) {
    e.preventDefault();
    const skill = this.textContent;
    
    // Visual feedback
    this.style.animation = 'none';
    setTimeout(() => {
      this.style.animation = '';
    }, 10);
  });
});

// ===== SCROLL EFFECTS =====
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  lastScrollTop = scrollTop;
}, { passive: true });

// ===== CONTACT INTERACTIONS =====
document.querySelectorAll('.contact-item').forEach(link => {
  link.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      this.click();
    }
  });
});

// ===== IMAGE LOADING =====
const profilePic = document.querySelector('.profile-pic');
if (profilePic) {
  profilePic.addEventListener('load', function() {
    this.style.opacity = '1';
  });
  
  profilePic.addEventListener('error', function() {
    console.warn('Profile image failed to load.');
    this.style.opacity = '0.7';
  });
}

// ===== RIPPLE EFFECT ON BUTTONS =====
function createRipple(event) {
  const button = event.currentTarget;
  if (!button.querySelector('.ripple')) {
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = diameter + 'px';
    circle.style.left = event.clientX - button.offsetLeft - radius + 'px';
    circle.style.top = event.clientY - button.offsetTop - radius + 'px';
    circle.classList.add('ripple');

    button.appendChild(circle);
    
    setTimeout(() => {
      circle.remove();
    }, 600);
  }
}

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', createRipple);
});

// ===== PRINT STYLES =====
const htmlElement = document.documentElement;
window.addEventListener('beforeprint', () => {
  htmlElement.setAttribute('data-theme', 'light');
});

window.addEventListener('afterprint', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  htmlElement.setAttribute('data-theme', savedTheme);
});

// ===== CONSOLE MESSAGE =====
console.log('%c🎨 Welcome to Zeineb\'s Portfolio!', 'font-size: 16px; font-weight: bold; color: #a855f7;');
console.log('%cBuilt with ❤️ using HTML, CSS, and JavaScript', 'font-size: 12px; color: #ec4899;');

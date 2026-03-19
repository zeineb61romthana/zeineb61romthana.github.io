// Dark Mode Toggle - Simple & Reliable
function initTheme() {
  const themeBtn = document.getElementById('themeBtn');
  const html = document.documentElement;
  
  // Get saved theme or default to light
  const savedTheme = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', savedTheme);
  updateIcon(savedTheme);
  
  // Toggle on click
  if (themeBtn) {
    themeBtn.addEventListener('click', function() {
      const current = html.getAttribute('data-theme');
      const newTheme = current === 'light' ? 'dark' : 'light';
      
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateIcon(newTheme);
    });
  }
}

function updateIcon(theme) {
  const icon = document.querySelector('#themeBtn i');
  if (!icon) return;
  
  if (theme === 'dark') {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}

// Initialize immediately and on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTheme);
} else {
  initTheme();
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
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

// Scroll Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

// Progress Bar Animations
const progressObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progressBars = entry.target.querySelectorAll('.progress');
      progressBars.forEach(bar => {
        bar.style.animation = 'none';
        setTimeout(() => {
          bar.style.animation = 'expandWidth 1s ease-out forwards';
        }, 10);
      });
      progressObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
  progressObserver.observe(skillsSection);
}

// Scroll Indicator
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
  scrollIndicator.addEventListener('click', function() {
    document.querySelector('main').scrollIntoView({ behavior: 'smooth' });
  });
}

// Project Card Hover
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-8px)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// Skill Item Hover
document.querySelectorAll('.skill-item').forEach(item => {
  item.addEventListener('mouseenter', function() {
    const progress = this.querySelector('.progress');
    if (progress) {
      progress.style.boxShadow = '0 0 20px rgba(168, 85, 247, 0.6)';
    }
  });
  
  item.addEventListener('mouseleave', function() {
    const progress = this.querySelector('.progress');
    if (progress) {
      progress.style.boxShadow = '0 0 15px rgba(168, 85, 247, 0.4)';
    }
  });
});

// Contact Card Hover
document.querySelectorAll('.contact-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    const icon = this.querySelector('.contact-icon');
    if (icon) {
      icon.style.animation = 'float 0.6s ease-in-out';
    }
  });
});

// Console Message
console.log('%cHi there! 👋', 'font-size: 20px; color: #a855f7; font-weight: bold;');
console.log('%cBuilt with passion by Zeineb', 'font-size: 14px; color: #ec4899;');
console.log('%cAI Engineer | Production Systems | Human-Centered Design', 'font-size: 12px; color: #a855f7;');

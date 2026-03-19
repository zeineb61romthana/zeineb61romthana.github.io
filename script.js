// ===== DARK MODE TOGGLE =====
document.addEventListener('DOMContentLoaded', function() {
  const themeBtn = document.getElementById('themeBtn');
  const htmlElement = document.documentElement;
  
  // Check for saved theme preference or default to 'light'
  const savedTheme = localStorage.getItem('theme') || 'light';
  htmlElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
  
  // Theme toggle functionality
  themeBtn.addEventListener('click', function() {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });
  
  function updateThemeIcon(theme) {
    const icon = themeBtn.querySelector('i');
    if (theme === 'dark') {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  }
});

// ===== SMOOTH SCROLLING FOR LINKS =====
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

// ===== SCROLL-TRIGGERED ANIMATIONS =====
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

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

// ===== PROGRESS BAR ANIMATIONS =====
const progressObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progressBars = entry.target.querySelectorAll('.progress');
      progressBars.forEach(bar => {
        const width = bar.parentElement.parentElement.querySelector('span') || bar.style.width;
        if (width) {
          // Trigger animation by restarting it
          bar.style.animation = 'none';
          setTimeout(() => {
            bar.style.animation = 'expandWidth 1s ease-out forwards';
          }, 10);
        }
      });
      progressObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
  progressObserver.observe(skillsSection);
}

// ===== SCROLL INDICATOR CLICK =====
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
  scrollIndicator.addEventListener('click', function() {
    document.querySelector('main').scrollIntoView({ behavior: 'smooth' });
  });
}

// ===== COUNTER ANIMATION FOR STATS =====
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;
  
  const counter = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(counter);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

const statsObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const statNumbers = entry.target.querySelectorAll('.stat-number');
      statNumbers.forEach(stat => {
        const text = stat.textContent;
        const number = parseInt(text);
        if (!isNaN(number)) {
          animateCounter(stat, number);
        }
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const statsContainer = document.querySelector('.stats-container');
if (statsContainer) {
  statsObserver.observe(statsContainer);
}

// ===== PROJECT CARD HOVER EFFECT =====
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-8px)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// ===== SKILL ITEM HOVER =====
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

// ===== CONTACT CARD INTERACTIVE =====
document.querySelectorAll('.contact-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    const icon = this.querySelector('.contact-icon');
    if (icon) {
      icon.style.animation = 'float 0.6s ease-in-out';
    }
  });
});

// ===== ACHIEVEMENT ITEMS STAGGER ANIMATION =====
const achievementObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const items = entry.target.querySelectorAll('.achievement-item');
      items.forEach((item, index) => {
        setTimeout(() => {
          item.style.animation = 'slideInUp 0.6s ease-out forwards';
          item.style.opacity = '0';
          item.style.transform = 'translateY(30px)';
          item.style.animationDelay = `${index * 0.1}s`;
        }, 0);
      });
      achievementObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

const achievementSection = document.querySelector('.achievement-grid');
if (achievementSection) {
  achievementObserver.observe(achievementSection);
}

// ===== TIMELINE ANIMATION =====
const timelineObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const items = entry.target.querySelectorAll('.timeline-item');
      items.forEach((item, index) => {
        setTimeout(() => {
          item.style.animation = 'slideInUp 0.6s ease-out forwards';
          item.style.opacity = '0';
          item.style.transform = 'translateY(30px)';
          item.style.animationDelay = `${index * 0.15}s`;
        }, 0);
      });
      timelineObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

const timeline = document.querySelector('.timeline');
if (timeline) {
  timelineObserver.observe(timeline);
}

// ===== ADD KEYBOARD ACCESSIBILITY =====
document.querySelectorAll('button, a[href], .contact-card').forEach(element => {
  element.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && this.onclick === null && this.href === undefined) {
      this.click();
    }
  });
});

// ===== PARALLAX EFFECT FOR HERO =====
window.addEventListener('scroll', function() {
  const hero = document.querySelector('.hero');
  if (hero && window.scrollY < window.innerHeight) {
    const scrolled = window.scrollY;
    hero.style.backgroundPosition = `center ${scrolled * 0.5}px`;
  }
});

// ===== SCROLL PROGRESS INDICATOR =====
window.addEventListener('scroll', function() {
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (window.scrollY / windowHeight) * 100;
  
  // Optional: Add scroll progress bar if needed
  // document.documentElement.style.setProperty('--scroll-progress', scrolled + '%');
});

// ===== ACTIVE NAV SECTION TRACKING =====
const sections = document.querySelectorAll('section, header');
window.addEventListener('scroll', function() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id') || section.classList[0];
    }
  });
  
  // Update active state if nav exists
  // Could be used for a sticky nav bar in future updates
});

// ===== LAZY LOAD IMAGES =====
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });
  
  document.querySelectorAll('img').forEach(img => imageObserver.observe(img));
}

// ===== CONSOLE MESSAGE =====
console.log('%cHi there! 👋', 'font-size: 20px; color: #a855f7; font-weight: bold;');
console.log('%cBuilt with passion by Zeineb', 'font-size: 14px; color: #ec4899;');
console.log('%cAI Engineer | Production Systems | Human-Centered Design', 'font-size: 12px; color: #a855f7;');

<template>
  <nav class="navbar">
    <div class="navbar-container">
      <!-- Logo and Brand -->
      <div class="navbar-brand">
        <div class="logo-container">
          <img :src="Logo" alt="NDERU.ke Studios" class="logo" />
        </div>
        <div class="brand-text">
          <span class="brand-name">STUDIOS</span>
          <span class="brand-subtitle">NDERU.ke Studios</span>
        </div>
      </div>

      <!-- Navigation Links -->
      <ul class="navbar-nav">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/portfolio">Portfolio</router-link></li>
        <li><router-link to="/blog">Blog</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>

      <!-- Mobile Menu Toggle -->
      <div class="mobile-toggle" @click="toggleMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from '../assets/logo.png' // <-- import the logo

export default {
  name: "Navbar",
  data() {
    return {
      isMobileMenuOpen: false,
      Logo // add it to data for template binding
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      const navbar = document.querySelector('.navbar-nav');
      navbar.classList.toggle('mobile-open');
    }
  }
};
</script>


<style scoped>
/* CSS Custom Properties */
:root {
  --navbar-bg: #1a1a1a;
  --navbar-bg-blur: rgba(26, 26, 26, 0.95);
  --text-primary: #f5f5f5;
  --text-secondary: #d1d5db;
  --accent-color: #3b82f6;
  --accent-hover: #60a5fa;
  --border-radius: 8px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.navbar {
  background: var(--navbar-bg);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: var(--shadow);
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 0;
}

.navbar-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
}

/* Logo and Brand Section */
.navbar-brand {
  display: flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  transition: var(--transition);
}

.navbar-brand:hover {
  transform: translateY(-1px);
}

.logo-container {
  width: 50px;
  height: 50px;
  border-radius: var(--border-radius);
  overflow: hidden;
  background: linear-gradient(135deg,white, #1f2937);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  position: relative;
}

.logo-container::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.1));
  border-radius: var(--border-radius);
}

.logo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition);
}

.navbar-brand:hover .logo {
  transform: scale(1.05);
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1;
  color:black;
}

.brand-name {
   font-size: 1.5rem;
  font-weight: 700;
  color: navy; /* solid navy color */
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, var(--text-primary), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.brand-subtitle {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: 2px;
}

/* Navigation Links */
.navbar-nav {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 8px;
  align-items: center;
}

.navbar-nav li {
  position: relative;
}

.navbar-nav a {
  display: block;
  color: var(--text-secondary);
  text-decoration: none;
  padding: 12px 20px;
  border-radius: var(--border-radius);
  font-weight: 500;
  font-size: 0.95rem;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.navbar-nav a::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, var(--accent-color), var(--accent-hover));
  opacity: 0;
  transition: var(--transition);
  border-radius: var(--border-radius);
}

.navbar-nav a:hover::before,
.navbar-nav a.router-link-active::before {
  opacity: 0.1;
}

.navbar-nav a:hover {
  color: var(--text-primary);
  transform: translateY(-1px);
}

.navbar-nav a.router-link-active {
  color: var(--text-primary);
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.navbar-nav a span {
  position: relative;
  z-index: 1;
}

/* Mobile Menu Toggle */
.mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
  padding: 8px;
  border-radius: var(--border-radius);
  transition: var(--transition);
}

.mobile-toggle:hover {
  background: rgba(255, 255, 255, 0.05);
}

.mobile-toggle span {
  width: 24px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: var(--transition);
}

/* Responsive Design */
@media (max-width: 768px) {
  .navbar-container {
    padding: 0 16px;
    min-height: 70px;
  }

  .navbar-brand {
    gap: 12px;
  }

  .logo-container {
    width: 40px;
    height: 40px;
  }

  .brand-name {
    font-size: 1.25rem;
  }

  .brand-subtitle {
    font-size: 0.7rem;
  }

  .mobile-toggle {
    display: flex;
  }

  .navbar-nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--navbar-bg-blur);
    backdrop-filter: blur(20px);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    flex-direction: column;
    padding: 20px;
    gap: 4px;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
    box-shadow: var(--shadow);
  }

  .navbar-nav.mobile-open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .navbar-nav li {
    width: 100%;
  }

  .navbar-nav a {
    width: 100%;
    text-align: center;
    padding: 16px;
    font-size: 1rem;
  }

  /* Mobile menu toggle animation */
  .mobile-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .mobile-toggle.active span:nth-child(2) {
    opacity: 0;
  }

  .mobile-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }
}

@media (max-width: 480px) {
  .navbar-container {
    padding: 0 12px;
    min-height: 60px;
  }

  .brand-name {
    font-size: 1.1rem;
  }

  .brand-subtitle {
    font-size: 0.65rem;
  }

  .logo-container {
    width: 35px;
    height: 35px;
  }
}

/* Smooth scrolling enhancement */
html {
  scroll-behavior: smooth;
}

/* Focus states for accessibility */
.navbar-nav a:focus,
.mobile-toggle:focus {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
}
</style>
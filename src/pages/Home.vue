<template>
  <div class="hero-container">
    <!-- Main Hero Section -->
    <div class="hero-section">
      <div class="hero-content">
        <div class="brand-logo">
          <div class="logo-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2"/>
              <path d="M12 2L3 9L12 16L21 9L12 2Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
            </svg>
          </div>
        </div>
        
        <h1 class="hero-title">
          Welcome to <span class="brand-highlight">Nderu.ke</span> Studios
        </h1>
        
        <p class="hero-subtitle">
          Capturing moments, telling stories through photography.
        </p>
        
        <div class="title-divider"></div>
        
        <div class="hero-features">
          <div class="feature-item">
            <div class="feature-icon">📸</div>
            <span>Professional Photography</span>
          </div>
          <div class="feature-item">
            <div class="feature-icon">🎨</div>
            <span>Creative Storytelling</span>
          </div>
          <div class="feature-item">
            <div class="feature-icon">✨</div>
            <span>Memorable Moments</span>
          </div>
        </div>
        
        <div class="cta-buttons">
          <button class="primary-btn">
            <span>View Portfolio</span>
            <svg class="btn-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
          
          <button class="secondary-btn">
            <span>Contact Us</span>
          </button>
        </div>
      </div>
      
      <!-- Decorative Elements -->
      <div class="floating-elements">
        <div class="floating-circle circle-1"></div>
        <div class="floating-circle circle-2"></div>
        <div class="floating-circle circle-3"></div>
      </div>
    </div>
    
    <!-- Stats Section -->
    <div class="stats-section">
      <div class="stats-container">
        <div class="stat-item">
          <div class="stat-number">500+</div>
          <div class="stat-label">Happy Clients</div>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <div class="stat-number">1000+</div>
          <div class="stat-label">Photos Captured</div>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <div class="stat-number">50+</div>
          <div class="stat-label">Events Covered</div>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <div class="stat-number">5+</div>
          <div class="stat-label">Years Experience</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NderuStudiosHero",
  mounted() {
    // Add scroll animation
    this.animateOnScroll();
  },
  methods: {
    animateOnScroll() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      });
      
      const elements = this.$el.querySelectorAll('.stat-item, .feature-item');
      elements.forEach((el) => observer.observe(el));
    }
  }
};
</script>

<style scoped>
/* Container */
.hero-container {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

/* Main Hero Section */
.hero-section {
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  color: white;
  position: relative;
  padding: 120px 20px 80px;
  text-align: center;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 200"><path d="M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100 L1000,0 L0,0 Z" fill="rgba(255,255,255,0.05)"/></svg>');
  background-size: cover;
  background-position: bottom;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

/* Brand Logo */
.brand-logo {
  margin-bottom: 32px;
  display: flex;
  justify-content: center;
}

.logo-icon {
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  animation: float 6s ease-in-out infinite;
}

.logo-icon svg {
  width: 40px;
  height: 40px;
  color: white;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

/* Hero Text */
.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin: 0 0 24px;
  letter-spacing: -0.025em;
  line-height: 1.1;
}

.brand-highlight {
  background: linear-gradient(90deg, #3b82f6, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
}

.hero-subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
  margin: 0 0 40px;
  font-weight: 300;
  line-height: 1.6;
}

.title-divider {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #06b6d4);
  margin: 0 auto 48px;
  border-radius: 2px;
}

/* Hero Features */
.hero-features {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 48px;
  flex-wrap: wrap;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.1);
  padding: 16px 24px;
  border-radius: 50px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
  animation: slideInUp 0.6s ease forwards;
}

.feature-item:nth-child(2) { animation-delay: 0.2s; }
.feature-item:nth-child(3) { animation-delay: 0.4s; }

.feature-item:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.feature-icon {
  font-size: 1.5rem;
}

.feature-item span {
  font-weight: 500;
  font-size: 0.95rem;
}

/* CTA Buttons */
.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.primary-btn, .secondary-btn {
  padding: 16px 32px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.primary-btn {
  background: linear-gradient(90deg, #3b82f6, #06b6d4);
  color: white;
}

.primary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
}

.secondary-btn {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.secondary-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}

.btn-icon {
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
}

.primary-btn:hover .btn-icon {
  transform: translateX(4px);
}

/* Floating Elements */
.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
}

.floating-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  animation: floatCircle 20s linear infinite;
}

.circle-1 {
  width: 100px;
  height: 100px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.circle-2 {
  width: 150px;
  height: 150px;
  top: 60%;
  right: 15%;
  animation-delay: -7s;
}

.circle-3 {
  width: 80px;
  height: 80px;
  top: 40%;
  left: 80%;
  animation-delay: -14s;
}

@keyframes floatCircle {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(-20px) rotate(90deg); }
  50% { transform: translateY(-10px) rotate(180deg); }
  75% { transform: translateY(-30px) rotate(270deg); }
}

/* Stats Section */
.stats-section {
  background: white;
  padding: 60px 20px;
  position: relative;
}

.stats-section::before {
  content: '';
  position: absolute;
  top: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, #3b82f6, #06b6d4);
}

.stats-container {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
}

.stat-item {
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}

.stat-item.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 8px;
  background: linear-gradient(90deg, #3b82f6, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 0.9rem;
  color: #64748b;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.stat-divider {
  width: 1px;
  height: 60px;
  background: #e2e8f0;
  display: block;
}

/* Animations */
@keyframes slideInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section {
    padding: 80px 16px 60px;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .hero-features {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
  
  .feature-item {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .primary-btn, .secondary-btn {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
  
  .stats-container {
    flex-direction: column;
    gap: 32px;
  }
  
  .stat-divider {
    width: 60px;
    height: 1px;
    display: block;
  }
  
  .floating-circle {
    display: none;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .logo-icon {
    width: 60px;
    height: 60px;
  }
  
  .logo-icon svg {
    width: 30px;
    height: 30px;
  }
  
  .stat-number {
    font-size: 2rem;
  }
}
</style>
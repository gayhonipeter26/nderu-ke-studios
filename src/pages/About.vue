<template>
  <div class="about-container">
    <!-- Hero Section -->
    <div class="about-hero">
      <div class="hero-content">
        <div class="profile-section">
          <div class="profile-image-container">
          <img src="/images/profile.jpg" alt="Photographer Profile" class="profile-image" />
            <div class="profile-badge">
              <svg class="camera-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="12" cy="13" r="4" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
          </div>
        </div>
        
        <h2 class="about-title">About Me</h2>
        <div class="title-divider"></div>
        
        <div class="intro-section">
          <p class="brand-intro">
            Welcome to <span class="brand-highlight">Nderu.ke Studios</span> 
            <span class="emoji-group">🎥📸</span>
          </p>
          
          <p class="main-description">
            I am a passionate photographer specializing in portraits, weddings, and creative shoots. 
            My goal is to tell stories through timeless and powerful images that capture the essence 
            of every moment and celebrate the beauty of human connection.
          </p>
        </div>
      </div>
    </div>

    <!-- Story Section -->
    <div class="story-section">
      <div class="story-content">
        <div class="story-grid">
          <div class="story-text">
            <h3 class="section-title">My Journey</h3>
            <p class="story-paragraph">
              Photography chose me before I chose it. What started as a curiosity about capturing light 
              and shadow has evolved into a passionate pursuit of storytelling through the lens. Every 
              photograph is an opportunity to freeze time and preserve emotions that would otherwise be lost.
            </p>
            
            <p class="story-paragraph">
              Based in the vibrant heart of Kenya, I draw inspiration from the rich cultural tapestry, 
              stunning landscapes, and the incredible warmth of the people I meet. Each project is a 
              collaboration, a dance between photographer and subject to create something truly magical.
            </p>

            <div class="philosophy-box">
              <div class="quote-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              <blockquote class="philosophy-quote">
                "Photography is not just about capturing what you see, but revealing what you feel. 
                Every frame tells a story, every click preserves a memory."
              </blockquote>
            </div>
          </div>
          
          <div class="achievements-card">
            <h3 class="card-title">Achievements & Experience</h3>
            
            <div class="achievement-list">
              <div class="achievement-item">
                <div class="achievement-icon">🏆</div>
                <div class="achievement-details">
                  <h4>Kenya Photography Awards</h4>
                  <p>Best Portrait Series 2023</p>
                </div>
              </div>
              
              <div class="achievement-item">
                <div class="achievement-icon">📚</div>
                <div class="achievement-details">
                  <h4>Professional Training</h4>
                  <p>Advanced Digital Photography Certification</p>
                </div>
              </div>
              
              <div class="achievement-item">
                <div class="achievement-icon">🌍</div>
                <div class="achievement-details">
                  <h4>International Exhibitions</h4>
                  <p>Featured in East African Art Showcase</p>
                </div>
              </div>
              
              <div class="achievement-item">
                <div class="achievement-icon">❤️</div>
                <div class="achievement-details">
                  <h4>Community Impact</h4>
                  <p>500+ Couples & Families Served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Specializations Section -->
    <div class="specializations-section">
      <div class="specializations-content">
        <h3 class="section-title centered">What I Do Best</h3>
        <p class="section-subtitle">Specializing in moments that matter most</p>
        
        <div class="specializations-grid">
          <div class="specialization-card">
            <div class="spec-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </div>
            <h4 class="spec-title">Wedding Photography</h4>
            <p class="spec-description">
              Capturing the magic of your special day with cinematic storytelling and emotional depth. 
              From intimate ceremonies to grand celebrations.
            </p>
            <div class="spec-features">
              <span class="feature-tag">Full Day Coverage</span>
              <span class="feature-tag">Candid Moments</span>
              <span class="feature-tag">Professional Editing</span>
            </div>
          </div>
          
          <div class="specialization-card">
            <div class="spec-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h4 class="spec-title">Portrait Sessions</h4>
            <p class="spec-description">
              Professional headshots, family portraits, and personal branding photography that 
              showcases your authentic self with style and confidence.
            </p>
            <div class="spec-features">
              <span class="feature-tag">Studio & Outdoor</span>
              <span class="feature-tag">Natural Lighting</span>
              <span class="feature-tag">Personal Style</span>
            </div>
          </div>
          
          <div class="specialization-card">
            <div class="spec-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h4 class="spec-title">Creative Shoots</h4>
            <p class="spec-description">
              Artistic and conceptual photography that pushes boundaries. Fashion, lifestyle, 
              and experimental work that tells unique visual stories.
            </p>
            <div class="spec-features">
              <span class="feature-tag">Artistic Vision</span>
              <span class="feature-tag">Custom Concepts</span>
              <span class="feature-tag">Creative Direction</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact CTA Section -->
    <div class="cta-section">
      <div class="cta-content">
        <h3 class="cta-title">Let's Create Something Beautiful Together</h3>
        <p class="cta-description">
          Ready to tell your story? Get in touch and let's discuss how we can bring your vision to life.
        </p>
        
        <div class="cta-buttons">
         <button class="primary-btn" @click="$router.push('/contact')">
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
        <span>Contact Us</span>
      </button>
          
         <button class="secondary-btn" @click="$router.push('/portfolio')">
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9,22 9,12 15,12 15,22"/>
        </svg>
        <span>View Portfolio</span>
      </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic can be added here for any interactive features
</script>

<style scoped>
/* Container */
.about-container {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  position: relative;
}

/* Hero Section */
.about-hero {
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  color: white;
  padding: 100px 20px 80px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.about-hero::before {
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
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

/* Profile Section */
.profile-section {
  margin-bottom: 40px;
}

.profile-image-container {
  position: relative;
  display: inline-block;
  margin-bottom: 24px;
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.profile-badge {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  background: linear-gradient(90deg, #3b82f6, #06b6d4);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid white;
}

.camera-icon {
  width: 20px;
  height: 20px;
  color: white;
}

.about-title {
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 24px;
  letter-spacing: -0.025em;
}

.title-divider {
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #06b6d4);
  margin: 0 auto 40px;
  border-radius: 2px;
}

/* Intro Section */
.intro-section {
  max-width: 700px;
  margin: 0 auto;
}

.brand-intro {
  font-size: 1.4rem;
  margin-bottom: 24px;
  font-weight: 500;
}

.brand-highlight {
  background: linear-gradient(90deg, #3b82f6, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
}

.emoji-group {
  font-size: 1.2rem;
  margin-left: 8px;
}

.main-description {
  font-size: 1.2rem;
  line-height: 1.8;
  opacity: 0.9;
  font-weight: 300;
}

/* Story Section */
.story-section {
  background: white;
  padding: 80px 20px;
}

.story-content {
  max-width: 1200px;
  margin: 0 auto;
}

.story-grid {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 60px;
  align-items: start;
}

.section-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 24px;
  position: relative;
}

.section-title.centered {
  text-align: center;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6, #06b6d4);
  border-radius: 2px;
}

.section-title.centered::after {
  left: 50%;
  transform: translateX(-50%);
}

.story-paragraph {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #475569;
  margin-bottom: 24px;
}

.philosophy-box {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-left: 4px solid #3b82f6;
  padding: 24px;
  border-radius: 8px;
  margin-top: 32px;
  position: relative;
}

.quote-icon {
  position: absolute;
  top: -10px;
  left: 20px;
  width: 30px;
  height: 30px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3b82f6;
}

.quote-icon svg {
  width: 16px;
  height: 16px;
}

.philosophy-quote {
  font-style: italic;
  font-size: 1.1rem;
  color: #334155;
  margin: 0;
  line-height: 1.7;
  font-weight: 500;
}

/* Achievements Card */
.achievements-card {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  border: 1px solid #e2e8f0;
  position: sticky;
  top: 100px;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 24px;
}

.achievement-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.achievement-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.achievement-icon {
  font-size: 1.5rem;
  background: linear-gradient(135deg, #f8fafc, #e2e8f0);
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.achievement-details h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 4px 0;
}

.achievement-details p {
  font-size: 0.9rem;
  color: #64748b;
  margin: 0;
}

/* Specializations Section */
.specializations-section {
  background: #f8fafc;
  padding: 80px 20px;
}

.specializations-content {
  max-width: 1200px;
  margin: 0 auto;
}

.section-subtitle {
  text-align: center;
  font-size: 1.2rem;
  color: #64748b;
  margin-bottom: 60px;
  font-weight: 300;
}

.specializations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
}

.specialization-card {
  background: white;
  padding: 40px 32px;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  border: 1px solid #e2e8f0;
  text-align: center;
  transition: all 0.3s ease;
}

.specialization-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.spec-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 24px;
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.spec-icon svg {
  width: 32px;
  height: 32px;
}

.spec-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 16px 0;
}

.spec-description {
  font-size: 1rem;
  color: #475569;
  line-height: 1.7;
  margin-bottom: 24px;
}

.spec-features {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.feature-tag {
  background: linear-gradient(135deg, #f8fafc, #e2e8f0);
  color: #475569;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  color: white;
  padding: 80px 20px;
  text-align: center;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 16px 0;
  letter-spacing: -0.025em;
}

.cta-description {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 40px;
  line-height: 1.7;
}

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
  width: 18px;
  height: 18px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .about-hero {
    padding: 80px 16px 60px;
  }
  
  .about-title {
    font-size: 2.5rem;
  }
  
  .brand-intro {
    font-size: 1.2rem;
  }
  
  .main-description {
    font-size: 1.1rem;
  }
  
  .story-section {
    padding: 60px 16px;
  }
  
  .story-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .achievements-card {
    position: static;
  }
  
  .specializations-section {
    padding: 60px 16px;
  }
  
  .specializations-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .cta-section {
    padding: 60px 16px;
  }
  
  .cta-title {
    font-size: 2rem;
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
}

@media (max-width: 480px) {
  .about-title {
    font-size: 2rem;
  }
  
  .profile-image {
    width: 120px;
    height: 120px;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .specialization-card {
    padding: 32px 24px;
  }
  
  .cta-title {
    font-size: 1.8rem;
  }
}
</style>
<template>
  <div class="portfolio-container">
    <!-- Hero Section -->
    <div class="portfolio-hero">
      <div class="hero-content">
        <h2 class="portfolio-title">My Portfolio</h2>
        <p class="portfolio-subtitle">Explore some of my favorite shots captured through the lens.</p>
        <div class="title-divider"></div>
      </div>
    </div>

    <!-- Filter Tabs -->
    <div class="filter-section">
      <div class="filter-tabs">
        <button 
          v-for="category in categories" 
          :key="category"
          :class="['filter-tab', { active: activeFilter === category }]"
          @click="setActiveFilter(category)"
        >
          {{ category }}
        </button>
      </div>
    </div>

    <!-- Gallery Grid -->
    <div class="gallery-container">
      <div class="gallery-grid">
        <div 
          v-for="(photo, index) in filteredPhotos" 
          :key="index" 
          class="photo-card"
          :class="{ 'featured': photo.featured }"
          @click="openLightbox(index)"
        >
          <div class="image-container">
            <img :src="photo.src" :alt="photo.title" class="photo-image" />
            <div class="image-overlay">
              <div class="overlay-content">
                <div class="photo-meta">
                  <span class="category-badge">{{ photo.category }}</span>
                  <div class="photo-stats">
                    <div class="stat">
                      <svg class="stat-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                        <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
                      </svg>
                      <span>{{ photo.views }}</span>
                    </div>
                    <div class="stat">
                      <svg class="stat-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
                      </svg>
                      <span>{{ photo.likes }}</span>
                    </div>
                  </div>
                </div>
                <button class="view-btn">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
                  </svg>
                  <span>View Full</span>
                </button>
              </div>
            </div>
          </div>
          
          <div class="card-content">
            <div class="content-header">
              <h3 class="photo-title">{{ photo.title }}</h3>
              <div class="photo-rating">
                <div class="stars">
                  <span v-for="n in 5" :key="n" :class="['star', { filled: n <= photo.rating }]">★</span>
                </div>
              </div>
            </div>
            <p class="photo-description">{{ photo.description }}</p>
            
            <div class="card-footer">
              <div class="photo-details">
                <span class="photo-date">{{ photo.date }}</span>
                <span class="photo-location">{{ photo.location }}</span>
              </div>
              <div class="photo-tags">
                <span v-for="tag in photo.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Load More Button -->
    <div class="load-more-section">
      <button class="load-more-btn" @click="loadMorePhotos">
        <span>Load More</span>
        <svg class="btn-icon" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeFilter = ref('All')
const categories = ['All', 'Wedding', 'Nature', 'Portrait', 'Street', 'Events']

// ✅ Use direct paths from public folder
const photos = ref([
  {
    src: '/images/wedding1.jpg',
    title: "Wedding Bliss",
    description: "Capturing timeless love and cherished memories in perfect harmony.",
    category: "Wedding",
    featured: true,
    views: "2.1k",
    likes: "143",
    rating: 5,
    date: "March 2024",
    location: "Nairobi, Kenya",
    tags: ["romantic", "outdoor", "golden-hour"]
  },
  {
    src: '/images/nature1.jpg',
    title: "Nature's Symphony",
    description: "Peaceful landscapes and the serene calm of the wild outdoors.",
    category: "Nature",
    featured: false,
    views: "1.8k",
    likes: "87",
    rating: 5,
    date: "February 2024",
    location: "Maasai Mara",
    tags: ["landscape", "sunrise", "wildlife"]
  },
  {
    src: '/images/portrait1.jpg',
    title: "Soulful Portraits",
    description: "Every face tells a story worth remembering and celebrating.",
    category: "Portrait",
    featured: false,
    views: "1.5k",
    likes: "112",
    rating: 4,
    date: "March 2024",
    location: "Studio, Nairobi",
    tags: ["studio", "professional", "headshot"]
  },
  {
    src: '/images/street1.jpg',
    title: "Urban Stories",
    description: "Life unfolds in the bustling streets of the city.",
    category: "Street",
    featured: false,
    views: "1.2k",
    likes: "95",
    rating: 4,
    date: "January 2024",
    location: "CBD, Nairobi",
    tags: ["urban", "candid", "lifestyle"]
  }
])

const filteredPhotos = computed(() => {
  if (activeFilter.value === 'All') {
    return photos.value
  }
  return photos.value.filter(photo => photo.category === activeFilter.value)
})

const setActiveFilter = (category) => {
  activeFilter.value = category
}

const openLightbox = (index) => {
  console.log('Opening photo at index:', index)
}

const loadMorePhotos = () => {
  console.log('Loading more photos...')
}
</script>


<style scoped>
/* Container */
.portfolio-container {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  min-height: 100vh;
  position: relative;
}

/* Portfolio Hero */
.portfolio-hero {
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  color: white;
  padding: 80px 20px 60px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.portfolio-hero::before {
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

.portfolio-title {
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 16px;
  letter-spacing: -0.025em;
}

.portfolio-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
  margin: 0 0 32px;
  font-weight: 300;
  line-height: 1.6;
}

.title-divider {
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #06b6d4);
  margin: 0 auto;
  border-radius: 2px;
}

/* Filter Section */
.filter-section {
  background: white;
  padding: 40px 20px;
  border-bottom: 1px solid #e2e8f0;
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(10px);
}

.filter-tabs {
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
  max-width: 800px;
  margin: 0 auto;
}

.filter-tab {
  padding: 12px 24px;
  border: 2px solid #e2e8f0;
  background: white;
  color: #64748b;
  border-radius: 50px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.filter-tab:hover {
  border-color: #3b82f6;
  color: #3b82f6;
}

.filter-tab.active {
  background: linear-gradient(90deg, #3b82f6, #06b6d4);
  color: white;
  border-color: transparent;
}

/* Gallery Container */
.gallery-container {
  padding: 60px 20px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  max-width: 1400px;
  margin: 0 auto;
}

/* Photo Cards */
.photo-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: 1px solid rgba(226, 232, 240, 0.5);
  position: relative;
}

.photo-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.photo-card.featured {
  grid-column: span 2;
}

.photo-card.featured .image-container {
  height: 320px;
}

/* Image Container */
.image-container {
  position: relative;
  height: 260px;
  overflow: hidden;
}

.photo-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.photo-card:hover .photo-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.8) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
}

.photo-card:hover .image-overlay {
  opacity: 1;
}

.photo-meta {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.category-badge {
  background: rgba(255, 255, 255, 0.95);
  color: #1e293b;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.photo-stats {
  display: flex;
  gap: 16px;
}

.stat {
  display: flex;
  align-items: center;
  gap: 4px;
  color: white;
  font-size: 0.85rem;
  font-weight: 500;
}

.stat-icon {
  width: 16px;
  height: 16px;
}

.view-btn {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 12px 20px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  align-self: center;
  font-weight: 500;
}

.view-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.view-btn svg {
  width: 16px;
  height: 16px;
}

/* Card Content */
.card-content {
  padding: 28px;
}

.content-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
}

.photo-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
  line-height: 1.3;
}

.photo-rating {
  display: flex;
  align-items: center;
}

.stars {
  display: flex;
  gap: 2px;
}

.star {
  color: #e2e8f0;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.star.filled {
  color: #fbbf24;
}

.photo-description {
  color: #475569;
  line-height: 1.7;
  margin: 0 0 20px;
  font-size: 0.95rem;
}

/* Card Footer */
.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 20px;
  border-top: 1px solid #e2e8f0;
}

.photo-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.photo-date, .photo-location {
  font-size: 0.8rem;
  color: #64748b;
  font-weight: 500;
}

.photo-location::before {
  content: '📍 ';
  margin-right: 2px;
}

.photo-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.tag {
  background: #f1f5f9;
  color: #475569;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 500;
}

/* Load More Section */
.load-more-section {
  text-align: center;
  padding: 40px 20px 80px;
}

.load-more-btn {
  background: linear-gradient(90deg, #3b82f6, #06b6d4);
  color: white;
  border: none;
  padding: 16px 32px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.load-more-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
}

.btn-icon {
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
}

.load-more-btn:hover .btn-icon {
  transform: rotate(180deg);
}

/* Responsive Design */
@media (max-width: 768px) {
  .portfolio-hero {
    padding: 60px 16px 40px;
  }
  
  .portfolio-title {
    font-size: 2.5rem;
  }
  
  .portfolio-subtitle {
    font-size: 1.1rem;
  }
  
  .filter-section {
    padding: 20px 16px;
  }
  
  .filter-tabs {
    gap: 8px;
  }
  
  .filter-tab {
    padding: 8px 16px;
    font-size: 0.85rem;
  }
  
  .gallery-container {
    padding: 40px 16px;
  }
  
  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .photo-card.featured {
    grid-column: span 1;
  }
  
  .photo-card.featured .image-container {
    height: 260px;
  }
  
  .card-content {
    padding: 20px;
  }
  
  .photo-title {
    font-size: 1.2rem;
  }
  
  .card-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  
  .photo-tags {
    align-self: stretch;
  }
}

@media (max-width: 480px) {
  .portfolio-title {
    font-size: 2rem;
  }
  
  .image-container {
    height: 220px;
  }
  
  .content-header {
    flex-direction: column;
    gap: 8px;
  }
  
  .photo-meta {
    flex-direction: column;
    gap: 12px;
  }
}
</style>
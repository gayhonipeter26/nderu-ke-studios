<template>
  <div class="portfolio-container p-8">
    <!-- Back Button -->
    <router-link 
      to="/portfolio" 
      class="inline-block mb-6 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
    >
      ← Back to Portfolio
    </router-link>

    <!-- Full Photo Card -->
    <div class="photo-card featured">
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
</template>

<script setup>
import { useRoute } from 'vue-router'

const photos = [
  {
    src: '/images/wedding1.jpeg',
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
    src: '/images/nature1.jpeg',
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
    src: '/images/portrait1.jpeg',
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
    src: '/images/street1.jpeg',
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
  },
  {
    src: '/images/event1.jpeg',
    title: "Live Concert Vibes",
    description: "An electrifying night filled with music, lights, and unstoppable energy.",
    category: "Event",
    featured: true,
    views: "3.8k",
    likes: "240",
    rating: 5,
    date: "February 2024",
    location: "KICC, Nairobi",
    tags: ["concert", "music", "festival", "crowd"]
  }
]

const route = useRoute()
const photo = photos[Number(route.params.id)]
</script>

<style scoped>
/* Reuse your portfolio card styles */
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

.featured {
  grid-column: span 2;
}

.image-container {
  position: relative;
  height: 400px;
  overflow: hidden;
}

.photo-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.8) 100%);
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
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
  font-size: 1.8rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
  line-height: 1.3;
}

.photo-description {
  color: #475569;
  line-height: 1.7;
  margin: 0 0 20px;
  font-size: 1rem;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 20px;
  border-top: 1px solid #e2e8f0;
}

.photo-details span {
  font-size: 0.9rem;
  color: #64748b;
  font-weight: 500;
}

.photo-location::before {
  content: '📍 ';
  margin-right: 2px;
}

.photo-tags .tag {
  background: #f1f5f9;
  color: #475569;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

.stars {
  display: flex;
  gap: 2px;
}

.star {
  color: #e2e8f0;
  font-size: 1rem;
}

.star.filled {
  color: #fbbf24;
}
</style>

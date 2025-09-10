<template>
  <div class="blog">
    <!-- Hero Section -->
    <div class="hero-section">
      <h1 class="blog-title">Photography Blogs</h1>
      <p class="blog-subtitle">Capturing moments, telling stories through the lens</p>
      <div class="title-divider"></div>
    </div>

    <!-- Posts Grid -->
    <div class="posts-container">
      <div class="posts-grid">
        <article v-for="post in posts" :key="post.id" class="post-card">
          <div class="image-container">
            <img :src="post.image" :alt="post.title" class="post-image" />
            <div class="image-overlay">
              <div class="overlay-content">
                <span class="category-badge">{{ post.category }}</span>
              </div>
            </div>
          </div>
          
          <div class="post-content">
            <div class="post-meta">
              <time class="post-date">{{ post.date }}</time>
              <span class="reading-time">{{ post.readTime }} min read</span>
            </div>
            
            <h2 class="post-title">{{ post.title }}</h2>
            <p class="post-excerpt">{{ post.excerpt }}</p>
            
            <div class="post-footer">
              <router-link class="read-more-btn" :to="`/blog/${post.id}`">
                <span>Read More</span>
                <svg class="arrow-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </router-link>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog",
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Golden Hour Portraits",
          excerpt: "Discover the magic of golden hour lighting and learn professional techniques for capturing stunning portrait photographs that showcase natural warmth and emotion.",
          content: "Full article about golden hour portraits with tips, examples, and camera settings...",
          image: "https://source.unsplash.com/800x500/?portrait,golden-hour",
          category: "Portrait",
          date: "March 15, 2024",
          readTime: 5
        },
        {
          id: 2,
          title: "Street Photography in Nairobi",
          excerpt: "Explore the vibrant streets of Nairobi through my lens, capturing authentic moments and the rich cultural tapestry of Kenya's bustling capital city.",
          content: "Detailed insights into street photography in Nairobi, covering locations, safety tips, and techniques...",
          image: "https://source.unsplash.com/800x500/?nairobi,street",
          category: "Street",
          date: "March 8, 2024",
          readTime: 7
        },
        {
          id: 3,
          title: "Landscape Photography Mastery",
          excerpt: "Transform ordinary landscapes into extraordinary visual stories with advanced composition techniques, lighting strategies, and post-processing workflows.",
          content: "Full guide on how to take stunning landscapes with composition, lighting, and editing advice...",
          image: "https://source.unsplash.com/800x500/?landscape,mountain",
          category: "Landscape",
          date: "February 28, 2024",
          readTime: 8
        },
        {
          id: 4,
          title: "Wildlife in Their Natural Habitat",
          excerpt: "Journey into Kenya's national parks to capture wildlife in their most authentic moments, showcasing the raw beauty of African fauna.",
          content: "Wildlife photography guide covering equipment, techniques, and ethical considerations...",
          image: "https://source.unsplash.com/800x500/?wildlife,africa",
          category: "Wildlife",
          date: "February 20, 2024",
          readTime: 6
        }
      ]
    };
  }
};
</script>

<style scoped>
/* Global Styles */
.blog {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  min-height: 100vh;
}

/* Hero Section */
.hero-section {
  text-align: center;
  padding: 80px 0 60px;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  margin: 0 -20px 60px;
  color: white;
  position: relative;
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

.blog-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin: 0 0 16px;
  letter-spacing: -0.025em;
  position: relative;
  z-index: 1;
}

.blog-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
  margin: 0 0 32px;
  font-weight: 300;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;
}

.title-divider {
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #06b6d4);
  margin: 0 auto;
  border-radius: 2px;
  position: relative;
  z-index: 1;
}

/* Posts Container */
.posts-container {
  padding-bottom: 80px;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Post Cards */
.post-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  border: 1px solid rgba(226, 232, 240, 0.5);
}

.post-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

/* Image Container */
.image-container {
  position: relative;
  overflow: hidden;
  height: 240px;
}

.post-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.post-card:hover .post-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.4) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.post-card:hover .image-overlay {
  opacity: 1;
}

.overlay-content {
  position: absolute;
  top: 20px;
  left: 20px;
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
  backdrop-filter: blur(10px);
}

/* Post Content */
.post-content {
  padding: 32px 28px;
}

.post-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  font-size: 0.85rem;
  color: #64748b;
}

.post-date {
  font-weight: 500;
}

.reading-time {
  display: flex;
  align-items: center;
  gap: 4px;
}

.reading-time::before {
  content: '📖';
  font-size: 0.8rem;
}

.post-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 16px;
  line-height: 1.3;
  letter-spacing: -0.01em;
}

.post-excerpt {
  color: #475569;
  line-height: 1.7;
  margin: 0 0 24px;
  font-size: 0.95rem;
}

/* Post Footer */
.post-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid #e2e8f0;
}

.read-more-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #3b82f6;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 12px 20px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.read-more-btn:hover {
  background: #3b82f6;
  color: white;
  transform: translateX(2px);
}

.arrow-icon {
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
}

.read-more-btn:hover .arrow-icon {
  transform: translateX(4px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .blog {
    padding: 0 16px;
  }
  
  .hero-section {
    padding: 60px 0 40px;
    margin: 0 -16px 40px;
  }
  
  .blog-title {
    font-size: 2.5rem;
  }
  
  .blog-subtitle {
    font-size: 1.1rem;
  }
  
  .posts-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .post-content {
    padding: 24px 20px;
  }
  
  .post-title {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .blog-title {
    font-size: 2rem;
  }
  
  .image-container {
    height: 200px;
  }
  
  .posts-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>
<template>
  <div class="post-detail" v-if="post">
    <img :src="post.image" :alt="post.title" />
    <h1>{{ post.title }}</h1>
    <p>{{ post.content }}</p>
    <router-link class="back-link" to="/blog">← Back to Blog</router-link>
  </div>
</template>

<script>
export default {
  name: "BlogPost",
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Golden Hour Portraits",
          content: "Full article about golden hour portraits with tips, examples, and camera settings...",
          image: "https://source.unsplash.com/800x500/?portrait,photography"
        },
        {
          id: 2,
          title: "Street Photography in Nairobi",
          content: "Detailed insights into street photography in Nairobi, covering locations, safety tips, and techniques...",
          image: "https://source.unsplash.com/800x500/?street,nairobi"
        },
        {
          id: 3,
          title: "Landscape Photography Tips",
          content: "Full guide on how to take stunning landscapes with composition, lighting, and editing advice...",
          image: "https://source.unsplash.com/800x500/?landscape,photography"
        }
      ],
      post: null
    };
  },
  created() {
    const id = this.$route.params.id;
    this.post = this.posts.find(p => p.id === parseInt(id));
  }
};
</script>

<style>
.post-detail {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  text-align: center;
}
.post-detail img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 20px;
}
.back-link {
  display: inline-block;
  margin-top: 15px;
  color: #0077cc;
  font-weight: bold;
  text-decoration: none;
}
.back-link:hover {
  text-decoration: underline;
}
</style>

<template>
  <div id="app">
    <Navbar />
    <main class="main-content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<style>
/* Make the whole app take full height */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Full viewport height */
}

/* Make main content expand to push footer down */
.main-content {
  flex: 1; /* Takes remaining space */
}
</style>

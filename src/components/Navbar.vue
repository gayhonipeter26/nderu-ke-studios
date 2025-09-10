<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/portfolio">Portfolio</router-link></li>
      <li><router-link to="/blog">Blog</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  background: #111;
  padding: 15px;
}
.navbar ul {
  list-style: none;
  display: flex;
  gap: 20px;
}
.navbar a {
  color: white;
  text-decoration: none;
}
.navbar a.router-link-active {
  font-weight: bold;
  border-bottom: 2px solid white;
}
</style>

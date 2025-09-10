<template>
  <div class="contact">
    <h2>Contact Me</h2>
    <p>If you’d like to book a session or collaborate, feel free to reach out:</p>

    <form class="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" rows="5" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </div>
</template>

<script setup>
</script>

<style scoped>
.contact {
  padding: 40px 20px;
  text-align: center;
}

.contact-form {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 20px auto;
  gap: 15px;
}

input, textarea {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

button {
  padding: 12px;
  background: #222;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s;
}

button:hover {
  background: #444;
}
</style>

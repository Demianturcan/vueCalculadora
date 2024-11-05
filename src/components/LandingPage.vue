<template>
  <div class="landing-page">
    <header>
      <h1>Welcome to My Landing Page</h1>
      <p>We offer amazing services to help you succeed.</p>
      <button @click="scrollToContact">Contact Us</button>
    </header>
    <section class="features">
      <h2>Features</h2>
      <ul>
        <li>Feature 1: Amazing Quality</li>
        <li>Feature 2: 24/7 Support</li>
        <li>Feature 3: Affordable Prices</li>
      </ul>
    </section>
    <section id="contact" class="contact">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Your name" required>
        <input type="email" placeholder="Your email" required>
        <textarea placeholder="Your message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToContact() {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
</script>

<style scoped>
.landing-page {
  text-align: center;
  padding: 50px;
}
.features, .contact {
  margin: 50px 0;
}
button {
  padding: 10px 20px;
  background-color: #3498db;
  border: none;
  color: white;
  cursor: pointer;
}
button:hover {
  background-color: #2980b9;
}
</style>
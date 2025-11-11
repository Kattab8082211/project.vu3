<template>
  <section class="about-page" :class="{ dark: isDark }">
    <!-- Hero Section -->
    <div class="hero">
      <div class="hero-overlay">
        <h1>About Our Store</h1>
        <p>Fashion for everyone — discover your unique style with us.</p>
      </div>
    </div>

    <!-- About Content -->
    <div class="about-content">
      <div class="about-text">
        <h2>Who We Are</h2>
        <p>
          We are an online clothing store dedicated to bringing you the latest
          trends in fashion with unbeatable quality and prices. From elegant
          dresses and comfortable casual wear to modern accessories, we have
          something for everyone.
        </p>
        <p>
          Our mission is simple: to make fashion accessible to all. Whether
          you're dressing up for a night out or relaxing at home, we believe you
          should always feel stylish and confident.
        </p>
        <router-link to="/ProductPage" class="cta-btn">Shop Now</router-link>
      </div>

      <div class="about-image">
        <img
          src="https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=700&q=80"
          alt="Fashion Models"
        />
      </div>
    </div>

    <!-- Values Section -->
    <div class="values">
      <h2>Our Core Values</h2>
      <div class="values-grid">
        <div class="value-box">
          <div class="icon">💚</div>
          <h3>Sustainability</h3>
          <p>
            We care for our planet by using eco-friendly fabrics and responsible
            production.
          </p>
        </div>

        <div class="value-box">
          <div class="icon">🤝</div>
          <h3>Customer First</h3>
          <p>
            Our customers are our top priority — your satisfaction drives our
            every move.
          </p>
        </div>

        <div class="value-box">
          <div class="icon">🎨</div>
          <h3>Creativity</h3>
          <p>
            Fashion is art. We constantly design fresh collections to inspire
            your style.
          </p>
        </div>
      </div>
    </div>

    <!-- Team Section -->
    <div class="team">
      <h2>Meet Our Team</h2>
      <p class="team-subtitle">
        The creative minds that bring our fashion vision to life.
      </p>

      <div class="team-grid">
        <div class="team-member" v-for="(member, i) in team" :key="i">
          <div class="team-photo">
            <img :src="member.image" :alt="member.name" />
          </div>
          <h3>{{ member.name }}</h3>
          <p class="role">{{ member.role }}</p>
        </div>
      </div>
    </div>

    <!-- Footer CTA -->
    <div class="cta">
      <h2>Join Our Fashion Community</h2>
      <p>
        Get the latest updates, offers, and style inspiration directly in your
        inbox.
      </p>
      <button class="btn-secondary">Subscribe Now</button>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { Dark } from "quasar";

// Reactive dark mode from Quasar
const isDark = computed(() => Dark.isActive);

const team = [
  {
    name: "Sarah Ali",
    role: "Creative Director",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ahmed Hassan",
    role: "Lead Designer",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
  },
  {
    name: "Mona Fathy",
    role: "Marketing Manager",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Omar Khaled",
    role: "Product Photographer",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
];
</script>

<style scoped>
/* ===== General Page ===== */
body {
  font-family: Arial, sans-serif;
  padding: 20px;
}
.about-page {
  padding: 20px;
  margin-top: 80px;
  font-family: "Poppins", sans-serif;
  background-color: #f9fafb;
  color: #333;
  line-height: 1.7;
  transition: background 0.3s ease, color 0.3s ease;
}

.about-page.dark {
  background-color: #0e0e0e;
  color: #eaeaea;
}

/* ===== Hero Section ===== */
.hero {
  position: relative;
  height: 22rem;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://images.unsplash.com/photo-1521575107034-e0fa0b594529?auto=format&fit=crop&w=1400&q=80")
      center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cta-btn {
  background-color: #42b983;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
}
.hero-overlay {
  text-align: center;
  color: #fff;
  max-width: 700px;
}

.hero-overlay h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.hero-overlay p {
  font-size: 1.2rem;
  color: #d1fae5;
}

/* ===== About Content ===== */
.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1100px;
  margin: 4rem auto;
  align-items: center;
  padding: 0 1.5rem;
}

.about-text h2 {
  font-size: 2rem;
  color: #1f2937;
  margin-bottom: 1rem;
}

.about-page.dark .about-text h2 {
  color: #f3f4f6;
}

.about-text p {
  margin-bottom: 1rem;
  color: #555;
}

.about-page.dark .about-text p {
  color: #ccc;
}

.btn-primary {
  background: linear-gradient(90deg, #059669, #10b981);
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-primary:hover {
  transform: translateY(-2px);
  background: linear-gradient(90deg, #10b981, #34d399);
}

.about-image img {
  width: 100%;
  border-radius: 14px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}

/* ===== Values Section ===== */
.values {
  background-color: #fff;
  padding: 4rem 1rem;
  text-align: center;
  transition: background 0.3s;
}

.about-page.dark .values {
  background-color: #181818;
}

.values h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #1f2937;
}

.about-page.dark .values h2 {
  color: #e5e7eb;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

.value-box {
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s;
}

.about-page.dark .value-box {
  background: #222;
  border-color: #444;
}

.value-box:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.value-box .icon {
  font-size: 2.5rem;
  color: #059669;
  margin-bottom: 0.8rem;
}

/* ===== Team Section ===== */
.team {
  background: linear-gradient(180deg, #f3f4f6 0%, #ffffff 100%);
  padding: 5rem 1rem;
  text-align: center;
  transition: background 0.3s;
}

.about-page.dark .team {
  background: linear-gradient(180deg, #111 0%, #1a1a1a 100%);
}

.team h2 {
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.team-subtitle {
  font-size: 1.1rem;
  color: #6b7280;
  margin-bottom: 3rem;
}

.about-page.dark .team-subtitle {
  color: #9ca3af;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2.5rem;
  max-width: 1100px;
  margin: 0 auto;
}

.team-member {
  background: white;
  border-radius: 16px;
  padding: 2rem 1.5rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.about-page.dark .team-member {
  background: #222;
  color: #f3f4f6;
}

.team-member:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.15);
}

.team-photo {
  position: relative;
  margin-bottom: 1rem;
}

.team-photo img {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #10b981;
  box-shadow: 0 0 12px rgba(16, 185, 129, 0.3);
  transition: transform 0.4s ease;
}

.team-member:hover .team-photo img {
  transform: scale(1.1);
}

.team-member h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 0.5rem;
}

.role {
  color: #6b7280;
  font-size: 0.95rem;
}

.about-page.dark .role {
  color: #9ca3af;
}

/* ===== CTA Section ===== */
.cta {
  background: linear-gradient(90deg, #047857, #10b981);
  color: white;
  text-align: center;
  padding: 4rem 1rem;
  transition: background 0.3s;
}

.about-page.dark .cta {
  background: linear-gradient(90deg, #065f46, #0f766e);
}

.cta h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.cta p {
  color: #d1fae5;
  max-width: 600px;
  margin: 0 auto 1.5rem;
}

.btn-secondary {
  background-color: white;
  color: #047857;
  padding: 0.8rem 1.8rem;
  border-radius: 8px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-secondary:hover {
  background-color: #f3f4f6;
  transform: translateY(-2px);
}

/* ===== Responsive ===== */
@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-overlay h1 {
    font-size: 2rem;
  }
}
</style>

<template>
  <section class="about-page">
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
        <button class="btn-primary">Shop Now</button>
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
      <div class="team-grid">
        <div class="team-member">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Sarah Ali"
          />
          <h3>Sarah Ali</h3>
          <p>Creative Director</p>
        </div>

        <div class="team-member">
          <img
            src="https://randomuser.me/api/portraits/men/35.jpg"
            alt="Ahmed Hassan"
          />
          <h3>Ahmed Hassan</h3>
          <p>Lead Designer</p>
        </div>

        <div class="team-member">
          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="Mona Fathy"
          />
          <h3>Mona Fathy</h3>
          <p>Marketing Manager</p>
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
// no logic needed
</script>

<style scoped>
/* ===== General Page ===== */
.about-page {
  margin-top: 90px;
  background-color: #f9fafb;
  color: #333;
  font-family: "Poppins", sans-serif;
  line-height: 1.6;
}

/* ===== Hero Section ===== */
.hero {
  position: relative;
  width: 100%;
  height: 18rem;
  background-image: url("https://images.unsplash.com/photo-1521575107034-e0fa0b594529?auto=format&fit=crop&w=1400&q=80");
  background-size: cover;
  background-position: center;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 1rem;
}

.hero-overlay h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.hero-overlay p {
  font-size: 1.1rem;
  max-width: 600px;
}

/* ===== About Content ===== */
.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1100px;
  margin: 4rem auto;
  padding: 0 1rem;
  align-items: center;
}

.about-text h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #1f2937;
}

.about-text p {
  color: #555;
  margin-bottom: 1rem;
}

.about-text .btn-primary {
  background-color: #059669;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

.about-text .btn-primary:hover {
  background-color: #047857;
}

.about-image img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* ===== Values Section ===== */
.values {
  background-color: white;
  padding: 4rem 1rem;
  text-align: center;
}

.values h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #1f2937;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

.value-box {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 2rem;
  transition: box-shadow 0.3s;
  background: #fff;
}

.value-box:hover {
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

.value-box .icon {
  font-size: 2.5rem;
  color: #059669;
  margin-bottom: 0.5rem;
}

.value-box h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

/* ===== Team Section ===== */
.team {
  background-color: #f3f4f6;
  padding: 4rem 1rem;
  text-align: center;
}

.team h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

.team-member {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
}

.team-member:hover {
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.team-member img {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}

/* ===== Footer CTA ===== */
.cta {
  background-color: #047857;
  color: white;
  text-align: center;
  padding: 3rem 1rem;
}

.cta h2 {
  font-size: 1.75rem;
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
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-secondary:hover {
  background-color: #f3f4f6;
}

/* ===== Responsive ===== */
@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
  }

  .hero-overlay h1 {
    font-size: 2rem;
  }
}
</style>

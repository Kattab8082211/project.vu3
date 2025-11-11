<template>
  <div class="home" :class="{ dark: isDark }">
    <section class="hero">
      <div class="hero-content">
        <h1>Welcome to Shopping</h1>
        <p>Your favorite place to find amazing products.</p>
        <router-link to="/ProductPage" class="cta-btn">Shop Now</router-link>
      </div>
    </section>

    <section class="categories">
      <h2>Browse by Category</h2>
      <div class="category-grid">
        <div
          v-for="(category, index) in categories"
          :key="index"
          class="category-card"
        >
          <img :src="category.image" :alt="category.name" />
          <h3>{{ category.name }}</h3>
        </div>
      </div>
    </section>

    <section class="products">
      <h2>Featured Products</h2>

      <div v-if="loading" class="loading">Loading products...</div>
      <div v-if="error" class="error">{{ error }}</div>

      <div v-if="products.length" class="product-grid">
        <div
          v-for="product in products.slice(0, 10)"
          :key="product.id"
          class="product-card"
        >
          <img :src="product.image" alt="Product Image" />
          <p style="padding-top: 20px" class="product-description clamp-3">
            {{ product.description.split(" ").slice(0, 10).join(" ") }}
          </p>
          <p class="price">${{ product.price }}</p>
          <router-link :to="`/product/${product.id}`" class="view-btn">
            View Details
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { Dark } from "quasar";

const isDark = computed(() => Dark.isActive);

const categories = ref([
  {
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1510552776732-03e61cf4b144",
  },
  {
    name: "Men's Clothing",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
  },
  {
    name: "Women's Clothing",
    image: "https://images.unsplash.com/photo-1521334884684-d80222895322",
  },
  {
    name: "Jewelry",
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3",
  },
]);

const products = ref([]);
const loading = ref(true);
const error = ref(null);

const fetchProducts = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw new Error("Failed to fetch products");
    products.value = await res.json();
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

onMounted(fetchProducts);
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
}

.home {
  padding: 20px;
  margin-top: 80px;
  background-color: #f5f5f5;
  color: #000;
  transition: background-color 0.4s ease, color 0.4s ease;
}

.home.dark {
  background-color: #121212;
  color: #fff;
}

.hero {
  background: url("https://images.unsplash.com/photo-1512436991641-6745cdb1723f")
    center/cover no-repeat;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
}
.hero-content {
  background: rgba(0, 0, 0, 0.55);
  padding: 2rem;
  border-radius: 12px;
}
.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.product-description {
  font-size: 0.9rem;
  color: #666;
  flex-grow: 1;
  margin-bottom: 12px;
}
.clamp-3 {
  overflow: hidden;
}
.cta-btn {
  background-color: #42b983;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
}
.cta-btn:hover {
  background-color: #2d8b64;
}

.categories {
  padding: 2rem;
  text-align: center;
}
.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}
.category-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s, background 0.3s;
}
.home.dark .category-card {
  background: #1e1e1e;
}
.category-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
.category-card h3 {
  padding: 1rem;
}
.category-card:hover {
  transform: translateY(-5px);
}

.products {
  padding: 2rem;
  text-align: center;
}
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}
.product-card {
  background: white;
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s, background 0.3s;
}
.home.dark .product-card {
  background: #1e1e1e;
}
.product-card img {
  width: 100%;
  height: 180px;
  object-fit: contain;
}
.product-card h3 {
  font-size: 1rem;
  margin: 10px 0;
}
.price {
  font-weight: bold;
  color: #42b983;
  margin-bottom: 10px;
}
.view-btn {
  background: #007bff;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.9rem;
}
.view-btn:hover {
  background: #0056b3;
}

.loading,
.error {
  margin-top: 1rem;
  color: #666;
}
.error {
  color: red;
}
</style>

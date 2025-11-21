<template>
  <div class="container">
    <h1 class="heading">Product List</h1>
    <TheSearch />

    <div v-if="loading" class="loading">Loading products...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="products.length" class="product-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.image" alt="" class="product-image" />

        <div class="product-content">
          <p class="product-description clamp-3">
            {{ product.description.split(" ").slice(0, 10).join(" ") }}
          </p>
          <div class="product-footer">
            <span class="product-price">${{ product.price }}</span>
            <button class="add-btn" @click="addToCart(product)">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import TheSearch from "@/components/SearchApi.vue";
import { useCartStore } from "@/stores/CartStore";
const products = ref([]);
const loading = ref(true);
const error = ref(null);

const cartStore = useCartStore();

function addToCart(product) {
  cartStore.addToCart(product);
}

const fetchProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) throw new Error("Failed to fetch products");
    products.value = await response.json();
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

onMounted(fetchProducts);
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
}

.heading {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 24px;
}

.loading {
  text-align: center;
  color: #555;
}
.error {
  text-align: center;
  color: red;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.product-card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}
.product-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: contain;
  background-color: #f7f7f7;
  padding: 16px;
}

.product-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 16px;
}

.product-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.product-description {
  font-size: 0.9rem;
  color: #666;
  flex-grow: 1;
  margin-bottom: 12px;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #0a8a33;
}

.add-btn {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
}
.add-btn:hover {
  background-color: #0056b3;
}

.clamp-2 {
  overflow: hidden;
}

.clamp-3 {
  overflow: hidden;
}
</style>

<template>
  <div class="details-wrapper" :class="{ dark: isDark }">
    <div class="details-container" v-if="product">
      <div class="image-box">
        <img :src="product.image" class="product-image" />
      </div>

      <div class="info-box">
        <h1>{{ product.title }}</h1>

        <p class="category">Category: {{ product.category }}</p>

        <p class="price">${{ product.price }}</p>

        <p class="description">
          {{ product.description }}
        </p>

        <button class="add-btn" @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>

    <div v-else class="loading">Loading product...</div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { Dark } from "quasar";
import { useCartStore } from "@/stores/CartStore";

const isDark = computed(() => Dark.isActive);

const product = ref(null);
const loading = ref(true);
const route = useRoute();
const cart = useCartStore();

async function fetchProduct() {
  try {
    const id = route.params.id;
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);

    if (!response.ok) throw new Error("Failed to fetch product");

    product.value = await response.json();
  } catch (error) {
    console.error("Error:", error);
  } finally {
    loading.value = false;
  }
}

function addToCart(product) {
  cart.addToCart(product);
}

onMounted(fetchProduct);
</script>

<style scoped>
/* ----------- Wrapper ----------- */
.details-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 130px;
  background: #fafafa;
  max-height: 100vh;
  transition: background 0.3s, color 0.3s;
}

.details-wrapper.dark {
  background: #121212;
  color: #eee;
}

/* ---------- Container ---------- */
.details-container {
  display: flex;
  gap: 30px;
  padding: 30px;
  max-width: 1000px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: background 0.3s, color 0.3s;
}

.details-wrapper.dark .details-container {
  background: #1e1e1e;
  color: #eee;
}

/* ---------- Image ----------- */
.image-box {
  width: 40%;
}

.product-image {
  width: 100%;
  max-height: 450px;
  object-fit: contain;
}

/* ---------- Info ----------- */
.info-box {
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

h1 {
  font-size: 28px;
  font-weight: bold;
}

.category {
  font-size: 14px;
  color: #777;
}

.details-wrapper.dark .category {
  color: #bbb;
}

.price {
  font-size: 24px;
  font-weight: bold;
  color: #0a8a33;
}

.details-wrapper.dark .price {
  color: #4cff8f;
}

.description {
  font-size: 16px;
  line-height: 1.5;
}

/* ---------- Button ----------- */
.add-btn {
  width: 200px;
  padding: 12px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s;
}

.add-btn:hover {
  background: #0056b3;
}

.details-wrapper.dark .add-btn {
  background: #0056d6;
}

.details-wrapper.dark .add-btn:hover {
  background: #003e99;
}

/* --------- Loading ---------- */
.loading {
  text-align: center;
  margin-top: 50px;
  font-size: 20px;
}
</style>

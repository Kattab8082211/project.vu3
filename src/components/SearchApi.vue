<template>
  <div class="container">
    <h2>Search Products by Title</h2>

    <input
      type="text"
      v-model="searchTerm"
      placeholder="Enter product title..."
      class="search-input"
    />

    <button @click="fetchProducts">Load Products</button>

    <div v-if="filteredProducts.length" class="product-grid">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="product-card"
      >
        <img :src="product.image" alt="" class="product-image" />
        <div class="product-content">
          <!--<h3 class="product-title clamp-2">{{ product.title }}</h3>-->
          <p class="product-description clamp-3">
            {{ product.description.split(" ").slice(0, 10).join(" ") }}
          </p>
          <div class="product-footer">
            <span class="product-price">${{ product.price }}</span>
            <button class="add-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>

    <p
      v-if="filteredProducts.length === 0 && products.length > 0"
      class="no-results"
    >
      No results found
    </p>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import axios from "axios";

const products = ref([]);

const searchTerm = ref("");

const fetchProducts = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    products.value = response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

const filteredProducts = computed(() => {
  return products.value.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: 30px auto;
  text-align: center;
}
.search-input {
  width: 100%;
  padding: 8px;
  margin: 15px 0;
  font-size: 16px;
}
button {
  background: #42b983;
  color: white;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}
button:hover {
  background: #369870;
}
.no-results {
  margin-top: 20px;
  color: #777;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
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

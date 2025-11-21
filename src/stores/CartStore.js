import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCartStore = defineStore("cart", () => {
  const cartItems = ref([]);

  function addToCart(product) {
    const existing = cartItems.value.find((p) => p.id === product.id);

    if (existing) {
      existing.quantity++;
    } else {
      cartItems.value.push({ ...product, quantity: 1 });
    }
  }

  function removeItem(id) {
    cartItems.value = cartItems.value.filter((item) => item.id !== id);
  }

  const cartCount = computed(() =>
    cartItems.value.reduce((total, item) => total + item.quantity, 0)
  );

  return { cartItems, addToCart, removeItem, cartCount };
});

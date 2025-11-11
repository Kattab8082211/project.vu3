import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const token = ref(localStorage.getItem("token") || null);

  const isLoggedIn = computed(() => !!token.value);

  function login(newToken) {
    token.value = newToken;
    localStorage.setItem("token", newToken);
    console.log("LOGIN CALLED, TOKEN =", newToken);
  }

  function logout() {
    token.value = null;
    localStorage.removeItem("token");
    console.log("LOGOUT CALLED");
  }

  return { token, isLoggedIn, login, logout };
});

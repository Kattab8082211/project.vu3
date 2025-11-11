<template>
  <nav class="navbar" :class="{ dark: isDark }">
    <!-- Logo -->
    <div class="you">
      <img src="/log.png" alt="Logo" style="width: 40px; height: 40px" />
    </div>

    <!-- Menu Button -->
    <button class="menu-toggle" @click="menuOpen = !menuOpen">☰</button>

    <!-- Links -->
    <ul class="nav-links" :class="{ open: menuOpen }">
      <!-- روابط عامة -->
      <li v-for="(link, index) in links" :key="index">
        <router-link :to="link.path" @click="menuOpen = false">
          {{ link.name }}
        </router-link>
      </li>

      <!-- ✅ روابط حسب حالة المستخدم -->
      <template v-if="!isLoggedIn">
        <li>
          <router-link to="/login" @click="menuOpen = false">Login</router-link>
        </li>
        <li>
          <router-link to="/register" @click="menuOpen = false">
            Register
          </router-link>
        </li>
      </template>

      <template v-else>
        <li>
          <button @click="logout" class="logout-btn">Logout</button>
        </li>
      </template>

      <!-- زر الوضع الليلي -->
      <li class="mobile-dark">
        <DarkMode @toggle="toggleDarkMode" />
      </li>
    </ul>

    <div class="nav-actions desktop-dark">
      <DarkMode @toggle="toggleDarkMode" />
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import DarkMode from "@/components/BouttonDark.vue";
import { useAuthStore } from "../stores/authStore";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const auth = useAuthStore();
const { isLoggedIn } = storeToRefs(auth); // 👈 reactive getter
const router = useRouter();

const isDark = ref(false);
const menuOpen = ref(false);

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
};

const links = ref([
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Product", path: "/ProductPage" },
]);

const logout = async () => {
  auth.logout();
  menuOpen.value = false;
  await router.push("/login");
};
</script>

<style scoped>
.navbar {
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #bcb6b6;
  box-shadow: 0px 0px 9px -3px black;
  color: #000;
  z-index: 9999;
  transition: background-color 0.3s, color 0.3s;
}

.navbar.dark {
  background-color: #121212;
  color: #fff;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 15px;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: inherit;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #1b0fff;
}

.nav-actions {
  display: flex;
  align-items: center;
}

.menu-toggle {
  display: none;
  font-size: 26px;
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
}

/* 🔴 زر Logout */
.logout-btn {
  background: #d9534f;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
}
.logout-btn:hover {
  background: #b52b27;
}

@media (max-width: 768px) {
  .nav-links {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: #bcb6b6;
    border-top: 1px solid #ccc;
    display: none;
    padding: 10px 0;
    text-align: center;
  }

  .navbar.dark .nav-links {
    background-color: #1e1e1e;
  }

  .nav-links.open {
    display: flex;
    animation: slideDown 0.3s ease;
  }

  .mobile-dark {
    margin-top: 10px;
  }

  .desktop-dark {
    display: none;
  }

  .menu-toggle {
    display: block;
  }
}

@media (min-width: 769px) {
  .mobile-dark {
    display: none;
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

<template>
  <nav class="navbar" :class="{ dark: isDark }">
    <div class="you">
      <img src="/log.png" alt="Logo" style="width: 40px; height: 40px" />
    </div>

    <button class="menu-toggle" @click="menuOpen = !menuOpen">☰</button>

    <ul class="nav-links" :class="{ open: menuOpen }">
      <template v-if="!isLoggedIn">
        <li>
          <router-link to="/login" @click="menuOpen = false">Login</router-link>
        </li>
        <li>
          <router-link to="/register" @click="menuOpen = false"
            >Register</router-link
          >
        </li>
      </template>

      <template v-else>
        <li v-for="(link, index) in links" :key="index">
          <router-link :to="link.path" @click="menuOpen = false">
            {{ link.name }}
          </router-link>
        </li>

        <li class="mobile-only">
          <button @click="logout" class="logout-btn">Logout</button>
        </li>
      </template>

      <li class="mobile-dark">
        <DarkMode @toggle="toggleDarkMode" />
      </li>
    </ul>

    <!--  أزرار الجانب الأيمن (ديسكتوب فقط) -->
    <div class="nav-actions desktop-only">
      <DarkMode @toggle="toggleDarkMode" />

      <!-- 🔹 زر Logout يظهر في الديسكتوب على اليمين -->
      <button
        v-if="isLoggedIn"
        @click="logout"
        class="logout-btn desktop-logout"
      >
        <font-awesome-icon icon="fa-right-from-bracket" />
      </button>
    </div>
  </nav>
</template>
<script setup>
import { ref, computed } from "vue";
import DarkMode from "@/components/BouttonDark.vue";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "vue-router";

const auth = useAuthStore();
const isLoggedIn = computed(() => auth.isLoggedIn);

const router = useRouter();
const menuOpen = ref(false);
const isDark = ref(false);
const toggleDarkMode = () => (isDark.value = !isDark.value);

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
  z-index: 9999;
  color: white;
  font-size: 16px;
}

.navbar.dark {
  background-color: #121212;
  color: #fff;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 15px;
}

.nav-links a {
  color: inherit;
  text-decoration: none;
  transition: 0.3s;
}

.nav-links a:hover {
  background: #000;
  color: white;
  padding: 8px;
  border-radius: 8px;
}

.router-link-exact-active {
  background: #000;
  color: #fff;
  padding: 8px;
  border-radius: 8px;
}

.nav-actions {
  display: flex;
  align-items: center;
}

.logout-btn {
  background: #d9534f;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
}
.logout-btn:hover {
  background: #b52b27;
}

/* ========== RESPONSIVE ========== */

.menu-toggle {
  display: none;
  font-size: 26px;
  background: none;
  border: none;
  cursor: pointer;
}

.mobile-dark {
  display: none;
}

.mobile-only {
  display: none;
}

.desktop-only {
  display: flex;
}

/* 🔹 موبايل */
@media (max-width: 768px) {
  .nav-links {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: #bcb6b6;
    padding: 10px 0;
    display: none;
  }

  .nav-links.open {
    display: flex;
  }

  .mobile-dark {
    display: block;
  }

  .desktop-only {
    display: none;
  }

  .mobile-only {
    display: block;
    margin-top: 10px;
  }

  .menu-toggle {
    display: block;
  }
}
</style>

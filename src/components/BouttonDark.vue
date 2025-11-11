<template>
  <div class="app-container">
    <header class="header">
      <button @click="toggleDarkMode">
        <span v-if="isDark">
          <i class="fa-solid fa-moon fa-2xl">moon</i>
        </span>
        <span v-else>
          <i class="fa-solid fa-sun-bright fa-2xl">dark</i>
        </span>
      </button>
    </header>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Dark } from "quasar";

const isDark = ref(Dark.isActive);

function toggleDarkMode() {
  Dark.toggle();
  isDark.value = Dark.isActive;
}

onMounted(() => {
  isDark.value = Dark.isActive;
});
</script>

<style scoped>
.app-container {
  background-color: var(--q-background);
  color: var(--q-color);
  transition: background-color 0.3s, color 0.3s;
}

.header {
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
}

.toggle-btn {
  background: #42b983;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;
}

.toggle-btn:hover {
  background: #2d8b64;
}
</style>

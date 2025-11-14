<template>
  <div class="app-container">
    <header class="header">
      <button class="bg" @click="toggleDarkMode">
        <font-awesome-icon
          :icon="isDark ? 'fa-moon' : 'fa-sun'"
          class="fa-2xl"
          :style="{ color: isDark ? '#000' : '#fbc531' }"
        />
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
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;
}

.toggle-btn:hover {
  background: #2d8b64;
}
.bg {
  background-color: #bcb6b6;
  border: 0px;
}
</style>

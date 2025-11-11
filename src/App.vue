<!-- src/App.vue -->
<template>
  <div id="app">
    <Navbar />
    <router-view />
    <!-- This is where your pages show -->
  </div>
</template>

<script setup>
import Navbar from "@/components/MyNav.vue";
</script>

<style>
/* global styles if needed */
</style>

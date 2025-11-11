<template>
  <div class="contact-page" :class="{ dark: isDark }">
    <section class="contact-container">
      <h1>Contact Us</h1>

      <form @submit.prevent="submitForm" class="contact-form">
        <div class="form-group">
          <label for="name">Full Name</label>
          <input v-model="form.name" id="name" type="text" required />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input v-model="form.email" id="email" type="email" required />
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            v-model="form.message"
            id="message"
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit" class="send-btn">Send Message</button>

        <p v-if="successMessage" class="success">{{ successMessage }}</p>
      </form>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Dark } from "quasar";

const isDark = computed(() => Dark.isActive);

const form = ref({
  name: "",
  email: "",
  message: "",
});

const successMessage = ref("");

function submitForm() {
  console.log("Form Data:", form.value);
  successMessage.value = "✅ Your message has been sent successfully!";
  form.value = { name: "", email: "", message: "" };
}
</script>

<style scoped>
.contact-page {
  height: 85vh;
  margin-top: 80px;
  padding: 2rem;
  min-height: 80vh;
  background-color: #f5f5f5;
  color: #000;
  transition: background-color 0.3s, color 0.3s;
}

.contact-page.dark {
  background-color: #121212;
  color: #fff;
}

.contact-container {
  max-width: 600px;
  margin: auto;
  text-align: center;
}

h1 {
  color: #42b983;
  margin-bottom: 10px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
  text-align: left;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}

input,
textarea {
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  transition: border-color 0.3s;
}

input:focus,
textarea:focus {
  border-color: #42b983;
  outline: none;
}

.send-btn {
  background-color: #42b983;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;
}

.send-btn:hover {
  background-color: #2d8b64;
}

.success {
  margin-top: 1rem;
  color: #42b983;
  font-weight: bold;
}
</style>

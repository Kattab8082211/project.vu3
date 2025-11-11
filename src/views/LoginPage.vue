<template>
  <section class="login-page" :class="{ dark: isDark }">
    <div class="container">
      <h2 class="title">تسجيل الدخول</h2>

      <form @submit.prevent="handleLogin" class="form-box">
        <!-- البريد الإلكتروني -->
        <div class="form-group">
          <label for="email">البريد الإلكتروني:</label>
          <input
            type="email"
            v-model="email"
            id="email"
            placeholder="mail@example.com"
            required
          />
        </div>

        <!-- كلمة المرور -->
        <div class="form-group">
          <label for="password">كلمة المرور:</label>
          <input
            type="password"
            v-model="password"
            id="password"
            placeholder="••••••••"
            required
          />
        </div>

        <!-- رسالة الخطأ -->
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

        <!-- زر التسجيل -->
        <button type="submit" :disabled="loading">
          <span v-if="loading">جاري الدخول...</span>
          <span v-else>تسجيل الدخول</span>
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref, nextTick, computed } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/authStore";
import { Dark } from "quasar";

const isDark = computed(() => Dark.isActive);
// تعريف الأدوات
const router = useRouter();
const auth = useAuthStore();

// تعريف المتغيرات
const email = ref("");
const password = ref("");
const loading = ref(false);
const errorMessage = ref("");

// دالة تسجيل الدخول
async function handleLogin() {
  loading.value = true;
  errorMessage.value = "";

  try {
    const response = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/auth/signin",
      {
        email: email.value,
        password: password.value,
      }
    );

    const token = response.data.token;
    auth.login(token); // حفظ التوكن في Pinia

    // ✅ nextTick للتأكد من تحديث reactive قبل الانتقال
    await nextTick();

    router.push("/"); // توجيه المستخدم للصفحة الرئيسية
  } catch (error) {
    errorMessage.value =
      error.response?.data?.message ||
      "البريد الإلكتروني أو كلمة المرور غير صحيحة.";
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  background: #f9f9f9;
  transition: background 0.3s, color 0.3s;
  color: #222;
}

.login-page.dark {
  background: #121212;
  color: #eee;
}

.container {
  background: white;
  padding: 2rem 2.5rem;
  border-radius: 15px;
  box-shadow: 0 0 10px #ddd;
  width: 100%;
  max-width: 400px;
  transition: background 0.3s, color 0.3s;
}

.login-page.dark .container {
  background: #1e1e1e;
  color: #eee;
}

.title {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 24px;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.3rem;
}

input {
  width: 100%;
  padding: 0.6rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 14px;
  transition: background 0.3s, color 0.3s, border 0.3s;
}

.login-page.dark input {
  background: #2a2a2a;
  color: #eee;
  border: 1px solid #555;
}

button {
  width: 100%;
  background: #2d8f2d;
  color: white;
  font-size: 16px;
  padding: 0.7rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #1f6f1f;
}

button:disabled {
  background: #8bc48b;
  cursor: not-allowed;
}

.error {
  color: red;
  font-size: 14px;
  text-align: center;
  margin-top: 0.5rem;
}

.dark-toggle {
  margin-top: 1rem;
  width: 100%;
  padding: 0.5rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: #555;
  color: white;
  transition: background 0.3s;
}

.dark-toggle:hover {
  background: #777;
}
</style>

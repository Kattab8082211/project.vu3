<template>
  <div class="register-container" :class="{ dark: isDark }">
    <h2>تسجيل حساب جديد</h2>

    <form @submit.prevent="handleRegister" class="register-form">
      <!-- الاسم -->
      <div class="form-group">
        <label for="name">الاسم الكامل:</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          placeholder="اكتب اسمك الكامل"
          required
        />
      </div>

      <!-- البريد الإلكتروني -->
      <div class="form-group">
        <label for="email">البريد الإلكتروني:</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          placeholder="example@mail.com"
          required
        />
      </div>

      <!-- كلمة المرور -->
      <div class="form-group">
        <label for="password">كلمة المرور:</label>
        <input
          type="password"
          id="password"
          v-model="form.password"
          placeholder="••••••••"
          required
        />
      </div>

      <!-- تأكيد كلمة المرور -->
      <div class="form-group">
        <label for="rePassword">تأكيد كلمة المرور:</label>
        <input
          type="password"
          id="rePassword"
          v-model="form.rePassword"
          placeholder="أعد كتابة كلمة المرور"
          required
        />
      </div>

      <!-- رقم الهاتف -->
      <div class="form-group">
        <label for="phone">رقم الهاتف:</label>
        <input
          type="tel"
          id="phone"
          v-model="form.phone"
          placeholder="01XXXXXXXXX"
          required
        />
      </div>

      <!-- زر التسجيل -->
      <button type="submit" :disabled="loading">
        {{ loading ? "جارٍ التسجيل..." : "تسجيل" }}
      </button>

      <!-- الرسائل -->
      <p v-if="error" class="error-message">{{ error }}</p>
      <p v-if="success" class="success-message">{{ success }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/authStore";
import { Dark } from "quasar";

// ربط الوضع الداكن بالزر الموجود في Navbar
const isDark = computed(() => Dark.isActive);

const router = useRouter();
const auth = useAuthStore();

const form = ref({
  name: "",
  email: "",
  password: "",
  rePassword: "",
  phone: "",
});

const loading = ref(false);
const error = ref(null);
const success = ref(null);

const handleRegister = async () => {
  if (form.value.password !== form.value.rePassword) {
    error.value = "كلمتا المرور غير متطابقتين";
    return;
  }

  loading.value = true;
  error.value = null;
  success.value = null;

  try {
    const response = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/auth/signup",
      form.value
    );

    // حفظ التوكن في Pinia + LocalStorage
    const token = response.data.token;
    auth.login(token);

    success.value = "تم إنشاء الحساب بنجاح 🎉";

    // الانتقال بعد 1.5 ثانية إلى الصفحة الرئيسية
    setTimeout(() => {
      router.push("/");
    }, 1500);
  } catch (err) {
    error.value = err.response?.data?.message || "حدث خطأ أثناء التسجيل";
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.register-container {
  max-width: 420px;
  margin: 115px auto;
  padding: 25px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  direction: rtl;
  text-align: right;
  transition: background 0.3s, color 0.3s;
}

/* الوضع الداكن */
.register-container.dark {
  background: #1e1e1e;
  color: #eee;
  border: 1px solid #555;
}

.register-container.dark input {
  background: #2a2a2a;
  color: #eee;
  border: 1px solid #555;
}

.register-container.dark button {
  background-color: #42b983;
  color: white;
}

.register-container.dark button:hover {
  background-color: #2e8b6f;
}

.register-container.dark label {
  color: #eee;
}

.register-container.dark h2 {
  color: #42b983;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
  color: #555;
}

input {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  outline: none;
  transition: border 0.2s, background 0.3s, color 0.3s;
}

input:focus {
  border-color: #42b983;
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;
}

button:hover {
  background-color: #2e8b6f;
}

.error-message {
  margin-top: 10px;
  color: red;
  text-align: center;
}

.success-message {
  margin-top: 10px;
  color: green;
  text-align: center;
}
</style>

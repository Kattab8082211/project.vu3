import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import AboutPage from "@/views/AboutPage.vue";
import ContactPage from "@/views/ContactPage.vue";
import ProductPage from "@/views/ProductPage.vue";
import ProductDetails from "@/components/ProductDetails.vue";
import login from "@/views/LoginPage.vue";
import register from "@/views/RegisterPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component: AboutPage },
  { path: "/contact", component: ContactPage },
  { path: "/ProductPage", component: ProductPage },
  { path: "/product/:id", component: ProductDetails },
  { path: "/login", component: login },
  { path: "/register", component: register },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

// src/main.js
import { createApp } from "vue";
import { createPinia } from "pinia";
import { Quasar, Dark } from "quasar";
import iconSet from "quasar/icon-set/material-icons";
import "quasar/src/css/index.sass";
import PrimeVue from "primevue/config";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faLock);
const app = createApp(App);
const pinia = createPinia();

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(createPinia());
app.use(PrimeVue);
app.use(Quasar, {
  plugins: {},
  iconSet,
});

// Default: Light mode
Dark.set(false);

app.use(pinia);
app.use(router);
app.mount("#app");

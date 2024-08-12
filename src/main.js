import './assets/main.css'
import './assets/rtl.css';
import './assets/ltr.css';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PrimeVue from "primevue/config";
import "primeicons/primeicons.css";
import { createI18n } from "vue-i18n";
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// استيراد الترجمات
import en from "../src/components/local/en.json";
import ar from "../src/components/local/ar.json";

// إعداد i18n
const i18n = createI18n({
  locale: "en", // اللغة الافتراضية
  messages: {
    en,
    ar,
  },
});

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router).use(PrimeVue).use(i18n);

app.mount('#app')

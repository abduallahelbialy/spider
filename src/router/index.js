import { createRouter, createWebHistory } from 'vue-router'
import home from "../components/layout/Nav.vue"
import Service from "../views/Service.vue";
import Storew from "../views/Storeapp.vue";
import Slider from "../views/Slider.vue";
import About from "../views/About.vue";
import Works from "../views/Works.vue";
import Errorpage from "../views/Errorpage.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/service",
      name: "service",
      component: Service,
    },
    {
      path: "/Slider",
      name: "Slider",
      component: Slider,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/works",
      name: "Works",
      component: Works,
    },
    {
      path: "/store",
      name: "store",
      component: Storew,
    },

    {
      path: "/:cathAll(.*)",
      name: "ErrorPage",
      component: Errorpage,
    },
  ],
});

export default router

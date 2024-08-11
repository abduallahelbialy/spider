<template>
  <div class="hero" >
    <canvas ref="canvas" :width="canvasWidth" :height="canvasHeight"></canvas>

    <nav class="navbar navbar-expand-lg sticky-top">
      <div class="container">
        <div class=" ">
          <button class="btn">{{ $t("message.contact") }}</button>
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse"
          id="navbarSupportedContent"
          ref="navbarContent"
        >
          <ul class="navbar-nav m-auto mb-2 mb-lg-0">
            <div class="d-flex mx-3 align-items-center cvar2">
              <img :src="languageIcon" @click="changeLanguage" alt="" />
            </div>
            <li class="nav-item" v-for="link in Links" :key="link.id">
              <router-link
                :class="{
                  'nav-link': true,
                  'active fw-medium': $route.path === link.path,
                }"
                :to="link.path"
              >
                {{ $t(link.link) }}
              </router-link>
            </li>
          </ul>
          <router-link class="navbar-brand" to="/">
            <div class="logo">
              <img
                src="../../assets/logo_white.6b0b6d2.svg"
                alt=""
                class="img-fluid"
              />
            </div>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
 
    <Home />
  <Service />
  <About />
  <Works />
  <Webss />
  <Optamstion />
  <Copration />
  <Storeapp class="mt-4" />
  <Blog/>
  <Testmelions/>
  <Coo/>
</template>

<script>
import Home from "../../views/Home.vue";
import Service from "../../views/Service.vue";
import About from "../../views/About.vue";
import Works from "../../views/Works.vue";
import Webss from "../../views/Webss.vue";
import Optamstion from "../../views/Optamstion.vue";
import Copration from "../../views/Copration.vue";
import Storeapp from "../../views/Storeapp.vue";
import Blog from "../../views/Blog.vue";
import Testmelions from "../../views/Testmelions.vue";
import Coo from "../../views/Coo.vue";
import imglang from "../../assets/en.dc03478.png";
import imglang2 from "../../assets/ar.26e8b3d.png";

export default {
  name: "nav",
  data() {
    return {
            currentPath: window.location.pathname,

      canvasWidth: window.innerWidth,
      canvasHeight: window.innerHeight,
      points: [],
      pointCount: 100,
      languageIconEn: imglang, // صورة اللغة الإنجليزية
      languageIconAr: imglang2, // صورة اللغة العربية
      mouseX: null,
      mouseY: null,
      Links: [
        { id: 5, link: "linkss.6", path: "/blognbm" },
        { id: 5, link: "linkss.5", path: "/store" },
        { id: 4, link: "linkss.4", path: "/works" },
        { id: 3, link: "linkss.3", path: "/about" },
        { id: 2, link: "linkss.2", path: "/services" },
        { id: 1, link: "linkss.1", path: "/" },
      ],
    };
  },
  components: {
    Home,
    Service,
    About,
    Works,
    Webss,
    Optamstion,
    Copration,
    Storeapp,
    Blog,
    Testmelions,
    Coo
  },
  computed: {
    languageIcon() {
      return this.$i18n.locale === "en"
        ? this.languageIconEn
        : this.languageIconAr;
    },
  },
  methods: {
    changeLanguage() {
      if (this.$i18n.locale === "en") {
        this.$i18n.locale = "ar";
        document.body.style.direction = "rtl";
      } else {
        this.$i18n.locale = "en";
        document.body.style.direction = "ltr";
      }
    },
    toggleMenu() {
      const navbarContent = this.$refs.navbarContent;
      if (navbarContent.classList.contains("show")) {
        navbarContent.classList.remove("show");
      } else {
        navbarContent.classList.add("show");
      }
    },
    closeMenu() {
      const navbarContent = this.$refs.navbarContent;
      if (navbarContent.classList.contains("show")) {
        navbarContent.classList.remove("show");
      }
    },
    handleClickOutside(event) {
      const navbarContent = this.$refs.navbarContent;
      if (!navbarContent.contains(event.target)) {
        this.closeMenu();
      }
    },
    initPoints() {
      for (let i = 0; i < this.pointCount; i++) {
        this.points.push({
          x: Math.random() * this.canvasWidth,
          y: Math.random() * this.canvasHeight,
          dx: (Math.random() - 0.5) * 2,
          dy: (Math.random() - 0.5) * 2,
        });
      }
    },
    drawPoints(ctx) {
      ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
      this.points.forEach((point) => {
        point.x += point.dx;
        point.y += point.dy;

        if (point.x < 0 || point.x > this.canvasWidth) point.dx *= -1;
        if (point.y < 0 || point.y > this.canvasHeight) point.dy *= -1;

        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#eee";
        ctx.fill();
      });

      for (let i = 0; i < this.points.length; i++) {
        for (let j = i + 1; j < this.points.length; j++) {
          let dist = Math.sqrt(
            Math.pow(this.points[i].x - this.points[j].x, 2) +
              Math.pow(this.points[i].y - this.points[j].y, 2)
          );
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(this.points[i].x, this.points[i].y);
            ctx.lineTo(this.points[j].x, this.points[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / 150})`;
            ctx.stroke();
          }
        }
      }

      if (this.mouseX !== null && this.mouseY !== null) {
        this.points.forEach((point) => {
          let dist = Math.sqrt(
            Math.pow(this.mouseX - point.x, 2) +
              Math.pow(this.mouseY - point.y, 2)
          );
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(this.mouseX, this.mouseY);
            ctx.lineTo(point.x, point.y);
            ctx.strokeStyle = `rgba(255, 0, 0, ${1 - dist / 150})`;
            ctx.stroke();
          }
        });
      }
    },
    animate() {
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext("2d");

      const animateLoop = () => {
        this.drawPoints(ctx);
        requestAnimationFrame(animateLoop);
      };

      animateLoop();
    },
    updateMousePosition(e) {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    },
  },
  mounted() {
    this.initPoints();
    this.animate();
    window.addEventListener("mousemove", this.updateMousePosition);
    window.addEventListener("resize", () => {
      this.canvasWidth = window.innerWidth;
      this.canvasHeight = window.innerHeight;
    });
    window.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    window.removeEventListener("mousemove", this.updateMousePosition);
    window.removeEventListener("click", this.handleClickOutside);
  },
   created() {
    this.$watch(
      () => this.$route.path,
      (newPath, oldPath) => {
        this.currentPath = newPath;
      }
    );
  },
};
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  overflow: hidden; /* للتأكد من أن الـ canvas يغطي كامل المساحة */
  background-color: #25006c;
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.navbar {
  background: transparent !important;
  backdrop-filter: blur(15px);
  background-color: rgba(37, 0, 108, 0.8);
}
.navbar-nav a {
  color: #fff;
  padding: 0 15px !important;
  margin: 12px 0 !important;
  font-weight: 500;
  font-size: 17px;
}
.active {
  border-bottom: 2px solid red;
  color: red !important;
  width: fit-content;
}
.cvar2 {
  cursor: pointer;
}
.logo {
  max-width: 130px;
}

.btn {
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  color: white;
  border: 3px solid #e81212;
  background-color: #e81212;
  cursor: pointer;
  position: relative;
  background-color: transparent;
  text-decoration: none;
  overflow: hidden;
  width: 130px;
  padding: 7px;
  border-radius: 6px;
  z-index: 1;
  font-family: inherit;
}
.btn:hover {
  color: #a81212;
}
.btn::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #e81212;
  transform: translateX(0%);
  transition: all 0.3s;
  z-index: -1;
}

.btn:hover::before {
  transform: translateX(100%);
}
/* .rtl {
  direction: rtl;
}
.ltr {
  direction: ltr;
} */
@media (max-width: 477px) {
  .btn {
    margin: 10px 0;
  }
}
</style>

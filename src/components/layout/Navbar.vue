<template>
  <!-- Start of the navigation bar -->
  <nav :class="['navbar', 'navbar-expand-lg', 'sticky-top', { 'scrolled': isScrolled }]">
    
    <!-- Main container for the navbar content -->
    <div class="container">

      <!-- Contact button on the left -->
      <div class=" ">
        <button class="btn pcab">{{ $t("message.contact") }}</button>
      </div>

      <!-- Website logo and link to the homepage -->
      <router-link class="navbar-brand phoa" to="/">
        <div class="logo">
          <img
            src="../../assets/logo_white.6b0b6d2.svg"
            alt=""
            class="img-fluid"
          />
        </div>
      </router-link>

      <!-- Toggler button for collapsing and expanding the navbar on small screens -->
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

      <!-- Main navigation links in the navbar -->
      <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
        ref="navbarContent"
      >
        <ul class="navbar-nav m-auto mb-2 mb-lg-0">
          
          <!-- Language switcher icon -->
          <div class="d-flex mx-3 align-items-center cvar2">
            <img :src="languageIcon" @click="changeLanguage" alt="" />
          </div>

          <!-- Repeated navigation links -->
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

        <!-- Second website logo and link to the homepage (displayed on larger screens) -->
        <router-link class="navbar-brand barntwo" to="/">
          <div class="logo">
            <img
              src="../../assets/logo_white.6b0b6d2.svg"
              alt=""
              class="img-fluid"
            />
          </div>
        </router-link>

        <!-- Contact button on the right -->
        <div class=" ">
          <button class="btn pcabs">{{ $t("message.contact") }}</button>
        </div>
      </div>
    </div>
  </nav>
  <!-- End of the navigation bar -->
</template>


<script>
import imglang from "../../assets/en.dc03478.png";
import imglang2 from "../../assets/ar.26e8b3d.png";
export default {
name:"navbar",
data() {
    return {
            isScrolled: false,

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
        { id: 5, link: "linkss.5", path: "/storea" },
        { id: 4, link: "linkss.4", path: "/worksa" },
        { id: 3, link: "linkss.3", path: "/abouta" },
        { id: 2, link: "linkss.2", path: "/servicea" },
        { id: 1, link: "linkss.1", path: "/" },
      ],
    };
  },
  computed: {
    languageIcon() {
      return this.$i18n.locale === "en"
        ? this.languageIconEn
        : this.languageIconAr;
    },
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
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
},
 mounted() {
   
    window.addEventListener("click", this.handleClickOutside  );
    window.addEventListener('scroll', this.handleScroll);
  },
  
  beforeUnmount() {
    window.removeEventListener("mousemove", this.updateMousePosition);
    window.removeEventListener("click", this.handleClickOutside);
        window.removeEventListener('scroll', this.handleScroll);

  },
   created() {
    this.$watch(
      () => this.$route.path,
      (newPath, oldPath) => {
        this.currentPath = newPath;
      }
    );
  },
}
</script>

<style scoped>
.navbar {
  background: var(--main-color) !important;
  backdrop-filter: blur(15px);
    transition: background-color 0.3s ease;

  /* background-color: rgba(37, 0, 108, 0.8); */
}
.navbar.scrolled {
  background-color: rgba(37, 0, 108, 0.8) !important;
}
.navbar-nav a {
  color: #fff;
  padding: 0 15px !important;
  margin: 12px 0 !important;
  font-weight: 500;
  font-size: 17px;
}
.active {
  color: red !important;
  position: relative;
  width: fit-content;
  font-weight: bold;
}

.active::before,
.active::after {
  content: '';
  position: absolute;
  height: 2px;
  background-color: red;
  left: 0;
  right: 0;
  margin: auto;
}

.active::before {
  bottom: -7px; 
  width: 70%;
}

.active::after {
  bottom: -10px; /* المسافة بين النص والخط الثاني */
  width: 70%; /* عرض الخط الثاني */
}
.cvar2 {
  cursor: pointer;
}
.logo {
  max-width: 130px;
}
.pcabs{
  display: none !important;
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
.phoa{
  display: none;
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
  .phoa{
  display: block;
}
.pcab{
  display: none;
}
.barntwo{
  display: none;
}
.pcabs{
  display: block !important;
}
}
@media (max-width: 799px) {
  
  .phoa{
  display: block;
}
.pcab{
  display: none;
}
.barntwo{
  display: none;
}
.pcabs{
  display: block !important;
}
}
@media (max-width: 992px) {
  
  .phoa{
  display: block;
}
.pcab{
  display: none;
}
.barntwo{
  display: none;
}
.pcabs{
  display: block !important;
}
}
</style>
<template>
  <div class="coo">
    <div class="container">
      <div class="row">
        <div class="title text-center">
          <h1>{{ $t("message.Directors") }}</h1>
        </div>
        <div class="d-flex justify-content-center">
         <swiper
    :slidesPerView="slidesPerView"
    :spaceBetween="30"
    :freeMode="true"
    :modules="modules"
    :autoplay="autoplay"
    :loop="true"
    class="mySwiper"
  >
    <swiper-slide v-for="(member, index) in members" :key="index">
      <div class="card-coo d-flex flex-column align-items-center">
        <div class="co-img">
          <img :src="member.imgSrc" :alt="member.name" />
          <div class="overlay">
            <div class="social-icons">
              <img src="../assets/Gk6XKPFyi6fXyVp0PIFJbLBVfXtmDgKv5Wb12ONi.png" alt="Egypt Flag" />
              <a :href="member.instagram" target="blank">
                <i class="pi pi-instagram"></i>
              </a>
              <a :href="member.twitter" target="blank">
                <i class="pi pi-twitter"></i>
              </a>
              <a :href="member.linkedin" target="blank">
                <i class="pi pi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="text-coo text-center">
          <h1>{{ member.name }}</h1>
          <span>{{ member.position }}</span>
        </div>
      </div>
    </swiper-slide>
  </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper/modules";
import img1 from "../assets/coo1.webp"
import img2 from "../assets/coo2.webp"
import img3 from "../assets/coo3.webp"
export default {
  name: "Coo",
  data() {
    return {
      slidesPerView: 3,
      modules: [FreeMode, Autoplay],
      autoplay: {
        delay: 2600,
        disableOnInteraction: false,
      },
       members: [
        {
          name: "Mahmoud Elshaprawy",
          position: "COO",
          imgSrc: img1,
          instagram: "https://www.linkedin.com/in/mahmoud-elshaprawy-6ab0351a7/",
          twitter: "https://www.linkedin.com/in/mahmoud-elshaprawy-6ab0351a7/",
          linkedin: "https://www.linkedin.com/in/mahmoud-elshaprawy-6ab0351a7/"
        },
        {
          name: "Mahmoud Abas",
          position: "CEO",
          imgSrc: img2,
          instagram: "https://www.linkedin.com/in/mmabas77/",
          twitter: "https://www.linkedin.com/in/mmabas77/",
          linkedin: "https://www.linkedin.com/in/mmabas77/"
        },
        {
          name: "Gamal Khalad",
          position: "CFO",
          imgSrc: img3,
          instagram: "https://www.linkedin.com/in/gamalkh299/",
          twitter: "https://www.linkedin.com/in/gamalkh299/",
          linkedin: "https://www.linkedin.com/in/gamalkh299/"
        }
      ],
    };
  },
  components: { Swiper, SwiperSlide },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  methods: {
    handleResize() {
      this.slidesPerView = this.getSlidesPerView();
    },
    getSlidesPerView() {
      return window.matchMedia("(max-width: 477px)").matches ? 1 : 3;
    },
  },
};
</script>

<style scoped>
.coo {
  padding: 40px 0;
}
.title h1 {
  font-size: 25px;
  line-height: 2;
  font-weight: 600;
}
.co-img {
  position: relative;
  width: 100%;
  max-width: 330px;
  height: 400px;
}
.co-img img {
  width: 100%;
  height: 100%;
  display: block;
}
.card-coo {
  transition: 0.3s;
  padding: 5px;
}
.card-coo:hover {
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}
.co-img .overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 4px;
}
.co-img:hover .overlay {
  opacity: 1;
}
.social-icons {
  justify-content: center;
  display: flex;
  gap: 15px;
  background-color: var(--main-color);

  width: 200px;
  margin: auto;
  align-items: center;
  height: 60px;
  border-radius: 4px;
  transition: transform 0.3s ease;
  transform: translateY(100%);
  position: absolute;
  bottom: 0;
}
.co-img:hover .social-icons {
  transform: translateY(0%);
}
.social-icons img {
  width: 20px;
  height: 20px;
}
.social-icons i {
  color: white;
  font-size: 20px;
}
.text-coo h1 {
  font-size: 23px;
  line-height: 2;
  font-weight: bold;
}
.text-coo span {
  color: var(--main-color);
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (max-width:477px) {
    .co-img {
    
    height: 344px;
}
.text-coo h1 {
    font-size: 18px;
}
}
</style>

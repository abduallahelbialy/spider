<template>
  <div class="testmelion">
    <div class="container">
      <div class="row">
        <div class="title text-center mb-3" data-aos="fade-down">
          <h1>{{ $t("message.more") }}</h1>
        </div>
        <div class="test-sli mt-5">
          <swiper
            :slidesPerView="slidesPerView"
            :spaceBetween="30"
            :freeMode="true"
            :modules="modules"
            :autoplay="autoplay"
            :loop="true"
            class="mySwiper"
          >
            <swiper-slide v-for="info in imgs" :key="info.id">
              <div class="img-test">
                <img :src="info.img" alt="" />
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="say pt-5 mt-5">
          <div class="title text-center mb-3">
            <h1>{{ $t("message.say") }}</h1>
          </div>
          <swiper
            :slidesPerView="slidesPerView"
            :spaceBetween="30"
            :freeMode="true"
            :modules="modules"
            :autoplay="autoplay"
            :loop="true"
            class="mySwiper mb-4 pb-3"
          >
            <swiper-slide v-for="cli in clients" :key="cli.id">
              <div class="card-sya" >
                <div class="icon-say position-relative">
                  <div class="img-icony position-absolute">
                    <img
                      src="../assets/download.svg"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                </div>
                <div class="p-2 text-card">
                  <div class="stars mb-3 mt-3">
                    <Rating v-model="value" :stars="5" />
                  </div>
                  <p class="text-end">
                   {{$t(cli.par)  }}
                  </p>
                </div>
                <div
                  class="client d-flex gap-2 justify-content-end mt-3 align-items-center"
                >
                  <div class="text-client d-flex flex-column align-items-end">
                    <h1>{{$t(cli.text)  }}</h1>
                    <p>{{$t(cli.des)  }}</p>
                  </div>
                  <div class="img-client">
                    <img :src="cli.imgd" alt="" />
                  </div>
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
import Rating from "primevue/rating";

import img1 from "../assets/test1.webp";
import img2 from "../assets/test2.webp";
import img3 from "../assets/test3.webp";
import img4 from "../assets/test4.webp";
import img5 from "../assets/test5.webp";
import img6 from "../assets/test6.webp";
import img7 from "../assets/test7.webp";
import img8 from "../assets/test8.webp";
import imgc1 from "../assets/testimonial_avatar.4f3f3b9.svg";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper/modules";
import { ref } from "vue";
export default {
  name: "Test",
  data() {
    return {
      isArabic: true, // تأكد من تحديد هذه القيمة بناءً على اللغة الحالية
      clients: [
        {
          id: 1,
          imgd: imgc1,
          par: "says.1",
          text: "says.2",
          des: "says.3",
        },
        {
          id: 2,
          imgd: imgc1,
         par: "says.1",
          text: "says.2",
          des: "says.3",
        },
        {
          id: 3,
          imgd: imgc1,
         par: "says.1",
          text: "says.2",
          des: "says.3",
        },
        {
          id: 4,
          imgd: imgc1,
          par: "says.1",
          text: "says.2",
          des: "says.3",
        },
      ],
      imgs: [
        { id: 1, img: img1 },
        { id: 2, img: img2 },
        { id: 3, img: img3 },
        { id: 4, img: img4 },
        { id: 5, img: img5 },
        { id: 6, img: img6 },
        { id: 7, img: img7 },
        { id: 8, img: img8 },
        { id: 8, img: img8 },
      ],
      value: ref(3),
      slidesPerView: 2,
      modules: [FreeMode, Autoplay],
      autoplay: {
        delay: 2200,
        disableOnInteraction: false,
      },
    };
  },
  components: { Swiper, SwiperSlide, Rating },
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
  watch: {
    isArabic(newVal, oldVal) {
      this.$nextTick(() => {
        this.$refs.mySwiper.swiper.update();
      });
    },
  },
};
</script>

<style scoped>
.testmelion {
  padding: 70px 0;
  background-color: var(--main-color);
  background-size: cover;
}
.title h1 {
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  line-height: 3;
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
.img-test {
  width: 100%;
}
.img-test img {
  max-width: 150px;
}
.card-sya {
  width: 400px;
  background-color: #fff;
  border-radius: 7px;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.text-card {
  border-bottom: 1px solid #ddd;
}
.text-client h1 {
  font-size: 15px;
  font-weight: bold;
  line-height: 2;
}
.text-client p {
  font-size: 13px;
}

.img-client img {
  width: 50px;
}
.stars {
  color: #ffc107;
  display: flex;
  justify-content: end;
  margin: 0 10px;
}
.img-icony {
  top: -51px;
  right: 10px;
}
@media (max-width: 477px) {
  .card-sya {
    width: 350px;
    margin: auto;
  }
}
</style>

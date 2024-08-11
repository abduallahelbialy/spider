<template>
   <swiper
          :slidesPerView="slidesPerView"
          :spaceBetween="30"
          :freeMode="true"
          :modules="modules"
          :autoplay="autoplay"
          :loop="true"
          class="mySwiper"
        >
          <swiper-slide>
            <div class="card d-flex flex-column">
              <div class="info">
                <h1> {{ $t("message.front") }}</h1>
              </div>
              <div class="desrc mt-2">
                <p>
                  {{ $t("message.desfr") }}
                </p>
              </div>
              <div class="icon pt-4 d-flex align-items-start">
                <img src="../assets/icon1.png" alt="" class="img-fluid" />
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="cardtwo d-flex flex-column">
              <div class="info">
                <h1>{{ $t("message.ux") }}</h1>
              </div>
              <div class="desrc mt-2 mb-5">
                <p>
                 {{ $t("message.desux") }}
                </p>
              </div>
              <div class="icon pt-5 d-flex align-items-start">
                <img src="../assets/icon2.png" alt="" class="img-fluid" />
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card d-flex flex-column">
              <div class="info">
                <h1>{{ $t("message.team") }}</h1>
              </div>
              <div class="desrc mt-2 mb-5 pb-4">
                <p>
         {{ $t("message.desteam") }}
                </p>
              </div>
              <div class="icon pt-5 d-flex align-items-start">
                <img src="../assets/icon3.png" alt="" class="img-fluid" />
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="cardtwo d-flex flex-column">
              <div class="info">
                <h1>{{ $t("message.anlythis") }}</h1>
              </div>
              <div class="desrc mt-2 mb-5 pb-2">
                <p>
                 {{ $t("message.desanl") }}
                </p>
              </div>
              <div class="icon pt-1 d-flex align-items-start">
                <img src="../assets/icon4.png" alt="" class="img-fluid" />
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card d-flex flex-column">
              <div class="info">
                <h1>{{ $t("message.phone") }}</h1>
              </div>
              <div class="desrc mt-2 mb-3">
                <p>
                {{ $t("message.desphone") }}
                </p>
              </div>
              <div class="icon pt-5 d-flex align-items-start">
                <img src="../assets/icon5.png" alt="" class="img-fluid" />
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="cardtwo d-flex flex-column">
              <div class="info">
                <h1>{{ $t("message.host") }}</h1>
              </div>
              <div class="desrc mt-2 mb-4 ">
                <p>
                 {{ $t("message.deshost") }}
                </p>
              </div>
              <div class="icon pt-1  d-flex align-items-start">
                <img src="../assets/icon6.png" alt="" class="img-fluid" />
              </div>
            </div>
          </swiper-slide>
        </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper/modules";
export default {
name:"Slider",
data() {
    return {
      slidesPerView: 2,
      modules: [FreeMode, Autoplay],
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
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
.card {
  width: 350px;
  padding: 10px 10px;
  height: 380px;
  /* margin: 40px; */
  text-align: center;
  position: relative;
  overflow: hidden;
  color: black;
  transition: color 0.5s ease, font-weight 0.5s ease;
}

.card::before {
  content: "";
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #e81212;
  z-index: -1;
  transition: top 0.5s ease;
}
.card:hover {
  color: #fff;
  font-weight: bold;
  z-index: 5;
}

.card:hover::before {
  top: 0;
}
.cardtwo {
  width: 350px;
  height: 380px;
  padding: 10px 10px;
  /* margin: 40px; */
  text-align: center;
  position: relative;
  overflow: hidden;
  color: black;
  transition: color 0.5s ease, font-weight 0.5s ease;
  border: 1px solid rgba(0, 0, 0, 0.175);
  border-radius: 0.375rem;
}

.cardtwo::before {
  content: "";
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #3c06bc;
  z-index: -1;
  transition: top 0.5s ease;
}
.cardtwo:hover {
  color: #fff;
  font-weight: bold;
  z-index: 5;
}

.cardtwo:hover::before {
  top: 0;
}

.info h1 {
  font-size: 20px;
  font-weight: 600;
  line-height: 2;
}
.desrc {
  line-height: 2;
}

.icon {
  max-width: 40px;
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
</style>
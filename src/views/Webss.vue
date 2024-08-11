<template>
  <div class="project">
    <div class="container">
      <div class="row">
        <div class="title text-center mb-3">
          <h1>المشاريع الجاهزة</h1>
          <h2>سننشئ لك موقعًا على شبكة الإنترنت يلبي جميع متطلباتك وأكثر.</h2>
        </div>
        <swiper
          :slidesPerView="slidesPerView"
          :spaceBetween="30"
          :freeMode="true"
          :modules="modules"
          :autoplay="autoplay"
          :loop="true"
          class="mySwiper mt-3 mb-3"
        >
          <swiper-slide>
            <div class="content-img">
              <img src="../assets/optimize-image (1).webp" alt="" />
              <div class="overlay">
                <div class="text">
                  <div class="ifon">
                    <h1 class="d-flex justify-content-end">
                      {{ $t("message.yy") }}
                    </h1>
                    <p>
                      {{ $t("message.deyy") }}
                    </p>
                    <div class="google">
                      <img src="../assets/google-play.5158e44.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div></div
          ></swiper-slide>
          <swiper-slide>
            <div class="content-img">
              <img src="../assets/optimize-image.webp" alt="" />
              <div class="overlay">
                <div class="text">
                  <div class="ifon">
                    <h1 class="d-flex justify-content-end">
                      {{ $t("message.layer") }}
                    </h1>
                    <p>
                      {{ $t("message.delayer") }}
                    </p>
                    <div class="vist">
                      <button>{{ $t("message.vist") }}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div></swiper-slide
          ><swiper-slide>
            <div class="content-img">
              <img src="../assets/ap.webp" alt="" />
              <div class="overlay">
                <div class="text">
                  <div class="ifon">
                    <h1 class="d-flex justify-content-end">
                      {{ $t("message.poy") }}
                    </h1>
                    <p>
                      {{ $t("message.depoy") }}
                    </p>
                    <div class="google">
                      <img src="../assets/google-play.5158e44.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div></div
          ></swiper-slide>
          <swiper-slide>
            <div class="content-img">
              <img src="../assets/ap2.webp" alt="" class="spial" />
              <div class="overlay">
                <div class="text">
                  <div class="ifon">
                    <h1 class="d-flex justify-content-end">
                      {{ $t("message.goo") }}
                    </h1>
                    <p>
                      {{ $t("message.degoo") }}
                    </p>
                    <div class="vist">
                      <button>{{ $t("message.view") }}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div></swiper-slide
          >
          <swiper-slide>
           <div class="content-img">
                <img src="../assets/ap3.webp" alt="" />
                <div class="overlay">
                  <div class="text">
                    <div class="ifon">
                      <h1 class="d-flex justify-content-end">
                        {{ $t("message.asa") }}
                      </h1>
                      <p>
                        {{ $t("message.desasa") }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide
          >
        </swiper>
        <div class="view d-flex justify-content-center mt-3 align-items-center">
          <button>{{ $t("message.all") }}</button>
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
export default {
  name: "Webss",
  data() {
    return {
      slidesPerView: 2,
      modules: [FreeMode, Autoplay],
      autoplay: {
        delay: 1000,
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
      return window.matchMedia("(max-width: 477px)").matches ? 1 : 2;
    },
  },
};
</script>

<style scoped>
.project {
  padding: 20px 0;
  margin-top: 10px;
}
.title h1 {
  font-size: 15px;
  font-weight: 600;
}
.title h2 {
  font-size: 25px;
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

.info-btn {
  border-radius: 6px;
}
.info-btn button {
  background-color: transparent;
  width: 300px;
  padding: 12px;
  border-radius: 6px;

  border: none;
  color: #979796;
  transition: 0.3s;
}
.info-btn button:focus {
  color: #fff;
}
.info-btn button:hover {
  background-color: var(--main-color);
  color: #fff;
}
.active {
  background-color: var(--main-color);
}
.bord {
  border: 1px solid #e1e0e8;
  height: 25px;
}
.content-img {
  position: relative;
  width: 100%;
  max-width: 500px;
}
.content-img img {
  width: 100%;
  height: auto;
}
.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 4px;
  background-color: rgba(37, 0, 108, 0.8);
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 0.5s ease;
}

.content-img:hover .overlay {
  height: 100%;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  bottom: 40px;
  width: 100%;
  text-align: center;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.5s ease, transform 0.5s ease;
  transform: translateY(100%);
}

.content-img:hover .text {
  opacity: 1;
  transform: translateY(0);
}
.google {
  width: 100%;
  margin: auto;
}
.vist button {
  background-color: var(--red-color);
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 18px;
}
.view button {
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  border: 1px solid var(--main-color);
  background-color: var(--main-color);
  cursor: pointer;
  position: relative;
  background-color: transparent;
  text-decoration: none;
  overflow: hidden;
  width: 130px;
  padding: 8px;
  border-radius: 6px;
  z-index: 1;
  font-family: inherit;
}
.view button:hover {
  color: var(--main-color);
}
.view button::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: var(--main-color);
  transform: translateX(0%);
  transition: all 0.3s;
  z-index: -1;
}
.view button:hover:before {
  transform: translateX(100%);
}
.google {
  max-width: 100px;
}
.ifon {
  line-height: 2;
}
.ifon h1 {
  font-size: 25px;
  font-weight: 600;
  line-height: 2;
}
.ifon p {
  font-size: 14px;
}
.content-img .spial {
  height: 100%;
}
@media (max-width: 477px) {
  .ifon h1 {
    font-size: 20px;
  }
  .info-btn button {
    width: 250px;
  }
  .bord {
    display: none;
  }
  .text {
    bottom: 0px;
  }
  .ifon p {
    font-size: 11px;
  }
  .content-img .spial {
    height: 250px;
  }
  .content-img {
    position: relative;
    width: 100%;
    max-width: 341px;
  }
}
@media (max-width: 477px) {
  .title h2 {
    font-size: 13px;
  }
  .title h1 {
    font-size: 12px;
  }
}
</style>

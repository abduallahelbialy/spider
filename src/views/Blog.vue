<template>
  <div class="blog">
    <div class="container">
      <div class="row">
        <div class="title text-center mb-3" data-aos="fade-down">
          <h1>{{$t("message.blog")}}</h1>
          <h2>{{ $t("message.desigs") }}</h2>
        </div>
        <div class="d-flex justify-content-evenly align-items-center flex-wrap" data-aos="fade-down">
          <swiper
            :slidesPerView="slidesPerView"
            :spaceBetween="30"
            :freeMode="true"
            :modules="modules"
            :autoplay="autoplay"
            :loop="true"
            class="mySwiper"
          >
            <swiper-slide v-for="slider in sliders" :key="slider.id">
              <div class="card">
                <div class="card-img">
                  <img :src="slider.img" alt="" />
                </div>
                <div
                  class="text-card d-flex justify-content-end flex-column align-items-end"
                >
                  <h1>{{$t(slider.text)  }}</h1>
                  <h2>{{$t(slider.title)  }}</h2>
                  <p class="text-end">
                    {{$t(slider.par)  }}
                  </p>
                </div>
                <div class="d-flex justify-content-end gap-2 p-2">
                  <div class="text-icon d-flex flex-column align-items-end">
                    <p>{{ $t(slider.by) }}</p>
                    <span>{{$t(slider.date)  }}</span>
                  </div>
                  <div class="img-icon">
                    <img :src="slider.icon" alt="" />
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="requst mb-3 mt-4 text-center">
          <button class="btn">{{ $t("message.Articles") }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "../assets/blog1.webp";
import img2 from "../assets/blog2.png";
import img3 from "../assets/blog3.webp";
import img4 from "../assets/optimize-image (6).webp";
import imgo from "../assets/publisher.e01c11a.svg";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper/modules";
export default {
  name: "blog",
  data() {
    return {
      slidesPerView: 1,
      modules: [FreeMode, Autoplay],
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      sliders: [
        {
          id: 1,
          img: img1,
          icon: imgo,
          text: "blogs.1",
          par:"blogs.2",
          title: "blogs.3",
          date: "blogs.4",
          by: "blogs.5",
        },
        {
          id: 2,
          img: img2,
          icon: imgo,
          text: "blogs.6",
          par: "blogs.7",
          title: "blogs.8",
          date: "blogs.4",
          by: "blogs.5",
        },
        {
          id: 3,
          img: img3,
          icon: imgo,
          text: "blogs.9",
          par: "blogs.10",
          title: "blogs.11",
         date: "blogs.4",
          by: "blogs.5",
        },
        {
          id: 4,
          img: img4,
          icon: imgo,
          text: "blogs.12",
          par: "blogs.13",
          title: "blogs.14",
         date: "blogs.4",
          by: "blogs.5",
        },
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
.blog {
  padding: 20px 0;
}
.title h1 {
  font-size: 17px;
  font-weight: 600;
}
.title h2 {
  font-size: 25px;
  font-weight: 600;
}
.card {
  max-width: 350px;
  /* padding: 5px 5px; */
  /* height: 580px; */
  overflow: hidden;
}
.card-img {
  width: 100%;
  height: 250px;
  transition: all 0.3s ease-in-out;
}
.card-img img {
  max-width: 350px;
  height: 250px;
  width: 100%;
}
.card-img:hover {
  transform: scale(1.1);
}
.text-card {
  padding: 10px;
}
.text-card h1 {
  font-size: 18px;
  color: var(--main-color);
  line-height: 2;
}
.text-card h2 {
  font-size: 20px;
  font-weight: 600;
  line-height: 2;
}
.text-card p {
  color: #919191;
  font-size: 18px;
  line-height: 2;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.img-icon img {
  max-width: 50px;
}
.text-icon p {
  font-weight: 600;
  font-size: 18px;
  color: var(--main-color);
}
.text-icon span {
  color: #919191;
  font-size: 18px;
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
.btn {
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  color: white;
  border: 1px solid var(--main-color);
  background-color: var(--main-color);
  cursor: pointer;
  position: relative;
  background-color: transparent;
  text-decoration: none;
  overflow: hidden;
  width: 130px;
  padding: 9px;
  border-radius: 6px;
  z-index: 1;
  font-family: inherit;
}
.btn:hover {
  color: var(--main-color);
}
.btn::before {
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

.btn:hover::before {
  transform: translateX(100%);
}
/* ///media */
@media (max-width: 477px) {
  .title h2 {
    font-size: 16px;
  }
  .text-card h2 {
    font-size: 16px;
  }
  .text-card p {
    font-size: 15px;
  }
  .text-icon p {
    font-size: 14px;
  }
  .img-icon img {
    max-width: 45px;
  }
  .text-icon span {
    color: #919191;
    font-size: 16px;
  }
  .text-card h1 {
    font-size: 16px;
  }
}
</style>

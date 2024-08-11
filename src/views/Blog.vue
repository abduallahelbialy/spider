<template>
  <div class="blog">
    <div class="container">
      <div class="row">
        <div class="title text-center mb-3">
          <h1>المدونة</h1>
          <h2>تصميم مشروعك من شركة سبايدر-تك سيكون مختلفاً</h2>
        </div>
        <div class="d-flex justify-content-evenly align-items-center flex-wrap">
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
                  <h1>{{ slider.text }}</h1>
                  <h2>{{ slider.title }}</h2>
                  <p class="text-end">
                    {{ slider.par }}
                  </p>
                </div>
                <div class="d-flex justify-content-end gap-2 p-2">
                  <div class="text-icon d-flex flex-column align-items-end">
                    <p>{{ slider.by }}</p>
                    <span>{{ slider.date }}</span>
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
          <button class="btn">كل المقالات</button>
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
        delay: 2000,
        disableOnInteraction: false,
      },
      sliders: [
        {
          id: 1,
          img: img1,
          icon: imgo,
          text: "تجربة المستخدم",
          par: " تُركّز تجربة المستخدم (UX) على فهم عميق للمستخدمين، وما يحتاجون إليه، وما يُقدّرونه، وقُدراتهم وأيضاً حدودهم.",
          title: "ما هى تجربة المستخدم ؟",
          date: "11-8-2024",
          by: "نشر بواسطة: سبايدر-تك",
        },
        {
          id: 2,
          img: img2,
          icon: imgo,
          text: "تحسين محركات البحث",
          par: "هي عملية تطوير مواقع الويب لتناسب متطلبات محركات البحث المختلفة مثل Google أو Bing بهدف الظهور في نتائج البحث الأولى .",
          title: "ما هو السيو وما هي فائدته لموقعك ؟",
          date: "11-8-2024",
          by: "نشر بواسطة: سبايدر-تك",
        },
        {
          id: 3,
          img: img3,
          icon: imgo,
          text: " تحليل الأعمال",
          par: "تحليل الأعمال هو عملية تحديد احتياجات العمل، والمشاكل، والفرص، ومن ثم تحديد الحلول لمعالجة تلك القضايا.",
          title: "مفهوم تحليل الأعمال",
          date: "11-8-2024",
          by: "نشر بواسطة: سبايدر-تك",
        },
        {
          id: 4,
          img: img4,
          icon: imgo,
          text: "واجهة برمجة التطبيقات",
          par: "هو عبارة عن تقنية تسمح للتطبيقات بالوصول إلى البيانات والتفاعل مع مكونات البرامج الخارجية أو أنظمة التشغيل أو الوظائف المصغرة.",
          title: "ما هى واجهة برمجة التطبيقات ؟",
          date: "11-8-2024",
          by: "نشر بواسطة: سبايدر-تك",
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

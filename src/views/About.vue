<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div
          class="d-flex justify-content-around align-items-center flex-wrap-reverse"
        >
          <div class="animation col-12 col-md-6 mt-3">
            <div class="info-anmy">
              <img src="../assets/icons_path.1c7feb2.svg" alt="" />
            </div>
            <div class="animation-imgs">
              <div
                :style="positionStyleone"
                class="animation-one position-absolute"
              >
                <img src="../assets/an1.svg" alt="" class="one" />
              </div>
              <div
                :style="positionStyle"
                class="animation-two position-absolute"
              >
                <img src="../assets/an2.svg" alt="" class="two" />
              </div>
              <div
                :style="positionStylethree"
                class="animation-three position-absolute"
              >
                <img src="../assets/an3.svg" alt="" class="three" />
              </div>
              <div
                :style="positionStylefour"
                class="animation-four position-absolute"
              >
                <img src="../assets/zom.svg" alt="" class="four" />
              </div>
              <div
                :style="positionStylefive"
                class="animation-five position-absolute"
              >
                <img src="../assets/an4.svg" alt="" class="five" />
              </div>
              <div
                :style="positionStylesix"
                class="animation-six position-absolute"
              >
                <img src="../assets/an5.svg" alt="" class="six" />
              </div>
              <div
                :style="positionStyleseven"
                class="animation-seven position-absolute"
              >
                <img src="../assets/an6.svg" alt="" class="seven" />
              </div>
            </div>
          </div>
          <div class="text col-12 col-md-6 ">
            <div class="info-text text-end">
              <h1>{{ $t("message.about-spider") }}</h1>
            </div>
            <div class="info-descrption text-end">
              <p>
                {{ $t("message.desinformation") }}
              </p>
            </div>
            <div
              class="buntr d-flex gap-3 justify-content-end align-items-end flex-wrap"
            >
              <button class="btn2">{{ $t("message.down") }}</button>
              <button class="btn">{{ $t("message.information") }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="parent position-relative m-auto">
    <div class="d-flex justify-content-around   align-items-center flex-wrap fs ">
      <div  class="" v-for="box in boxs" :key="box.id">
        <div class="phona d-flex gap-3 align-items-center " >
          <div class="text-box d-flex flex-column align-items-center ">
            <span>{{ box.num }}</span>
            <p>{{$t(box.text)  }}</p>
          </div>
          <div class="img-box">
            <img :src="box.img" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "../assets/pro1.png";
import img2 from "../assets/pro2.png";
import img3 from "../assets/pro3.png";
import img4 from "../assets/pro4.png";
export default {
  name: "about",
  data() {
    return {
      boxs: [
        { id: 1, img: img1, text: "jops.1", num: "+45" },
        { id: 2, img: img2, text: "jops.2", num: "+25" },
        { id: 3, img: img3, text: "jops.3", num: "+180" },
        { id: 4, img: img4, text: "jops.4", num: "+80"},
      ],
    };
  },
  computed: {
    positionStyle() {
      return this.$i18n.locale === "ar"
        ? { right: "331px" } //en
        : { right: "80%" }; ///ar
    },

    positionStylethree() {
      return this.$i18n.locale === "ar"
        ? { right: "155px" } //en
        : { right: "72%" }; ///ar
    },
    positionStylefour() {
      return this.$i18n.locale === "ar"
        ? { right: "153px" } //en
        : { right: "100px" }; ///ar
    },
    positionStylefive() {
      return this.$i18n.locale === "ar"
        ? { right: "106px" } //en
        : { right: "8px" }; ///ar
    },
    positionStylesix() {
      return this.$i18n.locale === "ar"
        ? { right: "-36px" } //en
        : { right: "64%" }; ///ar
    },
    positionStyleseven() {
      return this.$i18n.locale === "ar"
        ? { right: "265px" } //en
        : { right: "44%" }; ///ar
    },
    positionStyleone() {
      return this.$i18n.locale === "ar"
        ? { right: "158px" } //en
        : { left: "0px" }; ///ar
    },
  },
};
</script>

<style scoped>
.about {
  padding: 30px 0;
  background-color: var(--main-color);
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}
.info-descrption {
  font-size: 17px;
  line-height: 2;
}
.parent {
  width: 90%;
  height: auto;
  border-radius: 5px;
  padding: 10px;
  top: -48px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #fff;
}
.img-box img {
  max-width: 70px;
}
.text-box {
  font-size: 20px;
  color: var(--main-color);
  font-weight: 600;
  line-height: 2;
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
.btn2 {
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  color: white;
  border: 1px solid #a81212;
  cursor: pointer;
  position: relative;
  background-color: transparent;
  text-decoration: none;
  overflow: hidden;
  width: 180px;
  color: #fff;
  padding: 10px;
  border-radius: 8px;
  z-index: 1;
  font-family: inherit;
}
.btn:hover {
  color: #a81212;
}
.btn2:hover {
  color: var(--main-color);
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
.btn2::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  transform: translateX(-100%);
  transition: all 0.3s;
  z-index: -1;
}

.btn:hover::before {
  transform: translateX(100%);
}
.btn2:hover::before {
  transform: translateX(0%);
}
.info-text h1 {
  font-size: 30px;
  line-height: 2;
}
.text {
  color: white;
}
.text h1::selection {
  background-color: red;
  color: white;
}
.text p::selection {
  background-color: red;
  color: white;
}
.info-anmy img {
  max-width: 330px;
}
.buntr {
  width: 90%;
}
.animation {
  position: relative;
}
.animation-imgs img {
  max-width: 50px;
}

.animation-one {
  top: -28px;
  animation: move-left-right 5s linear infinite;
}
.animation-two {
  top: -5%;
  right: 78%;
  animation: move-right-right 5s linear infinite;
}

.animation-three {
  top: 9%;
  right: 72%;
  animation: move-right-right 5s linear infinite;
}
.animation-three .three {
  max-width: 65px;
}
.animation-four {
  top: 26%;
  left: 100px;
  animation: pulse-zoom 5s linear infinite;
}
.animation-four .four {
  max-width: 90px;
}
.animation-five {
  top: 55%;
  left: 8px;
  animation: move-down-up 5s linear infinite;
}
.animation-six {
  top: 54%;
  right: 64%;
  animation: move-down-up 5s linear infinite;
}
.animation-six .six {
  max-width: 70px;
}
.animation-seven {
  top: 64%;
  right: 44%;
  animation: move-down-up 5s linear infinite;
}
.animation-seven .seven {
  max-width: 70px;
}
/* ///animation//////////// */
@keyframes move-left-right {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-50px);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes move-right-right {
  0% {
    transform: translateX(0);
  }
  40% {
    transform: translateX(50px);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes move-down-up {
  0% {
    transform: translatey(0);
  }
  60% {
    transform: translatey(60px);
  }
  100% {
    transform: translatey(0);
  }
}
@keyframes pulse-zoom {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}
/* ///media///// */
@media (max-width: 477px) {
  .info-text h1 {
    font-size: 25px;
    line-height: 2;
  }
  .info-descrption {
    font-size: 14px;
    line-height: 2;
  }
  .buntr {
    margin-bottom: 28px;
    width: 90%;
  }
  .info-anmy img {
    width: 200px;
    margin-bottom: 50%;
  }
  .info-descrption {
    font-size: 11px;
    line-height: 2;
  }

  /* ////anamition// */
  .animation-imgs img {
    max-width: 40px;
  }
  .animation-one {
    top: -28px;
    animation: move-left-right 5s linear infinite;
  }
  @keyframes move-left-right {
    0% {
      transform: translateX(0);
    }
    38% {
      transform: translateX(-38px);
    }
    100% {
      transform: translateX(0);
    }
  }
  .animation-three {
    top: 5%;
    right: 72%;
    animation: move-right-right 5s linear infinite;
  }
  .animation-three .three {
    max-width: 47px;
  }
  .animation-four .four {
    max-width: 55px;
  }
  .animation-four {
    top: 17%;
    left: 60px;
    animation: pulse-zoom 5s linear infinite;
  }
  .animation-five {
    top: 33%;
    left: 4px;
  }
  .animation-six {
    top: 30%;
    right: 59% !important;
  }
  .animation-six .six {
    max-width: 60px;
  }
  .animation-seven {
    top: 35%;
    right: 36% !important;
  }
  .animation-seven .seven {
    max-width: 60px;
  }
  .phona{
        flex-direction: column-reverse;
  }
.parent{
   width: 95%;
}

}

</style>

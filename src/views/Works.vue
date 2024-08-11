<template>
  <div class="our-works">
    <div class="container">
      <div class="row">
        <div class="title text-center mb-3">
          <h1>{{ $t("message.ourworks") }}</h1>
        </div>
        <div class="d-flex justify-content-center gap-3 flex-wrap-reverse mt-4">
          <div
            class="info-btn"
            @click="activeTap = '3'"
            :class="[activeTap === '3' ? 'active' : '']"
          >
            <button>{{ $t("message.app") }}</button>
          </div>
          <div class="bord mt-2"></div>
          <div
            class="info-btn"
            @click="activeTap = '2'"
            :class="[activeTap === '2' ? 'active' : '']"
          >
            <button>{{ $t("message.web") }}</button>
          </div>
          <div class="bord mt-2"></div>

          <div
            class="info-btn"
            @click="activeTap = '1'"
            :class="[activeTap === '1' ? 'active' : '']"
          >
            <button>{{ $t("message.all") }}</button>
          </div>
        </div>
        <div
          class="content d-flex justify-content-center align-items-center mt-4"
        >
         <Tapone v-if="activeTap === '1'"/>
         <Taptwo v-if="activeTap === '2'"/>
         <Tapthree v-if="activeTap === '3'"/>
        </div>
        <div class="view d-flex justify-content-center mt-3 align-items-center">
          <button>{{ $t("message.viewall") }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 import Tapone from "../components/data/Tapone.vue"
 import Taptwo from "../components/data/Taptwo.vue"
 import Tapthree from "../components/data/Tapthree.vue"
export default {
  name: "Works",
  data() {
    return {
      activeTap: "1",
    };
  },
  components:{Tapone,Taptwo,Tapthree}
};
</script>

<style scoped>
.our-works {
  padding: 20px 0;
  margin-top: 10px;
}
.title h1 {
  font-size: 20px;
  font-weight: 600;
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
  transform: translateY(100%); /* بدء النص من الأسفل */
}

.content-img:hover .text {
  opacity: 1;
  transform: translateY(0); /* رفع النص إلى المنتصف */
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
  width: 180px;
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
}
</style>

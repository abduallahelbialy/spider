<template>
  <div class="home">
    <div class="overlay">
      <canvas ref="canvas" :width="canvasWidth" :height="canvasHeight">
      </canvas>
    </div>
    <div class="container">
      <div class="row">
        <div class="repeated-text" data-aos="fade-down">
          <div class="text-center">
            <div class="title mb-3">
              <h2>{{ $t("message.spider") }}</h2>
            </div>
            <div class="description">
              <p class="mt-2">
              {{ $t("message.des") }}
              </p>
            </div>
            <div class="btn">
              <button>{{ $t("message.requset") }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data (){
    return{
      
    }
  }
};
</script>

<style scoped>
.home {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.repeated-text {
  z-index: 1;
  color: #fff;
}
.title h2 {
  font-size: 38px;
  line-height: 2;
  font-weight: 600;
}
.title h2::selection {
  background-color: red;
  color: white;
}
.description p {
  font-size: 19px;
  line-height: 2;
}
.description p::selection {
  background-color: red;
  color: white;
}
.btn button {
  background-color: #e81212;
  padding: 10px;
  width: 160px;
  position: relative;
  background-color: transparent;
  border: 3px solid #e81212;
  outline: none;
  overflow: hidden;
  border-radius: 6px;
  color: #ffc5cf;
}
/* .btn button:hover {
  color: #a81212;
} */
.btn button::before {
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

.btn button:hover::before {
  transform: translateX(100%);
  background-color: wheat;
}
@media (max-width: 477px) {
  .title h2 {
    font-size: 20px;
  }
  .description p {
    font-size: 15px;
    line-height: 2;
  }
}
</style>

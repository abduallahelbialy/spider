<template>
  <div class="storeapp">
    <div class="container">
      <div class="row">
        <div
          class="d-flex justify-content-around align-items-center flex-wrap-reverse"
        >
        <div class="img-box" data-aos="fade-down">
            <img src="../assets/store.png" alt="">
          </div>
          <div class="text-box d-flex justify-content-end flex-column  align-items-end" data-aos="fade-down">
            <h1 class=" text-end" v-html="$t('message.story')"></h1>
            <ul class=" d-flex justify-content-end flex-column  align-items-end">
              <p class=" fw-semibold">{{ $t("message.Features") }}</p>
              <li class="d-flex gap-2 align-items-center">{{ $t("message.company") }}<img src="../assets/st1.png" alt=""></li>
              <li class="d-flex gap-2 align-items-center">{{ $t("message.pay") }} <img src="../assets/st2.png" alt=""></li>
              <li class="d-flex gap-2 align-items-center">  {{ $t("message.serving") }}<img src="../assets/st3.png" alt=""></li>
              <div class="requst mb-3 mt-3 text-end">
              <button class="btn">{{ $t("message.requestService") }}</button>
            </div>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Storeapp",
};
</script>

<style scoped>
.storeapp {
  padding: 20px 0;
  margin-top: 40px;
}

li {
  list-style: none;
  margin: 10px 0;
}

.img-box img{
    max-width: 524px;
    width: 100%;
}
.text-box h1{
    font-size: 30px;
    line-height: 2;
    color: var(--main-color);
    font-weight: 600;
}
ul p{
    color: var(--main-color);
}
li img{
   max-width: 40px;
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
  width: 180px;
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
@media (max-width:477px) {
    .img-box img {
    max-width: 284px;
}
.text-box h1 {
    font-size: 21px;
   
}
}
</style>

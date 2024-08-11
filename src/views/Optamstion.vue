<template>
  <div class="optamtion">
    <div class="container">
      <div class="row">
        <div class="d-flex justify-content-around align-items-center flex-wrap-reverse  ">
          <div class="col-lg-6">
            <div class="icons mb-4 d-flex justify-content-around flex-wrap gap-3">
              <div
                class="d-flex flex-column align-items-center gap-3 info"
                v-for="one in ones"
                :key="one.id"
              >
                <img :src="one.img" alt="" />
                <span>{{ one.text }}</span>
              </div>
            </div>
            <div class="icons mt-2 d-flex justify-content-around flex-wrap gap-3">
              <div class="d-flex flex-column align-items-center gap-3 info"  v-for="one in onestwo"
                :key="one.id">
                <img :src="one.img" alt="" />
                <span>{{ one.text }}</span>
              </div>
             
              
            </div>
          </div>
          <div class="col-lg-6">
            <div class="text-op d-flex flex-column align-items-end">
              <p class="">القطاعات التى تم العمل بها</p>
              <h1>هل لديك قطاع خاص؟</h1>

              <span>
                تواصل معنا في حالة إذا كنت تعمل فى قطاع ما وترغب في ابتكار حل
                يساعدك علي مواكبة التحول الرقمي وبناء أفضل الأنظمة الذكية.
              </span>

              <div class="requst mb-3 mt-3">
                <button class="btn">اطلب خدمة الان</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "../assets/re1.webp";
import img2 from "../assets/re2).webp";
import img3 from "../assets/re3.webp";
import img4 from "../assets/re4.webp";
import img5 from "../assets/re5.webp";
import img6 from "../assets/re6.webp";
export default {
  name: "Optamstion",
  data() {
    return {
      ones: [
        { id: 1, text: "القطاع العقاري", img: img1 },
        { id: 2, text: "القطاع التجاري", img: img2 },
        { id: 3, text: "القطاع الاستثماري", img: img3 },
      ],
      onestwo: [
        { id: 1, text: "القطاع التعليمي", img: img4 },
        { id: 2, text: "قطاع التسويق", img: img5 },
        { id: 3, text: "القطاع الطبي", img: img6 },
      ],
    };
  },
};
</script>

<style scoped>
.optamtion {
  padding: 30px 0;
  background-color: var(--main-color);
  background-size: cover;
 
}
.text-op {
  color: #fff;
  line-height: 3;
}
.text-op p{
    font-size: 18px;
}
.text-op h1{
    font-size: 25px;
    line-height: 2;
}
.text-op span{
    font-size: 18px;
    line-height: 2.5;
   text-align: end;
    width: 65%;
}
.info span{
    color: #fff;
}
.info{
    width: 100%;
    max-width: 200px;
    height: 110px;
}
.info img {
    max-width: 50px;
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
  padding: 9px;
  border-radius: 6px;
  z-index: 1;
  font-family: inherit;
}
.btn:hover {
  color: #a81212;
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

.btn:hover::before {
  transform: translateX(100%);
}
@media (max-width: 477px) {
    .text-op {
        align-items: center !important;
    }
    .text-op span{
    font-size: 14px;
    line-height: 2.5;
    text-align: end;
    width: 65%;
}
}
</style>

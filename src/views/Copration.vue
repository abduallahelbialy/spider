<template>
  <div class="copartion">
    <div class="container">
      <div class="row">
        <div
          class="d-flex justify-content-around align-items-center flex-wrap-reverse"
        >
          <div class="d-flex flex-column align-items-center">
            <div class="box-icons d-flex gap-4 flex-wrap">
              <div class="box-content m-auto" v-for="box in boxs" :key="box.us">
                <div
                  class="text-box d-flex justify-content-end align-items-end flex-column"
                >
                  <div class="icon-img">
                    <img :src="box.img" alt="" />
                  </div>
                  <div class="tit mt-3">
                    <p>{{ box.text }}</p>
                  </div>
                  <div class="tit2 text-center">
                    <p>
                      {{ box.des }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="box-icons mt-3 d-flex gap-4 flex-wrap">
              <div class="box-content m-auto" v-for="box in boxs" :key="box.us">
                <div
                  class="text-box d-flex justify-content-end align-items-end flex-column"
                >
                  <div class="icon-img">
                    <img :src="box.imgtw" alt="" />
                  </div>
                  <div class="tit mt-3">
                    <p>{{ box.text2 }}</p>
                  </div>
                  <div class="tit2 text-center">
                    <p>
                      {{ box.destw }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="text-co">
            <div class="box-text text-end">
              <h1>أهم مميزات التعاون <br />مع سبايدر-تك</h1>
            </div>
            <div class="requst mb-3 mt-3 text-end">
              <button class="btn">اطلب خدمة الان</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "../assets/ico1.png";
import img2 from "../assets/ico2.png";
import img3 from "../assets/ico3.png";
import img4 from "../assets/ico4.png";
export default {
  name: "Copartion",
  data() {
    return {
      boxs: [
        {
          us: 1,
          img: img1,
          imgtw: img3,
          text: "عقد مسجل",
          des: "نقدم عقودًا مسجلة موقعة من الطرفين ، مما يضمن اتفاقية ملزمة قانونًا تحمي مصالح الطرفين.",
          destw:
            "نحن متواجدون دائمًا لمساعدتك وضمان سير مشاريعك بسلاسة في جميع الأوقات.",
          text2: "دعم فني 24/7",
        },
        {
          us: 2,
          img: img2,
          imgtw: img4,
          text: "حماية قوية",
          des: "نستخدم أحدث ممارسات الأمن السيبراني ، مما يضمن بقاء مشروعك آمنًا وسريًا",
          destw:
            "تقديم حلول مبتكرة ومصممة خصيصًا تلبي احتياجات عملك الفريدة تمامًا",
          text2: "حلول مبتكرة",
        },
      ],
    };
  },
};
</script>

<style scoped>
.copartion {
  padding: 30px 0;
  margin-top: 20px;
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
.box-content {
  background-color: var(--main-color);
  width: 330px;
  height: 215px;
  border-radius: 35px;
  padding: 18px;
  color: #fff;
}
.tit2 p {
  font-size: 16px;
  line-height: 2;
}
.tit {
  font-weight: 600;
}
.box-text h1 {
  font-size: 30px;
  line-height: 2;
  font-weight: 600;
}
.icon-img img {
  max-width: 80%;
}
@media (max-width: 477px) {
  .box-text h1 {
    font-size: 19px;
    line-height: 2;
    font-weight: 600;
  }
  .tit2 p {
    font-size: 15px;
    line-height: 2;
  }
  .box-content {
    width: 300px;
    height: auto;
  }
}
</style>

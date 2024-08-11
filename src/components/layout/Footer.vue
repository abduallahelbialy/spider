<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="d-flex justify-content-between phone">
          <div class="col-lg-4 col-md-6">
            <div class="conatct-links">
              <h1 class="d-flex justify-content-center">اتصل بنا</h1>
              <ul class="d-flex flex-column align-items-center">
                <li class="d-flex gap-2 align-items-center">
                  رقم الهاتف : 966542366517
                  <i class="pi pi-chevron-circle-left"></i>
                </li>
                <li class="d-flex gap-2 align-items-center">
                  support@spider-te8.com البريد
                  <i class="pi pi-chevron-circle-left"></i>
                </li>
                <li class="d-flex gap-1 align-items-cenert text-end">
                  عنوان مصر : الدقهلية ,طلخا - شارع فرينش بيكر - برج السمنودى
                  الدور 3
                  <i class="pi pi-chevron-circle-left"></i>
                </li>
                <li class="d-flex gap-2 align-items-center text-end">
                  عنوان مصر : التجمع الخامس - شارع التسعين الشمالي - ميدان
                  تريفيوم - مكتب 440 - الدور الرابع<i
                    class="pi pi-chevron-circle-left"
                  ></i>
                </li>
                <li class="d-flex gap-2 align-items-center">
                  عنوان السعودية : الرياض (قريباً)<i
                    class="pi pi-chevron-circle-left"
                  ></i>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-md-6">
            <div class="conatct-links">
              <h1 class="d-flex justify-content-end">اوقات العمل</h1>
              <ul class="d-flex flex-column align-items-end">
                <li class="d-flex gap-2 align-items-center">
                  من 9 صباحا حتى 5 مساء <i class="pi pi-clock"></i>
                </li>
                <li class="d-flex gap-2 align-items-center">
                  من الاحد الى الخميس <i class="pi pi-sun"></i>
                </li>
                <li class="d-flex gap-2 align-items-center">
                  مغلق جمعة و سبت <i class="pi pi-calendar"></i>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-md-6">
            <div class="conatct-links">
              <h1 class="d-flex justify-content-end">سبايدر-تك</h1>

              <ul class="d-flex flex-column align-items-end">
                <li class="d-flex gap-2 align-items-center">
                  الرئيسية<i class="pi pi- pi-arrow-circle-left"></i>
                </li>
                <li class="d-flex gap-2 align-items-center">
                  خدماتنا<i class="pi pi- pi-arrow-circle-left"></i>
                </li>
                <li class="d-flex gap-2 align-items-center">
                  المدونة<i class="pi pi- pi-arrow-circle-left"></i>
                </li>
                <li class="d-flex gap-2 align-items-center">
                  اعمالنا<i class="pi pi- pi-arrow-circle-left"></i>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="conatct-links">
              <div class="img-logo">
                <img src="../../assets/logo_white.6b0b6d2.svg" alt=" " />
              </div>
              <div class="text-logo text-end mt-3 pt-3">
                <p>
                  نحن دليلك فى رحلة التحول الرقمي , عالم من الابداع فى مجال
                  البرمجيات و تصميم المواقع الاكترونية و المتاجر الالكترنية و
                  تطبيقات الهاتف
                </p>
              </div>
              <div class="notfa d-flex justify-content-end gap-1">
                <p class="text-end">
                  استمر في التحديث - احصل على تحديثات مع أحدث الموضوعات.
                </p>
                <i class="pi pi-bell-slash"></i>
              </div>
              <div class="sub">
                <input
                  type="email"
                  name=""
                  placeholder="ادخل البريد الالكترونى"
                  id=""
                />
                <div class="btn">
                  <button>اشتراك</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bord"></div>
    <div
      class="d-flex justify-content-around flex-wrap-reverse  align-items-center pt-3 "
    >
      <div class="dw">
        <span>حقوق النشر © 2024 سبايدر-تك | تم بواسطة سبايدر-تك</span>
      </div>
      <div class="all d-flex gap-3 align-items-center">

      <div class="iconss ">
        <i class="pi pi-facebook"></i>
      </div>
      <div class="iconss">
        <i class="pi pi-instagram"></i>
      </div>
      <div class="iconss  ">
        <i class="pi pi-linkedin"></i>
      </div>
      <div class="iconss ">
        <i class="pi pi-twitter"></i>
      </div>
      <div class="iconss ">
        <i class="pi pi-whatsapp"></i>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  background-color: var(--main-color);
  background-size: cover;
  padding: 30px 0;
}

.conatct-links h1 {
  color: #fff;
  line-height: 2;
  font-size: 20px;
  /* display: flex;
  justify-content: end; */
}
.bord {
  border-bottom: 1px dashed #ddd;
}
li {
  color: #fff;
  margin: 15px 0;
  font-size: 14px;
  padding-left: 10px;
}
.img-logo img {
  max-width: 150px;
  display: flex;
  justify-content: end;
  margin: auto;
}
.text-logo p {
  font-size: 15px;
  line-height: 2;
  color: #fff;
}
.iconss {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #fff;
  padding: 4px;
    color: var(--main-color);
  transition: 0.3s;
}
.iconss:hover{
    background-color: red;
    color: #fff;
}
.iconss i {
  display: flex;
  justify-items: center;
  align-items: center;
  font-size: 20px;

}
.notfa p {
  font-size: 11px;
  color: #fff;
  font-weight: 600;
}
.notfa i {
  color: #fff;
}
.sub {
  position: relative;
}
.sub .btn {
  position: absolute;
  left: 10px;
  top: 6px;
  background-color: var(--red-color);
}

.btn button {
  background: transparent;
  border: none;
  color: #fff;
  outline: none;
}
.sub input {
  width: 254px;
  padding: 14px;
  border-radius: 4px;
  outline: none;
  border: none;
}
.sub input::placeholder {
  text-align: end;
}
.dw {
  color: #fff;
}
@media (max-width: 477px) {
  .phone {
    flex-direction: column-reverse;
    align-items: center;
    margin: inherit;
  }
  .sub {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  .sub .btn {
    position: absolute;
    left: 52px;
    top: 6px;
    background-color: var(--red-color);
  }
  .iconss{
    margin: 14px 0;
  }
  .dw{
    margin: 10px 0;
  }
}
@media (max-width: 799px) {
  .phone {
    flex-direction: column-reverse;
    align-items: center;
    margin: inherit;
  }
}
</style>

<template>
  <div class="service" data-aos="fade-down">
    <div class="container">
      <div class="row">
        <div class="title text-center pt-3 mb-3">
          <h2>{{ $t("message.our") }}</h2>
        </div>
        <Slider />
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "../views/Slider.vue";
export default {
  name: "service",
  components: { Slider },
};
</script>

<style scoped>
.service {
  padding: 20px 0;
}
</style>

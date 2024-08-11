<template>
  <Navbar/>

  <RouterView />
  <Footer/>
</template>

<script>
import  {RouterView}  from 'vue-router';
import Navbar from "../src/components/layout/Navbar.vue"
import Footer from "../src/components/layout/Footer.vue"
export default {
  name:"App",
components:{RouterView,Navbar,Footer}

}
</script>

<style>

</style>
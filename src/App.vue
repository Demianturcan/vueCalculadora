
<template>
  <div id="app">
    <Navbar />

  </div>
  <main>
  <router-view></router-view>
  </main>
  <Footer />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
};
</script>


<style>
#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
* {
  margin:0;
}

</style>

<template>
  <div id="app">
    <LandingPage />
  </div>
</template>

<script>
// import Calculator from './components/CalculadoraM.vue';
import LandingPage from './components/LandingPage.vue';
export default {
  name: 'App',
  components: {
    LandingPage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
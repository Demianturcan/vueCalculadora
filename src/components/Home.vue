<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css">
  <main class="content dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
    <header class="h-24 sm:h-32 flex items-center z-30 w-full">

    </header>
    <div class="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
      <div class="container mx-auto px-6 flex relative py-16">
        <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
          <span class="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
          <h1 class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
            PROJECTE
            <span class="text-5xl sm:text-7xl">JAVASCRIPT</span>
          </h1>
          <p class="text-sm sm:text-base text-gray-700 dark:text-white">
            Aplicació web utilitzant Javascript amb el framework Vue tipus SPA.
          </p>

        </div>
        <div class="hidden sm:block sm:w-1/4 lg:w-3/4 relative">
          <img src="https://es.wikieducator.org/images/7/77/Vuejs.png" class="max-w-3xl md:w-78 m-auto"  alt="javascript logo"/>
        </div>
      </div>
    </div>
  </main>


</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>

</style>
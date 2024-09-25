<script setup>
// import dependency
import homePageHeader from './components/homePageHeader.vue';
import homePageMain from './components/homePageMain.vue';
import switchPage from './components/switchPage.vue';
</script>
<template>
  <body class="h-screen bg-[#F0F2F5]">
     <!-- <switchPage></switchPage> -->
      <homePageHeader></homePageHeader>
      <homePageMain></homePageMain>
  </body>

</template>

<style>
html {
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  line-height: inherit;
}
.container {
  @apply w-[90%] lg:w-[70%] mx-auto;
}
</style>
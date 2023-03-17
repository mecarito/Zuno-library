<script setup lang="ts">
import FooterComponent from './components/footer/footerComponent.vue'
import HeaderComponent from './components/header/headerComponent.vue'
</script>

<template>
  <header class="bg-bg-light h-headerBg">
    <HeaderComponent />
  </header>
  <main></main>
  <footer class="bottom-0 left-0 right-0 fixed">
    <FooterComponent />
  </footer>
</template>

<style scoped></style>

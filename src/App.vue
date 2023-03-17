<script setup lang="ts">
import FooterComponent from './components/footer/footerComponent.vue'
import HeaderComponent from './components/header/headerComponent.vue'
import BookShelfView from './views/BookShelfView.vue'
</script>

<template>
  <header class="bg-bg-light h-headerBg">
    <HeaderComponent />
  </header>
  <main class=" pb-40">
    <BookShelfView />
  </main>
  <footer class="bottom-0 left-0 right-0">
    <FooterComponent />
  </footer>
</template>

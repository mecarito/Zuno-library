<script setup lang="ts">
import FooterComponent from './components/footer/footerComponent.vue'
import HeaderComponent from './components/header/headerComponent.vue'
import BookShelfView from './views/BookShelfView.vue'
import HotReadsView from './views/HotReadsView.vue'
import FireIcon from '@/components/icons/IconFire.vue'
</script>

<template>
  <header class="bg-bg-light h-headerBg relative">
    <HeaderComponent />
    <div class="px-page-px mt-12 w-header-title-w  tracking-wider">
      <h1 class="text-6xl leading-12">
        Get your <span class="font-semibold">favourite books</span> all in
        <span class="font-semibold"> one place</span>
      </h1>
      <button class="bg-green text-white rounded-3xl 
      w-btn-w h-btn-h mt-10">View Categories</button>
    </div>
    <img
      alt="person reading a book"
      src="@/assets/bg-image.svg"
      class="w-header-bg-w h-full absolute right-0 lgxxl:right-page-px top-0"
    />
    <div class="absolute -bottom-44 px-page-px w-full">
      <div class="flex flex-row space-x-2 items-center">
        <FireIcon />
        <p class="text-2xl text-dark">Hot Reads</p>
      </div>
      <div class="overflow-x-scroll scrollbar">
        <HotReadsView />
      </div>
    </div>
  </header>
  <main class="mt-56 pb-40">
    <BookShelfView />
  </main>
  <footer class="bottom-0 left-0 right-0">
    <FooterComponent />
  </footer>
</template>

<style scoped>
.scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.scrollbar::-webkit-scrollbar {
  display: none;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'
import BagIcon from '../icons/IconBag.vue'

interface Data {
  pages: string[]
}

export default defineComponent({
  data(): Data {
    return {
      pages: ['Home', 'Category', 'Popular', 'My Picks']
    }
  },
  components: {
    BagIcon
  }
})
</script>

<template>
  <div class="flex flex-row justify-between pl-24 pr-page-px items-center pt-4">
    <section class="flex flex-row space-x-28 items-center">
      <div class="flex flex-row items-center">
        <img alt="Zuno library logo" src="@/assets/logo.svg" class="w-20 h-20" />
        <p class="capitalize text-header-text text-2xl italic tracking-tight">Zuno library</p>
      </div>
      <nav>
        <ul class="flex flex-row space-x-4 items-center">
          <li
            v-for="page of pages"
            :key="page"
            class="px-4 py-2 cursor-pointer"
            :class="{
              'bg-white rounded-2xl ': page === 'Home',
              'hover:bg-white hover:rounded-2xl': page !== 'Home'
            }"
          >
            <p class="text-dark">{{ page }}</p>
          </li>
        </ul>
      </nav>
    </section>

    <section class="flex flex-row items-center space-x-3">
      <BagIcon />
      <img
        alt="a man's face"
        src="https://randomuser.me/api/portraits/med/men/75.jpg"
        class="w-7 h-7 rounded-full"
      />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HotReads from '@/components/books/hotReads.vue'
import ArrowRightIcon from '@/components/icons/IconArrowRight.vue'
import type { Book } from '../types'
import books from '../data/sample_media.json'

interface Data {
  books: Book[]
}

export default defineComponent({
  data(): Data {
    return {
      books
    }
  },
  components: {
    HotReads,
    ArrowRightIcon
  }
}) 
</script>

<template>
  <div class="flex flex-row space-x-4 relative">
    <div class=" absolute right-0 h-full flex flex-col justify-center z-50 ">
      <button class="bg-white p-4 rounded-full center shadow-lg sticky" @click="$emit('scrollRight')">
        <ArrowRightIcon />
      </button>
    </div>
    <div v-for="book of books" :key="book.BibNum">
      <HotReads :book="book" />
    </div>
  </div>
</template>

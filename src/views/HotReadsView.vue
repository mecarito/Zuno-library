<script lang="ts">
import { defineComponent } from 'vue'
import HotReads from '@/components/books/hotReads.vue'
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
    HotReads
  }
})
</script>

<template>
  <div class="flex flex-row space-x-4">
    <div v-for="book of books" :key="book.BibNum">
      <HotReads :book="book" />
    </div>
  </div>
</template>

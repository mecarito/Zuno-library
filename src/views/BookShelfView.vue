<script lang="ts">
import { defineComponent } from 'vue'
import BookDetails from '@/components/books/bookDetails.vue'
import BookOpenIcon from '@/components/icons/IconBookOpen.vue'
import type { Book } from '../types'
import books from '../data/sample_media.json'
import SearchComponent from '@/components/search/SearchComponent.vue'

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
    BookDetails,
    BookOpenIcon,
    SearchComponent
  }
})
</script>

<template>
  <div class="px-page-px">
    <SearchComponent />
    <div class="flex flex-row items-center space-x-4 mt-12 my-8">
      <BookOpenIcon />
      <p class="text-2xl text-dark capitalize">Book Shelf</p>
    </div>
    <div class="flex flex-row gap-5 flex-wrap">
      <div v-for="book of books" :key="book.BibNum">
        <BookDetails :book="book" />
      </div>
    </div>
  </div>
</template>

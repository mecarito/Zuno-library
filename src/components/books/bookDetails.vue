<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import StarIcon from '../icons/IconStar.vue'
import BookmarkIcon from '../icons/IconBookmark.vue'
import type { Book } from '../../types'

export default defineComponent({
  props: {
    book: {
      type: Object as PropType<Book>,
      required: true
    }
  },
  components: {
    StarIcon,
    BookmarkIcon
  }
})
</script>

<template>
  <div class="h-book-h w-book-w flex flex-col">
    <section class="h-book-image-h bg-book-image-bg relative">
      <img alt="book cover" src="@/assets/book-cover.svg" class="h-book-image-h w-full" />
      <div class="absolute top-4 right-4">
        <BookmarkIcon />
      </div>
    </section>
    <section class="flex flex-col mt-2">
      <p class="truncate text-dark text-xl font-semibold">
        {{ book.Title || 'N/A' }}
      </p>
      <p class="text-black text-base truncate">{{ book.Author || 'N/A' }}</p>
    </section>
    <section class="flex flex-row space-x-2 items-center mt-1">
      <StarIcon />
      <p class="text-base text-black">5.0</p>
    </section>
  </div>
</template>

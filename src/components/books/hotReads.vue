<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { Book } from '../../types'

export default defineComponent({
  props: {
    book: {
      type: Object as PropType<Book>,
      required: true
    }
  }
})
</script>

<template>
  <div class="h-hot-reads-book-h w-hot-reads-book-w drop-shadow-lg">
    <img alt="book cover" src="@/assets/book-cover.svg" class="h-full w-full" />
  </div>
</template>

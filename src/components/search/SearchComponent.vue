<script lang="ts">
import { defineComponent } from 'vue'
import SearchIcon from '../icons/IconSearch.vue'
import ChevronDownIcon from '../icons/IconChevronDown.vue'

export default defineComponent({
  data() {
    return {}
  },
  components: {
    SearchIcon,
    ChevronDownIcon
  }
})
</script>

<template>
  <div
    class="h-search-h flex flex-row items-center w-full border-[1px] border-gray-200 my-10 px-4 py-2 text-dark rounded-lg mr-40 space-x-4"
  >
    <div class="flex flex-row items-center space-x-6 cursor-pointer w-80">
      <p class="text-xl">All Categories</p>
      <ChevronDownIcon />
    </div>
    <div class="w-[3px] h-10 bg-dark opacity-20"></div>
    <input
      type="text"
      placeholder="Find the book you like..."
      class="mx-4 h-full outline-none placeholder-dark w-full px-4"
    />
    <button
      class=" w-search-btn-w h-full bg-green text-white flex flex-row justify-center items-center rounded-lg space-x-4"
    >
      <p class="text-xl">Search</p>
      <SearchIcon />
    </button>
  </div>
</template>

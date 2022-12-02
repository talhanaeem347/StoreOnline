<template>
  <section class="text-gray-600 body-font">
    <div class="container px-2 py-2 mx-auto">
      <div class="flex flex-col items-start p-2">
        <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
          Exchange Policies
        </h1>
        <p class="text-gray-700 text-justify mb-4">
          You can only make exchanges for the same article in a different size or color.
        </p>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name:"ExchangePolicy",
})
</script>

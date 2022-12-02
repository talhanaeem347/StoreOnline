<template>
  <section class="text-gray-600 body-font">
    <div class="container px-2 py-2 mx-auto">
      <div class="flex flex-col items-start p-2">
        <h1 class="flex-grow text-2xl font-medium title-font text-gray-900">
          Return Policies
        </h1>
        <p class="text-gray-700 text-justify mb-4">
          If you wish to return or exchange the merchandise purchased online, you may do
          so in a period no later than 5 days from the day of delivery. You must deliver
          the merchandise in the same packaging in which you received it. To schedule a
          return, please contact us at
          <router-link to="/return-item" class="text-indigo-500 underline underline-offset-1"><span class="italic font-medium"> {{
            $store.state.siteName
            }}</span></router-link>
          in order for us to arrange the collection at your home address.
        </p>
        <p class="text-gray-700 text-justify mb-4">
          We will fully examine the returned product and will notify you of your right to
          a refund of the amounts paid. The refund will be made as soon as possible, and
          within 30 calendar days from the date on which you informed us of your intention
          to withdraw. The refund will be made using the same payment method which was
          used to make the purchase.
        </p>
        <p class="text-gray-700 text-justify mb-4">
          No exchange or refund will be made for any products that are not in the same
          condition in which you received them, or that have been used beyond mere opening
          of the product.
        </p>
      </div>
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
  name:"ReturnPolicy",
})
</script>
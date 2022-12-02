<template>
  <div>
    <h1 class="text-2xl text-center font-bold bg-red-200">Our Qualitys  </h1>
  </div>
  <section class="text-gray-600 body-font">
    <div class="container px-2 py-4 mx-auto">
      <div
        class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col"
      >
        <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
            Affordble Prices
          </h2>
          <p class="leading-relaxed text-base">
            <span class="italic font-medium">{{ $store.state.siteName }}</span> offer
            lowest prices in the Pakistan's Online Shoping Market
          </p>
        </div>
        <div
          class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center bg-indigo-100 rounded-full text-indigo-500 flex-shrink-0"
        >
          <img src="./images/wallet-icon.png" class="rounded-full" alt="Wellet" />
        </div>
      </div>
      <div
        class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col border-b pb-10 mb-10 border-gray-200"
      >
        <div
          class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0"
        >
          <img src="./images/buy.jpg" class="rounded-full h-full" alt="" />
        </div>
        <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Easy to Buy</h2>
          <p class="leading-relaxed text-base">
            <span class="italic font-medium">{{ $store.state.siteName }}</span> offer
            easiest way to buy thing online
          </p>
        </div>
      </div>
      <div
        class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col"
      >
        <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
            Money Back Guarantee
          </h2>
          <p class="leading-relaxed text-base">
            <span class="italic font-medium">{{ $store.state.siteName }}</span> offer 7
            days mony back guarantee. You have to send our product back if any issue fond
            <router-link
              to="/policy/term-and-conditions"
              class="text-blue-500 block text-right text-[.7rem] font-light"
            >
              term & conditions are applied
            </router-link>
          </p>
        </div>
        <div
          class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center bg-indigo-100 rounded-full text-indigo-500 flex-shrink-0"
        >
          <img src="./images/Guarantee.jpg" class="rounded-full" alt="Wellet" />
        </div>
      </div>
      <div
        class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col border-b pb-10 mb-10 border-gray-200"
      >
        <div
          class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0"
        >
          <img src="./images/warranty.jpg" class="rounded-full h-full" alt="" />
        </div>
        <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
            6 Month Waranty
          </h2>
          <p class="leading-relaxed text-base">
            <span class="italic font-medium">{{ $store.state.siteName }}</span> offer 6
            month woranty. We  will repair your item if any issue ther in 6 months
            <router-link
              to="/policy/term-and-conditions"
              class="text-blue-500 block text-right text-[.7rem] font-light"
            >
              term & conditions are applied
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "QualityComponent",
});
</script>

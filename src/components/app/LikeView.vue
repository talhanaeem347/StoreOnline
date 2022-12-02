<template>
  <div class="min-h-screen">
    <div class="flex justify-center">
      <h1 class="text-2xl font-medium italic">Items you liked</h1>
    </div>
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-2 mx-auto">
        <div
        v-for="item in items" :key="item"
          class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col"
        >
          <div
            class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center text-indigo-500 flex-shrink-0"
          >
            <img
              class="object-cover object-center rounded-full h-full w-full"
              alt="hero"
              :src="item.imgurl"
            />
          </div>
          <div class="flex-grow sm:text-left text-center mt-6 px-2 sm:mt-0">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
              {{ item.Name }}
            </h2>
            <p class="leading-relaxed text-base overflow-hidden w-full h-14">
              {{ item.discription }}
            </p>
            <div class="flex flex-grow items-center">
              <div class="flex pr-4">
                <div class="w-6 h-6 bg-gray-200 hover:bg-gray-100 m-1 rounded-full"></div>
                <div
                  class="w-6 h-6 bg-yellow-200 hover:bg-yellow-100 m-1 rounded-full"
                ></div>
                <div class="w-6 h-6 bg-black hover:bg-gray-700 m-1 rounded-full"></div>
              </div>
              <button
                class="flex mt-2 ml-2 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded text-lg items-center"
              >
                Buy
                <font-awesome-icon icon="fas fa-arrow-right " class="pl-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CartView",
  setup() {
    let items = [
      {
        imgurl : "https://dummyimage.com/720x600/e8d8e8/0011ff.jpg&text=product+Image",
        Name : "Product Name",
        discription : "Discrption and details not longer then 2 lins",
      }
    ]

    return {items};
  },
});
</script>

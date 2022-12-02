<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-2 mx-auto">
      <div class="flex flex-col text-center w-full mb-4">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
          Our {{ $store.state.event }} Colection
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          We are glade to show you our {{ $store.state.event }} Collection
        </p>
      </div>
      <div class="flex flex-wrap -m-4">
        <div
          v-for="product in products"
          :key="product"
          class="lg:w-1/4 md:w-1/2 p-4 w-full"
        >
          <router-link to="" class="block relative h-48 rounded overflow-hidden">
            <img
              alt="gallery"
              class="absolute inset-0 w-full h-full object-cover object-center"
              :src="product.img1"
            />
            <img
              alt="ecommerce"
              class="object-cover object-center w-full h-full relative z-10 block opacity-0 hover:opacity-100"
              :src="product.img2"
            />
          </router-link>
          <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
              {{ product.catagry }}
            </h3>
            <h2 class="text-gray-900 title-font text-lg font-medium">
              {{ product.name }}
            </h2>
            <div class="flex">
              <span class="mr-3">Color</span>
              <button
                class="border-2 border-gray-300 bg-gray-500 hover:bg-gray-400 rounded-full w-6 h-6 focus:outline-none"
              ></button>
              <button
                class="border-2 border-gray-300 ml-1 bg-yellow-200 hover:bg-yellow-100 rounded-full w-6 h-6 focus:outline-none"
              ></button>
              <button
                class="border-2 border-gray-300 ml-1 bg-black hover:bg-gray-800 rounded-full w-6 h-6 focus:outline-none"
              ></button>
            </div>
            <p class="mt-1">{{ product.price }} Pkr</p>
          </div>
        </div>
      </div>
  
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
  name: "ProductView",
  setup() {
    let event = "";
    let products = [
      {
        catagry: "Eid Collection",
        name: "Product 1",
        price: 1580,
        img1: "https://dummyimage.com/600x360",
        img2: "https://dummyimage.com/420x260",
      },
      {
        catagry: "Eid Collection",
        name: "Product 2",
        price: 1580,
        img1: "https://dummyimage.com/600x360",
        img2: "https://dummyimage.com/420x260",
      },
      {
        catagry: "Eid Collection",
        name: "Product 3",
        price: 1580,
        img1: "https://dummyimage.com/600x360",
        img2: "https://dummyimage.com/420x260",
      },
      {
        catagry: "Eid Collection",
        name: "Product 4",
        price: 1580,
        img1: "https://dummyimage.com/600x360",
        img2: "https://dummyimage.com/420x260",
      },
      {
        catagry: "Eid Collection",
        name: "Product 5",
        price: 1580,
        img1: "https://dummyimage.com/600x360",
        img2: "https://dummyimage.com/420x260",
      },
      {
        catagry: "Eid Collection",
        name: "Product 6",
        price: 1580,
        img1: "https://dummyimage.com/600x360",
        img2: "https://dummyimage.com/420x260",
      },
      {
        catagry: "Eid Collection",
        name: "Product 7",
        price: 1580,
        img1: "https://dummyimage.com/600x360",
        img2: "https://dummyimage.com/420x260",
      },
      {
        catagry: "Eid Collection",
        name: "Product 8",
        price: 1580,
        img1: "https://dummyimage.com/600x360",
        img2: "https://dummyimage.com/420x260",
      },
      {
        catagry: "Eid Collection",
        name: "Product 9",
        price: 1580,
        img1: "https://dummyimage.com/600x360",
        img2: "https://dummyimage.com/420x260",
      },
      {
        catagry: "Eid Collection",
        name: "Product 10",
        price: 1580,
        img1: "https://dummyimage.com/600x360",
        img2: "https://dummyimage.com/420x260",
      },
    ];
    return {
      products,
      event,
    };
  },
 
  beforeCreate() {
    this.event = "Summer";
  },
});
</script>

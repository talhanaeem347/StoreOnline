<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-4 mx-auto flex flex-wrap">
       <div class="flex flex-col text-center w-full mb-4">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
          Our Gallery
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          We are glade to show you our Gallery
        </p>
      </div>
      <div class="flex flex-wrap md:-m-2 -m-1 w-full h-[100vh]">
        <div class="flex flex-wrap w-1/2">
          <router-link
          @click="$store.commit('setEvent','Winter') "
            to="/products"
            class="block relative md:p-2 p-1 w-1/2 h-2/5 overflow-hidden"
          >
            <img
              alt="gallery"
              class="absolute inset-0 w-full h-full object-cover object-center"
              src="https://dummyimage.com/501x300"
            />
            <img
              alt="ecommerce"
              class="object-cover object-center w-full h-full relative z-10 block opacity-0 hover:opacity-100"
              src="https://dummyimage.com/501x301"
            />
          </router-link>
          <router-link
           @click="$store.commit('setEvent','Summer') "
            to="/products"
            class="block relative md:p-2 p-1 w-1/2 h-2/5 overflow-hidden"
          >
            <img
              alt="gallery"
              class="absolute inset-0 w-full h-full object-cover object-center"
              src="https://dummyimage.com/501x301"
            />
            <img
              alt="ecommerce"
              class="object-cover object-center w-full h-full relative z-10 block opacity-0 hover:opacity-100"
              src="https://dummyimage.com/501x300"
            />
          </router-link>
          <router-link
           @click="$store.commit('setEvent','Eid') "
            to="/products"
            class="block relative md:p-2 p-1 w-full h-3/5 overflow-hidden"
          >
            <img
              alt="gallery"
              class="absolute inset-0 w-full h-full object-cover object-center"
              src="https://dummyimage.com/501x301"
            />
            <img
              alt="ecommerce"
              class="object-cover object-center w-full h-full relative z-10 block opacity-0 hover:opacity-100"
              src="https://dummyimage.com/501x300"
            />
          </router-link>
        </div>
        <div class="flex flex-wrap w-1/2">
          <router-link
           @click="$store.commit('setEvent','Wedding') "
            to="/products"
            class="block relative md:p-2 p-1 w-full h-3/5 overflow-hidden"
          >
            <img
              alt="gallery"
              class="absolute inset-0 w-full h-full object-cover object-center"
              src="https://dummyimage.com/501x301"
            />
            <img
              alt="ecommerce"
              class="object-cover object-center w-full h-full relative z-10 block opacity-0 hover:opacity-100"
              src="https://dummyimage.com/501x300"
            />
          </router-link>
          <router-link
           @click="$store.commit('setEvent','Casual') "
            to="/products"
            class="block relative md:p-2 p-1 w-1/2 h-2/5 overflow-hidden"
          >
            <img
              alt="gallery"
              class="absolute inset-0 w-full h-full object-cover object-center"
              src="https://dummyimage.com/501x301"
            />
            <img
              alt="ecommerce"
              class="object-cover object-center w-full h-full relative z-10 block opacity-0 hover:opacity-100"
              src="https://dummyimage.com/501x300"
            />
          </router-link>
          <router-link
           @click="$store.commit('setEvent','Spring') "
            to="/products"
            class="block relative md:p-2 p-1 w-1/2 h-2/5 overflow-hidden"
          >
            <img
              alt="gallery"
              class="absolute inset-0 w-full h-full object-cover object-center"
              src="https://dummyimage.com/501x301"
            />
            <img
              alt="ecommerce"
              class="object-cover object-center w-full h-full relative z-10 block opacity-0 hover:opacity-100"
              src="https://dummyimage.com/501x300"
            />
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "GalaryComponent",
  setup() {
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
    };
  },
});
</script>

<style></style>

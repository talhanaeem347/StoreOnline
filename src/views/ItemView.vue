<template>
  <section class="text-gray-600 body-font overflow-hidden">
    <div class="container px-5 py-2 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <div class="relative border overflow-hidden "> 
        <img
          alt="ecommerce"
          class="absolute inset-0 lg:h-full h-64  object-cover object-center rounded"
          src="https://dummyimage.com/600x400/000/fff"
        />
        <img
          alt="ecommerce"
          class="relative lg:h-full h-64 object-cover object-center rounded opacity-0 hover:opacity-100"
          src="https://dummyimage.com/400x400"
        />
      </div>
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 class="text-sm title-font text-gray-500 tracking-widest">
            {{ $store.state.siteName }}
          </h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
            {{ prodName }}
          </h1>
          <div class="flex mb-4">
            <span class="flex items-center text-blue-600">
              <font-awesome-icon icon="fas fa-star" />
              <font-awesome-icon icon="fas fa-star" />
              <font-awesome-icon icon="fas fa-star" />
              <font-awesome-icon icon="fas fa-star" />
              <font-awesome-icon icon="fas fa-star-half-stroke" />
              <span class="text-gray-600 ml-3">4.5 Reviews</span>
            </span>
          </div>
          <p class="leading-relaxed text-base text-justify max-h-40 overflow-hidden">
            {{productDetail}}
          </p>
          <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
            <div class="flex">
              <span class="mr-3">Color</span>
              <button
                @click="setColorGray"
                class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"
              ></button>
              <button
                @click="setColorBlack"
                class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"
              ></button>
              <button
                @click="setColorBlue"
                class="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"
              ></button>
            </div>
            <div class="flex ml-6 items-center">
              <span class="mr-3">Size</span>
              <div class="relative">
                <select
                v-model="size"
                  class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
                >
                  <option >36</option>
                  <option >37</option>
                  <option  selected>38</option>
                  <option >39</option>
                  <option >40</option>
                  <option >41</option>
                </select>
                <span
                  class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center"
                >
                  <font-awesome-icon icon="fa-solid fa-angle-down" />
                </span>
              </div>
            </div>
          </div>
          <div class="flex">
            <span class="title-font font-medium text-2xl text-gray-900"
              >{{ price }} Pkr</span
            >
            <button
              @click="Buy"
              class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
            >
              Buy
            </button>
            <button
              @click="$store.commit('increaseCart')"
              class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
            >
              <font-awesome-icon icon="fas fa-cart-plus" size="lg" />
            </button>
            <button
              @click="$store.commit('increaseLove')"
              class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
            >
              <font-awesome-icon icon="fab fa-gratipay" size="2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    let prodName = ref("Product Name");
    let itemColor = ref("");
    let price = ref(1580);
    let productDetail = ref(`Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy
            chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim
            forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue
            bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed
            umami cardigan.`)
    let size = ref("38")
    return {
      prodName,
      itemColor,
      price,
      productDetail,
      size
    };  
  },
  methods: {
    setColorBlack() {
      this.itemColor = "Black";
    },
    setColorGray() {
      this.itemColor = "Gray";
    },
    setColorBlue() {
      this.itemColor = "Blue";
    },
    Buy() {
      console.log(this.prodName, this.itemColor, this.price,this.size);
    },
  },
});
</script>

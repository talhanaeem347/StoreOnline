<template>
  <section class="text-gray-600 body-font relative">
    <div class="container px-5 py-4 mx-auto">
      <div class="flex flex-col text-center w-full">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Drope Some Comment
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          {{ err }}
        </p>
      </div>
      <div class="lg:w-1/2 md:w-2/3 mx-auto">
        <div class="flex sm:flex-row flex-col flex-wrap -m-2">
          <div class="p-2 sm:w-1/2 lg:w1/2 md:w1/2 w-full">
            <div class="relative">
              <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
              <input type="text" id="name" name="name" v-model="uname"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div class="p-2 sm:w-1/2 lg:w1/2 md:w1/2 w-full">
            <div class="relative">
              <label for="number" class="leading-7 text-sm text-gray-600">Mobail Number</label>
              <input type="tel" id="number" name="number" pattern="03[0-4[{2}-[0=9]{7}" v-model="number"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div class="p-2 w-full">
            <div class="relative">
              <label for="address" class="leading-7 text-sm text-gray-600">Your Address</label>
              <textarea id="address" name="address" v-model="address"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-10 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
          </div>
          <div class="p-2 w-full">
            <div class="relative">
              <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
              <textarea id="message" name="message" v-model="message"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
          </div>
          <div class="p-2 w-full">
            <button @click="isFull"
              class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Submit
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
  name: "RetuenComponent",
  setup() {
    let uname = ref("");
    let number = ref("");
    let address = ref("");
    let message = ref("");
    let err = ref("");
    return {
      uname,
      number,
      address,
      message,
      err,
    };
  },
  methods: {
    IsEmpty(value: string) {
      return value === "" || value === undefined ? true : false;
    },
    isFull(): boolean {
      if (
        !this.IsEmpty(this.uname) &&
        !this.IsEmpty(this.number) &&
        !this.IsEmpty(this.address) &&
        !this.IsEmpty(this.message)
      )
        return true;
      this.err = `Some importint field is empty`;
      return false;
    },
    isVaildNumber(): boolean {
      if (this.number.length === 11) return true;
      this.err = `Number is incorrect`;
      return false;
    },
    submit() {
      if (this.isFull() && this.isVaildNumber()) console.log("Every Thing is Ok");
    },
  },
});
</script>

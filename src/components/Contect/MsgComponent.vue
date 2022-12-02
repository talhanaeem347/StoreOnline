<template>
  <section class="text-gray-600 body-font relative">
    <div class="container px-5 py-8 mx-auto">
      <div class="flex flex-col text-center w-full mb-2">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Contact Us
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.
        </p>
      </div>
      <div class="lg:w-1/2 md:w-2/3 mx-auto">
        <div class="flex flex-col flex-wrap -m-2">
          <div
            v-if="!$store.state.active"
            class="w-full flex flex-col sm:flex-row md:flex-row lg:flex-row flex-wrap"
          >
            <div class="p-2 sm:w-/2 md:w-1/2 lg:w-1/2 w-full">
              <div class="relative">
                <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="SAM"
                  v-model="mName"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-2 sm:w-/2 md:w-1/2 lg:w-1/2 w-full">
              <div class="relative">
                <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  v-model="mEmail"
                  placeholder="someone@example.com"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
          </div>
          <div class="p-2 w-full">
            <div class="relative">
              <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
              <textarea
                id="message"
                name="message"
                v-model="message"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
          </div>
          <div class="p-2 w-full">
            <button
              @click="send"
              class="w-full flex justify-center mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Submit
            </button>
          </div>
          <div
          v-if="!$store.state.active" class="p-2">
            <router-link
              class="text-blue-500 hover:text-blue-300 focus:outline-none"
              to="/sign-up"
              >Sign Up?</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MsgComponent",
  setup() {
    let mName = ref("");
    let mEmail = ref("");
    let message = ref("");
    return {
      mName,
      mEmail,
      message,
    };
  },
  methods: {
    isEmpty(value: string): boolean {
      return value === null || value === undefined ? true : false;
    },
    assign() {
      if (this.$store.state.active) return true;
      else console.log("name and emil set using api");
      return false;
    },
    send() {
      this.assign();
      console.log(this.mName, this.mEmail, this.message);
      this.$router.push({name:'Home'})
    },
  },
});
</script>

<template>
  <section class="text-gray-600 body-font relative">
    <div v-if="!reset" class="container py-2 mx-auto">
      <div
        class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col mx-auto w-full mt-10 md:mt-0 shadow-2xl"
      >
        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Reset Password</h2>
        <p class="leading-relaxed mb-5 text-gray-600"></p>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            v-model="rEmail"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="n-password" class="leading-7 text-sm text-gray-600"
            >New Password</label
          >
          <input
            type="password"
            id="n-password"
            name="n-password"
            v-model="rPassword"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="cn-password" class="leading-7 text-sm text-gray-600"
            >Conform New Password</label
          >
          <input
            type="password"
            id="cn-password"
            name="cn-password"
            v-model="rcPassword"

            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
          
          <button
            class="text-white bg-indigo-500 border-0 py-2 w-full focus:outline-none hover:bg-indigo-600 rounded text-lg"
            @click="done"
          >
            done
          </button>
        
      </div>
    </div>
    <div v-else class="flex justify-center">
      <div class="relative">
        <p class="text-center">Your Password Has Been Reset Succesfully</p>
        <router-link
          to="/log-in"
          class="block text-center text-blue-500 hover:text-blue-300"
          >Sign In</router-link
        >
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ResetPassword",
  setup() {
    let reset = ref(false);
    let rEmail = ref("");
    let rPassword = ref("");
    let rcPassword = ref("");

    return { reset,rEmail,rPassword,rcPassword };
  },
  methods: {
    done() {
      this.reset = true;
      console.log(this.rEmail,this.rPassword,this.rcPassword);
      
    },
  },
});
</script>

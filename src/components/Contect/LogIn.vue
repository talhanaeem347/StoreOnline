<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-4 mx-auto flex flex-wrap items-center">
      <div
        class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 hidden sm:flex md:flex lg:flex flex-col"
      >
        <h1 class="title-font font-medium text-3xl text-gray-900">
          Slow-carb next level shoindcgoitch ethical authentic, poko scenester
        </h1>
        <p class="leading-relaxed mt-4">
          Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock
          starladder roathse. Craies vegan tousled etsy austin.
        </p>
      </div>
      <div
        class="lg:w-2/6 md:w-1/2 bg-gray-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
      >
        <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign In</h2>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            v-model="lEmail"
            placeholder="someone@example.com"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            v-model="lPassword"
            placeholder="Password"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <input
            type="checkbox"
            id="chkbox"
            name="chkbox"
            v-model="lRobort"
            @click="isFull"
            class="bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          <label for="chkbox" class="pl-4 leading-7 text-sm text-gray-600"
            >I am not Robort</label
          >
        </div>
        <div>
          <div
            v-if="!lRobort"
            class="text-white bg-indigo-500 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full h-10"
          ></div>
          <button
            v-else
            @click="logIn"
            class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full"
          >
            Log In
          </button>
        </div>
        <div class="flex justify-between">
          <router-link
            to="/reset-password"
            class="bock w-max text-blue-500 hover:text-blue-300 pt-2"
            >Forgot Password?</router-link
          >
          <router-link
            to="/sign-up"
            class="bock w-max text-blue-500 hover:text-blue-300 pt-2"
            >Sign Up?
          </router-link>
        </div>
        <p class="text-xs text-gray-500 mt-3 flex justify-between">
          Literally you probably have heard of them Sandel.
        </p>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "LogIn",
  setup() {
    let lEmail = ref("");
    let lPassword = ref("");
    let lRobort = ref(false);
    return { lEmail, lPassword, lRobort };
  },
  methods: {
    isEmpty(value: string): boolean {
      return value === "" || value === undefined ? true : false;
    },
    isFull(): boolean {
      if (!this.isEmpty(this.lEmail) && !this.isEmpty(this.lPassword)) return true;
      this.lRobort = false;
      (document.querySelector(`#chkbox`) as HTMLInputElement).checked = false;
      console.log(this.lRobort);
  
      return false;
    },
    logIn(): void {
      if (!this.isFull()) return;
      this.$router.push({ name: `Home` });
      this.$store.state.active = true
    },
  },
});
</script>

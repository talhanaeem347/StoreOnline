<template>
  <div>
    <section class="text-gray-600 body-font relative">
      <div class="container px-5 py-2 mx-auto relative z-10">
        <div
          class="lg:w-2/3 md:w-full sm:w-full mx-auto flex flex-col flex-wrap rounded-md bg-gray-50"
        >
          <div class="flex flex-col text-center mb-2">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Sign Up Page
            </h1>
            <p class="w-2/3 mx-auto leading-relaxed text-base">
              Welcome to our Regisration Page
            </p>
          </div>
          <p id="err" class="w-full text-center text-red-500 leading-relaxed text-base">
            {{ err }}
          </p>

          <div class="flex flex-wrap flex-col sm:flex-row md:flex-row lg:flex-row">
            <div class="p-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
              <div class="relative">
                <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  v-model="rName"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
              <div class="relative">
                <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="someone@example.com"
                  v-model="rEmail"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <div class="p-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
              <div class="relative">
                <label for="password" class="leading-7 text-sm text-gray-600"
                  >Password</label
                >
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  v-model="rPassword"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
              <div class="relative">
                <label for="c-password" class="leading-7 text-sm text-gray-600"
                  >Conform Password</label
                >
                <input
                  type="password"
                  id="c-password"
                  name="c-pasword"
                  placeholder="Conform Password"
                  v-model="rcPassword"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative mb-4">
                <input
                  type="checkbox"
                  id="chk-box"
                  name="chkbox"
                  v-model="rRobort"
                  @click="chkValidation"
                  class="bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <label for="chk-box" class="pl-4 leading-7 text-sm text-gray-600"
                  >I am not Robort</label
                >
              </div>
            </div>

            <div class="p-2 w-full ">
              <div
                v-if="!rRobort"
                class="w-min mx-auto text-white bg-indigo-500 border-0 py-6 px-16 focus:outline-none rounded"
              ></div>
              <button
                v-else
                class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Sign Up
              </button>
            </div>
            <div class="w-full flex justify-between p-2">
              <p class="text-sm">
                Allready have an acount
                <font-awesome-icon icon="fas fa-arrow-right" size="sm" />
              </p>
              <router-link
                class="text-blue-500 hover:text-blue-300 focus:outline-none"
                to="/log-in"
                >Sign In?</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "SignUp",
  setup() {
    let rName = ref("");
    let rEmail = ref("");
    let rPassword = ref("");
    let rcPassword = ref("");
    let rRobort = ref(false);
    let err = ref("");
    return {
      rName,
      rEmail,
      rPassword,
      rcPassword,
      rRobort,
      err,
    };
  },
  methods: {
    isEmpty(value: string): boolean {
      return value === "" || value === undefined ? true : false;
    },
    isFull(): boolean {
      if (
        !this.isEmpty(this.rName) ||
        !this.isEmpty(this.rEmail) ||
        !this.isEmpty(this.rPassword) ||
        !this.isEmpty(this.rcPassword)
      )
        return true;

      this.err = `Some necessary field is empty`;
      (document.querySelector(`#chk-box`) as HTMLInputElement).checked = false;
      return false;
    },
    testPassword() {
      if (this.rPassword === this.rcPassword) return true;
      this.err = `Passwords are not same`;
      (document.querySelector(`#chk-box`) as HTMLInputElement).checked = false;

      return false;
    },
    chkValidation() {
      if (this.isFull() && this.testPassword()) this.rRobort = true;
    },
  },
});
</script>

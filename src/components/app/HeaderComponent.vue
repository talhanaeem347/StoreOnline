<template>
  <div>
    <header class="text-gray-600 bg-red-300 body-font">
      <div
        class="container mx-auto flex flex-wrap md:flex-row justify-between items-center"
      >
        <router-link
          to="/"
          class="flex title-font font-medium items-center text-gray-900 md:mb-0"
        >
          <img src="@/assets/images/logo.jpg" class="w-6 h-6" alt="" />
          <span class="ml-3 text-xl">{{ $store.state.siteName }}</span>
        </router-link>
        <nav
          id="lg-nav"
          class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"
        >
          <router-link to="/" class="mx-2 p-1 hover:text-gray-900">Home</router-link>
          <router-link to="/about" class="mx-2 p-1 hover:text-gray-900"
            >About</router-link
          >
          <router-link to="/policy" class="mx-2 p-1 hover:text-gray-900"
            >Policies</router-link
          >
          <router-link to="/contect" class="mx-2 p-1 hover:text-gray-900"
            >Contect</router-link
          >
        </nav>

        <div>
          <router-link
            to="/log-in"
            v-if="!$store.state.active"
            @mouseenter="showbtn"
            @mouseleave="hidebtn"
            class="hover:bg-gray-200 rounded px-1"
          >
            <font-awesome-icon icon="fas fa-circle-user" size="lg" />
            <span
              id="btn"
              class="hidden items-center border-0 px-1 focus:outline-none hover:bg-gray-200 rounded text-base"
            >
              Log In

              <font-awesome-icon icon="fas fa-arrow-right" class="pl-1" />
            </span>
          </router-link>
          <div v-else class="flex items-center">
            <div
              @mouseenter="showbtn"
              @mouseleave="hidebtn"
              @click="logOut"
              class="hover:bg-gray-200 rounded px-1 cursor-pointer"
            >
              <font-awesome-icon icon="far fa-circle-user" size="lg" />
              <button
                id="btn"
                class="hidden items-center border-0 px-1 focus:outline-none hover:bg-gray-200 rounded text-base"
              >
                Log Out

                <font-awesome-icon icon="fas fa-arrow-right" class="pl-1" />
              </button>
            </div>
            <div class="flex justify-between">
              <router-link to="/my-cart" class="pl-1">
                <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                <sup class="text-gray-200 -ml-1">{{ $store.state.cart }}</sup>
              </router-link>
              <router-link to="/liked-items" class="pl-1">
                <font-awesome-icon icon="fab fa-gratipay" size="lg" />
                <sup class="text-gray-200 -ml-1">{{ $store.state.love }}</sup>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <nav id="xs-nav" class="hidden mx-auto flex-wrap text-base justify-center">
          <router-link to="/" class="mx-2 p-1 hover:text-gray-900">Home</router-link>
          <router-link to="/about" class="mx-2 p-1 hover:text-gray-900"
            >About</router-link
          >
          <router-link to="/policy" class="mx-2 p-1 hover:text-gray-900"
            >Policies</router-link
          >
          <router-link to="/contect" class="mx-2 p-1 hover:text-gray-900"
            >Contect</router-link
          >
        </nav>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    let countCart = 0;
    return { countCart };
  },
  methods: {
    showbtn: () => document.querySelector(`#btn`)?.classList.remove(`hidden`),
    hidebtn: () => document.querySelector(`#btn`)?.classList.add(`hidden`),
    logOut() {
      this.$store.state.acive = false;
    },
  },
});
</script>

<style scoped>
@media only screen and (max-width: 645px) {
  #lg-nav {
    display: none;
  }
  #xs-nav {
    display: flex;
  }
}
@media only screen and (max-width: 405px) {
  #xs-nav {
    display: flex;
    flex-direction: column;
  }
}
</style>

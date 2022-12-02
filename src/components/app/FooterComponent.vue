<template>
  <div class="bg-red-200">
    <footer class="text-gray-600 body-font">
      <div class="container px-5 mx-auto flex justify-between items-center">
        <div class="flex justify-between flex-col sm:flex-row md:flex-row lg:flex-row">
          <router-link
            to="/"
            class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <img src="@/assets/images/logo.jpg" class="w-6 h-6" alt="" />
            <span class="ml-3 text-xl">{{$store.state.siteName}}</span>
          </router-link>

          <p
            class="text-sm text-gray-500 ml-2 pl-4 sm:border-l-2 md:border-l-2 lg:border-l-2 sm:border-gray-200 sm:py-2"
          >
            <font-awesome-icon icon="far fa-copyright" /> 2020 {{$store.state.siteName}} —
            <router-link
              to="/"
              class="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
              >@{{$store.state.siteName}}.com</router-link
            >
          </p>
        </div>

        <div>
          <span class="flex sm:ml-auto  justify-center flex-col sm:flex-row md:flex-row lg:flex-row">
            <div>
              <a href="#" target="_blank" class="text-gray-500">
                <font-awesome-icon icon="fa-brands fa-facebook-f" />
              </a>
              <a href="#" target="_blank" class="text-gray-500 ml-3">
                <font-awesome-icon icon="fab fa-twitter" />
              </a>
            </div>
            <div>
              <a href="#" target="_blank" class="text-gray-500 sm:ml-3 md:ml-3 lg:ml-3">
                <font-awesome-icon icon="fab  fa-instagram" />
              </a>
              <a href="#" target="_blank" class="text-gray-500 ml-3">
                <font-awesome-icon icon="fab fa-linkedin-in" />
              </a>
            </div>
          </span>
        </div>
      </div>
    </footer>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterCom",
});
</script>

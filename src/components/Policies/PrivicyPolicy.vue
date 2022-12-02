<template>
  <section class="text-gray-600 body-font">
    <div class="container px-2 py-2 mx-auto">
      <div class="flex flex-col items-start p-2">
        <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
          Privicy Policies
        </h1>

        <p class="text-gray-700 text-justify mb-4">
           <span class="italic font-medium">{{ $store.state.siteName }}</span> always ensures that the privacy of its
          customers and all concerned is always protected. <router-link class="text-blue-500 hover:text-blue-300" to="/"> <span class="italic font-medium">{{ $store.state.siteName }}.pk</span></router-link> manages and operates
          this website, hence this privacy policy governs your use of  <span class="italic font-medium">{{ $store.state.siteName }}</span>'s website. Our
          privacy policy outlines what includes in personal information; how this
          information is being used; who manages and has access to your data, and your
          rights concerning the information collected. Using your access for usage of
           <span class="italic font-medium">{{ $store.state.siteName }}</span>'s website comprises of your acceptance of Stylo's Privacy Policy and Terms
          of Use.
        </p>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PrivicyPolicy",
  setup() {
    let x = "Talha";
    return { x };
  },
});
</script>

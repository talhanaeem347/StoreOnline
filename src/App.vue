<template>
  <div class="bg-gray-100 min-h-screen flex flex-col justify-between">
    <HeaderComponent/>
    <router-view/>
    <FooterComponent/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "@/components/app/HeaderComponent.vue";
import FooterComponent from "@/components/app/FooterComponent.vue";

export default defineComponent({
  name: "App",
  components:{
    HeaderComponent,
    FooterComponent
  }

});
</script>

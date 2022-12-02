<template>
  <div class="">
    <div class="max-h-[750px] m-2 overflow-hidden">
      <CarouselCom />
    </div>
    <div class="max-h-[750px] m-2 overflow-hidden">
      <GalleryCom />
    </div>

    <div class="max-h-[405px] overflow-hidden">
      <PricingComponent />
    </div>
    <router-link
      to="/prices"
      class="my-1 ml-72 w-fit block text-blue-500 hover:text-blue-300"
      >learn mor
      <font-awesome-icon icon="fas fa-arrow-right" />
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GalleryCom from "@/components/Home/GalleryComponent.vue";
import CarouselCom from "@/components/Home/TrendingItems.vue";
import PricingComponent from "@/components/Home/PricingComponent.vue";
export default defineComponent({
  name: "HomeView",
  components: {
    GalleryCom,
    CarouselCom,
    PricingComponent,
  },
});
</script>



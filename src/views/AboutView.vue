<template>
  <div>
    <HistoryCom />
    <WhyUs />
 
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HistoryCom from "@/components/about/HistoryComponent.vue";
import WhyUs from "@/components/about/QualityComponent.vue";
export default defineComponent({
  name: "AboutView",
  components: {
    HistoryCom,
    WhyUs,
  },
});
</script>
<style scoped></style>

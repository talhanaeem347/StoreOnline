<template>
  <div>

    <ReturnPolicy/>
    <CollectionPoicy/>
    <PrivicyPolicy />

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CollectionPoicy from "@/components/Policies/CancelationPolicy.vue";
import ReturnPolicy from "@/components/Policies/ReturnPolicy.vue";
import PrivicyPolicy from "@/components/Policies/PrivicyPolicy.vue";
export default defineComponent({
  name: "PolicyView",
  components: {
    ReturnPolicy,
    CollectionPoicy,
    PrivicyPolicy,
  },
});
</script>

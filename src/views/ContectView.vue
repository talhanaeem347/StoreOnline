<template>
  <div>
    <MsgCom />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MsgCom from "@/components/Contect/MsgComponent.vue";
export default defineComponent({
  name: "contectView",
  components: {
    MsgCom,
  },
});
</script>

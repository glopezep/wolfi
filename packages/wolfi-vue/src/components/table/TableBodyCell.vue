<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  name: "WTableBodyCell"
})
</script>

<template>
  <div class="table-body-cell">
    <slot />
  </div>
</template>

<style scoped>
.table-body-cell {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex: 1;
  padding: 1rem;
  /* font-size: 0.8125rem; */
  font-size: 1rem;
}
</style>
<script setup lang="ts">
import { Row } from "@ds";

defineProps<{ id: string }>();
</script>

<template>
  <div class="section" :id="id">
    <Row>
      <slot />
    </Row>
  </div>
</template>

<style lang="scss">
.section {
  min-height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  & > .row-component {
    width: 100%;
  }
}
</style>

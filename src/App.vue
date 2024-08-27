<script setup lang="ts">
import { Button } from "@ds";
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
  <Button
    class="whatsapp"
    variant="plain"
    target="_blank"
    href="https://api.whatsapp.com/send?l=pt_br&phone=5551996175480&text=Olá, gostaria de ter mais informações sobre landing pages."
  >
    <img src="/assets/icons/whatsapp.svg" :height="50" :width="50" />
  </Button>
</template>

<style lang="scss">
html {
  scroll-behavior: smooth;
}

body {
  background: url("/assets/images/background.jpg") no-repeat center center fixed;
  background-size: cover;
  background-color: var(--grey);
  height: 100vh;
  margin: 0;
  color: var(--white);
}

.whatsapp {
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 1rem;
  z-index: 3;
}
</style>

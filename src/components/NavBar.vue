<script setup lang="ts">
import { Button, Col, Row } from "@ds";
import { useRouter } from "vue-router";

const router = useRouter();
const toSection = (section: string) => router.push({ hash: `#${section}` });
</script>

<template>
  <nav class="navbar">
    <Row>
      <Col cols="6" sm="4" class="navbar-logo">
        <Button label="Logo" variant="plain" @click="toSection('info')" />
      </Col>
      <Col cols="6" sm="8" class="navbar-buttons">
        <Button label="Vantagens" @click="toSection('banners')" />
        <Button label="Sobre nós" @click="toSection('about-us')" />
        <Button label="FAQ" @click="toSection('faq')" />
        <Button label="Cadastro" @click="toSection('register')" />
      </Col>
    </Row>
  </nav>
</template>

<style lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--grey);
  padding: var(--padding-md) 0;
  z-index: 2;

  .button-component {
    color: var(--white);
  }
}

.navbar-logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}
</style>

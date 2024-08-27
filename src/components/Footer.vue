<script setup lang="ts">
import { Button, Col, Row, Text } from "@ds";
</script>

<template>
  <footer>
    <Row>
      <Col cols="6" sm="12" :style="{ padding: 'var(--padding-default)' }">
        <Text
          label="Este site tem como objetivo apresentar um portifólio de trabalho, todas as informações listadas são fictícias e não tem poder comercial."
          tag="p"
        />
      </Col>
      <Col cols="3" sm="6" class="contact">
        <div class="contact-title">
          <Text label="Contato" tag="h2" />
        </div>
        <div class="contact-actions">
          <Button
            variant="plain"
            href="mailto:gustavo_boliv@hotmail.com?subject=Landing Page"
            :leading-icon="{ name: 'mail', size: 20, color: 'white' }"
          />
          <Button
            variant="plain"
            :leading-icon="{
              name: 'github',
              size: 20,
              color: 'white',
              filled: true,
            }"
            href="https://github.com/GusBays"
            target="_blank"
          />
          <Button
            variant="plain"
            :leading-icon="{
              name: 'linkedin',
              size: 20,
              color: '#0A66C2',
              filled: true,
            }"
            href="https://www.linkedin.com/in/gustavobays/"
            target="_blank"
          />
        </div>
      </Col>
    </Row>
  </footer>
</template>

<style lang="scss">
footer {
  padding: var(--padding-lg) 0;
  background-color: var(--background-color);
}

.contact {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: var(--gap-md);

  .contact-actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--gap-md);
  }
}
</style>

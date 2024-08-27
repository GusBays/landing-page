<script setup lang="ts">
import Footer from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";
import Section from "@/components/Section.vue";
import { not } from "@/helpers/helper";
import {
  Banners,
  Button,
  Card,
  Col,
  Container,
  InputCheckbox,
  InputText,
  Text,
} from "@ds";
import { IBannersProps } from "@ds/types";
import { ref, Ref } from "vue";
import { useRouter } from "vue-router";

interface Question {
  id: number;
  question: string;
  answer: string;
  open: boolean;
}

const router = useRouter();
const toSection = (section: string) => router.push({ hash: `#${section}` });

const banners: IBannersProps = {
  title: { label: "Vantangens", tag: "h1" },
  subtitle: {
    label:
      "Confira as principais vantagens de criar uma landing page para seu negócio",
    tag: "h4",
  },
  mask: "grey",
  banners: [
    {
      src: "./assets/images/banner-1.jpg",
      title: { label: "Capture leads", tag: "h4" },
    },
    {
      src: "./assets/images/banner-2.jpg",
      title: { label: "Impulsione suas vendas", tag: "h4" },
    },
    {
      src: "./assets/images/banner-3.jpg",
      title: { label: "Alcance novos publicos com sua marca", tag: "h4" },
    },
  ],
};

const questions: Ref<Question[]> = ref([
  {
    id: 1,
    question: "O que é uma landing page?",
    answer:
      "Uma landing page é uma página web focada em converter visitantes em leads ou clientes através de uma ação específica, como preencher um formulário ou fazer uma compra.",
    open: false,
  },
  {
    id: 2,
    question:
      "Qual é a diferença entre uma landing page e uma página normal de um site?",
    answer:
      "Uma página normal de um site pode ter várias informações e links para explorar, enquanto a landing page é focada em um único objetivo, como convencer o visitante a se inscrever ou comprar algo.",
    open: false,
  },
  {
    id: 3,
    question: "Por que as landing pages são importantes no marketing digital?",
    answer:
      "Elas são cruciais porque aumentam as chances de conversão ao direcionar os visitantes a realizar uma ação específica, melhorando o retorno sobre o investimento (ROI) em campanhas de marketing.",
    open: false,
  },
  {
    id: 4,
    question: "O que faz uma landing page ser eficaz?",
    answer:
      "Uma landing page eficaz tem um design claro, uma chamada para ação atraente, conteúdo relevante e sem distrações, tudo focado em guiar o usuário a realizar a ação desejada.",
    open: false,
  },
  {
    id: 5,
    question: "Como medir o sucesso de uma landing page?",
    answer:
      "O sucesso pode ser medido por meio da taxa de conversão, que é a porcentagem de visitantes que realizam a ação desejada, como preencher um formulário ou fazer uma compra.",
    open: false,
  },
]);

const toggleQuestion = (id: number) => {
  const byId = (q: Question) => q.id === id;
  const question = questions.value.find(byId);

  question.open = not(question.open);
};
</script>

<template>
  <div class="header">
    <NavBar />
  </div>

  <Container class="content">
    <Section id="info">
      <Col cols="6" sm="12" class="info">
        <div class="info-title">
          <Text tag="h1" label="Landing Page" />
          <Text
            tag="h4"
            label="Transforme visitantes em clientes com uma landing page atraente, otimizada e focada em conversões."
          />
        </div>
        <div class="info-action">
          <Button
            label="Veja mais"
            @click="toSection('banners')"
            :trailing-icon="{ name: 'chevron_right', color: 'white' }"
            variant="primary"
          />
        </div>
      </Col>
    </Section>

    <Section id="banners">
      <Col cols="12">
        <Banners v-bind="banners" />
      </Col>
    </Section>

    <Section id="about-us">
      <Col cols="6" sm="12" class="about-us">
        <Card :title="{ label: 'Sobre nós', tag: 'h1', color: 'white' }">
          <Text tag="p">
            Somos uma empresa especializada na criação de sites que destacam o
            melhor de cada cliente. Com foco em um design refinado e
            personalizado, garantimos que cada projeto seja único e totalmente
            alinhado com a identidade visual de sua marca. Não utilizamos
            plataformas genéricas para gerar os sites; ao contrário,
            desenvolvemos tudo do zero, resultando em sites exclusivos que
            refletem a verdadeira essência de cada cliente.
          </Text>
          <Text tag="p">
            Além da estética, nossos sites são otimizados para oferecer uma
            excelente experiência ao usuário, combinando performance, SEO e
            navegabilidade simplificada. Nosso compromisso é entregar sites que
            não só impressionam visualmente, mas também impulsionam os
            resultados dos nossos clientes, fortalecendo sua presença online com
            eficiência e estilo.
          </Text>
        </Card>
      </Col>
    </Section>

    <Section id="faq">
      <Col cols="12" class="faq">
        <div class="faq-title">
          <Text label="Perguntas frequentes" tag="h1" />
        </div>
        <div class="faq-body">
          <div class="faq-item" v-for="question of questions">
            <Button
              :label="question.question"
              variant="plain"
              :trailing-icon="{
                name: question.open
                  ? 'keyboard_arrow_up'
                  : 'keyboard_arrow_down',
                size: 20,
                color: 'white',
              }"
              @click="toggleQuestion(question.id)"
            />
            <div class="faq-item-answer" :class="{ open: question.open }">
              <div class="faq-item-answer-mask"></div>
              <div class="faq-item-answer-content">
                <Text tag="p" :label="question.answer" />
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Section>

    <Section id="register">
      <Col cols="12" class="register">
        <Card
          :title="{
            label: 'Cadastre-se para receber novidades',
            tag: 'h1',
            color: 'white',
          }"
        >
          <form>
            <div class="register-body">
              <InputText placeholder="Nome completo" :required="true" />
              <InputText placeholder="Email" type="email" :required="true" />
              <InputText
                placeholder="Telefone com DDD"
                mask="## #####-#####"
                :required="true"
              />
              <InputCheckbox
                :style="{ alignSelf: 'start' }"
                label="Aceito receber mensagens de novidades e promoções no meu email."
              />
              <Button
                label="Enviar"
                variant="primary"
                type="submit"
                :style="{ alignSelf: 'start' }"
              />
            </div>
          </form>
        </Card>
      </Col>
    </Section>
  </Container>

  <div class="footer">
    <Footer />
  </div>
</template>

<style lang="scss">
.info {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: var(--gap-default);

  width: 100%;
}

.about-us {
  width: 100%;
  text-align: start;
}

.faq {
  display: flex;
  flex-direction: column;
  gap: var(--gap-default);
  align-items: center;
  justify-content: center;
  text-align: center;
}

.faq-body {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-default);
  gap: var(--gap-default);

  .faq-item {
    .button-component {
      color: var(--white);
    }
  }

  .faq-item-answer {
    position: relative;
    max-height: 0;
    opacity: 0;
    transform: translateY(-10px);
    overflow: hidden;
    transition: opacity 0.5s ease, transform 0.5s ease;

    &.open {
      padding: var(--padding-default);
      max-height: 100px;
      opacity: 1;
      transform: translateY(0);

      .faq-item-answer-mask {
        opacity: 0.5;
      }
    }

    .faq-item-answer-mask {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: var(--grey);
      opacity: 0;
      z-index: 0;
      transition: opacity 0.5s ease;
    }

    .faq-item-answer-content {
      position: relative;
      z-index: 1;
    }
  }
}

.register-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: var(--gap-lg);
  margin-top: var(--margin-lg);

  .input-text {
    color: var(--white);
  }
}
</style>

<template>
  <section>
    <header>
      <HeaderComponent />
    </header>
    <main>
      <MainComponent />
    </main>

    <footer>
      <FooterComponent />
    </footer>
  </section>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
import CardsComponent from "./components/CardsComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import { store } from "./store";

export default {
  components: {
    HeaderComponent,
    MainComponent,
    CardsComponent,
    FooterComponent,
  },
  data() {
    return {
      store,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>

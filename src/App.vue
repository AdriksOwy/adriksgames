<template>
  <Nav />
  <Main />
  <Footer />
</template>

<script>
import Nav from "../src/components/Nav.vue";
import Main from "../src/components/Main.vue";
import Footer from "../src/components/Footer.vue";

export default {
  components: {
    Nav,
    Main,
    Footer,
  },
};
</script>

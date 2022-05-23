<template>
  <section class="dark:bg-black">
    <Nav :toggleMenu="toggleMenu" />
  </section>
  <Footer />
</template>
<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Nav,
    Footer,
  },
  data() {
    return {
      toggleMenu: false,
    };
  },
  methods: {
    toggle() {
      console.log("clicked");
    },
  },
};
</script>
<style>
#app {
  align-items: center;
}
</style>

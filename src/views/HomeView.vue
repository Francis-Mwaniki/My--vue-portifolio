<template>
  <AboutMe />
  <MyTools />
  <RecomendedPro />
</template>

<script>
// @ is an alias to /src
import AboutMe from "@/components/AboutMe.vue";
import MyTools from "@/components/MyTools.vue";
import RecomendedPro from "@/components/RecomendedPro.vue";

export default {
  name: "HomeView",
  components: {
    AboutMe,
    MyTools,
    RecomendedPro,
  },
};
</script>

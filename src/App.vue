<template>
  <div>
    <AHeader> </AHeader>
    <ABody></ABody>
  </div>
</template>

<script>
import AHeader from "./components/Header.vue";
import ABody from "./components/ABody.vue";
import { WOW } from "wowjs";

export default {
  name: "App",
  components: {
    AHeader,
    ABody,
  },
  mounted() {
    var wow = new WOW({
      live: false,
      animateClass: 'animate__animated'
    });
    wow.init();
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>

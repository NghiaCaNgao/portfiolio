<template>
  <div class="a-header">
    <ANav> </ANav>

    <header class="align">
      <Hello> </Hello>

      <div class="sub-des">
        <h4>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
          consequatur temporibus aliquam nulla totam ut quidem eaque incidunt id
          iste necessitatibus laborum amet optio doloremque sit iure, soluta
          vel. Tempore?
        </h4>
        <a role="button" class="align">
          Discover me <i class="fad fa-long-arrow-alt-right"></i>
        </a>
      </div>

      <div class="item-deco">
        <img src="/img/imgs/code.svg" height="100%" />
      </div>
      <div class="item-deco-dot item-deco-dot-1">
        <img src="/img/imgs/dot.png" height="100%" />
      </div>
      <div class="item-deco-dot item-deco-dot-2">
        <img src="/img/imgs/dot.png" height="100%" />
      </div>
    </header>
  </div>
</template>

<script>
import ANav from "./Nav";
import Hello from "./Hello_typewriter";
export default {
  name: "AHeader",
  components: {
    ANav,
    Hello,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@600&display=swap");
@import url("../assets/fa/css/all.min.css");
@import "../assets/others/typer_effect.scss";
@import "./header_style.scss";
</style>

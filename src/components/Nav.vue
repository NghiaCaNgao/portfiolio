<template>
  <nav class="align">
    <div class="logo align">
      <img src="/img/icons/144.png" height="100%" />
    </div>

    <div class="social align">
      <a class="social-link align"> <i class="fab fa-facebook-f"></i> </a>
      <a class="social-link align"> <i class="fab fa-linkedin-in"></i> </a>
      <a class="social-link align"> <i class="fab fa-github"></i> </a>
      <a class="social-link align" id="btn_menu">
        <i class="fad fa-stream"></i>
      </a>
    </div>

    <div class="menu" id = "menu">
      <div class="nav-back">
        <a id="btn_return" role="button" class="align">
          <i class="fad fa-arrow-left"></i>
        </a>

        <div class="social align">
          <a class="social-link align"> <i class="fab fa-facebook-f"></i> </a>
          <a class="social-link align"> <i class="fab fa-linkedin-in"></i> </a>
          <a class="social-link align"> <i class="fab fa-github"></i> </a>
        </div>

        <a id="btn_share" role="button" class="align">
          <i class="fad fa-share"></i>
        </a>
      </div>

      <div class="nav-link align">
        <a href="#" class="a-link align">
          <i class="fad fa-home"></i>
          <span>Home</span>
        </a>

        <a href="#" class="a-link align">
          <i class="fad fa-books"></i>
          <span> Story </span>
        </a>

        <a href="#" class="a-link align">
          <i class="fad fa-sparkles"></i>
          <span> Skill </span>
        </a>

        <a href="#" class="a-link align">
          <i class="fad fa-code"></i>
          <span> API </span>
        </a>
      </div>

      <div></div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "ANav",
  methods: {
    showMenu() {
      let el = document.getElementById("btn_menu");
      el.addEventListener("click",function() {
        let menu = document.getElementById("menu")
        menu.style.top = 0;
      })
    },
    hidenMenu(){
      let el = document.getElementById("btn_return");
      el.addEventListener("click",function() {
        let menu = document.getElementById("menu")
        menu.style.top = "-100%";
      })
    }
  },
  mounted () {
    this.showMenu();
    this.hidenMenu();
  },
};
</script>

<style lang="scss">
@import "nav_style.scss";
</style>
<template>
  <nav class="align">
    <!-- Logo -->
    <div class="logo align" id="logo">
      <img src="/img/icons/144.png" height="100%" />
    </div>
    <!-- End logo -->

    <!-- Menu for desktop -->
    <div class="desktop-menu align">
      <div class="part-link align">
        <a
          v-for="item in part_link"
          v-bind:key="'d_' + item.name"
          class="link-text align"
        >
          {{ item.name }}
        </a>
      </div>

      <div class="social-link align">
        <a
          v-for="item in social_link"
          v-bind:key="'d_' + item.name"
          class="link-icon align"
        >
          <i class="fab" v-bind:class="item.icon"></i>
        </a>

        <a class="link-icon align" id="btn_menu">
          <i class="fad fa-stream"></i>
        </a>
      </div>
    </div>
    <!-- End menu for desktop -->

    <!-- Menu for mobile -->
    <div class="mobile-menu hidden" id="menu">
      <div class="nav-mobile-menu">
        <button id="btn_return" role="button" class="align">
          <i class="fad fa-arrow-left"></i>
        </button>

        <div class="social-link align">
          <a
            v-for="item in social_link"
            class="link-icon align"
            v-bind:key="'m_' + item.name"
            rol="m_social_link"
          >
            <i class="fab" v-bind:class="item.icon"></i>
          </a>
        </div>

        <button id="btn_share" role="button" class="align">
          <i class="fad fa-share"></i>
        </button>
      </div>

      <div class="part-link align">
        <a
          class="link-text align m_link_part"
          v-for="item in part_link"
          v-bind:key="'m_' + item.name"
        >
          <i class="fad" v-bind:class="item.icon"> </i>
          <span>{{ item.name }}</span>
        </a>
      </div>

      <div></div>
    </div>
    <!-- End mobile menu -->
  </nav>
</template>

<script>
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

export default {
  name: "ANav",
  data() {
    return {
      part_link: {
        0: {
          name: "Home",
          icon: "fa-home",
          link: "",
        },
        1: {
          name: "Skill",
          icon: "fa-books",
          link: "",
        },
        2: {
          name: "Story",
          icon: "fa-sparkles",
          link: "",
        },
        3: {
          name: "API",
          icon: "fa-code",
          link: "",
        },
      },
      social_link: {
        0: {
          name: "facebook",
          icon: "fa-facebook-f",
          link: "",
        },
        1: {
          name: "linkin",
          icon: "fa-linkedin-in",
          link: "",
        },
        2: {
          name: "github",
          icon: "fa-github",
          link: "",
        },
      },
      animationLink: "animate__bounceIn",
      animationIn: "animate__fadeInDown",
      animationOut: "animate__bounceOut",
      animationOut_name: "bounceOut",
    };
  },
  methods: {
    setupTippy() {
      tippy("#logo", {
        content: "Nghiacangao",
      });
    },

    showMenu() {
      const el = document.getElementById("btn_menu");
      var self = this;

      el.addEventListener("click", function () {
        const li = document.querySelectorAll(".m_link_part");
        const menu = document.getElementById("menu");
        menu.classList.remove("hidden");
        menu.classList.remove(self.animationOut);
        menu.classList.add(self.animationIn);

        li.forEach((item) => {
          item.classList.add(self.animationLink);
        });
      });
    },

    hidenMenu() {
      const el = document.getElementById("btn_return");
      const menu = document.getElementById("menu");
      let li = document.querySelectorAll(".m_link_part");
      var self = this;

      menu.addEventListener("animationend", function (e) {
        if (e.animationName == self.animationOut_name) this.classList.add("hidden");
      });

      el.addEventListener("click", function () {
        let menu = document.getElementById("menu");
        menu.classList.remove(self.animationIn);
        menu.classList.add(self.animationOut);
      });

      li.forEach((item) => {
        item.classList.remove(self.animationLink);
      });
    },
  },
  mounted() {
    this.showMenu();
    this.hidenMenu();
    this.setupTippy();
  },
};
</script>

<style lang="scss">
@import "color.scss";
@import "nav_style.scss";
</style>
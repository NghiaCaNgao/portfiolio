<template>

  <div class="hello align">
    <h1>HELLO!</h1>
    <h2>I'm Nghia</h2>
    <div class="typewriter" id="show_text">
      <h4></h4>
    </div>
  </div>

</template>

<script>
export default {
  name: "Hello",
  data() {
    return {
      listWord: ["Call me by Nghiacangao", "I am a student", "I love coding"],
      el_show_text: undefined,
      count: 0,
    };
  },
  methods: {
    increaseText() {
      let el = this.el_show_text;
      if (this.count + 1 > this.listWord.length) this.count = 0;
      el.firstChild.innerText = this.listWord[this.count++];
    },

    typing() {
      let el = this.el_show_text;
      this.increaseText();
      el.classList.add("do-typewriter");
      var self = this;
      el.addEventListener("animationend", function (event) {
        let element = event.target;
        if (element.classList.contains("do-typewriter")) {
          element.classList.remove("do-typewriter");
          element.classList.add("re-typewriter");
        } else {
          element.classList.remove("re-typewriter");
          self.increaseText();
          el.classList.add("do-typewriter");
        }
      });
    },
  },
  mounted() {
    this.el_show_text = document.getElementById("show_text");
    this.typing();
  },
};
</script>
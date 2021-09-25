<template>
  <the-header></the-header>
  <the-header type="phone"></the-header>
  <main>
    <router-view />
  </main>
  <the-footer></the-footer>
  <teleport to="body">
    <button-top></button-top>
    <agree-widget></agree-widget>
  </teleport>
</template>

<script>
import TheHeader from "./components/main-components/header/Header.vue";
// @ts-ignore
import TheFooter from "./components/main-components/Footer.vue";
import ButtonTop from "./components/main-components/ButtonTop.vue";
import AgreeWidget from "./components/main-components/agreeWidget.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    ButtonTop,
    AgreeWidget,
  },
  methods: {
    menuAnimation() {
      const main = document.querySelector("main");
      const header = document.querySelector(".header");

      if (window.pageYOffset >= 115 && document.body.offsetWidth >= 768) {
        main.style.marginTop = "112px";
        header.classList.add("fixed", "top-0", "animate-menuAnimation");
      } else if (document.body.offsetWidth > 768) {
        main.style.marginTop = "0";
        header.classList.remove("fixed", "top-0", "animate-menuAnimation");
      }
    },
    buttonTopAppear() {
      const buttonTop = document.querySelector(".btn-top");

      if (window.pageYOffset >= 370) {
        buttonTop.classList.remove("animate-hidden");
        buttonTop.classList.add("flex", "animate-appear");
      } else {
        buttonTop.classList.add("animate-hidden");
        buttonTop.classList.remove("flex", "animate-appear");
      }
    },
    delayOfIframe() {
      if (window.pageYOffset >= 780) {
        const fIframes = document.querySelectorAll("fiframe");

        fIframes.forEach((fiframe) => {
          try {
            const fiframeParent = fiframe.parentNode;

            const iframe = document.createElement("iframe");
            iframe.setAttribute("class", fiframe.getAttribute("class"));
            iframe.setAttribute("src", fiframe.getAttribute("src"));
            iframe.setAttribute("title", fiframe.getAttribute("title"));
            iframe.setAttribute("frameborder", fiframe.getAttribute("frameborder"));
            iframe.setAttribute("allow", fiframe.getAttribute("allow"));
            iframe.setAttribute("allowfullscreen", "");

            fiframe.remove();
            fiframeParent.appendChild(iframe);
            // eslint-disable-next-line no-empty
          } catch (e) {}
        });

        this.$store.state.IsFiframeTransform = true;
      } else return;
    },
  },
  created() {
    window.addEventListener("scroll", this.menuAnimation);
    window.addEventListener("scroll", this.buttonTopAppear);
    window.addEventListener("scroll", this.delayOfIframe);
  },
  mounted() {
    const agreeWidget = document.querySelector(".agree-widget");

    if (document.cookie.includes("agreePrivacyPolicy=true")) {
      agreeWidget.remove();
    }
  },
};
</script>

<style lang="scss">
body {
  @apply relative;
}

#app {
  font-family: "Inter", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

main {
  @apply mt-15 md:mt-0;
}
</style>

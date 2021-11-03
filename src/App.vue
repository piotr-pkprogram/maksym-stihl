<template>
  <the-header></the-header>
  <the-header type="phone"></the-header>
  <main>
    <loading></loading>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
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
import Loading from "./components/main-components/Loading.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    ButtonTop,
    AgreeWidget,
    Loading,
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
            iframe.setAttribute("style", fiframe.getAttribute("style"));
            iframe.setAttribute("allow", fiframe.getAttribute("allow"));
            iframe.setAttribute("loading", fiframe.getAttribute("loading"));
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
html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  @apply relative flex flex-wrap justify-center;
}

#app {
  @apply w-full;
  font-family: "Inter", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  @media (min-width: 1920px) {
    max-width: 1920px;
  }
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

p,
h1,
h2,
h3,
h4,
h5,
h6,
a,
button,
span,
input,
textarea,
div,
li,
strong,
b,
br,
i,
label,
article,
address,
sub,
sup {
  &::selection {
    @apply text-main bg-gray-300;
  }
}

main {
  @apply mt-18 md:mt-0 relative overflow-hidden;
  height: 65vh;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
}

.route-leave-active {
  transition: opacity 0.3s ease-in, transform 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.contact__localization {
  @apply rounded-3xl lg:w-auto lg:h-auto w-full;
  height: 500px;
  max-width: 500px;
  @media (min-width: 550px) {
    height: 500px;
    width: 500px;
  }
}

.where-we-fix__localization {
  @apply xxs:rounded-3xl lg:w-auto lg:h-auto w-full;
  height: 500px;

  @media (min-width: 303px) {
    max-width: 95%;
  }

  @media (min-width: 550px) {
    height: 500px;
    width: 95%;
  }
}

.form {
  @apply rounded-3xl w-full grid gap-x-4 gap-6 p-2 md:p-4 justify-items-center justify-center md:pt-8;
  @media (min-width: 475px) {
    @apply bg-white max-w-lg min-h-xl;
    box-shadow: 0 0 100px 5px rgba(255, 97, 0, 0.4);
  }

  &-container {
    @apply fixed z-50 grid items-center w-full h-full bg-gray-300 justify-items-center bg-opacity-40 overflow-auto;
  }

  &__cta {
    @apply h-min w-full col-1/2 text-center font-medium text-2xl self-center;
  }

  &__input {
    @apply h-min;
    &--name {
      @apply w-full mr-0;
      max-width: 171px;
      @media (min-width: 475px) {
        @apply mr-8;
      }
    }
    &--topic {
      @apply w-full;
      max-width: 171px;
    }
    &--email {
      @apply col-1/2;
      max-width: 393px;
    }
    &--message {
      @apply col-1/2;
      max-width: 393px !important;
      min-height: 200px !important;
      @media (min-width: 475px) {
        min-height: 265px;
      }
    }

    &--error {
      @apply border-red-600 text-red-600;
      &::placeholder {
        @apply text-red-600;
      }
    }
  }

  &__send {
    @apply justify-self-start relative;
    min-width: 113px !important;
  }

  &__loader {
    @apply hidden bg-cover z-10 absolute top-1 left-30 border-transparent border-3 border-solid;
    width: 2em;
    transform-origin: center;
    animation: rotate 2s linear infinite;

    & circle {
      fill: none;
      stroke: #ff6100;
      stroke-width: 2;
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
      stroke-linecap: round;
      animation: dash 1.5s ease-in-out infinite;
    }
  }

  &__close {
    @apply absolute w-16 h-16 cursor-pointer top-0 right-0 hover:opacity-90;
  }
}

.chat-bubble {
  @apply text-red-600 hidden col-1/2 text-base font-bold bg-white w-full rounded-lg justify-self-start;
}

.loader-message {
  @apply text-black w-full col-1/2 p-2 bg-f6 border-2 rounded-lg hidden;
  max-width: 393px;
}

.g-recaptcha {
  @apply justify-self-start col-1/2;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dashoffset: -125px;
  }
}
</style>

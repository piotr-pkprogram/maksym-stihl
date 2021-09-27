<template>
  <header v-if="type === 'normal'" class="header">
    <router-link to="/">
      <img
        class="header__logo"
        src="../../../assets/img/logo.png"
        alt="CrossFit Black Star"
      />
    </router-link>
    <ul class="header__menu-list">
      <menu-element
        v-for="element in menuElements"
        :key="element.id"
        :href="element.href"
        :text-value="element.textValue"
        :IsExternalLink="element.IsExternalLink"
        classes="header__menu-element"
      ></menu-element>
    </ul>
  </header>
  <header v-else class="phone-header">
    <router-link to="/" class="phone-header__logo-link">
      <img
        class="phone-header__logo"
        src="../../../assets/img/logo.png"
        alt="CrossFit Black Star"
      />
    </router-link>
    <button class="phone-header__btn" @click="openClosePhoneMenu">
      <div class="bg-black phone-header__btn-element"></div>
      <div class="bg-black phone-header__btn-element"></div>
      <div class="bg-black phone-header__btn-element"></div>
    </button>
  </header>
  <ul v-if="type === 'phone'" class="phone-menu">
    <menu-element
      v-for="element in menuElements"
      :key="element.id"
      :href="element.href"
      :text-value="element.textValue"
      :IsExternalLink="element.IsExternalLink ? element.IsExternalLink : null"
      :classes="element.classes ? element.classes : 'phone-menu__element'"
    ></menu-element>
  </ul>
</template>

<script>
/* eslint-disable for-direction */
import MenuElement from "./MenuElement.vue";

export default {
  components: {
    MenuElement,
  },
  props: {
    type: {
      type: String,
      required: false,
      default: "normal",
    },
  },
  data() {
    return {
      menuElements: this.$store.getters.menuElements,
      isShowSocialList: false,
      isShowPhoneSocialList: false,
    };
  },
  methods: {
    appearHidenSocialList() {
      const socialList = this.$refs.socialList;

      if (this.isShowSocialList) {
        socialList.classList.remove("animate-appear");
        socialList.classList.add("animate-hidden");
        setTimeout(() => {
          socialList.classList.remove("grid");
        }, 300);
        this.isShowSocialList = false;
      } else {
        socialList.classList.remove("animate-hidden");
        socialList.classList.add("grid");
        socialList.classList.add("animate-appear");
        this.isShowSocialList = true;
      }
    },
    appearHidenPhoneSocialList() {
      const socialList = this.$refs.phoneSocialList;

      if (this.isShowPhoneSocialList) {
        socialList.classList.remove("animate-appear");
        socialList.classList.add("animate-hidden");
        setTimeout(() => {
          socialList.classList.remove("grid");
        }, 300);
        this.isShowPhoneSocialList = false;
      } else {
        socialList.classList.remove("animate-hidden");
        socialList.classList.add("grid");
        socialList.classList.add("animate-appear");
        this.isShowPhoneSocialList = true;
      }
    },
    openClosePhoneMenu() {
      this.$store.commit("openClosePhoneMenu");
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  @apply h-28 hidden grid-flow-col items-center md:grid bg-F2 z-20 w-full relative z-30;

  @media (min-width: 1921px) {
    max-width: 1920px;
  }

  &__logo {
    @apply w-36 ml-1/6 lg:ml-1/4 lg:w-auto;
  }

  &__menu-list {
    @apply flex h-min justify-end lg:mr-1/3 mr-1/12;
  }

  &__menu-element {
    @apply pt-0 pb-0 pl-3 pr-3 flex content-center font-medium md:hover:text-main-2 transition-colors;
  }
}

.phone-header {
  @apply grid grid-flow-col grid-cols-3/4 fixed top-0 z-20 w-full md:hidden bg-white max-h-36 min-h-58.5 border-solid border-black border-b-2;

  &__logo {
    @apply h-15;

    &-link {
      @apply w-max flex justify-center p-2 pl-0;
      margin-left: 12%;
    }
  }

  &__btn {
    @apply grid content-center h-full pb-2 justify-self-end min-w-32;

    &-element {
      @apply mt-2 border-solid rounded-full border-black border-1.5 justify-self-center w-1/2;
    }
  }
}

.phone-menu {
  @apply fixed right-0 bg-white h-full border-solid border-black border-l-2 transform translate-x-full hidden z-20;
  width: 163px;
  top: 4.85rem;

  &__element {
    @apply p-3 text-center border-t border-solid border-black text-lg font-semibold hover:text-main-2 transition-colors;

    &:first-child {
      @apply border-0;
    }

    &--last {
      @apply border-b;
    }
  }

  &__social-list {
    @apply mt-3 hidden opacity-0;
  }
}
</style>

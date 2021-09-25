<template>
  <div :class="classes">
    <router-link
      v-if="titleIsLink"
      :to="link"
      class="footer__block-title footer__block-title--link"
      >{{ title }}</router-link
    >
    <span v-else class="footer__block-title">{{ title }}</span>
    <p class="footer__paragraph-info">
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    titleIsLink: {
      type: Boolean,
      required: false,
      default: false,
    },
    link: {
      type: String,
      required: false,
    },
    classes: {
      type: String,
      required: false,
      default: "footer__blocks",
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  &__block-title {
    @apply text-xl;

    @media (min-width: 280px) {
      @apply text-2xl;
    }

    &--link {
      @apply transition-opacity hover:opacity-75;
    }
  }

  &__paragraph-info {
    @apply grid mt-2 text-sm;

    @media (min-width: 280px) {
      @apply text-base;
    }
  }
}
</style>

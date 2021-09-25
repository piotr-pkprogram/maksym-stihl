<template>
  <li v-if="!IsPhoneHreader" :class="classes">
    <a v-if="IsExternalLink" :href="href" target="_blank" rel="noopener noreferrer">{{
      textValue
    }}</a>
    <router-link v-else :to="href">{{ textValue }}</router-link>
  </li>
</template>

<script>
export default {
  props: {
    IsPhoneHreader: Boolean,
    href: String,
    textValue: String,
    classes: String,
    IsExternalLink: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  &__menu-element {
    @apply pt-0 pb-0 pl-4 pr-4 flex content-center md:hover:opacity-70 transition-opacity;
  }
}
</style>

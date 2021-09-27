<template>
  <router-link :class="classes" :to="to" v-if="type === 'router-link'">
    <slot></slot>
  </router-link>
  <a
    v-else-if="type === 'external-link'"
    :class="classes"
    :href="to"
    target="_blank"
    rel="noopener noreferrer"
  >
    <slot></slot>
  </a>
  <button v-else :type="type" :class="classes">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: "button",
    },
    to: {
      type: String,
      required: true,
    },
    classes: {
      type: String,
      required: false,
      default: "orange-btn",
    },
  },
};
</script>

<style lang="scss" scoped>
button,
a {
  @apply md:hover:opacity-80 transition-opacity w-max p-3 text-xl;
}

.orange-btn {
  @apply rounded-lg text-white min-w-20 block;
  background: rgba(255, 97, 0, 87);
}

.light-btn {
  @apply rounded-lg text-main font-semibold min-w-20 block border-main border-2 border-solid;
}
</style>

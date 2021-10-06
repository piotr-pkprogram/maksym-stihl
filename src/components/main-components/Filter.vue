<template>
  <div class="filter">
    <span class="text-main-2">Producenci: </span>
    <label
      :for="option.name"
      class="filter__label"
      v-for="option in options"
      :key="option.id"
      @click="filtering(option.name)"
      >{{ option.name
      }}<input
        v-if="option.name != 'Wszystkie'"
        type="radio"
        class="filter__radio"
        name="producent"
        :id="option.name" />
      <input
        v-else
        type="radio"
        class="filter__radio"
        name="producent"
        :id="option.name"
        checked
    /></label>
  </div>
</template>

<script>
export default {
  emits: ["filtering"],
  data() {
    return {
      options: this.$store.getters.producers,
    };
  },
  methods: {
    filtering(option) {
      this.$emit("filtering", option);
    },
  },
};
</script>

<style lang="scss" scoped>
.filter {
  @apply flex flex-wrap items-center p-4 border-b-2 border-main-2;

  &__label {
    @apply ml-3 cursor-pointer hover:opacity-75 transition-opacity;
  }

  &__radio {
    @apply ml-1 cursor-pointer;
    &:checked {
      content: "";
      @apply border-main-2 border-2 rounded-lg bg-main-2;
    }
  }
}
</style>

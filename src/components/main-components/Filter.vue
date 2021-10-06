<template>
  <div class="filter" ref="filter">
    <button class="filter__open-close-btn" @click="switchBtn">
      <img src="../../assets/img/menu.png" alt="filtr" class="filter__btn-img" />
    </button>
    <span class="filter__producers" ref="producers">Producenci: </span>
    <div class="filter__label-container">
      <label
        :for="option.name"
        class="filter__label"
        v-for="option in options"
        :key="option.id"
        @click="filtering(option.name)"
        >{{ option.name
        }}<input
          v-if="option.name != 'Wszyscy'"
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
  </div>
</template>

<script>
export default {
  emits: ["filtering"],
  data() {
    return {
      options: this.$store.getters.producers,
      openCounter: 0,
    };
  },
  methods: {
    filtering(option) {
      this.$emit("filtering", option);
    },
    switchBtn() {
      const labelsList = document.querySelector(".filter__label-container");

      if (this.openCounter === 0) {
        this.$refs.producers.classList.remove("hidden");
        this.$refs.producers.classList.add("block", "animate-appear");
        this.$refs.filter.classList.add("border-b-2", "border-main-2");
        labelsList.classList.add("grid", "animate-appear");
        labelsList.classList.remove("opacity-1", "animate-hidden", "hidden");
        this.openCounter++;
      } else {
        labelsList.classList.add("opacity-1", "animate-hidden");
        this.$refs.producers.classList.add("opacity-1", "animate-hidden");
        setTimeout(() => {
          this.$refs.producers.classList.add("hidden");
          labelsList.classList.add("hidden");
          this.$refs.filter.classList.remove("border-b-2", "border-main-2");
        }, 1000);
        this.$refs.producers.classList.remove("animate-appear");
        labelsList.classList.remove("animate-appear");
        this.openCounter--;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.filter {
  @apply grid gap-3 items-center p-4 justify-start relative;
  @media (min-width: 840px) {
    @apply grid-flow-col border-b-2 border-main-2;
  }

  &__producers {
    @apply hidden text-xl text-main;
    @media (min-width: 840px) {
      @apply block;
    }
  }

  &__label {
    @apply cursor-pointer hover:opacity-60 transition-opacity;

    &-container {
      @apply hidden gap-3 items-center justify-start;
      @media (min-width: 840px) {
        @apply grid grid-flow-col;
      }
    }
  }

  &__radio {
    @apply ml-1 cursor-pointer;
    &:checked {
      content: "";
      @apply border-main-2 border-2 rounded-lg bg-main-2;
    }
  }

  &__open-close-btn {
    @apply absolute -top-16 hover:opacity-75 transition-opacity;
    height: 64px;
    width: 64px;

    @media (min-width: 840px) {
      @apply hidden;
    }
  }
}
</style>

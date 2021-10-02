<template>
  <vueper-slides
    :infinite="false"
    :visible-slides="3"
    slide-multiple
    :gap="5"
    :slide-ratio="1 / 4"
    :dgragging-distance="200"
    lazy
    lazy-load-on-drag
    :breakpoints="breakpoints"
  >
    <vueper-slide
      v-for="slide in slides"
      :key="slide.id"
      :image="slide.src"
      :content="slide.category"
      class="rounded-3xl"
      :link="slide.link"
    />

    <template #arrow-left>
      <img src="../../../assets/img/next-left.png" alt="prev" class="slider__images" />
    </template>

    <template #arrow-right>
      <img src="../../../assets/img/next-right.png" alt="next" class="slider__images" />
    </template>
  </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import productsCategories from "./slides";
import "vueperslides/dist/vueperslides.css";

export default {
  components: { VueperSlides, VueperSlide },
  props: {
    classes: String,
  },
  data() {
    return {
      slides: productsCategories,
      breakpoints: {
        1430: {
          visibleSlides: 2,
          slideMultiple: 2,
        },
        1000: {
          visibleSlides: 1,
          slideMultiple: 1,
        },
      },
    };
  },
};
</script>

<style lang="scss">
.vueperslide {
  height: 222px;
  @media (min-width: 1000px) {
    width: 340px;
  }

  &__content-wrapper {
    @apply w-full;
    align-items: normal !important;
    justify-content: end !important;
  }
}

.vueperslides {
  min-height: 222px;
  @media (min-width: 405px) {
    width: 340px;
  }
  @media (min-width: 1000px) {
    @apply w-auto;
    min-height: auto;
  }

  &__track-inner {
    @apply items-center;
  }

  &__arrow {
    @apply hidden;
    @media (min-width: 1115px) {
      @apply block;
    }
  }

  &__arrow--next {
    right: -7.5em !important;
  }

  &__arrow--prev {
    left: -7.5em !important;
  }

  &__parallax-wrapper {
    min-height: 222px;
    @media (min-width: 1000px) {
      min-height: auto;
    }
    &:before {
      --tw-shadow: 0 0 #0000;
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
    }

    &:after {
      --tw-shadow: 0 0 #0000;
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
    }
  }

  &__bullets {
    @apply static;
    @media (min-width: 1115px) {
      @apply hidden;
    }
  }

  &__bullet {
    &--active .default {
      @apply bg-black border-black;
    }
  }
}

.slider {
  &__img {
    @apply h-full w-full;
  }

  &__arrow {
    @apply mr-1;
    height: 29px;
    width: 29px;
  }

  &__category-container {
    @apply flex text-white p-2 rounded-b-3xl;
    background: rgba(80, 80, 80, 0.5);
  }
}

.swiper-button-next,
.swiper-button-prev {
  @apply text-f6;
}

.swiper-pagination-bullet-active {
  @apply bg-f6;
}
</style>

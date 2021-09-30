<template>
  <vueper-slides
    autoplay
    :pause-on-hover="pauseOnHover"
    @autoplay-pause="internalAutoPlaying = false"
    @autoplay-resume="internalAutoPlaying = true"
  >
    <vueper-slide
      v-for="slide in slides"
      :key="slide.id"
      :image="slide.srcImg"
      :content="slide.category"
    />
  </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  components: { VueperSlides, VueperSlide },
  props: {
    classes: String,
    slides: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.slider {
  &__img {
    @apply h-full w-full;
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

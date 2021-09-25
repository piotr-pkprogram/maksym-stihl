<template>
  <swiper
    :class="classes"
    :slides-per-view="1"
    :space-between="0"
    navigation
    :pagination="{ clickable: true }"
    effect="fade"
  >
    <swiper-slide>
        <img
          src="../../../assets/img/webp/crossfit-box/box-slide1.webp"
          alt=""
          class="slider__img"
        />
    </swiper-slide>
    <swiper-slide>
        <img
          src="../../../assets/img/webp/crossfit-box/box-slide2.webp"
          alt=""
          class="slider__img"
        />
    </swiper-slide>
    <swiper-slide>
        <img
          src="../../../assets/img/webp/crossfit-box/box-slide3.webp"
          alt=""
          class="slider__img"
        />
    </swiper-slide>
    <swiper-slide>
        <img
          src="../../../assets/img/webp/crossfit-box/box-slide4.webp"
          alt=""
          class="slider__img"
        />
    </swiper-slide>
    <swiper-slide>
        <img
          src="../../../assets/img/webp/crossfit-box/box-slide5.webp"
          alt=""
          class="slider__img"
        />
    </swiper-slide>
    <swiper-slide>
        <img
          src="../../../assets/img/webp/crossfit-box/box-slide6.webp"
          alt=""
          class="slider__img"
        />
    </swiper-slide>
  </swiper>
</template>

<script>
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination, A11y]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    classes: String,
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

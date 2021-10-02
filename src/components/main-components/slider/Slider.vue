<template>
  <vueper-slides
    :infinite="false"
    :bullets="false"
    :visible-slides="3"
    slide-multiple
    :gap="5"
    :slide-ratio="1 / 4"
    :dgragging-distance="200"
    lazy
    lazy-load-on-drag
  >
    <vueper-slide
      v-for="slide in slides"
      :key="slide.id"
      :image="slide.src"
      :content="slide.category"
      class="rounded-3xl"
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
import { v4 as uuidv4 } from "uuid";
import "vueperslides/dist/vueperslides.css";

export default {
  components: { VueperSlides, VueperSlide },
  props: {
    classes: String,
  },
  data() {
    return {
      slides: [
        {
          id: uuidv4(),
          src: require("../../../assets/img/urządzenia-akumulatorowe.jpg"),
          category: `
                <div class="slider__category-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.com/svgjs"
          version="1.1"
          viewBox="0 0 46.02 46.02"
          style="enable-background: new 0 0 512 512"
          xml:space="preserve"
          class="slider__arrow"
        >
          <g>
            <g xmlns="http://www.w3.org/2000/svg">
              <g>
                <path
                  d="M14.757,46.02c-1.412,0-2.825-0.521-3.929-1.569c-2.282-2.17-2.373-5.78-0.204-8.063l12.758-13.418L10.637,9.645    C8.46,7.37,8.54,3.76,10.816,1.582c2.277-2.178,5.886-2.097,8.063,0.179l16.505,17.253c2.104,2.2,2.108,5.665,0.013,7.872    L18.893,44.247C17.77,45.424,16.267,46.02,14.757,46.02z"
                  fill="#fe6000"
                  data-original="#000000"
                  style=""
                  class=""
                />
              </g>
            </g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
          </g>
        </svg>
        <span class="slider__category">Urządzenia akumulatorowe</span>
      </div>`,
        },
        {
          id: uuidv4(),
          src: require("../../../assets/img/urządzenia-koszące.jpg"),
          category: `
                <div class="slider__category-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.com/svgjs"
          version="1.1"
          viewBox="0 0 46.02 46.02"
          style="enable-background: new 0 0 512 512"
          xml:space="preserve"
          class="slider__arrow"
        >
          <g>
            <g xmlns="http://www.w3.org/2000/svg">
              <g>
                <path
                  d="M14.757,46.02c-1.412,0-2.825-0.521-3.929-1.569c-2.282-2.17-2.373-5.78-0.204-8.063l12.758-13.418L10.637,9.645    C8.46,7.37,8.54,3.76,10.816,1.582c2.277-2.178,5.886-2.097,8.063,0.179l16.505,17.253c2.104,2.2,2.108,5.665,0.013,7.872    L18.893,44.247C17.77,45.424,16.267,46.02,14.757,46.02z"
                  fill="#fe6000"
                  data-original="#000000"
                  style=""
                  class=""
                />
              </g>
            </g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
          </g>
        </svg>
        <span class="slider__category">Urządzenia koszące</span>
      </div>`,
        },
        {
          id: uuidv4(),
          src: require("../../../assets/img/pilarki-łańcuchowe.jpg"),
          category: `
                <div class="slider__category-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.com/svgjs"
          version="1.1"
          viewBox="0 0 46.02 46.02"
          style="enable-background: new 0 0 512 512"
          xml:space="preserve"
          class="slider__arrow"
        >
          <g>
            <g xmlns="http://www.w3.org/2000/svg">
              <g>
                <path
                  d="M14.757,46.02c-1.412,0-2.825-0.521-3.929-1.569c-2.282-2.17-2.373-5.78-0.204-8.063l12.758-13.418L10.637,9.645    C8.46,7.37,8.54,3.76,10.816,1.582c2.277-2.178,5.886-2.097,8.063,0.179l16.505,17.253c2.104,2.2,2.108,5.665,0.013,7.872    L18.893,44.247C17.77,45.424,16.267,46.02,14.757,46.02z"
                  fill="#fe6000"
                  data-original="#000000"
                  style=""
                  class=""
                />
              </g>
            </g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
          </g>
        </svg>
        <span class="slider__category">Pilarki łańcuchowe</span>
      </div>`,
        },
        {
          id: uuidv4(),
          src: require("../../../assets/img/kosy-mechaniczne.jpg"),
          category: `
                <div class="slider__category-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.com/svgjs"
          version="1.1"
          viewBox="0 0 46.02 46.02"
          style="enable-background: new 0 0 512 512"
          xml:space="preserve"
          class="slider__arrow"
        >
          <g>
            <g xmlns="http://www.w3.org/2000/svg">
              <g>
                <path
                  d="M14.757,46.02c-1.412,0-2.825-0.521-3.929-1.569c-2.282-2.17-2.373-5.78-0.204-8.063l12.758-13.418L10.637,9.645    C8.46,7.37,8.54,3.76,10.816,1.582c2.277-2.178,5.886-2.097,8.063,0.179l16.505,17.253c2.104,2.2,2.108,5.665,0.013,7.872    L18.893,44.247C17.77,45.424,16.267,46.02,14.757,46.02z"
                  fill="#fe6000"
                  data-original="#000000"
                  style=""
                  class=""
                />
              </g>
            </g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
            <g xmlns="http://www.w3.org/2000/svg"></g>
          </g>
        </svg>
        <span class="slider__category">Kosy mechaniczne</span>
      </div>`,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.vueperslide {
  width: 340px;
  height: 222px;

  &__content-wrapper {
    @apply w-full;
    align-items: normal !important;
    justify-content: end !important;
  }
}

.vueperslides {
  &__track-inner {
    @apply items-center;
  }

  &__arrow--next {
    right: -7.5em !important;
  }

  &__arrow--prev {
    left: -7.5em !important;
  }

  &__parallax-wrapper {
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

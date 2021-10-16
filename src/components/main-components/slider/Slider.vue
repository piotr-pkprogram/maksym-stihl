<template>
  <vueper-slides
    :infinite="false"
    :visible-slides="3"
    slide-multiple
    :gap="5"
    :slide-ratio="1 / 4"
    :dgragging-distance="200"
    :breakpoints="breakpoints"
  >
    <vueper-slide
      v-for="slide in slides"
      :key="slide.id"
      :image="slide.src"
      class="rounded-3xl"
      :link="slide.link"
    >
      <template #content>
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
          <span class="slider__category">{{ slide.name }}</span>
        </div>
      </template>
    </vueper-slide>

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
import "vueperslides/dist/vueperslides.css";
import { v4 as uuidv4 } from "uuid";

export default {
  components: { VueperSlides, VueperSlide },
  props: {
    classes: String,
  },
  data() {
    return {
      slides: [],
      breakpoints: {
        1453: {
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
  methods: {
    async getProducts() {
      await fetch("/getCategories.php")
        .then((res) => {
          if (res.ok) return res.json();
          else throw new Error("Wystąpił błąd");
        })
        .then((json) => {
          const categoryArr = json.results.map((prod) => prod.properties).reverse();

          this.slides = categoryArr.map((category) => {
            category.id = uuidv4();

            category.name = category.Nazwa.title[0]
              ? category.Nazwa.title[0].plain_text
              : "";
            delete category.Nazwa;
            category.src = category.Główne_zdjęcie.files[0]
              ? category.Główne_zdjęcie.files[0].file.url
              : "";
            delete category.Główne_zdjęcie;
            category.link = category.Link.url ? category.Link.url : "";
            delete category.Link;
            category.bg_image = category.Zdjęcie_w_tle.files[0]
              ? category.Zdjęcie_w_tle.files[0].file.url
              : "";
            delete category.Zdjęcie_w_tle;

            category.products = category.Produkty.relation.map(async (prod) => {
              await fetch("/getProducts.php")
                .then((res) => {
                  if (res.ok) return res.json();
                  else throw new Error("Wystąpił błąd");
                })
                .then((json) => {
                  const oldProd = json.results.find((obj) => obj.id === prod.id);
                  prod = oldProd.properties;

                  prod.id = uuidv4();
                  prod.name = prod.Nazwa.title[0] ? prod.Nazwa.title[0].plain_text : "";
                  delete prod.Nazwa;
                  prod.short_desc = prod.Krótki_opis.rich_text[0]
                    ? prod.Krótki_opis.rich_text[0].plain_text
                    : "";
                  delete prod.Krótki_opis;
                  prod.long_desc = prod.Długi_opis.rich_text[0]
                    ? prod.Długi_opis.rich_text[0].plain_text
                    : "";
                  delete prod.Długi_opis;
                  prod.link = prod.Link.url ? prod.Link.url : "";
                  delete prod.Link;
                  prod.src = prod.Zdjęcie_produktu.files[0]
                    ? prod.Zdjęcie_produktu.files[0].file.url
                    : "";
                  delete prod.Zdjęcie_produktu;
                  prod.alt = prod.Tekst_alternatywny.rich_text[0]
                    ? prod.Tekst_alternatywny.rich_text[0].plain_text
                    : "";
                  delete prod.Tekst_alternatywny;
                  prod.producer = prod.Producent.rich_text[0]
                    ? prod.Producent.rich_text[0].plain_text
                    : "";
                  delete prod.Producent;

                  fetch("/getTechnicalData.php")
                    .then((res) => {
                      if (res.ok) return res.json();
                      else throw new Error("Wystąpił błąd");
                    })
                    .then((json) => {
                      const technicalData = prod.Dane_techniczne.relation[0];

                      prod.technical_data = json.results.find(
                        (obj) => obj.id === technicalData.id
                      ).properties;
                      prod.technical_data.wartosc_drgan_uchwyt =
                        prod.technical_data.wartosc_drgan_uchwyt.rich_text[0].plain_text;
                    })
                    .catch((err) => {
                      throw new Error(err);
                    });
                })
                .catch((err) => {
                  throw new Error(err);
                });

              return prod;
            });
            return category;
          });
        })
        .catch((err) => {
          throw new Error(err);
        });

      console.log(this.slides);
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style lang="scss">
.vueperslide {
  @apply flex flex-wrap justify-center items-end;
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
    @apply flex text-white p-2 rounded-b-3xl w-full;
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

<template>
  <div class="category">
    <div class="category__title-container">
      <h1 class="category__title">{{ title }}</h1>
    </div>
    <div class="category__main">
      <div class="category__filter">
        <base-filter @filtering="filterProd"></base-filter>
      </div>
      <div class="category__products">
        <div
          class="category__row"
          v-for="(productRow, i) in products"
          :key="i"
          :class="{ hidden: i >= 3 }"
        >
          <router-link
            class="category__product"
            v-for="product in productRow"
            :key="product.id"
            :to="category.link + product.link"
            :data-producer="product.producer"
          >
            <img :src="product.src" :alt="product.alt" class="category__bg-image" />
            <div class="category__info">
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
                </g></svg
              ><span class="category__name">{{ product.name }}</span>
            </div>
          </router-link>
        </div>
        <div
          class="category__more"
          v-if="products.length > 3 && moreApear"
          @click="appearMore"
        >
          <span class="category__more-text">Więcej</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.com/svgjs"
            version="1.1"
            width="128"
            height="128"
            x="0"
            y="0"
            viewBox="0 0 451.847 451.847"
            style="enable-background: new 0 0 512 512"
            xml:space="preserve"
            class=""
          >
            <g>
              <g xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751   c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0   c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"
                  fill="#ff6100"
                  data-original="#000000"
                  style=""
                  class=""
                />
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseFilter from "../components/main-components/Filter.vue";

export default {
  components: {
    BaseFilter: BaseFilter,
  },
  data() {
    return {
      productsCategories: this.$store.getters.productsCategories,
      moreApear: true,
      title: "",
      startProds: this.products,
    };
  },
  computed: {
    category() {
      return this.productsCategories.find((c) => c.name == this.title);
    },
    products() {
      return this.arraySplitting(this.category.products, 4);
    },
    image() {
      const category = this.productsCategories.find((c) => {
        return c.name == this.title;
      });

      return `../assets${category.src}`;
    },
  },
  methods: {
    arraySplitting(arr, chunk) {
      let chunkedArray = [];
      let index = 0;
      while (index < arr.length) {
        chunkedArray.push(arr.slice(index, index + chunk));
        index += chunk;
      }
      return chunkedArray;
    },
    hiddenMoreBtn() {
      this.moreApear = false;
    },
    appearMore() {
      const rows = document.querySelectorAll(".products-categories__row");
      this.hiddenMoreBtn();

      rows.forEach((row) => {
        const rowClasses = Array.from(row.classList).join(" ");

        if (rowClasses.includes("hidden")) {
          row.classList.remove("hidden");
        }
      });
    },
    filterProd(option) {
      const products = document.querySelectorAll(".category__product");

      products.forEach((el) => {
        if (option == "Wszyscy") {
          el.classList.remove("hidden");
        } else {
          el.classList.remove("hidden");
          if (el.getAttribute("data-producer") != option) {
            el.classList.add("hidden");
          }
        }
      });
    },
  },
  created() {
    let name = this.$route.params.categoryName;

    const arr = name.split("");
    name = arr.map((el, i) => (i == 0 ? el.toUpperCase() : el));

    this.title = name.join("").replace("-", " ");
  },
  beforeRouteLeave(_, __, next) {
    if (this.$store.getters.isPhoneMenuOpen) {
      this.$store.commit("openClosePhoneMenu");
    }
    next();
  },
};
</script>

<style lang="scss" scoped>
.category {
  @apply grid items-center p-2 relative;

  &__title {
    @apply text-2xl xxs:text-3xl xs:text-5xl w-full;

    &-container {
      @apply p-4 pl-6 h-40 grid items-center rounded-3xl;
    }
  }

  &__main {
    @apply border-t-2 border-main-2 mt-10;
  }

  &__row {
    gap: 1%;
    @apply w-full grid grid-flow-col justify-center items-center p-2 grid-rows-4 gap-y-5;
    @media (min-width: 735px) {
      @apply grid-rows-2;
    }
    @media (min-width: 930px) {
      @apply grid-rows-1;
    }
  }

  &__product {
    @apply relative grid items-end border border-gray-400 rounded-3xl;
    width: 217.6px;
    height: 142.368px;

    @media (min-width: 315px) {
      width: 272px;
      height: 177.96px;
    }

    @media (min-width: 385px) {
      height: 222px;
      width: 340px;
    }

    @media (min-width: 930px) {
      width: 217.6px;
      height: 142.368px;
    }

    @media (min-width: 1145px) {
      width: 272px;
      height: 177.96px;
    }

    @media (min-width: 1430px) {
      height: 222px;
      width: 340px;
    }
  }

  &__bg-image {
    @apply absolute w-full min-h-full z-0 rounded-3xl;
  }

  &__info {
    @apply z-10 text-white p-2 rounded-b-3xl flex flex-wrap items-center;
    background: rgba(80, 80, 80, 0.5);
  }

  &__more {
    @apply bg-gray-100 w-full rounded-lg justify-items-center content-center grid p-1 
    text-xl transition-opacity cursor-pointer hover:opacity-80;

    &-text {
      @apply transform translate-y-4;
    }
  }
}
</style>

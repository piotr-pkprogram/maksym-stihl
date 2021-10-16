<template>
  <div class="products-categories">
    <div
      class="products-categories__row"
      v-for="(categoryRow, i) in categories"
      :key="i"
      :class="{ hidden: i >= 3 }"
    >
      <router-link
        class="products-categories__category"
        v-for="category in categoryRow"
        :key="category.id"
        :to="category.link"
      >
        <img
          :src="category.src"
          :alt="category.name"
          class="products-categories__bg-image"
        />
        <div class="products-categories__info">
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
          ><span class="products-categories__name">{{ category.name }}</span>
        </div>
      </router-link>
    </div>
    <div
      class="products-categories__more"
      v-if="categories.length > 3 && moreApear"
      @click="appearMore"
    >
      <span class="products-categories__more-text">Więcej</span>
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
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      productsCategories: [],
      moreApear: true,
    };
  },
  computed: {
    categories() {
      const categories = this.arraySplitting(this.productsCategories, 4);
      return categories;
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
    async getProducts() {
      await fetch("/getCategories.php")
        .then((res) => {
          if (res.ok) return res.json();
          else throw new Error("Wystąpił błąd");
        })
        .then((json) => {
          const categoryArr = json.results.map((prod) => prod.properties).reverse();

          this.productsCategories = categoryArr.map((category) => {
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

      console.log(this.productsCategories);
    },
  },
  created() {
    this.getProducts();
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
.products-categories {
  @apply grid items-center p-2 relative;

  &__row {
    gap: 1%;
    @apply w-full grid grid-flow-col justify-items-center items-center p-2 grid-rows-4 gap-y-5;
    @media (min-width: 735px) {
      @apply grid-rows-2;
    }
    @media (min-width: 930px) {
      @apply grid-rows-1;
    }
  }

  &__category {
    @apply relative grid items-end;
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
    @apply absolute w-full min-h-full z-0;
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

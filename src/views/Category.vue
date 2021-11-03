<template>
  <div class="category">
    <div class="category__title-container">
      <h1 class="category__title">{{ title }}</h1>
    </div>
    <div class="category__main">
      <div class="category__filter">
        <base-filter @filtering="filterProd"></base-filter>
      </div>
      <div class="category__products" ref="prod_container">
        <error-box v-if="error_visable.online">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.com/svgjs"
            version="1.1"
            width="64"
            height="64"
            x="0"
            y="0"
            viewBox="0 0 64 64"
            style="enable-background: new 0 0 512 512"
            xml:space="preserve"
            class=""
          >
            <g>
              <g xmlns="http://www.w3.org/2000/svg" id="Layer_64" data-name="Layer 64">
                <path
                  d="m54.00043 35.87836a26.52117 26.52117 0 1 0 -13.924 18.44122 12.236 12.236 0 1 0 13.924-18.44122zm-3.75043-.5932a12.17186 12.17186 0 0 0 -7.59674 2.66c.22174-2.1936.35608-4.31567.39172-6.20984h9.43708a24.62784 24.62784 0 0 1 -.43152 3.69739 12.22312 12.22312 0 0 0 -1.80054-.14755zm-21.23975 19.91845v-9.56653a41.00153 41.00153 0 0 1 9.03528 1.181c-.01355.23511-.03576.4679-.03576.70636a12.19684 12.19684 0 0 0 .3283 2.77094 16.25278 16.25278 0 0 1 -1.32953 3.23022 24.57436 24.57436 0 0 1 -7.99829 1.67801zm-10.07806-1.71911a24.27642 24.27642 0 0 1 -2.17719-6.34357 39.86318 39.86318 0 0 1 10.25525-1.50763v9.5767a24.33042 24.33042 0 0 1 -8.07806-1.7255zm-2.80019-1.33118a24.6075 24.6075 0 0 1 -4.29834-3.04047 24.2557 24.2557 0 0 1 3.01746-1.341 36.34322 36.34322 0 0 0 1.28088 4.38147zm-12.59642-22.41797a24.40706 24.40706 0 0 1 6.78333-15.92254 25.83163 25.83163 0 0 0 4.09942 1.85864 87.34281 87.34281 0 0 0 -1.53985 14.0639zm23.47467-23.47467v9.58649a39.8674 39.8674 0 0 1 -10.26745-1.51068 24.81643 24.81643 0 0 1 2.15-6.33472 24.33034 24.33034 0 0 1 8.11745-1.74109zm9.98981 1.69061a24.60573 24.60573 0 0 1 2.18359 6.41071 39.91913 39.91913 0 0 1 -10.1734 1.48511v-9.58643a24.33054 24.33054 0 0 1 7.98981 1.69061zm2.78668 1.3075a24.60984 24.60984 0 0 1 4.40753 3.10547 24.35558 24.35558 0 0 1 -3.10583 1.37286 36.64 36.64 0 0 0 -1.3017-4.47833zm-10.77649 8.58783a42.05455 42.05455 0 0 0 10.587-1.5304 82.74334 82.74334 0 0 1 1.44452 13.41913h-12.03152zm-14.17083-4.14172a24.22089 24.22089 0 0 1 -3.01294-1.3409 24.61688 24.61688 0 0 1 4.28058-3.03228 36.84477 36.84477 0 0 0 -1.26764 4.37318zm1.48864 2.58489a42.009 42.009 0 0 0 10.68219 1.55689v11.88867h-12.13159a82.741 82.741 0 0 1 1.4494-13.44556zm10.68219 15.44556v11.8985a42.00744 42.00744 0 0 0 -10.67352 1.5545 82.24182 82.24182 0 0 1 -1.45813-13.453zm11.30829 13.09387a43.13837 43.13837 0 0 0 -9.30829-1.192v-11.90187h12.03461a80.88182 80.88182 0 0 1 -.68115 8.60217 12.17052 12.17052 0 0 0 -2.04517 4.4917zm14.16638-15.09387h-9.443a87.35782 87.35782 0 0 0 -1.53314-14.03064 25.9222 25.9222 0 0 0 4.19226-1.89245 24.40718 24.40718 0 0 1 6.78388 15.92309zm-48.94934 2h9.34284a86.81121 86.81121 0 0 0 1.54925 14.07044 25.85567 25.85567 0 0 0 -4.10247 1.85864 24.4074 24.4074 0 0 1 -6.78962-15.92908zm46.71442 26.0293a10.23975 10.23975 0 1 1 10.23975-10.24024 10.25183 10.25183 0 0 1 -10.23975 10.24024zm7.2168-14.23047a.99934.99934 0 0 0 -1.584-.22656l-9.8501 9.85058a.99978.99978 0 0 0 .22706 1.584 8.2515 8.2515 0 0 0 12.23-7.21778 8.32748 8.32748 0 0 0 -1.02296-3.99024zm-7.2168 10.23047a6.24016 6.24016 0 0 1 -1.74951-.2461l7.74072-7.74121a6.24328 6.24328 0 0 1 -5.99121 7.98731zm4.5-12.709a1.00047 1.00047 0 0 0 -.50391-.73535 8.12633 8.12633 0 0 0 -3.99609-1.03514 8.237 8.237 0 0 0 -7.20361 12.2373 1.00055 1.00055 0 0 0 .73584.50293.93216.93216 0 0 0 .13769.00977 1.00112 1.00112 0 0 0 .707-.293l9.83985-9.84082a1.0006 1.0006 0 0 0 .28323-.84568zm-10.48828 8.22365a6.2468 6.2468 0 0 1 7.74365-7.74512z"
                  fill="#ff6100"
                  data-original="#000000"
                  style=""
                  class=""
                />
              </g>
            </g>
          </svg>
          <span>Nie można wczytać produktów</span>
          <span>Brak połączenia z internetem</span>
        </error-box>
        <error-box v-else-if="error_visable.server">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.com/svgjs"
            version="1.1"
            width="64"
            height="64"
            x="0"
            y="0"
            viewBox="0 0 510 510"
            style="enable-background: new 0 0 512 512"
            xml:space="preserve"
            class=""
          >
            <g>
              <g xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m0 0v334.154c0 30.793 25.053 55.846 55.846 55.846h154.154v30h-23.226c-28.548 0-51.774 23.226-51.774 51.774v38.226h240v-38.226c0-28.548-23.226-51.774-51.774-51.774h-23.226v-30h154.154c30.793 0 55.846-25.053 55.846-55.846v-334.154zm480 30v270h-450v-270zm-135 441.774v8.226h-180v-8.226c0-12.007 9.768-21.774 21.774-21.774h136.451c12.007 0 21.775 9.768 21.775 21.774zm-75-51.774h-30v-30h30zm184.154-60h-398.308c-14.251 0-25.846-11.595-25.846-25.846v-4.154h450v4.154c0 14.251-11.595 25.846-25.846 25.846z"
                  fill="#ff6100"
                  data-original="#000000"
                  style=""
                  class=""
                />
                <path
                  d="m131.967 154.246 21.213-21.213 21.214 21.213 21.212-21.213-21.213-21.213 21.213-21.214-21.212-21.212-21.214 21.213-21.213-21.213-21.213 21.212 21.213 21.214-21.213 21.213z"
                  fill="#ff6100"
                  data-original="#000000"
                  style=""
                  class=""
                />
                <path
                  d="m340.606 154.246 21.214-21.213 21.213 21.213 21.213-21.213-21.213-21.213 21.213-21.214-21.213-21.212-21.213 21.213-21.214-21.213-21.212 21.212 21.213 21.214-21.213 21.213z"
                  fill="#ff6100"
                  data-original="#000000"
                  style=""
                  class=""
                />
                <path
                  d="m157.952 240.151c58.046-40.033 136.047-40.036 194.097.001l39.436 27.196 17.031-24.697-39.435-27.195c-33.698-23.241-73.146-35.524-114.081-35.524s-80.383 12.283-114.08 35.523l-39.436 27.196 17.031 24.697z"
                  fill="#ff6100"
                  data-original="#000000"
                  style=""
                  class=""
                />
              </g>
            </g>
          </svg>
          <span>Wystąpił błąd {{ error_status }}</span>
          <span>Nie można wczytać produktów</span>
        </error-box>
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
                height="29px"
                width="29px"
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
import { v4 as uuidv4 } from "uuid";
import addMetaTags from "./metaFunctions.js";

let IsSetMeta = false;

export default {
  components: {
    BaseFilter: BaseFilter,
  },
  data() {
    return {
      productsCategories: [],
      moreApear: true,
      title: "",
      startProds: this.products,
      category: {},
      products: [],
      error_visable: {
        online: false,
        server: false,
      },
      error_status: 0,
    };
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
    getProducts() {
      if (IsSetMeta) {
        const link = this.$route.params.categoryName;
        this.category = JSON.parse(localStorage.getItem(`/${link}`));

        const products = this.category.products;
        this.products = this.arraySplitting(products, 4);

        setTimeout(() => {
          this.$store.commit("appearHiddenLoader", false);
        }, 750);
      } else {
        //   fetch("http://localhost/maksymstihl.pl/backend/api/getCategories.php")
        fetch("/api/getCategories.php")
          .then((res) => {
            if (res.ok) return res.json();
            else throw new Error("Wystąpił błąd");
          })
          .then((json) => {
            const categoryArr = json.results.map((prod) => prod.properties).reverse();

            const productsCategories = categoryArr.map((category) => {
              try {
                category.id = uuidv4();

                category.name = category.Nazwa.title[0].plain_text;
                delete category.Nazwa;
                category.src = category.Główne_zdjęcie.files[0].file.url;
                category.link = category.Link.url;
                delete category.Link;

                return category;
                // eslint-disable-next-line no-empty
              } catch {}
            });
            this.productsCategories = productsCategories.filter(
              (category) => category !== undefined
            );

            const link = this.$route.params.categoryName;
            this.category = this.productsCategories.find((c) => c.link == `/${link}`);
            // fetch("http://localhost/maksymstihl.pl/backend/api/getProducts.php")
            fetch("/api/getProducts.php")
              .then((res) => {
                if (res.ok) return res.json();
                else throw new Error("Wystąpił błąd");
              })
              .then((json) => {
                this.category.products = this.category.Produkty.relation;

                let products = this.category.products.map((prod) => {
                  try {
                    let newProd = json.results.find((oldProd) => oldProd.id === prod.id);

                    newProd = newProd.properties;

                    newProd.id = uuidv4();
                    newProd.name = newProd.Nazwa.title[0].plain_text;
                    delete newProd.Nazwa;
                    newProd.link = newProd.Link.url;
                    delete newProd.Link;
                    newProd.src = newProd.Zdjęcie_produktu.files[0].file.url;
                    delete newProd.Zdjęcie_produktu;
                    newProd.alt = newProd.Tekst_alternatywny.rich_text[0].plain_text;
                    delete newProd.Tekst_alternatywny;
                    newProd.producer = newProd.Producent.rich_text[0].plain_text;
                    delete newProd.Producent;
                    newProd.short_desc = newProd.Krótki_opis.rich_text[0].plain_text;
                    delete newProd.Krótki_opis;
                    newProd.long_desc = newProd.Długi_opis.rich_text[0].plain_text;
                    delete newProd.Długi_opis;
                    newProd.technical_data = newProd.Dane_techniczne.relation[0].id;
                    delete newProd.Dane_techniczne;
                    newProd.meta_desc = newProd.meta_opis.rich_text[0]
                      ? newProd.meta_opis.rich_text[0].plain_text
                      : "";
                    delete newProd.meta_opis;
                    newProd.keywords = newProd.słowa_kluczowe.rich_text[0]
                      ? newProd.słowa_kluczowe.rich_text[0].plain_text
                      : "";
                    delete newProd.słowa_kluczowe;

                    return newProd;
                    // eslint-disable-next-line no-empty
                  } catch {}
                });
                products = products.filter((product) => product !== undefined);

                this.products = this.arraySplitting(products, 4);
                this.$store.commit("appearHiddenLoader", false);

                addMetaTags(this.category);
              })
              .catch((err) => {
                console.log(err);
                setTimeout(() => {
                  this.$store.commit("appearHiddenLoader", false);
                  if (!window.navigator.onLine) {
                    this.error_visable.online = true;
                    this.$refs.prod_container.classList.add("h-120");
                  } else {
                    this.$refs.prod_container.classList.add("h-120");
                    this.error_visable.server = true;
                    this.error_status = err.status;
                  }
                }, 750);
              });
          })
          .catch((err) => {
            console.log(err);
            setTimeout(() => {
              this.$store.commit("appearHiddenLoader", false);
              if (!window.navigator.onLine) {
                this.error_visable.online = true;
                this.$refs.prod_container.classList.add("h-120");
              } else {
                this.$refs.prod_container.classList.add("h-120");
                this.error_visable.server = true;
                this.error_status = err.status;
              }
            }, 500);
          });
      }
    },
  },
  mounted() {
    let name = this.$route.params.categoryName;

    const arr = name.split("");
    name = arr.map((el, i) => (i == 0 ? el.toUpperCase() : el));

    this.title = name.join("").replace("-", " ");
    this.getProducts();
  },
  beforeRouteLeave(_, __, next) {
    if (this.$store.getters.isPhoneMenuOpen) {
      this.$store.commit("openClosePhoneMenu");
    }

    this.$store.commit("appearHiddenLoader", true);
    next();
  },
  beforeRouteEnter(to, _from, next) {
    const link = to.params.categoryName;
    const category = JSON.parse(localStorage.getItem(`/${link}`));

    if (category) {
      addMetaTags(category);
      IsSetMeta = true;
    }

    next();
  },
  beforeRouteUpdate(to, _from, next) {
    const link = to.params.categoryName;
    const category = JSON.parse(localStorage.getItem(`/${link}`));

    if (category) {
      addMetaTags(category);
      IsSetMeta = true;
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

  &__products {
    @apply relative;
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

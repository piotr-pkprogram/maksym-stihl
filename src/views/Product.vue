<template>
  <div class="product" :style="`background-image: url(${category.bg_image})`">
    <div class="product__first-desc">
      <img :src="product.src" :alt="product.alt" class="product__main-img" />
      <div class="product__first-desc-container">
        <h1 class="product__title">{{ product.name }}</h1>
        <span class="product__short-desc">{{ product.short_desc }} </span>
      </div>
    </div>
    <p class="product__long-desc">{{ product.long_desc }}</p>
    <div class="product__technical-data">
      <table class="product__data">
        <thead class="product__data-head">
          <tr>
            <th class="border-r-0.5 rounded-tl-3xl">Dane techniczne</th>
            <th class="border-l-0.5 rounded-tr-3xl">Wartość</th>
          </tr>
        </thead>
        <tbody class="product__data-body">
          <tr>
            <td class="border-t-0">Długość cięcia cm</td>
            <td class="border-t-0">{{ technical_data.dlugosc_ciecia.number }}</td>
          </tr>
          <tr>
            <td>Napięcie znamionowe V</td>
            <td>{{ technical_data.napiecie_znamionowe.number }}</td>
          </tr>
          <tr>
            <td>Ciężar kg z akumulatorem</td>
            <td>{{ technical_data.cieżar_z_akumulatorem.number }}</td>
          </tr>
          <tr>
            <td>Poziom ciśnienia akustycznego dB(A)</td>
            <td>{{ technical_data.poziom_cisnienia_akustycznego.number }}</td>
          </tr>
          <tr>
            <td>Poziom mocy akustycznej dB(A)</td>
            <td>{{ technical_data.poziom_cisnienia_akustycznego.number }}</td>
          </tr>
          <tr>
            <td>Wartość drgań uchwyt lewy/prawy m/s²</td>
            <td>{{ technical_data.wartosc_drgan_uchwyt }}</td>
          </tr>
          <tr>
            <td class="border-b-2 rounded-bl-3xl">Długość całkowita cm</td>
            <td class="border-b-2 rounded-br-3xl">
              {{ technical_data.dlugosc_calkowita.number }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      product: "",
      category: {},
      technical_data: {},
    };
  },
  methods: {
    async getProduct() {
      // await fetch("http://localhost/maksymstihl.pl/backend/api/getCategories.php")
      await fetch("/api/getCategories.php")
        .then((res) => {
          if (res.ok) return res.json();
          else throw new Error("Wystąpił błąd");
        })
        .then((json) => {
          const categoryArr = json.results
            .map((category) => category.properties)
            .reverse();

          const category = categoryArr.find(
            (c) => c.Link.url === `/${this.$route.params.categoryName}`
          );

          category.bg_image = category.Zdjęcie_w_tle.files[0].file.url;
          delete category.Zdjęcie_w_tle;
          this.category = category;

          //   fetch("http://localhost/maksymstihl.pl/backend/api/getProducts.php")
          fetch("/api/getProducts.php")
            .then((res) => {
              if (res.ok) return res.json();
              else throw new Error("Wystąpił błąd");
            })
            .then((json) => {
              const products = this.category.Produkty.relation.map((relProd) => {
                return json.results.find((prod) => prod.id === relProd.id).properties;
              });

              const product = products.find(
                (prod) => prod.Link.url === `/${this.$route.params.productName}`
              );

              product.name = product.Nazwa.title[0].plain_text;
              delete product.Nazwa;
              product.src = product.Zdjęcie_produktu.files[0].file.url;
              delete product.Zdjęcie_produktu;
              product.alt = product.Tekst_alternatywny.rich_text[0].plain_text;
              delete product.Tekst_alternatywny;
              product.short_desc = product.Krótki_opis.rich_text[0].plain_text;
              delete product.Krótki_opis;
              product.long_desc = product.Długi_opis.rich_text[0].plain_text;
              delete product.Długi_opis;

              this.product = product;

              //   fetch("http://localhost/maksymstihl.pl/backend/api/getTechnicalData.php")
              fetch("/api/getTechnicalData.php")
                .then((res) => {
                  if (res.ok) return res.json();
                  else throw new Error("Wystąpił błąd");
                })
                .then((json) => {
                  const technicalData = json.results.find(
                    (data) => data.id === this.product.Dane_techniczne.relation[0].id
                  ).properties;

                  technicalData.wartosc_drgan_uchwyt =
                    technicalData.wartosc_drgan_uchwyt.rich_text[0].plain_text;
                  this.technical_data = technicalData;
                });
              setTimeout(() => {
                this.$store.commit("appearHiddenLoader", false);
              }, 750);
            })
            .catch((err) => {
              throw new Error(err);
            });
        })
        .catch((err) => {
          throw new Error(err);
        });
    },
  },
  created() {
    this.getProduct();
  },
  beforeRouteLeave(_, __, next) {
    if (this.$store.getters.isPhoneMenuOpen) {
      this.$store.commit("openClosePhoneMenu");
    }

    this.$store.commit("appearHiddenLoader", true);
    next();
  },
};
</script>

<style lang="scss" scoped>
.product {
  @apply bg-no-repeat grid p-2 xs:p-4 gap-4;
  background-size: cover;
  @media (min-width: 1445px) {
    background-size: 100%;
  }

  &__first-desc {
    @apply grid lg:grid-flow-col xs:p-3 gap-3 justify-items-center items-center;

    &-container {
      @apply grid gap-5;
    }
  }

  &__title {
    @apply font-medium text-3xl text-black xs:text-5xl;
    @media (min-width: 330px) {
      @apply text-4xl;
    }
  }

  &__short-desc {
    @apply font-medium text-lg xs:text-2xl;
    color: #2b2b2b;
    @media (min-width: 330px) {
      @apply text-xl;
    }
  }

  &__long-desc {
    @apply w-full text-black xl:w-5/6 justify-self-center font-medium text-lg xs:text-2xl p-3 bg-white bg-opacity-90 rounded-3xl;
    @media (min-width: 330px) {
      @apply text-xl;
    }
  }

  &__technical-data {
    @apply grid justify-items-center items-center;
    @media (min-width: 390px) {
      height: 452px;
    }
  }

  &__data {
    @apply bg-white w-full content-start rounded-3xl flex flex-wrap;
    max-width: 720px;

    &-head {
      @apply bg-gray-300 rounded-t-3xl block w-full;
      height: fit-content;

      & tr {
        @apply w-full grid grid-flow-col grid-cols-2;

        & th {
          @apply p-3 border-2 border-solid w-full font-semibold text-left;
          border-color: #828282;
        }
      }
    }

    &-body {
      @apply w-full block;

      & tr {
        @apply w-full grid grid-flow-col grid-cols-2;

        & td {
          @apply p-1 border border-solid;
          border-color: #828282;
        }
      }
    }
  }
}
</style>

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
            <td class="border-t-0">{{ technical_data.dlugosc_ciecia }}</td>
          </tr>
          <tr>
            <td>Napięcie znamionowe V</td>
            <td>{{ technical_data.napiecie_znamionowe }}</td>
          </tr>
          <tr>
            <td>Ciężar kg z akumulatorem</td>
            <td>{{ technical_data.cieżar_z_akumulatorem }}</td>
          </tr>
          <tr>
            <td>Poziom ciśnienia akustycznego dB(A)</td>
            <td>{{ technical_data.poziom_cisnienia_akustycznego }}</td>
          </tr>
          <tr>
            <td>Poziom mocy akustycznej dB(A)</td>
            <td>{{ technical_data.poziom_cisnienia_akustycznego }}</td>
          </tr>
          <tr>
            <td>Wartość drgań uchwyt lewy/prawy m/s²</td>
            <td>{{ technical_data.wartosc_drgan_uchwyt }}</td>
          </tr>
          <tr>
            <td class="border-b-2 rounded-bl-3xl">Długość całkowita cm</td>
            <td class="border-b-2 rounded-br-3xl">
              {{ technical_data.dlugosc_calkowita }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productsCategories: this.$store.getters.productsCategories,
      product: "",
      category: "",
      technical_data: {},
    };
  },
  created() {
    const category = `/${this.$route.params.categoryName}`;
    this.category = this.productsCategories.find((c) => {
      return c.link == category;
    });
    console.log(this.category.bg_image, this.category.src);

    const url = `/${this.$route.params.productName}`;
    this.product = this.category.products.find((p) => p.link == url);

    this.technical_data = this.product.technical_data;
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
      height: 452px ;
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

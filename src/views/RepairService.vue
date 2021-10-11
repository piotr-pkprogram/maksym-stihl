<template>
  <div class="repair-service">
    <section class="what-we-fix">
      <h2 class="what-we-fix__fix-title">Naprawiamy</h2>
      <div class="what-we-fix__fix-continer">
        <div class="what-we-fix__row" v-for="(categoryRow, i) in categories" :key="i">
          <router-link
            class="what-we-fix__category"
            v-for="(category, j) in categoryRow"
            :key="category.id"
            :to="category.link"
            :class="
              categoryRow.length === 3 && j === 0
                ? 'justify-self-end'
                : categoryRow.length === 3 && j === 2
                ? 'justify-self-start'
                : ''
            "
          >
            <img :src="category.src" :alt="category.name" class="what-we-fix__bg-image" />
            <div class="what-we-fix__info">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:svgjs="http://svgjs.com/svgjs"
                version="1.1"
                viewBox="0 0 46.02 46.02"
                style="enable-background: new 0 0 512 512"
                xml:space="preserve"
                class="what-we-fix__arrow"
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
              ><span class="what-we-fix__name">{{ category.name }}</span>
              <span class="what-we-fix__desc">
                {{ category.desc }}
              </span>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fixCategories: this.$store.getters.fixCategories,
    };
  },
  computed: {
    categories() {
      const categories = this.arraySplitting(this.fixCategories, 4);
      console.log(categories[2]);
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
.what-we-fix {
  @apply grid items-center p-2 relative gap-5 p-3;

  &__fix-title {
    @apply font-medium text-4xl w-full text-center;
    @media (min-width: 335px) {
      @apply text-5xl;
    }
  }

  &__row {
    gap: 1%;
    @apply w-full grid grid-flow-col justify-items-center items-center p-0 grid-rows-4 gap-y-5;
    @media (min-width: 282px) {
      @apply p-2;
    }
    @media (min-width: 735px) {
      @apply grid-rows-2;
    }
    @media (min-width: 930px) {
      @apply grid-rows-1;
    }
  }

  &__arrow {
    @apply mr-1;
    height: 29px;
    width: 29px;
  }

  &__category {
    @apply relative grid items-end;
    justify-self: center !important;
    width: 250.6px;
    height: 142.368px;

    @media (min-width: 335px) {
      width: 300px;
      height: 177.96px;
    }

    @media (min-width: 385px) {
      width: 340px;
      height: 222px;
    }

    @media (min-width: 930px) {
      width: 217.6px;
      height: 142.368px;
    }

    @media (min-width: 1068px) {
      width: 250.6px;
      height: 142.368px;
    }

    @media (min-width: 1275px) {
      width: 300px;
      height: 177.96px;
    }

    @media (min-width: 1430px) {
      width: 340px;
      height: 222px;
    }
  }

  &__bg-image {
    @apply absolute w-full min-h-full z-0;
  }

  &__info {
    @apply z-10 text-white p-2 rounded-b-3xl flex flex-wrap text-base items-center relative pb-3;
    background: rgba(80, 80, 80, 0.5);
    @media (min-width: 930px) {
      font-size: 13px;
    }
  }

  &__desc {
    @apply absolute font-bold text-xs top-8 left-10 hidden;
    color: #bfbfbf;

    @media (min-width: 335px) {
      @apply block;
    }

    @media (min-width: 930px) {
      @apply hidden;
    }

    @media (min-width: 1430px) {
      @apply block;
    }
  }
}
</style>

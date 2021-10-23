<template>
  <div>
    <!--cta - call to action-->
    <section class="relative pt-10 pb-10 cta lg:p-3">
      <video
        class="cta__bg-video"
        autoplay
        loop
        poster="../assets/img/poster-bg-viedo.jpg"
        muted
        playsinline
      >
        <source src="../assets/bg-video.mp4" type="video/mp4" />
      </video>
      <div class="absolute top-0 left-0 z-10 w-full h-full bg-black bg-opacity-50"></div>
      <div class="cta__containers">
        <div class="cta__btn-container">
          <p class="cta__short-desc">
            Jesteś ze Skwierzyny lub miekasz blisko niej? Potrzebujesz nowych narzędzi lub
            chcesz naprawić swoje?
          </p>
          <base-button to="/kontakt.html" classes="orange-btn rounded-2xl"
            >Zapraszamy do nas,</base-button
          >
          <span class="cta__btn-desc">a napewno się nie zawiedziesz!</span>
          <text-links
            href="https://www.google.com/maps/place/STIHL+MAKSYM+SKWIERZYNA/@52.5978674,15.4972911,17z/data=!3m1!4b1!4m5!3m4!1s0x4706efd07234a125:0x792f1bad40862586!8m2!3d52.5978674!4d15.4994798"
            classes="cta__localization-link"
            :IsExternalLink="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:svgjs="http://svgjs.com/svgjs"
              version="1.1"
              x="0"
              y="0"
              viewBox="0 0 512 512"
              style="enable-background: new 0 0 512 512"
              xml:space="preserve"
              class="h-8"
            >
              <g>
                <g xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path
                      d="M341.476,338.285c54.483-85.493,47.634-74.827,49.204-77.056C410.516,233.251,421,200.322,421,166    C421,74.98,347.139,0,256,0C165.158,0,91,74.832,91,166c0,34.3,10.704,68.091,31.19,96.446l48.332,75.84    C118.847,346.227,31,369.892,31,422c0,18.995,12.398,46.065,71.462,67.159C143.704,503.888,198.231,512,256,512    c108.025,0,225-30.472,225-90C481,369.883,393.256,346.243,341.476,338.285z M147.249,245.945    c-0.165-0.258-0.337-0.51-0.517-0.758C129.685,221.735,121,193.941,121,166c0-75.018,60.406-136,135-136    c74.439,0,135,61.009,135,136c0,27.986-8.521,54.837-24.646,77.671c-1.445,1.906,6.094-9.806-110.354,172.918L147.249,245.945z     M256,482c-117.994,0-195-34.683-195-60c0-17.016,39.568-44.995,127.248-55.901l55.102,86.463    c2.754,4.322,7.524,6.938,12.649,6.938s9.896-2.617,12.649-6.938l55.101-86.463C411.431,377.005,451,404.984,451,422    C451,447.102,374.687,482,256,482z"
                      fill="#00e727"
                      data-original="#000000"
                      style=""
                      class=""
                    />
                  </g>
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path
                      d="M256,91c-41.355,0-75,33.645-75,75s33.645,75,75,75c41.355,0,75-33.645,75-75S297.355,91,256,91z M256,211    c-24.813,0-45-20.187-45-45s20.187-45,45-45s45,20.187,45,45S280.813,211,256,211z"
                      fill="#00e727"
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
            Skwierzyna Głowackiego 1a, 66-440
          </text-links>
        </div>
      </div>
      <div class="cta__containers">
        <img
          src="../assets/img/pilarka-łańcuchowa-stihl.png"
          alt=""
          class="cta__stihl-tool"
        />
      </div>
    </section>
    <section class="stihl-dealere">
      <h1 class="stihl-dealere__title">
        Jesteśmy autozyrowanym
        <span class="stihl-dealere__orange-text">dealerem firmy STIHL</span>
      </h1>
      <img src="../assets/img/down-arrow.svg" alt="" class="stihl-dealere__arrow" />
      <base-button
        to="/#o-nas"
        type="router-link"
        classes="orange-btn rounded-full text-f6"
        >Więcej o Nas</base-button
      >
    </section>
    <section class="how-can-we-help-you">
      <h2 class="how-can-we-help-you__title">Jak możemy Ci pomóc?</h2>
      <div class="how-can-we-help-you__services-container">
        <div class="how-can-we-help-you__col">
          <span class="how-can-we-help-you__subtitle">Serwis naprawczy</span>
          <p class="self-center how-can-we-help-you__desc">
            Serwisujemy sprzęt gwarancyjny i po gwarancyjny w atrakcyjnych cenach dla
            części zamiennych i usług.
          </p>
          <base-button
            classes="orange-btn rounded-full self-end"
            type="router-link"
            to="/serwis-naprawczy"
            >Zobacz ofertę</base-button
          >
        </div>
        <div class="how-can-we-help-you__col lg:justify-self-start">
          <span class="how-can-we-help-you__subtitle"
            >Narzędzia i inne produkty STIHL</span
          >
          <p class="how-can-we-help-you__desc">
            Narzędzia i akcesoria eksploatacyjne oferujemy w najlepszych cenach.
            Świadczymy usługi fachowego i profesjonalnego doradztwa z zakresu doboru
            maszyny do Państwa potrzeb.
          </p>
          <base-button
            classes="orange-btn rounded-full self-end"
            type="router-link"
            to="/produkty"
            >Zobacz produkty</base-button
          >
        </div>
      </div>
    </section>
    <section class="our-products">
      <h2 class="our-products__title">Zobacz nasze produkty</h2>
      <div class="our-products__slider-container">
        <base-slider classes="our-products__slider"></base-slider>
      </div>
    </section>
    <section class="about-us-group">
      <section class="about-us">
        <h2 class="about-us__title">O Nas</h2>
        <img
          src="../assets/img/maksym-stihl.jpg"
          alt="Obsługa Maksym Stihl"
          class="about-us__main-img rounded-3xl"
        />
        <div class="about-us__desc-container">
          <p class="self-center about-us__desc">
            Działamy jako autoryzowany dealer niemieckiej firmy STIHL, prowadzimy sprzedaż
            i profesjonalny serwis sprzedawanych urządzeń marki STIHL i VIKING.
          </p>
          <p class="about-us__desc">
            Zaufało nam wiele osób zarówno nabywców indywidualnych jak i firm prywatnych
            oraz państwowe jednostki organizacyjne. Cały czas służymy swą wiedzą i
            doświadczeniem, pragniemy by nasza firma kojarzyła się z profesjonalizmem i
            wysoką jakością oferowanych produktów i usług. Dysponujemy wyłącznie
            sprawdzonymi rozwiązaniami i wyrobami renomowanych producentów.
          </p>
        </div>
      </section>
      <section class="our-brands">
        <h2 class="our-brands__title">Nasze Marki</h2>
        <div class="our-brands__logos">
          <div class="our-brands__logos-row">
            <img
              class="our-brands__brand"
              src="../assets/img/brands/stihl.png"
              alt="Stihl"
            />
            <img
              class="our-brands__brand"
              src="../assets/img/brands/viking.png"
              alt="Viking"
            />
            <img
              class="our-brands__brand"
              src="../assets/img/brands/fiskars.png"
              alt="Fiskars"
            />
          </div>
          <div class="our-brands__logos-row">
            <img
              class="our-brands__brand"
              src="../assets/img/brands/briggs_and_stratton.png"
              alt="Briggs & Stratton"
            />
            <img
              class="our-brands__brand"
              src="../assets/img/brands/endress.png"
              alt="Endress"
            />
            <img
              class="our-brands__brand"
              src="../assets/img/brands/oregon.png"
              alt="Oregon"
            />
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import BaseSlider from "../components/main-components/slider/Slider.vue";

export default {
  components: {
    BaseSlider,
  },
  beforeRouteLeave(_, __, next) {
    if (this.$store.getters.isPhoneMenuOpen) {
      this.$store.commit("openClosePhoneMenu");
    }

    this.$store.commit("appearHiddenLoader", true);
    next();
  },
  created() {
    this.$store.commit("appearHiddenLoader", true);
  },
};
</script>

<style lang="scss" scoped>
.cta {
  @apply w-full grid p-1 sm:p-3 h-full gap-10 lg:gap-0 lg:grid-flow-col;

  @media (min-width: 1024px) {
    height: 511px;
  }

  @media (min-width: 1435px) {
    background-size: 100%;
    background-position: bottom;
  }

  &__containers {
    @apply grid content-center justify-items-center relative;
  }

  &__bg-video {
    @apply absolute w-full h-full z-0 top-0 left-0;
    object-fit: none;
  }

  &__btn-container {
    @apply font-medium h-full flex flex-wrap flex-col text-f6 justify-center xs:justify-start z-20;
  }

  &__short-desc {
    @apply xs:text-2xl text-xl xs:w-112 mb-7;
  }

  &__btn-desc {
    @apply text-sm ml-2;
  }

  &__localization-link {
    @apply flex items-center gap-1 hover:opacity-75 transition-opacity mt-5 lg:mt-0 lg:absolute lg:bottom-6 text-sm xs:text-base font-medium;
    color: #00e727;
  }

  &__stihl-tool {
    @apply lg:w-auto z-20;
    width: 500px;
  }
}

.stihl-dealere {
  @apply grid justify-items-center text-center p-3 gap-4 pb-12 pt-12;

  &__title {
    @apply font-medium text-2xl xs:text-3xl sm:text-5xl w-full;
    max-width: 798px;
  }

  &__orange-text {
    @apply text-main;
  }

  &__arrow {
    width: 25px;
    height: 45px;
  }
}

.how-can-we-help-you {
  @apply bg-F2 grid gap-10 p-5 pb-10;

  &__title {
    @apply w-full font-medium text-3xl xs:text-4xl sm:text-5xl text-center;
  }

  &__services-container {
    @apply w-full grid justify-items-center lg:justify-items-end lg:grid-flow-col gap-10 sm:gap-20;
  }

  &__col {
    @apply bg-white rounded-2xl gap-12 grid justify-items-center p-4 text-center;

    @media (min-width: 640px) {
      width: 414px;
      height: 394px;
    }
  }

  &__subtitle {
    @apply text-xl font-medium max-w-52;
  }

  &__desc {
    @apply max-w-72 font-medium;
  }
}

.our-products {
  @apply p-4 grid gap-4 justify-items-center pb-15 pt-15;

  &__title {
    @apply w-full font-medium text-3xl xs:text-4xl sm:text-5xl text-center;
  }

  &__slider-container {
    @apply rounded-2xl p-2 xs:p-4 md:p-10 grid w-full items-center relative;
    background-color: #e0e0e0;
    height: 381px;
    max-width: 783px;
    @media (min-width: 405px) {
      justify-content: center;
    }

    @media (min-width: 1000px) {
      max-width: 938px;
      justify-content: normal;
    }

    @media (min-width: 1452px) {
      max-width: 1277px;
    }
  }
}

.about-us-group {
  @apply bg-no-repeat w-full grid p-1 sm:px-12 h-full gap-7 bg-cover justify-items-center;
  background-image: url(../assets/img/scinanie-drewna-pilarka-stihl.jpg);
  background-position: center;
}

.about-us {
  @apply bg-white rounded-t-3xl grid justify-items-center p-4 gap-6 md:gap-4 w-full md:pb-15;
  max-width: 1470px;
  box-shadow: 0px 0px 100px 5px rgba(255, 97, 0, 0.27);
  transform: translateY(57.5px);
  &__title {
    @apply w-full font-medium text-3xl xs:text-4xl sm:text-5xl text-center col-1 md:col-1/2;
  }

  &__main-img {
    @apply col-1 row-2 md:justify-self-end;
  }

  &__desc-container {
    @apply col-1 md:col-2 md:row-start-2 grid gap-y-4;
    max-width: 682px;
  }
}

.our-brands {
  @apply bg-white rounded-b-3xl grid justify-items-center p-4 gap-4 w-full pb-15;
  max-width: 1470px;
  box-shadow: 0px 0px 100px 5px rgba(255, 97, 0, 0.27);
  transform: translateY(57.5px);
  &__title {
    @apply w-full font-medium text-3xl xs:text-4xl sm:text-5xl text-center;
  }

  &__logos {
    @apply grid;
  }

  &__logos-row {
    @apply grid grid-flow-col w-full gap-2 items-center;
  }
}
</style>

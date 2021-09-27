<template>
  <!--cta - call to action-->
  <section class="pt-10 pb-10 cta lg:p-3">
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
    <base-button to="/#o-nas" type="router-link" classes="orange-btn rounded-full text-f6"
      >Więcej o Nas</base-button
    >
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.cta {
  @apply bg-no-repeat w-full grid p-1 sm:p-3 h-full gap-10 lg:gap-0 lg:grid-flow-col;
  background-image: url(../assets/img/traktor-ogrodowy.jpg);
  background-size: auto 100%;
  background-position: center;

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

  &__btn-container {
    @apply font-medium h-full flex flex-wrap flex-col text-f6 justify-center xs:justify-start;
  }

  &__short-desc {
    @apply xs:text-2xl text-xl xs:w-112 mb-7;
  }

  &__btn-desc {
    @apply text-sm ml-2;
  }

  &__localization-link {
    @apply flex items-center gap-1 hover:opacity-75 transition-opacity mt-5 lg:mt-0 lg:absolute lg:bottom-6 text-sm xs:text-base;
    color: #00e727;
  }

  &__stihl-tool {
    @apply lg:w-auto;
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
</style>

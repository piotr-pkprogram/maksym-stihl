<template>
  <footer :class="classes">
    <div class="footer__main-informations">
      <footer-block title="Dane Kontaktowe:">
        <text-links classes="footer__tel" href="tel:606612737"
          >Tel. 606 612 737</text-links
        >
        <text-links classes="footer__mail" href="mailto:maksym.stihl@o2.pl"
          >maksym.stihl@o2.pl</text-links
        >
        <p class="footer__copyright footer__copyright--media">
          Copyright © 2021 Maksym STIHL
        </p>
      </footer-block>
      <footer-block title="Adres:" classes="footer__blocks md:justify-self-start">
        <img src="../../assets/img/location.png" alt="" class="footer__location-img" />
        <address class="footer__address">
          <span class="footer__road">Głowackiego 1a, 66-440</span>
          <span class="footer__city">Skwierzyna</span>
        </address>
      </footer-block>
      <footer-block title="Godziny Otwarcia">
        <p class="footer__open-hours">Poniedziałek - Piątku: 8:00 - 17:00</p>
        <p class="footer__open-hours">Sobota: 9:00 - 14:00</p>
        <p class="footer__open-hours">Niedziela: Zamknięte</p>
      </footer-block>
      <footer-block
        title="Wykonanie:"
        classes="footer__blocks md:row-start-2 md:col-start-1 md:justify-self-start"
      >
        <text-links
          classes="footer__execution"
          href="https://pk-program.pl"
          :IsExternalLink="true"
          >PK Program</text-links
        >
      </footer-block>
      <footer-block
        title="Polityka Prywatności"
        :titleIsLink="true"
        link="/polityka-prywatnosci"
        classes="footer__blocks md:row-start-2 md:col-start-2"
      ></footer-block>
      <p class="footer__copyright md:row-start-2 md:col-start-3">
        Copyright © 2021 Maksym STIHL
      </p>
    </div>
  </footer>
</template>

<script>
import FooterBlock from "../UI/FooterBlock.vue";

export default {
  components: {
    FooterBlock,
  },
  props: {
    classes: {
      type: String,
      required: false,
      default: "footer",
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  @apply bg-C4 text-black xs:p-5 pb-7 p-2;

  &__main-informations {
    @apply grid justify-center gap-4 gap-y-9 md:grid-flow-col;
    @media (min-width: 1319px) {
      @apply gap-0;
      justify-content: normal;
    }
  }

  &__location-img {
    @apply absolute -left-9;
  }

  &__address {
    @apply grid not-italic;
  }

  &__blocks {
    @apply md:row-start-1;

    &:nth-child(2) > p:nth-child(2) {
      @apply relative;
    }

    @media (min-width: 1319px) {
      grid-column-start: auto !important;
      grid-row-start: auto !important;
      justify-self: center !important;
    }
  }

  &__copyright {
    @apply block;
    @media (min-width: 1319px) {
      @apply hidden;
    }
    &--media {
      @apply hidden;
      @media (min-width: 1319px) {
        @apply block mt-20 col-start-auto row-start-auto;
      }
    }
  }
}
</style>

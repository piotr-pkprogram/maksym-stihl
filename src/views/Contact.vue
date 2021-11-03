<template>
  <div>
    <section class="contact">
      <div class="contact__columns">
        <fiframe
          class="contact__localization"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9693.748900819424!2d15.4994798!3d52.5978674!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x792f1bad40862586!2sSTIHL%20MAKSYM%20SKWIERZYNA!5e0!3m2!1spl!2spl!4v1633814415251!5m2!1spl!2spl"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></fiframe>
      </div>
      <div class="contact__columns">
        <form action="" class="form" @submit.prevent="validationForm">
          <span class="form__cta">Wyślij wiadomość</span>
          <base-input
            placeholder="Imię*"
            type="text"
            name="name"
            :classes="nameInputClasses"
            @input="validateName"
          ></base-input>
          <span :class="chatBubbleNameClasses"> *To pole musi zostać wypełnione! </span>
          <base-input
            classes="form__input form__input--topic row-2"
            placeholder="Temat"
            type="text"
            name="topic"
          ></base-input>
          <base-input
            placeholder="Adres email*"
            type="email"
            name="email"
            :classes="emailInputClasses"
            @input="validateEmail"
          ></base-input>
          <span :class="chatBubbleEmailClasses" ref="emailBubble">
            *To pole musi zostać wypełnione!
          </span>
          <base-input
            classes="form__input form__input--message"
            placeholder="Wiadomość"
            type="textarea"
            name="message"
          ></base-input>
          <div
            class="g-recaptcha"
            data-sitekey="6LcmZr0cAAAAAFTvRtM2dIQ10JoPFMP6WVVMBtze"
          ></div>
          <base-button classes="form__send orange-btn rounded-full" type="submit"
            >Wyślij
            <svg viewBox="25 25 50 50" class="form__loader" ref="loader">
              <circle cx="50" cy="50" r="20"></circle>
            </svg>
          </base-button>
          <span class="loader-message" ref="loaderMessage"
            >Wysyłanie wiadomość trwa dłużej niż zwykle. Sprawdź swoje połączenie z
            internetem.
          </span>
        </form>
      </div>
    </section>
    <section class="place-img">
      <img
        src="../assets/img/budynek-sklepu-maksym-stil-od-zewnątrz.jpg"
        alt="Lekko pomarańczowy budynek sklepu Maksym Stihl od zewnątrz. Pomieszczenie ma dwa okna, a nad nimi napis 'Stihl Maksym Stihl'"
        class="form__img"
      />
    </section>
  </div>
</template>

<script>
/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable no-undef*/
import emailjs from "emailjs-com";

export default {
  data() {
    return {
      isNameValueCorrect: true,
      isEmailValueCorrect: true,
    };
  },
  computed: {
    nameInputClasses() {
      return {
        form__input: true,
        "form__input--name": true,
        "row-2": true,
        "form__input--error": !this.isNameValueCorrect,
      };
    },
    chatBubbleNameClasses() {
      return { "chat-bubble": true, block: !this.isNameValueCorrect };
    },
    emailInputClasses() {
      return {
        form__input: true,
        "form__input--email": true,
        "form__input--error": !this.isEmailValueCorrect,
      };
    },
    chatBubbleEmailClasses() {
      return {
        "chat-bubble": true,
        "chat-bubble--email": true,
        block: !this.isEmailValueCorrect,
      };
    },
  },
  methods: {
    validateName() {
      const inputs = document.querySelectorAll(".form__input");

      if (inputs[0].value.trim() === "") {
        this.isNameValueCorrect = false;
      } else {
        this.isNameValueCorrect = true;
      }
    },
    validateEmail() {
      const inputs = document.querySelectorAll(".form__input");
      const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (inputs[2].value.trim() === "") {
        this.$refs.emailBubble.innerHTML = "*To pole musi być wypełnione";
        this.isEmailValueCorrect = false;
      } else if (emailRegex.test(inputs[2].value.trim()) === false) {
        this.$refs.emailBubble.innerHTML = "*Zawartość tego pola nie jest email-em";
        this.isEmailValueCorrect = false;
      } else {
        this.isEmailValueCorrect = true;
      }
    },
    validationForm(e) {
      this.validateName();
      this.validateEmail();

      if (this.isEmailValueCorrect === true && this.isNameValueCorrect === true)
        this.sendEmail(e.target);
    },
    sendEmail(form) {
      const loader = this.$refs.loader;
      const loaderMessage = this.$refs.loaderMessage;
      const submitBtn = document.querySelector(".form__send");
      const inputs = form.querySelectorAll(".form__input");

      submitBtn.setAttribute("disabled", "disabled");
      loaderMessage.classList.remove("block");
      loader.classList.add("block");

      const timeout = setTimeout(() => {
        loaderMessage.classList.add("block");
      }, 2500);

      emailjs
        .sendForm(
          "service_h8rzv39",
          "template_1mv907v",
          form,
          "user_lMRCEmHpYEa191SzKn8aZ"
        )
        .then(
          (res) => {
            if (res.status === 200) {
              loaderMessage.innerHTML =
                "Twoja wiadomość zostałą wysłana pomyślnie. Dziękujemy za skontaktowanie się z nami :)";
              loaderMessage.classList.add("block");
              loaderMessage.classList.remove("text-red-500");
              inputs.forEach((input) => {
                localStorage.removeItem(input.getAttribute("name"));
                input.value = "";
              });
            }
            clearTimeout(timeout);
            submitBtn.removeAttribute("disabled");
            loader.classList.remove("block");
          },
          (err) => {
            let message =
              "Podczas wysyłania wiadomości wystąpił błąd. Prosimy spróbować ponownie.";

            if (!navigator.onLine) {
              message =
                "Brak połączenia z internetem. Prosimy połączyć się z internetem i wysłać wiadomość ponownie.";
            } else if (
              err.text === "reCAPTCHA: The g-recaptcha-response parameter not found"
            ) {
              message =
                "Wiadmość nie została wysłana. Potwierdź, że nie jesteś robotem i spróbuj ponownie :).";
            }

            loaderMessage.innerHTML = message;
            loaderMessage.classList.add("text-red-500", "block");
            clearTimeout(timeout);
            submitBtn.removeAttribute("disabled");
            loader.classList.remove("block");
          }
        );
    },
    delayOfIframe() {
      const fIframes = document.querySelectorAll("fiframe");

      fIframes.forEach((fiframe) => {
        try {
          const fiframeParent = fiframe.parentNode;

          const iframe = document.createElement("iframe");
          iframe.setAttribute("class", fiframe.getAttribute("class"));
          iframe.setAttribute("src", fiframe.getAttribute("src"));
          iframe.setAttribute("style", fiframe.getAttribute("style"));
          iframe.setAttribute("allow", fiframe.getAttribute("allow"));
          iframe.setAttribute("loading", fiframe.getAttribute("loading"));
          iframe.setAttribute("allowfullscreen", "");

          fiframe.remove();
          fiframeParent.appendChild(iframe);
          // eslint-disable-next-line no-empty
        } catch (e) {}
      });

      this.$store.state.IsFiframeTransform = true;
    },
  },
  beforeRouteLeave(_, __, next) {
    if (this.$store.getters.isPhoneMenuOpen) {
      this.$store.commit("openClosePhoneMenu");
    }
    this.$store.commit("appearHiddenLoader", true);
    const existRecaptchaJs = document.querySelectorAll(
      'script[src="https://www.gstatic.com/recaptcha/releases/UrRmT3mBwY326qQxUfVlHu1P/recaptcha__pl.js"]'
    );
    existRecaptchaJs.forEach((script) => {
      script.remove();
    });

    this.$store.commit("appearHiddenLoader", true);
    next();
  },
  mounted() {
    this.delayOfIframe();

    setTimeout(() => {
      this.$store.commit("appearHiddenLoader", false);
      const recaptchaJs = document.createElement("script");
      recaptchaJs.setAttribute("src", "https://www.google.com/recaptcha/api.js");
      document.head.appendChild(recaptchaJs);
    }, 500);
  },
};
</script>

<style lang="scss" scoped>
.contact {
  @apply grid lg:grid-flow-col lg:grid-cols-2 bg-no-repeat bg-cover p-2 md:p-4 gap-2 lg:gap-3 h-full;
  background-image: url(../assets/img/pilarka-łańcuchowa-stihl-leżaca-na-trawie.jpg);
  background-position: 50%;
  min-height: 800px;

  &__columns {
    @apply flex flex-wrap items-center justify-center p-2;
  }
}

.place-img {
  @apply flex flex-wrap justify-center items-center p-3;
  height: 630px;
}

.form__input--error {
  @apply border-red-600 text-red-600;
  &::placeholder {
    @apply text-red-600;
  }
}
</style>

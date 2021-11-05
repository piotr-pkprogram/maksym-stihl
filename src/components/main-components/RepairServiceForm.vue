<template>
  <div class="form-container" ref="formContainer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns:svgjs="http://svgjs.com/svgjs"
      version="1.1"
      viewBox="0 0 512 512"
      style="enable-background: new 0 0 512 512"
      xml:space="preserve"
      class="form__close"
      @click="$emit('close')"
    >
      <circle
        r="256"
        cx="256"
        cy="256"
        fill="#f6f6f6"
        shape="circle"
        transform="matrix(0.69,0,0,0.69,79.36000000000001,79.36000000000001)"
      />
      <g transform="matrix(0.7,0,0,0.7,76.80000000000001,76.80000000000001)">
        <g xmlns="http://www.w3.org/2000/svg">
          <path
            d="m256 0c-141.49 0-256 114.5-256 256 0 141.49 114.5 256 256 256 141.49 0 256-114.5 256-256 0-141.49-114.5-256-256-256zm-12.284 317.397-58.121 58.132c-6.565 6.553-15.283 10.166-24.557 10.166-19.196 0-34.734-15.526-34.734-34.734 0-9.274 3.612-17.992 10.166-24.557l58.132-58.121c6.785-6.784 6.785-17.783 0-24.568l-58.132-58.121c-6.553-6.565-10.166-15.283-10.166-24.557 0-19.196 15.526-34.734 34.734-34.734 9.274 0 17.992 3.613 24.557 10.166l58.121 58.132c6.785 6.773 17.784 6.773 24.568 0l58.121-58.132c6.565-6.553 15.283-10.166 24.557-10.166 19.196 0 34.734 15.526 34.734 34.734 0 9.274-3.612 17.992-10.166 24.557l-58.132 58.121c-6.785 6.784-6.785 17.783 0 24.568l58.132 58.121c6.553 6.565 10.166 15.283 10.166 24.557 0 19.196-15.526 34.734-34.734 34.734-9.274 0-17.992-3.613-24.557-10.166l-58.121-58.132c-6.784-6.784-17.784-6.773-24.568 0z"
            fill="#000"
            data-original="#000000"
            style=""
            class=""
          />
        </g>
      </g>
    </svg>
    <form class="form max-w-11/12" ref="form" @submit.prevent="validationForm">
      <base-input
        placeholder="Imię*"
        type="text"
        name="name"
        classes="form__input form__input--name row-1"
        id="inName"
        @input="validateEmpty('#inName', '#nameBubble')"
      ></base-input>
      <base-input
        placeholder="Nazwisko*"
        type="text"
        name="surname"
        classes="form__input form__input--topic row-1"
        id="inSurname"
        @input="validateEmpty('#inSurname', '#nameBubble')"
      ></base-input>
      <span class="chat-bubble" id="nameBubble"> *To pole musi zostać wypełnione! </span>
      <base-input
        placeholder="Email*"
        type="text"
        name="email"
        classes="form__input form__input--email"
        id="inMail"
        @input="validateReg('#inMail', emailRegex, '#mailBubble')"
      ></base-input>
      <span class="chat-bubble chat-bubble--email" id="mailBubble">
        *To pole musi zostać wypełnione!
      </span>
      <base-input
        placeholder="Telefon*"
        type="text"
        name="tel"
        classes="form__input form__input--name"
        id="inPhone"
        @input="validateReg('#inPhone', phoneRegex, '#dateBubble')"
      ></base-input>
      <base-input
        placeholder="Data*"
        type="text"
        name="date"
        classes="form__input form__input--topic"
        id="inDate"
        @input="validateReg('#inDate', dateRegex, '#dateBubble')"
      ></base-input>
      <span class="chat-bubble chat-bubble--email" id="dateBubble">
        *To pole musi zostać wypełnione!
      </span>
      <base-input
        placeholder="Model*"
        type="text"
        name="model"
        classes="form__input form__input--email"
        id="inModel"
        @input="validateEmpty('#inModel', '#modelBubble')"
      ></base-input>
      <span class="chat-bubble" id="modelBubble"> *To pole musi zostać wypełnione! </span>
      <base-input
        classes="form__input form__input--message"
        placeholder="Opis Usterki*"
        type="textarea"
        name="desc"
        id="inDesc"
        @input="validateEmpty('#inDesc', '#descBubble')"
      ></base-input>
      <span class="chat-bubble" id="descBubble"> *To pole musi zostać wypełnione! </span>
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
</template>

<script>
/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
import emailjs from "emailjs-com";

export default {
  emits: ["close"],
  data() {
    return {
      isValidForm: false,
      emailRegex: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      phoneRegex: /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      dateRegex: /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/,
      resizeObserver: new ResizeObserver((entries) => {
        const height = entries[0].contentRect.height;

        try {
          if (height > 860)
            this.$refs.formContainer.classList.add("items-start", "pt-4", "pb-4");
          else this.$refs.formContainer.classList.remove("items-start", "pt-4", "pb-4");
          // eslint-disable-next-line no-empty
        } catch {}
      }),
    };
  },
  methods: {
    observHeight() {
      this.resizeObserver.observe(this.$refs.form);
    },
    validateEmpty(inputSelector, bubbleSelector) {
      const input = document.querySelector(inputSelector);
      const bubble = document.querySelector(bubbleSelector);

      if (input.value.trim() === "") {
        input.classList.add("form__input--error");
        bubble.classList.add("block");
        this.isValidForm = false;
      } else {
        input.classList.remove("form__input--error");
        bubble.classList.remove("block");
        this.isValidForm = true;
      }
    },
    validateReg(regSelector, regex, bubbleSelector) {
      const input = document.querySelector(regSelector);
      const bubble = document.querySelector(bubbleSelector);

      if (input.value.trim() === "") {
        bubble.innerHTML = "*To pole musi być wypełnione";
        bubble.classList.add("block");
        input.classList.add("form__input--error");
        this.isValidForm = false;
      } else if (regex.test(input.value.trim()) === false) {
        bubble.innerHTML = "*Zawartość tego pola jest nie poprawna";
        bubble.classList.add("block");
        input.classList.add("form__input--error");
        this.isValidForm = false;
      } else {
        bubble.classList.remove("block");
        input.classList.remove("form__input--error");
        this.isValidForm = true;
      }
    },
    validationForm(e) {
      const emptyValidateSelectors = [
        {
          input: "#inName",
          bubble: "#nameBubble",
        },
        {
          input: "#inSurname",
          bubble: "#nameBubble",
        },
        {
          input: "#inModel",
          bubble: "#modelBubble",
        },
        {
          input: "#inDesc",
          bubble: "#descBubble",
        },
      ];
      emptyValidateSelectors.forEach((selector) => {
        this.validateEmpty(selector.input, selector.bubble);
      });

      const regValidateSelectors = [
        {
          input: "#inMail",
          bubble: "#mailBubble",
          regex: this.emailRegex,
        },
        {
          input: "#inPhone",
          bubble: "#dateBubble",
          regex: this.phoneRegex,
        },
        {
          input: "#inDate",
          bubble: "#dateBubble",
          regex: this.dateRegex,
        },
      ];
      regValidateSelectors.forEach((selector) => {
        this.validateReg(selector.input, selector.regex, selector.bubble);
      });

      if (this.isValidForm) this.sendEmail(e.target);
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
          "service_lq3vx5j",
          "template_yzmumq5",
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
            console.log(err);
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
  },
  mounted() {
    this.observHeight();
    setTimeout(() => {
      const recaptchaJs = document.createElement("script");
      recaptchaJs.setAttribute("src", "https://www.google.com/recaptcha/api.js");
      document.head.appendChild(recaptchaJs);
    }, 500);
  },
  beforeRouteLeave(_, __, next) {
    const existRecaptchaJs = document.querySelectorAll(
      'script[src="https://www.gstatic.com/recaptcha/releases/UrRmT3mBwY326qQxUfVlHu1P/recaptcha__pl.js"]'
    );
    existRecaptchaJs.forEach((script) => {
      script.remove();
    });
    next();
  },
};
</script>

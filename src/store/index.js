import { createStore } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default createStore({
    state: {
        menuElements: [{
                id: uuidv4(),
                href: "/",
                textValue: "Start",
            },
            {
                id: uuidv4(),
                href: "/produkty.html",
                textValue: "Produkty",
            },
            {
                id: uuidv4(),
                href: "/serwis-naprawczy.html",
                textValue: "Serwis Naprawczy",
            },
            {
                id: uuidv4(),
                href: "/kontak.html",
                textValue: "Kontakt",
                classes: "phone-menu__element phone-menu__element--last"
            },
        ],
        isPhoneMenuOpen: false,
        IsFiframeTransform: false,
        productsCategories: [{
                id: uuidv4(),
                srcImg: "../assets/img/urządzenia-akumulatorowe.jpg",
                altImg: "urządzenia akumulatorowe",
                category: `<div class="slide__category-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.com/svgjs"
          version="1.1"
          width="512"
          height="512"
          x="0"
          y="0"
          viewBox="0 0 46.02 46.02"
          style="enable-background: new 0 0 512 512"
          xml:space="preserve"
          class=""
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
          </g>
        </svg>
        <span class="slide__category">Urządzenia akumulatorowe</span>
      </div>`
            },
            {
                id: uuidv4(),
                srcImg: "../assets/img/urządzenia-koszące.jpg",
                altImg: "urządzenia koszące",
                category: `<div class="slide__category-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.com/svgjs"
          version="1.1"
          width="512"
          height="512"
          x="0"
          y="0"
          viewBox="0 0 46.02 46.02"
          style="enable-background: new 0 0 512 512"
          xml:space="preserve"
          class=""
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
          </g>
        </svg>
        <span class="slide__category">Urządzenia koszące</span>
      </div>`
            },
            {
                id: uuidv4(),
                srcImg: "../assets/img/pilarki-łańcuchowe.jpg",
                altImg: "pilarki łańcuchowe",
                category: `<div class="slide__category-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.com/svgjs"
          version="1.1"
          width="512"
          height="512"
          x="0"
          y="0"
          viewBox="0 0 46.02 46.02"
          style="enable-background: new 0 0 512 512"
          xml:space="preserve"
          class=""
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
          </g>
        </svg>
        <span class="slide__category">Pilarki łańcuchowe</span>
      </div>`
            },
            {
                id: uuidv4(),
                srcImg: "../assets/img/kosy-mechaniczne.jpg",
                altImg: "kosy mechaniczne",
                category: `<div class="slide__category-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.com/svgjs"
          version="1.1"
          width="512"
          height="512"
          x="0"
          y="0"
          viewBox="0 0 46.02 46.02"
          style="enable-background: new 0 0 512 512"
          xml:space="preserve"
          class=""
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
          </g>
        </svg>
        <span class="slide__category">Kosy mechaniczne</span>
      </div>`
            }
        ]
    },
    getters: {
        menuElements(state) {
            return state.menuElements;
        },
        isPhoneMenuOpen(state) {
            return state.isPhoneMenuOpen;
        },
        IsFiframeTransform(state) {
            return state.IsFiframeTransform;
        },
        productsCategories(state) {
            return state.productsCategories;
        }
    },
    mutations: {
        openClosePhoneMenu(state) {
            const phoneMenu = document.querySelector('.phone-menu');
            const burgerBtnElements = document.querySelectorAll('.phone-header__btn-element');

            if (state.isPhoneMenuOpen && document.body.offsetWidth < 768) {
                phoneMenu.classList.remove("animate-openPhoneMenu");
                phoneMenu.classList.add("animate-closePhoneMenu");

                burgerBtnElements[0].classList.add("animate-unAnimateBurgerElement1");
                burgerBtnElements[0].classList.remove("animate-burgerElement1");

                burgerBtnElements[2].classList.add("animate-unAnimateBurgerElement3");
                burgerBtnElements[2].classList.remove("animate-burgerElement3");

                setTimeout(() => {
                    burgerBtnElements[1].classList.add("opacity-1");
                    burgerBtnElements[1].classList.remove("opacity-0");
                }, 125);

                setTimeout(() => {
                    phoneMenu.classList.remove("block");
                }, 500);
                state.isPhoneMenuOpen = false;
            } else if (document.body.offsetWidth < 768) {
                phoneMenu.classList.remove("animate-closePhoneMenu");
                phoneMenu.classList.add("block");
                phoneMenu.classList.add("animate-openPhoneMenu");

                burgerBtnElements[0].classList.add("animate-burgerElement1");
                burgerBtnElements[0].classList.remove("animate-unAnimateBurgerElement1");

                burgerBtnElements[2].classList.add("animate-burgerElement3");
                burgerBtnElements[2].classList.remove("animate-unAnimateBurgerElement3");

                setTimeout(() => {
                    burgerBtnElements[1].classList.add("opacity-0");
                    burgerBtnElements[1].classList.remove("opacity-1");
                }, 125);

                state.isPhoneMenuOpen = true;
            }
        },
        setLocalStorage(_, item) {
            localStorage.setItem(item.name, item.value);
        },
    },
    actions: {
        setLocalStorage(ctx, item) {
            ctx.commit('setLocalStorage', item);
        },
    },
    modules: {},
});
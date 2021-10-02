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
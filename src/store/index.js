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
                href: "/produkty",
                textValue: "Produkty",
            },
            {
                id: uuidv4(),
                href: "/serwis-naprawczy",
                textValue: "Serwis Naprawczy",
            },
            {
                id: uuidv4(),
                href: "/kontakt",
                textValue: "Kontakt",
                classes: "phone-menu__element phone-menu__element--last"
            },
        ],
        isPhoneMenuOpen: false,
        IsFiframeTransform: false,
        productsCategories: [{
                id: uuidv4(),
                name: "Urządzenia akumulatorowe",
                src: require("../assets/img/urządzenia-akumulatorowe.jpg"),
                link: "/urządzenia-akumulatorowe",
                bg_image: require("../assets/img/nożyce-akumulatorowe-tnące-żywopłot.jpg"),
                products: [{
                    id: uuidv4(),
                    name: "Nożyce HSA 45",
                    short_desc: "Lekkie nożyce do żywopłotu ze zintegrowanym akumulatorem",
                    long_desc: `Bardzo lekkie akumulatorowe nożyce do żywopłotów o dobrej wydajności cięcia, przeznaczone do trymowania gałęzi na terenach przydomowych. Posiadają listwę tnącą z jednostronnie szlifowanymi zębami oraz zintegrowaną ochronę antyprzecięciową, przykręcaną osłonę listwy tnącej jak również zintegrowany akumulator ze wskaźnikiem naładowania. `,
                    link: "/nożyce-hsa-45",
                    src: require("../assets/img/produkty/nożyce_hsa45.png"),
                    alt: "Nożyce STIHL HSA 45 na białym tle",
                    technical_data: {
                        dlugosc_ciecia: 50,
                        napiecie_znamionowe: 18,
                        cieżar_z_akumulatorem: 2.3,
                        poziom_cisnienia_akustycznego: 54,
                        poziom_mocy_akustycznej: 77,
                        wartosc_drgan_uchwyt: "1,4/1,5",
                        dlugosc_calkowita: 91
                    },
                    producer: "Stihl"
                }]
            },
            {
                id: uuidv4(),
                name: "Urządzenia koszące",
                src: require("../assets/img/urządzenia-koszące.jpg"),
                link: "/urządzenia-koszące",
                products: []
            },
            {
                id: uuidv4(),
                name: "Pilarki łańcuchowe",
                src: require("../assets/img/pilarki-łańcuchowe.jpg"),
                link: "/pilarki-łańcuchowe",
                products: []
            },
            {
                id: uuidv4(),
                name: "Kosy mechaniczne",
                src: require("../assets/img/kosy-mechaniczne.jpg"),
                link: "/kosy-mechaniczne",
                products: []
            },
        ],
        producers: [{
                id: uuidv4(),
                name: "Wszyscy",
            },
            {
                id: uuidv4(),
                name: "Stihl",
            },
            {
                id: uuidv4(),
                name: "Viking",
            },
            {
                id: uuidv4(),
                name: "Fiskars",
            },
            {
                id: uuidv4(),
                name: "Briggs & Stratton",
            },
            {
                id: uuidv4(),
                name: "Endress",
            },
            {
                id: uuidv4(),
                name: "Oregon",
            },
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
        },
        producers(state) {
            return state.producers;
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